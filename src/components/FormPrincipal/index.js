import styles from './FormPrincipal.module.css';
import Contador from './Contador';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/router'

//fechas
import { DateRange } from 'react-date-range';
import { addDays, format } from 'date-fns';
import spanish from 'date-fns/locale/es';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
//import * as locales from 'react-date-range/dist/locale';
import Cookie from 'js-cookie';


import { useLocation } from '../../context/locationContext'
import { useCounter } from '../../hooks/Counter'


import { getRegion, getModalidades, getPromoActual } from '../../apiFunctions/index'
import { useLocalStorage } from '../../helpers/index'
import { useConfig } from '../../context/configContext'

import axios from 'axios'
import useMediaQuery from '../../hooks/useMediaQuery';


export default function FormPrincipal(props) {

    const router = useRouter();
    const initialCotizacion = {
        Regiones: '¿A dónde viajas?',
        Date: {
            from: 'Desde',
            to: 'Hasta'
        },
        Menores: 0,
        Mayores: 0,
        Viajeros: 0,
        Modalidad: 'Modalidad',
        Email: 'Email'
    }
    const [openInfo, setOpenInfo] = useState(null);
    const { location, setLocation } = useLocation()
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            color:'#00239c',
            //rangeColors:['#00239c', '#2FC7DF', '#00239c'],
            key: 'selection'
        }
    ]);

    const [cotizacion, setCotizacion] = useState(initialCotizacion);
    const counterMenores = useCounter()
    const counterMayores = useCounter()

    const [modalidad, setModalidad] = useState([]);
    const [regiones, setRegiones] = useState([]);
    const [promoActual, setPromoActual] = useState(null);

    const { config, setConfig } = useConfig()
    const [etiquetas, setEtiquetas] = useLocalStorage('etiquetas', '')

    const [camposVacios, setCamposVacios] = useState({Regiones:true,Modalidad:true,Date:true,Email:{vacio:true,valido:false},Viajeros:true});
    const [validate, setValidate] = useState(false);
   

    const getConfig = async () => {

        try {
            let COD = 'LAT'
            Cookie.get('location') != undefined ? COD = Cookie.get('location') : null
            let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG + '?codigo=' + COD);
            const data = logData.data[0]
            setConfig(data)
            setEtiquetas(data)
            console.log('fetch formPrincipal');

        }
        catch (e) {
            console.log(e)
        }
    }




    const setRegMod = () => {
        // 
        getRegion(Cookie.get('location')).then(res => {
            setRegiones(res)
            Cookie.set('regiones', JSON.stringify(res));

        })
        getModalidades(Cookie.get('location')).then(res => {
            setModalidad(res)
            Cookie.set('modalidad', JSON.stringify(res));
        })
    }




    useEffect(() => {

        //si no existen etiquetas en localStorage las pido
        if (!localStorage.getItem('etiquetas')) {

            getConfig()

        }
        else {

            setConfig(etiquetas)

        }

        //set location
        let pais = Cookie.get('location').toUpperCase()

        setLocation(pais)

        if (pais == 'LAT') {
            //router.push('/')
        }

        setRegMod() 

        //obtengo la promo actual
        let promo = getPromoActual(pais.toUpperCase())
        promo.then(res => {
            Cookie.set('promoActual',JSON.stringify(res))
            setPromoActual(res)
        })

        

        
    }, [])


    useEffect(() => {
        setCotizacion(initialCotizacion)
    }, [location])

    useEffect(() => {
        if (JSON.stringify(date[0].startDate) != JSON.stringify(date[0].endDate)) {
            handleChange('Date', date[0])
        }
    }, [date])

    useEffect(() => {
        let cot = cotizacion
        cot.Menores = counterMenores.counter
        cot.Mayores = counterMayores.counter
        cotizacion.Viajeros = counterMenores.counter + counterMayores.counter
        setCotizacion(cot)
        if(cotizacion.Viajeros > 0) {
            setCamposVacios({...camposVacios, Viajeros:false})
        }
        else{
            setCamposVacios({...camposVacios, Viajeros:true})
        }
        // console.log(cotizacion);
    }, [counterMenores.counter, counterMayores.counter])




    const handleClickOpenInfo = (cual) => {
        if (openInfo != cual) {
            setOpenInfo(cual)
        }
        else { setOpenInfo(null); }
    };

    //useKeypress('Escape', () => {setOpenInfo(null)}); este escucha cualquier tecla y pasa funcion
    ///agrego el esc para cerrar el form
    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) setOpenInfo(null)
    })
    useEffect(() => {
        if (openInfo) document.addEventListener('keydown', handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, openInfo]);
    //paso una variable para cambiar la cantidad de meses que muestra pc/mobile
    const isMobile = useMediaQuery('(max-width: 640px)') ? 1 : 2;

    const submit = () => {
        
        let vacio = validateForm()
        if(!vacio){
            cotizacion['Date'].from = format(date[0].startDate, 'yyyy-MM-dd')
            cotizacion['Date'].to = format(date[0].endDate, 'yyyy-MM-dd')
            setCotizacion(cotizacion)
            let edades = []

            for (let index = 0; index < cotizacion.Menores; index++) {
                edades.push(0)
            }
            for (let index = 0; index < cotizacion.Mayores; index++) {
                edades.push(76)
            }
            const promoID = promoActual.id
            let cotizar = {
                regionId: regiones.filter(item => item.nombreB2C == cotizacion.Regiones)[0].id,
                tipoDeViajeId: modalidad.filter(item => item.nombreB2C == cotizacion.Modalidad)[0].id,
                "desde": cotizacion['Date'].from,
                "hasta": cotizacion['Date'].to,
                "edades": edades,
                "correo": cotizacion.Email,
                "codigoUsuario": location.toUpperCase(),
                "promocionId": promoID,
                "pieLegal": promoActual.pieLegalB2C,
            }
            postCotizar(cotizar)
        }
        
       
    };

    const validateForm = ()=>{
        setValidate(true)

        let vacio = true
       if(!camposVacios.Regiones && !camposVacios.Viajeros && !camposVacios.Modalidad && !camposVacios.Date && !camposVacios.Email.vacio && camposVacios.Email.valido ){
            vacio = false
            setValidate(false)
       }
        return vacio
    }
    

    const postCotizar = async (data) => {
        try {
            let datos = await axios.post(process.env.NEXT_PUBLIC_URL_POST_COTIZACION, data);
            const res = datos.data[0]
            Cookie.set('cotizacionID', res.cotizacionId)
            if (router.asPath == '/planes') {
                router.reload()
            }
            else {
                router.push(`/planes`)
            }

            //ENVIAR res.cotizacionId => 27491 
            //para que me muestrelos productos
        }
        catch (e) {
            console.log(e)
        }
    }


    const handleChange = (campo, valor) => {
        let producto = cotizacion
        switch (campo) {
            case 'Modalidad':
                let mod = modalidad.find(item => item.id == valor)
                producto[campo] = mod.nombreB2C
                setCamposVacios({...camposVacios,'Modalidad':false})
                break;
            case 'Regiones':
                let reg = regiones.find(item => item.id == valor)
                producto[campo] = reg.nombreB2C
                setCamposVacios({...camposVacios,'Regiones':false})
                break;
            case 'Email':
                
                let validate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valor)
                producto[campo] = valor
                setCamposVacios({...camposVacios,'Email':{vacio:false,valido:validate}})
            
                break;
            case 'Date':
                producto[campo].from = format(valor.startDate, 'dd-MMM-yy', {
                    locale: spanish
                })
                producto[campo].to = format(valor.endDate, 'dd-MMM-yy', {
                    locale: spanish
                })
                setCamposVacios({...camposVacios,'Date':false})
            break;

        }
        setCotizacion(producto)
        // console.warn(cotizacion,date)
        setOpenInfo(null)
    }




    return (
        <>
         
            <div role='form' aria-label={config?.etiquetas.Title_Cotizador} className='relative w-full 2xl:max-w-screen-xl mx-auto self-end justify-self-end z-40 pointer-events-none'>
                <h1 className='text-xl sm:text-2xl font-bold text-white mb-4 pointer-events-auto inline-block'>{config?.etiquetas.Title_Cotizador}</h1>
                <div className='flex flex-col sm:flex-wrap 2xl:flex-nowrap sm:flex-row gap-4 pointer-events-auto'>
                    {/* solo para arg  */}
                    {location.toLowerCase() == 'argentina' ?
                        <>
                            <article rol='grupo' className='flex-1 relative sm:static max-w-full min-w-[201px]'>
                                <button onClick={() => { handleClickOpenInfo('donde') }} className=' flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100'>
                                    <span className="icon-corazon text-lg text-gris-medio" aria-hidden="true"></span>
                                    <span aria-live='polite' className='whitespace-nowrap'>{cotizacion.Regiones}</span>
                                </button>
                                {openInfo == 'donde' &&
                                    <div className='sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg overflow-hidden sm:w-max sm:animate-topIn text-principal bg-white z-10'>
                                        <ul aria-label={cotizacion.Regiones} className='leading-none text-left'>
                                            {regiones.map(item => {
                                                return <li className='' key={item.id}><button onClick={() => { handleChange('Regiones', item.id) }} className='w-full py-2 first-of-type:pt-4 last-of-type:pb-3 px-6 text-left hover:bg-principal-claro focus:bg-principal-claro focus:outline-none'>{item.nombreB2C}</button></li>
                                            })}
                                        </ul>
                                    </div>
                                }

                                {validate && camposVacios.Regiones && openInfo != 'donde' &&
                                    <div className='sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0'>
                                        <div className='leading-none text-left'>
                                            <span  className='w-full py-5 px-4 text-center'>Ingrese su destino</span>
                                        </div>
                                    </div>
                                }
                              
                            </article>
                        </>
                        : null}
                    <article rol='grupo' className={`flex-1 relative sm:static max-w-full ${location.toLowerCase() == 'argentina' ? 'sm:min-w-[400px] 2xl:min-w-[355px]' : 'sm:min-w-[355px]'}`}>
                        <button id='cuandoviaja' onClick={() => { handleClickOpenInfo('fecha') }} className='grid sm:flex items-center justify-between gap-1 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100'>
                            <span className='flex gap-3 items-center'>
                                <span className="icon-calendario text-lg text-gris-medio" aria-hidden="true"></span>
                                <span aria-live='polite' className='whitespace-nowrap'>{cotizacion.Date.from}</span>
                                <span className="icon-chevron text-sm self-center text-principal" aria-hidden="true"></span>
                            </span>
                            <span className="icon-flecha-doble text-lg text-gris-medio col-start-2 row-start-1 row-end-2 rotate-90 sm:rotate-0 pl-8 sm:pl-0" aria-label="hasta"></span>
                            <span className='flex gap-3 items-center'>
                                <span className="icon-calendario text-lg text-gris-medio" aria-hidden="true"></span>
                                <span aria-live='polite' className='whitespace-nowrap'>{cotizacion.Date.to}</span>
                                <span className="icon-chevron text-sm self-center text-principal" aria-hidden="true"></span>
                            </span>
                        </button>
                        {openInfo == 'fecha' &&
                            <div className={`sm:absolute ${location.toLowerCase() == 'argentina' ? ' right-0 lg:right-auto' : ''} sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg overflow-hidden sm:w-max max-w-full sm:max-w-lg sm:animate-topIn text-principal bg-white z-10`}>
                                <DateRange
                                    onChange={item => { setDate([item.selection]) }}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    months={isMobile}
                                    direction="horizontal"
                                    displayMode="dateRange"
                                    minDate={addDays(new Date(), 0)}
                                    maxDate={addDays(new Date(), 100)}
                                    monthDisplayFormat="MMMM yyyy"
                                    locale={spanish}
                                    showMonthAndYearPickers={false}
                                    showDateDisplay={false}
                                    rangeColors={['#3d91ff', '#3ecf8e', '#fed14c']}
                                    ariaLabels={{
                                        dateInput: {
                                            date: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
                                        },
                                        monthPicker: "Mes",
                                        yearPicker: "Año",
                                        prevButton: "Mes anterior",
                                        nextButton: "Mes siguiente",
                                      }}
                                />
                            </div>
                        }
                         {validate && camposVacios.Date && openInfo != 'fecha' &&
                                    <div className='sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0'>
                                        <div className='leading-none text-left'>
                                            <span  className='w-full py-5 px-4 text-center'>Ingrese una Fecha</span>
                                        </div>
                                    </div>
                        }
                    </article>
                    <article rol='grupo' className='flex-1 relative sm:static max-w-full min-w-[170px]'>
                        <button onClick={() => { handleClickOpenInfo('viajeros') }} className='relative flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100'>
                            <span className="icon-pasajeros text-lg text-gris-medio" aria-hidden="true"></span>
                            <span className='whitespace-nowrap'>Viajeros</span>
                            <span aria-live='polite' className='flex-none w-7 h-7 bg-principal text-white rounded-full leading-none flex items-center justify-center'>
                                {cotizacion?.Viajeros}
                            </span>
                        </button>
                        {openInfo == 'viajeros' &&
                            <div className='sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg py-5 px-6 sm:w-max sm:animate-topIn text-principal bg-white z-10'>
                                <div className='flex flex-col items-center leading-none'>
                                    <h3 className='text-2xl font-bold'>Hasta 75 años</h3>
                                    <p className='text-md'>De 0 a 75 años</p>
                                    <Contador handleCounter={counterMenores} />
                                </div>
                                <div className='flex flex-col items-center leading-none'>
                                    <h3 className='text-2xl font-bold'>Desde 76 años</h3>
                                    <p className='text-md'>De 76 años en adelante</p>
                                    <Contador handleCounter={counterMayores} />
                                </div>
                            </div>
                        }
                        {validate && camposVacios.Viajeros && openInfo != 'viajeros' &&
                            <div className='sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0'>
                                <div className='leading-none text-left'>
                                    <span  className='w-full py-5 px-4 text-center text-wrap'>Ingrese la cantidad de viajeros</span>
                                </div>
                            </div>
                        }
                    </article>
                    <article rol='grupo' className='flex-1 relative sm:static max-w-full min-w-[183px]'>
                        <button onClick={() => { handleClickOpenInfo('modalidad') }} className='flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100'>
                            <span className="icon-modalidad text-lg text-gris-medio" aria-hidden="true"></span>
                            <span aria-live='polite' className='whitespace-nowrap'>{cotizacion.Modalidad}</span>
                        </button>
                        {openInfo == 'modalidad' &&
                            <div className='sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg overflow-hidden sm:w-max sm:animate-topIn text-principal bg-white z-10'>
                                <ul aria-label={cotizacion.Modalidad} className='leading-none text-left'>
                                    {modalidad.map(moda => {
                                        return <li className='' key={moda.id}><button onClick={() => { handleChange('Modalidad', moda.id) }} className='w-full py-2 first-of-type:pt-4 last-of-type:pb-3 px-6 text-left hover:bg-principal-claro focus:bg-principal-claro focus:outline-none'>{moda.nombreB2C}</button></li>
                                    })}
                                </ul>
                            </div>
                        }
                         {validate && camposVacios.Modalidad && openInfo != 'modalidad' &&
                            <div className='sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0'>
                                <div className='leading-none text-left'>
                                    <span  className='w-full py-5 px-4 text-center'>Ingrese tipo de viaje</span>
                                </div>
                            </div>
                        }
                    </article>
                    <article rol='grupo' className={`flex-1 relative sm:static max-w-full ${location.toLowerCase() == 'argentina' ? 'sm:w-[250px] sm:min-w-[250px] 2xl:w-44 2xl:min-w-[11rem]' : 'sm:w-[15rem] sm:min-w-[15rem]'}`}>
                        <button id='elmail' onClick={() => { handleClickOpenInfo('mail') }} className='flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100'>
                            <span className="icon-mail text-lg text-gris-medio" aria-hidden="true"></span>
                            <span aria-live='polite' className='text-ellipsis overflow-hidden max-w-full'>{cotizacion.Email == '' ? 'Email' : cotizacion.Email}</span>
                        </button>
                        {openInfo == 'mail' &&
                            <div className='sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg py-5 px-6 sm:w-max sm:animate-topIn text-principal bg-white z-10'>
                                <div className='flex flex-col items-center leading-none'>
                                    <input className='w-full ' type="email" name="email" placeholder="Email" onBlur={() => handleChange('Email', event.target.value)} defaultValue={cotizacion.Email != 'Email' ? cotizacion.Email : ''} />
                                </div>
                            </div>
                        }
                        {validate && camposVacios.Email.valido == false && openInfo != 'mail' && 
                            <div className='sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0'>
                                <div className='leading-none text-left'>
                                    <span  className='w-full py-5 px-4 text-center'>Ingrese un email Valido</span>
                                </div>
                            </div>   
                        }
                    </article>

                    <button type='submit' onClick={() => { submit() }} className='flex-1 py-5 px-6 rounded bg-terciario btn btn-amarillo lg:w-56'>{config?.etiquetas.Button_Cotizar}</button>
                </div>
            </div>
            {openInfo != null &&
                <>
                    <div className='absolute w-full h-full bg-black top-0 left-0 bg-opacity-20 z-30' onClick={() => { setOpenInfo(null) }}></div>
                </>
            }


        </>
    )
}