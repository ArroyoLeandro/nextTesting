import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/Link';
import PaisesItem from '../PaisesItem';
import Cookie from 'js-cookie';
import {useConfig} from '../../context/configContext'
import {useLocalStorage} from '../../helpers/useLocalStorage'
import axios from 'axios'
import {getUserLocation} from '../../helpers/index'

import { useTranslation } from 'react-i18next';

export default function Header(props) {
    const [t, i18n] = useTranslation('global');

    const [Country, setCountry] = useState('');
    const [openMenu, setOpenMenu] = useState(false);

    
    const {config, setConfig} = useConfig()
    const [etiquetas,setEtiquetas] = useLocalStorage('etiquetas','')


    const buttonOpenMenu = () => {
        setOpenMenu(current => !current)
      };

      const getConfig = async () => {
          try {
            getUserLocation()
            let COD = 'LAT'
            Cookie.get('location') != undefined ? COD = Cookie.get('location') : null
            let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG+'?codigo='+COD);
            const data = logData.data[0]
            setConfig(data)
            setEtiquetas(data)
            // console.log('fetch header');
          }
          catch (e) {
            console.error(e)
          }
        } 

    useEffect(() =>{
        if(!localStorage.getItem('etiquetas')){
            getConfig()
          }
          else{
            setConfig(etiquetas)
          }
        setCountry(Cookie.get('location'))

    },[])

    //agrego el esc para cerrar el menu
    const handleEscape = useCallback(event => {
        if(event.keyCode === 27) setOpenMenu(false)
    })
    useEffect(() => {
        if (openMenu) document.addEventListener('keydown', handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
      }, [handleEscape, openMenu]);


    //agrego el click outside al header para cerrar el menu si haces click fuera
    const outsideRef = useRef()
    const handleClickOutside = useCallback(e => {
        if(outsideRef.current && !outsideRef.current.contains(e.target)) {
            setOpenMenu(false)
        }
    })
    useEffect(() => {
        if (openMenu) document.addEventListener('mousedown', handleClickOutside, false)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, false)
        }
      }, [handleClickOutside, openMenu]);


    return (
         <header ref={outsideRef} role='banner'>
            <div className='w-full max-w-screen-xl flex items-center gap-4 lg:gap-6 py-6 px-6 2xl:px-0 m-auto'>
                <div className='flex-1 min-w-max'>
                    <Link href="/home">
                        <a className='inline-block p-2'>
                            <img src="/assets/images/ea.png" alt={t("menu.marca")} className='w-28' />
                        </a>
                    </Link>
                </div>
                <div className='hidden md:block w-full'>
                    <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center">
                        <address className='border-t sm:border-t-0 border-principal bg-white sm:bg-transparent py-3 sm:py-0 px-6 not-italic text-principal flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end sm:gap-2'>
                            <span className='text-sm uppercase order-3 sm:order-1'>{config?.etiquetas.Label_Urgencias}</span>
                            <span className='lg:text-2xl font-extrabold order-2'>{config?.etiquetas.Label_DesdeElExteriorTelefono}</span>
                        </address>
                        <address className='border-t sm:border-t-0 xl:border-l border-principal bg-white sm:bg-transparent py-3 sm:py-0 px-6 not-italic text-principal flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end sm:gap-2'>
                            <span className='text-sm uppercase order-3 sm:order-1'>{config?.etiquetas.Label_VentaTelefonica}</span>
                            <span className='lg:text-2xl font-extrabold order-2'>{config?.etiquetas.Label_Telefono}</span>
                            <span className='text-sm uppercase order-4'>{config?.etiquetas.Label_HorarioTelefono}</span>
                        </address>
                    </div>
                </div>
                {props.page!=='/' && 
                    <div className='hidden lg:flex gap-4 items-center'>
                        <button onClick={buttonOpenMenu} className="flex flex-col justify-between w-9 h-8 p-2 relative group focus:outline-none">
                            <span aria-hidden="true" className={`block h-[2px] w-full group-hover:bg-secundario group-focus:bg-secundario transition-colors duration-300 ${openMenu ? "bg-secundario" : "bg-principal"}`}></span>
                            <span aria-hidden="true" className={`block h-[2px] w-full group-hover:bg-secundario group-focus:bg-secundario transition-colors duration-300 ${openMenu ? "bg-secundario w-1/2" : "bg-principal"}`}></span>
                            <span aria-hidden="true" className={`block h-[2px] w-full group-hover:bg-secundario group-focus:bg-secundario transition-colors duration-300 ${openMenu ? "bg-secundario" : "bg-principal"}`}></span>
                            <span className='sr-only'>{t("menu.menu")}</span>
                        </button>
                    </div>
                }
                <button className='flex-none block lg:hidden w-14 h-14 rounded-full shadow-sm overflow-hidden border' aria-label='Ver teléfonos'><span className='icon-tel text-3xl'></span></button>
                    {props.page !== '/' && 
                    <div className='flex-none relative w-14 h-14'>
                        <PaisesItem Country={Country} />
                    </div>
                    }
            </div>
            {openMenu && 
                <nav role='navigation' className='hidden lg:block' aria-label='Navegación principal'>
                    <ul className="nav nav-tabs w-full flex gap-6 items-center justify-center mb-4" id="navMenu">
                        <li><Link href='/quienes-somos'><a className="text-principal hover:text-secundario focus:text-secundario focus:outline-none">{t("menu.quienesSomos")}</a></Link></li>
                        <li><Link href='/nuestras-coberturas'><a className="text-principal hover:text-secundario focus:text-secundario focus:outline-none">{t("menu.coberturas")}</a></Link></li>
                        <li><Link href='/preguntas-frecuentes'><a className="text-principal hover:text-secundario focus:text-secundario focus:outline-none">{t("menu.faq")}</a></Link></li>
                        {Country.toLowerCase()=='argentina' &&
                         <li><Link href='/arrepentimiento'><a className="text-principal hover:text-secundario focus:text-secundario focus:outline-none">{t("menu.baja")}</a></Link></li>
                        }
                        <li><Link href='/contacto'><a className="text-principal hover:text-secundario focus:text-secundario focus:outline-none">{t("menu.contacto")}</a></Link></li>
                    </ul>
                </nav>
            }
        </header>
       
      );
  }

  //export {Header}