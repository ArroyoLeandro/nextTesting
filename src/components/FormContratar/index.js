import React, { useState,useEffect,useLayoutEffect } from "react";
import PersonalData from './PersonalData';
import FacturacionData from './FacturacionData';
import PaymentData from './PaymentData';
import Gracias from '../../pages/gracias';
import { useRouter } from 'next/router'
import {useLocalStorage} from '../../helpers/useLocalStorage'
import {useConfig} from '../../context/configContext'
import axios from 'axios'
import { format } from 'date-fns';
import { getCotizacion } from '../../apiFunctions/index'

import Cookie from 'js-cookie';
import { useTranslation } from 'react-i18next';

function FormContratar(props) {
  const [t, i18n] = useTranslation('global');

  const router = useRouter();
  const today= format(new Date(), 'yyyy-MM-dd')

  const initPersona = {
    id:0,
    nombre:"",
    apellido:"",
    sexo:"",
    nacionalidad:"",
    documento:"",
    fechaNacimiento:today,
    email:"",
    telefono:"",
    domicilioCalle:"",
    domicilioNumero: "",
    domicilioPiso:"",
    domicilioDpto:"",
    domicilioCodigoPostal:"",
    localidad:"",
    provincia:""
  }
  

  const initForm = {
    datosPersonales:[],
    titular:"",
    dniTitular:"",
    numeroTarjeta:"",
    mesVencimiento:"",
    anioVencimiento:"",
    codigoSeguridad:"",
    cuotas:"",
    tipoTarjeta:"",
    nameContacto:"",
    apellidoContacto:"",
    telContacto:"",
  }

  const [paso, setPaso] = useState(0);

  const [formData, setFormData] = useState(initForm);

  const [datoPersonal, setDatoPersonal] = useState(initForm);
  
  const [cotizar, setCotizar] = useState(null);
  
  const [formErrors, setFormErrors] = useState(initForm);

  const PasosLista = ["Paso 1", "Paso 2", "Paso 3"];

  const {config, setConfig} = useConfig()

  const [etiquetas,setEtiquetas] = useLocalStorage('etiquetas','')

  const [show,setShow] = useState(false)

  const [position, setPosition] = useState(0)

  const [validNext,setValidNext] = useState(true)

  const [person,setPerson] = useState(null)

const [firstChange,setFirstChange] = useState(true)

  const [sending, setSending] = useState(false)

  useEffect(() =>{
    if(!localStorage.getItem('etiquetas')){
      getConfig()
    }
    else{
      setConfig(etiquetas)
    }

  },[])

  const getConfig = async () => {
      try {
        let COD = Cookie.get('location')
        let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG+'?codigo='+COD);
        const data = logData.data[0]
          setConfig(data)
      }
      catch (e) {
        console.log(e)
      }
    } 

  const PasoDisplay = () => {
    switch (paso) {
      case 0:
        return (<PersonalData  initPersona={initPersona} position={position} setPosition={setPosition} formData={formData} setFormData={setFormData} config={config} errors={formErrors.datosPersonales} setErrors={setFormErrors}/>);
      case 1: 
        return (<FacturacionData  firstChange={firstChange} setFirstChange={setFirstChange} initPersona={initPersona} position={position} setPosition={setPosition}  formData={formData} setFormData={setFormData} config={config} errors2={formErrors} errors={formErrors.datosPersonales} setErrors={setFormErrors}/>);
      case 2: 
        return (<PaymentData initForm={initForm} formData={formData} position={position} setFormData={setFormData} config={config} errors={formErrors} setErrors={setFormErrors}/>);
      default:
        return null;
      }
  };


  const validarFormu = (step) => {

    let next = false
    switch(step)
    {
      case 0:
        let dataPers = validarDatosPersonales()
        
        let infoPers = formErrors
        infoPers.datosPersonales = dataPers
        setFormErrors(infoPers)
        let valiPers = true
        dataPers.map(item=>{
          if(!item.valid){
            valiPers = false
          }
        })
        next = valiPers
        setValidNext(valiPers)
   
        next ? setPaso((currPaso) => currPaso + 1) : null
      break;
      case 1:
        let dataFact = validarDatosFacturacion()
        let infoFact = formErrors
        infoFact.datosPersonales = dataFact
        setFormErrors(infoFact)
        let valiFact = true
        dataFact.map(item=>{
          if(!item.valid){
            valiFact = false
          }
        })

        if(valiFact){
          infoFact.valid = true
          Object.keys(formData).map((item,index)=>{
              switch(item){
                case 'nameContacto':
                  if(Object.values(formData)[index] == '' ){
                    infoFact.nameContacto = 'Campo requerido'
                    infoFact.valid = false
                  }         
                break;
                case 'apellidoContacto':
                  if(Object.values(formData)[index] == ''){
                    infoFact.apellidoContacto = 'Campo requerido'
                    infoFact.valid = false
                  }         
                break;
                case 'telContacto':
                  if(Object.values(formData)[index] == ''){
                    infoFact.telContacto = 'Campo requerido'
                    infoFact.valid = false
                  }         
                break;
              }
          })
        }
        
        next = valiFact && infoFact.valid
        setValidNext(valiFact && infoFact.valid)
        next ? setPaso((currPaso) => currPaso + 1) : null
      break;
      case 2:
        next = validarDatosPago()
        if(next){
          emitirVoucher()
        }
        // router.push('/gracias')  
      break;
    }


    if(next && step == 1){
      datosPersonales()
    }    

  
    }

    

    const datosPersonales = async ()=>{
  
      try {
        let COD = Cookie.get('cotizacionID')
        let datos = await axios.get(process.env.NEXT_PUBLIC_URL_COTIZACION+'?cotizacionId='+COD);
        const data = datos.data[0]
        let cotizar = data
         const entries = Object.entries(formData.datosPersonales)
         let items = entries.filter((val,idx)=> idx < 18)
         const output = Object.fromEntries(items);
        let edades = []

        cotizar.personas = cotizar.personas.map((item,idx)=>{
                            let fecha = output[idx].fechaNacimiento.split('-')
                            // item.id = output[idx].id
                            item.id = 0
                            item.nombre = output[idx].nombre
                            item.apellido = output[idx].apellido
                            item.documento = output[idx].documento
                            item.sexo = output[idx].sexo.toLowerCase() == 'masculino' ? "H": "F"
                            item.email = output[idx].email
                            item.telefono = output[idx].telefono
                            item.edad = getEdad(output[idx].fechaNacimiento)
                            edades.push(item.edad)
                            item.contactoEmergencia = output[idx].contactoEmergencia
                            item.fechaNacimiento = output[idx].fechaNacimiento
                            item.domicilioCalle = output[idx].domicilioCalle
                            item.domicilioNumero = output[idx].domicilioNumero
                            item.domicilioPiso = output[idx].domicilioPiso
                            item.domicilioDpto = output[idx].domicilioDpto
                            item.domicilioCodigoPostal = output[idx].domicilioCodigoPostal
                            item.localidad = output[idx].localidad
                            item.provincia = output[idx].provincia
                            item.nacionalidad = output[idx].nacionalidad
                            item.anio = parseInt(fecha[0])
                            item.mes =  parseInt(fecha[1])
                            item.dia =  parseInt(fecha[2])
                            return item
                          })

      
        cotizar.productos = [props.producto]
        cotizar.productos[0].personas = cotizar.personas 
        cotizar.productos[0].edades= edades
        cotizar.edades= edades
        cotizar.nombreEmergencia = formData.apellidoContacto
        cotizar.apellidoEmergencia = formData.nameContacto
        cotizar.telefonoEmergencia = formData.telContacto   
        cotizar.terminosCondicionesAceptados = true
        setCotizar(cotizar)
        sendDatosPersonales(cotizar)
      }
      catch (e) {
        console.log(e)
      }
    }


    const sendDatosPersonales = async (datosPersonales) => {
      try {
        setPerson(datosPersonales.personas)

        let datos = await axios.post(process.env.NEXT_PUBLIC_URL_POST_DATOS_PERSONALES,datosPersonales);
        const data = await datos.data[0]
        setValidNext(false)
      }
      catch (e) {
        console.log(e)
      }
    }

    function getEdad(dateString) {
      let hoy = new Date()
      let fechaNacimiento = new Date(dateString)
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
      let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
      if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
      ) {
        edad--
      }
      return edad
    }

    const emailValid = (value)=>{
      let valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)

      return valid
     }

  const validarDatosPersonales =  () => {


    let datosP =[]
    for (let index = 0; index < formData.datosPersonales.length; index++) {
      datosP.push({...formData.datosPersonales[index],nombre:'',
      apellido:'',
      sexo:'',
      nacionalidad:'',
      documento:'',
      fechaNacimiento:'',
      email:'',
      telefono:'',})
    }
    formData.datosPersonales.map((item,index)=>{
      datosP[index].valid = true
      Object.keys(item).map((val,idx)=>{
        switch(val){
          case 'nombre':
            if(Object.values(item)[idx] == ''){
              datosP[index].nombre = 'Campo requerido'
              datosP[index].valid = false
            }
          break;
          case 'apellido':
            if(Object.values(item)[idx] == ''){
              datosP[index].apellido = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
          case 'sexo':
            if(Object.values(item)[idx] == ''){
              datosP[index].sexo = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
          case 'nacionalidad':
            if(Object.values(item)[idx] == ''){
              datosP[index].nacionalidad = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
          case 'documento':
            if(Object.values(item)[idx] == ''){
              datosP[index].documento = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
          case 'email':
            if(Object.values(item)[idx] == ''  || !emailValid(Object.values(item)[idx])){
              datosP[index].email = 'Email invalido'
               datosP[index].valid = false
            }
          break;
          case 'telefono':
            if(Object.values(item)[idx] == ''){
              datosP[index].telefono = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
        }
      })
      
    })

    return datosP

  }


  const showErrorValid = () =>{
    let invalid = null
    let data = []
    if(paso == 0) {
      data = validarDatosPersonales()
      data.map((item,idx)=>{
        if(!item.valid){
          if(invalid != null){
            invalid += `  |  ${t("formContratar.pasajero")} ${idx +1}`
          }
          else{
            invalid = ` ${t("formContratar.pasajero")} ` + (idx + 1)
          }
        }
      })
    }
    if(paso == 1) {
      data = validarDatosFacturacion()
      data.map((item,idx)=>{
        if(!item.valid){
          invalid = ` Datos de facturacion `
        }
      })
    }
    
    if(invalid != null) return (<div className="flex items-center gap-2"><p>{t("formContratar.completarPasajero")} <strong>{invalid}</strong></p></div>)
    return null
  }


  const validarDatosFacturacion = ()=>{
    let datosP = []
    for (let index = 0; index < formData.datosPersonales.length; index++) {
      datosP.push({...formData.datosPersonales[index],domicilioCalle:'',
      domicilioNumero:'',
      domicilioPiso:'',
      domicilioDpto:'',
      domicilioCodigoPostal:'',
      localidad:'',
      provincia:'',})
    }
    formData.datosPersonales.map((item,index)=>{
      datosP[index].valid = true
      Object.keys(item).map((val,idx)=>{
        switch(val){
          case 'domicilioCalle':
            if(Object.values(item)[idx] == ''){
              datosP[index].domicilioCalle = 'Campo requerido'
              datosP[index].valid = false
            }
          break;
          case 'domicilioNumero':
            if(Object.values(item)[idx] == ''){
              datosP[index].domicilioNumero = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
          case 'domicilioCodigoPostal':
            if(Object.values(item)[idx] == ''){
              datosP[index].domicilioCodigoPostal = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
          case 'localidad':
            if(Object.values(item)[idx] == ''){
              datosP[index].localidad = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
          case 'provincia':
            if(Object.values(item)[idx] == ''){
              datosP[index].provincia = 'Campo requerido'
               datosP[index].valid = false
            }
          break;
         
        }
      })
      
    })

   
    return datosP

  }


  

  const emitirVoucher = async (cotizacion)=>{
    setSending(true)
    console.log('cotizacion',cotizacion)

    try {      
        await axios.post(process.env.NEXT_PUBLIC_URL_POST_EMITIR_VOUCHER,cotizacion);
      // Cookie.set('cotizacionID',datos.data[0].cotizacionId)
      // setSending(false)
      router.push('/gracias') 
    }
    catch (e) {
      console.log('err =>',e.response.data)
      // alert(e.response.data)
      // Cookie.set('emisionId',datos.data[0].emisionId)
    }
  }

  const validarDatosPago = ()=>{
    getCotizacion().then(res => {
      let tarjeta = [{
        titular:formData.titular,
        dniTitular:formData.dniTitular,
        tipoTarjeta:formData.tipoTarjeta,
        numeroTarjeta:formData.numeroTarjeta,
        mesVencimiento:formData.mesVencimiento,
        anioVencimiento:formData.anioVencimiento,
        codigoSeguridad:formData.codigoSeguridad,
        cuotas:formData.cuotas
      }]
        res.tarjetas = tarjeta
        
        let productos = JSON.parse(localStorage.getItem('planContratar'))
        
        productos = productos.producto
        res.personas = person
        res.productos.push(productos)
        res.medioDePago = Cookie.get('location').toLowerCase() == 'argentina' ? 'Decidir' : 'D-local'
        // console.log('JSON',res)

        emitirVoucher(res)
    })
 
  }

  


  const showSpinner = ()=> {
    return (
      <div className="flex items-center justify-center w-20 h-10 mt-5 bg-white bg-opacity-20">
        <img src="assets/images/BUSCANDO.gif" className='flex mx-auto'/>
    </div>
    )
  }



  const showSpin = ()=>{
   setTimeout(()=>{
    setShow(false);
   },500)
  }

  
  return (
    <>    
        <h2 className='lg:text-xl mb-2'>{t("formContratar.subtitulo")}</h2> 
          <nav>
          <div className='flex gap-4 justify-around lg:rounded-lg bg-transparent lg:bg-gris-claro'>
            <button className={`flex-1 flex gap-3 items-center btn py-3 lg:py-6 px-8 ${paso === 0 ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`}>
              <span className="w-full lg:w-6 lg:h-6 lg:rounded-full lg:border border-current flex items-center justify-center text-2xl lg:text-base">1</span>
              <span className="hidden lg:inline">{config?.etiquetas.Step2_DatosPasajeros}</span>
            </button>
            <button className={`flex-1 flex gap-3 items-center btn py-3 lg:py-6 px-8 ${paso === 1 ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`}>
              <span className="w-full lg:w-6 lg:h-6 lg:rounded-full lg:border border-current flex items-center justify-center text-2xl lg:text-base">2</span>
              <span className="hidden lg:inline w-max">Estas muy cerca de tu viaje</span>
              </button>
            <button className={`flex-1 flex gap-3 items-center btn py-3 lg:py-6 px-8 ${paso === 2 ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`}>
              <span className="w-full lg:w-6 lg:h-6 lg:rounded-full lg:border border-current flex items-center justify-center text-2xl lg:text-base">3</span>
              <span className="hidden lg:inline">{config?.etiquetas.Step5_DatosPasajeros}</span>
            </button>
          </div>
      </nav>
      {PasoDisplay()}
      <footer className="flex flex-col md:flex-row flex-wrap gap-4 py-8">
        <button className={`py-5 px-6 btn focus:text-principal hover:text-principal btn-gris w-full lg:w-56 text-xl font-bold lg:font-normal disabled:hidden ${paso == 0 ? "lg:disabled:hidden" : "lg:disabled:block"}`}
          disabled={paso == 0 }
          onClick={() => {
            setPaso((currPaso) => currPaso - 1)
          }}>
          {t("buttons.anterior")}
        </button>
        
          <button className="py-5 px-6 btn btn-amarillo w-full lg:w-56 text-xl font-bold lg:font-normal" 
          onClick={() => {
            validarFormu(paso);
            setShow(true)
            showSpin()
          }}>
            {paso === PasosLista.length - 1 ? `${t("buttons.pagar")}` : config?.etiquetas.Button_Continuar}
        </button>
       
        {show && !validNext && showSpinner()}
        {!show && !validNext && showErrorValid()}

        {/* Lean: mostrar este spinner en la espera */}
        {
          sending && 
          <div className="fixed z-50 inset-0 w-full h-full flex items-center justify-center bg-white bg-opacity-60">
            <img src="assets/images/BUSCANDO.gif" className='flex mx-auto'/>
          </div>
        }
      </footer>
      
      {/* {PasosLista[paso]} */}
     
    </>
  )
}
  
export default FormContratar;