import { useState, useEffect } from "react";
import axios from 'axios'
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';


function FacturacionData({ formData, setFormData, config, errors, setErrors, position, setPosition, initPersona,errors2,  firstChange, setFirstChange}) {
    const [t, i18n] = useTranslation('global');


    const [personasState, setPersonasState] = useState(null)
    const [datoPersona, setDatoPersona] = useState(initPersona)

    useEffect(() => {
        setPosition(0)
    }, [])

    useEffect(() => {
        let persona = formData.datosPersonales[position]
        let pers = initPersona
        let keys = Object.keys(initPersona)
        keys.map(item => {
            if (persona[item]) pers[item] = persona[item]
        })
        setDatoPersona(pers)
    }, [position])



    useEffect(() => {
        planes()
    })


    const planes = () => {
        if (localStorage.getItem('planContratar') != null) {
            let personas = JSON.parse(localStorage.getItem('planContratar')).personas
            if (personasState == null || personas.length != personasState.length) {
                setPersonasState(personas)
            }
        }
    }

    const setDato = (name, value) => {
        setDatoPersona({ ...datoPersona, [name]: value })
    }

    useEffect(() => {
        let info = formData.datosPersonales
        info[position].id = position
        if(firstChange){
            info.map((item,idx)=>{
           let { domicilioCalle, domicilioCodigoPostal,domicilioDpto,domicilioNumero,domicilioPiso,localidad,provincia } = datoPersona
           info[idx].id = idx
                info[idx].domicilioCalle = domicilioCalle
                info[idx].domicilioCodigoPostal = domicilioCodigoPostal
                info[idx].domicilioDpto = domicilioDpto
                info[idx].domicilioNumero = domicilioNumero
                info[idx].domicilioPiso = domicilioPiso
                info[idx].localidad = localidad
                info[idx].provincia = provincia
            })
            
        }else{
            info[position] = datoPersona
            info[position].id = position
        }
        setFormData({ ...formData, datosPersonales: info })

    }, [datoPersona])


    return (
        <>
            <div className='flex flex-col'>
                <header className='flex gap-4 py-6 px-6'>
                    <h1 className="text-xl">{t("formContratar.datosFacturacion")}</h1>
                    {
                        personasState?.map((item, idx) => {
                            return <button key={idx} onClick={() => {setFirstChange(false);setPosition(idx); }} className={`${idx === position ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`}>Pasajero {idx + 1}</button>
                        })
                    }
                </header>
                <div className='flex flex-col lg:grid lg:grid-cols-3 gap-4 py-6 px-6 rounded-lg shadow-3xl overflow-hidden'>
                    <label className='flex-1' htmlFor="calle"><input
                        type='text'
                        placeholder={config?.etiquetas.Label_EjemploCalle}
                        value={datoPersona?.domicilioCalle}
                        onChange={(e) => {
                            setDato('domicilioCalle', e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            datoPersona?.domicilioCalle == '' &&
                            <span className="text-red-600">{errors[position]?.domicilioCalle}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="nro"><input
                        type='number'
                        placeholder={config?.etiquetas.Label_NroDomicilio}
                        value={datoPersona?.domicilioNumero}
                        onChange={(e) => {
                            setDato('domicilioNumero', e.target.value);

                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            datoPersona?.domicilioNumero == '' &&
                            <span className="text-red-600">{errors[position]?.domicilioNumero}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="piso"><input
                        type='number'
                        placeholder={config?.etiquetas.Label_Piso}
                        value={datoPersona?.domicilioPiso}
                        onChange={(e) => {
                            setDato('domicilioPiso', e.target.value);

                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            datoPersona?.domicilioPiso == '' &&
                            <span className="text-red-600">{errors[position]?.domicilioPiso}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="depto"><input
                        type='text'
                        placeholder={config?.etiquetas.Label_Departamento}
                        value={datoPersona?.domicilioDpto}
                        onChange={(e) => {
                            setDato('domicilioDpto', e.target.value);

                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            datoPersona?.domicilioDpto == '' &&
                            <span className="text-red-600">{errors[position]?.domicilioDpto}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="localidad"><input
                        type='text'
                        placeholder={config?.etiquetas.Label_Localidad}
                        value={datoPersona?.localidad}
                        onChange={(e) => {
                            setDato('localidad', e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            datoPersona?.localidad == '' &&
                            <span className="text-red-600">{errors[position]?.localidad}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="cp"><input
                        type='number'
                        placeholder={config?.etiquetas.Label_CodigoPostal}
                        value={datoPersona?.domicilioCodigoPostal}
                        onChange={(e) => {
                            setDato('domicilioCodigoPostal', e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            datoPersona?.domicilioCodigoPostal == '' &&
                            <span className="text-red-600">{errors[position]?.domicilioCodigoPostal}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="provincia"><input
                        type='text'
                        placeholder={config?.etiquetas.Label_Provincia}
                        value={datoPersona?.provincia}
                        onChange={(e) => {
                            setDato('provincia', e.target.value);
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            datoPersona?.provincia == '' &&
                            <span className="text-red-600">{errors[position]?.provincia}</span>
                        }
                    </label>
                    {position == 0 && 
                    <>
                    <div className="flex-none col-span-full mt-4">
                        <h2 className="">{config?.etiquetas.Title_ContactoEmergencia}</h2>
                        <p className="text-gris-medio">{config?.etiquetas.Label_SolicitudDatosEmergencia}</p>
                    </div>
                    <label className='flex-1' htmlFor="nameContacto"><input
                        type='text'
                        placeholder={config?.etiquetas.Label_Nombres}
                        value={formData?.nameContacto}
                        onChange={(e) => {
                            setFormData({ ...formData, nameContacto: e.target.value });
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            formData?.nameContacto == '' &&
                            <span className="text-red-600">{errors2?.nameContacto}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="apellidoContacto"><input
                        type='text'
                        placeholder={config?.etiquetas.Label_Apellidos}
                        value={formData?.apellidoContacto}
                        onChange={(e) => {
                            setFormData({ ...formData, apellidoContacto: e.target.value });
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                        {
                            formData?.apellidoContacto == '' &&
                            <span className="text-red-600">{errors2?.apellidoContacto}</span>
                        }
                    </label>
                    <label className='flex-1' htmlFor="telContacto"><input
                        type='number'
                        placeholder={config?.etiquetas.Label_TelefonoPersona}
                        value={formData?.telContacto}
                        onChange={(e) => {
                            setFormData({ ...formData, telContacto: e.target.value });
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                         {
                            formData?.telContacto == '' &&
                            <span className="text-red-600">{errors2?.telContacto}</span>
                        }
                    </label>
                    </>}
                    
                  
                </div>
            </div>
        </>
    )
}

export default FacturacionData;