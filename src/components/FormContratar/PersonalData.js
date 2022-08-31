import {useState,useEffect} from "react";

import axios from 'axios'
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

function PersonalData({formData, setFormData,config,errors,setErrors,position,setPosition,initPersona}) {
    const [t, i18n] = useTranslation('global');

    const today= format(new Date(), 'yyyy-MM-dd')

    const [paises, setPaises] = useState(null)
    const [personasState, setPersonasState] = useState(null)
    const [datoPersona, setDatoPersona] = useState(initPersona)
      

    const getPaises = async () => {
        try {
            let datos = await axios.get(process.env.NEXT_PUBLIC_URL_PAISES);
            const data = datos.data[0]
            setPaises(data)
        }
        catch (e) {
          console.log(e)
        }
      } 
      
      useEffect(()=>{

        getPaises()

        setDatoPersona(formData.datosPersonales)
        setPosition(0)
       },[])
       
       
        useEffect(()=>{
            planes()
        })

        useEffect(()=>{
             let persona = formData.datosPersonales[position]
             let pers = initPersona
             let keys = Object.keys(initPersona)
             keys.map(item=>{ 
                if(persona[item]) pers[item] = persona[item]
             })
             setDatoPersona(pers)
        },[position])

      const planes = ()=>{
        if(localStorage.getItem('planContratar') != null){
            let personas = JSON.parse(localStorage.getItem('planContratar')).personas
            if(personasState == null || personas.length != personasState.length){
                setPersonasState(personas)
                if(position == 0){
                    let existe = true
                   let datos = formData.datosPersonales.map((item,index)=>{
                      if(Object.values(item).length == 16){
                        existe = false
                     }
                     item.id = index
                     return item
                    })
                    formData.datosPersonales = datos
                    if(existe){
                        let info = formData
                        personas = personas.map(item=>{ 
                            item.fechaNacimiento = today
                            item.id = position
                            return item
                        })
                        info.datosPersonales = personas
                        setFormData(info)
                    }
                 
               }

            }
        }       
        
      }

      const emailValid = (value)=>{
       let valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)

       return valid
      }

      const setDato = (name,value)=>{   
        setDatoPersona({...datoPersona,[name]:value})
      }

      useEffect(() => {
        let info = formData.datosPersonales
        info[position].id = position
        info[position] = datoPersona
        setFormData({...formData,datosPersonales:info})
      },[datoPersona])

      return ( 
        <>
            <div className='flex flex-col'>
                <header className='flex flex-wrap gap-x-4 gap-y-1 pt-8 pb-2 lg:py-6 lg:px-6'>
                    {
                        personasState?.map((item,idx)=>{ 
                             return <button key={idx} onClick={()=>{setPosition(idx)}}
                                        className={`px-2 lg:px-0 rounded ${idx === position ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`}>
                                        {t("formContratar.pasajero")} {idx+1}
                                    </button>
                        })
                    }
                </header>
                <div className='flex flex-col lg:grid lg:grid-cols-3 gap-4 py-6 px-6 rounded-lg shadow-3xl overflow-hidden'>
                <p className="flex-none col-span-full">{config?.etiquetas.Step3_DatosPasajeros}</p>
                    <label className='flex-1' htmlFor="name"><input 
                        name="name"
                        type='text' 
                        placeholder={config?.etiquetas.Label_Nombres} 
                        value={datoPersona?.nombre} 
                        onChange={(e) => {
                            setDato('nombre',e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                       {
                        datoPersona?.nombre == '' && 
                        <span className="text-red-600">{errors[position]?.nombre}</span>
                       }
                    </label>
                    <label className='flex-1' htmlFor="apellido"><input 
                        name="lastname"
                        type='text' 
                        placeholder={config?.etiquetas.Label_Apellidos}
                        value={datoPersona?.apellido} 
                        onChange={(e) => {
                            setDato('apellido',e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                       {
                        datoPersona?.apellido == '' && 
                        <span className="text-red-600">{errors[position]?.apellido}</span>
                       }
                       </label>
                    <label className='flex-1' htmlFor="sexo">
                        <select value={datoPersona.sexo} onChange={(e) => {
                            setDato('sexo',e.target.value);
                            }} className='w-full py-3 px-4 border border-principal rounded' name="genre">
                            <option value="">Sexo</option>
                            <option value="femenino">Femenino</option>
                            <option value="masculino">Masculino</option>
                        </select>
                        {
                         datoPersona?.sexo == '' && 
                            <span className="text-red-600">{errors[position]?.sexo}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="nacionalidad">
                         <select value={datoPersona?.nacionalidad} onChange={(e) => {
                                setDato('nacionalidad',e.target.value);

                            }} className='w-full py-3 px-4 border border-principal rounded' name="nacionalidad">
                            <option value="value1">{config?.etiquetas.Label_Nacionalidad}</option>
                            {
                                paises?.map(val=>{
                                    return <option key={val.id} value={val.nombre}>{val.nombre}</option>
                                })
                            }
                            
                        </select>
                           {
                         datoPersona?.nacionalidad == '' && 
                            <span className="text-red-600">{errors[position]?.nacionalidad}</span>
                        }
                        </label>
                    <label className='flex-1' htmlFor="dni"><input 
                        type='number' 
                        name="dni"
                        placeholder='DNI/Cédula'
                        value={datoPersona?.documento} 
                        onChange={(e) => {
                            setDato('documento',e.target.value);
                        }} 
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                          {
                         datoPersona?.documento == '' && 
                            <span className="text-red-600">{errors[position]?.documento}</span>
                        }
                        </label>
                    <label className='flex-1' htmlFor="fecha">
                        <input 
                        type='date' 
                        name="date"
                        placeholder={config?.etiquetas.Label_FechaNacimientoVoucher} 
                        value={datoPersona?.fechaNacimiento} 
                        onChange={(e) => {
                            setDato('fechaNacimiento',e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                         {
                         datoPersona?.fechaNacimiento == '' && 
                            <span className="text-red-600">{errors[position]?.fechaNacimiento}</span>
                        }
                        </label>
                    <label className='flex-1' htmlFor="email"><input 
                        type='email' 
                        name="email"
                        placeholder={config?.etiquetas.Label_Email} 
                        value={datoPersona?.email} 
                        onChange={(e) => {
                            setDato('email',e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                           {
                            (datoPersona?.email == '' ||  !emailValid(datoPersona?.email)) && 
                                <span className="text-red-600">{errors[position]?.email}</span>
                            }
                           </label>
                    <label className='flex-1' htmlFor="tel"><input 
                        type='number'
                        name="telefono"
                        placeholder={config?.etiquetas.Label_TelefonoPersona} 
                        value={datoPersona?.telefono} 
                        onChange={(e) => {
                            setDato('telefono',e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                           {
                         datoPersona?.telefono == '' && 
                            <span className="text-red-600">{errors[position]?.telefono}</span>
                        }
                           </label>
                </div>
            </div>
        </>
    )
}

export default PersonalData;