import styles from './PaisesItem.module.css';
import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import Link from 'next/Link';
import { useRouter } from 'next/router'
import Cookie from 'js-cookie';
import { useLocation } from '../../context/locationContext'
import { useLocalStorage } from '../../helpers/useLocalStorage'

import axios from 'axios'

export default function PaisesItem(props) {

    const router = useRouter();
    const { location, setLocation } = useLocation()

    const [paises, setPaises] = useState([])
    const [etiquetas, setEtiquetas] = useLocalStorage('etiquetas', '')

    const getConfig = async () => {
        try {
            let COD = 'LAT'
            Cookie.get('location') != undefined ? COD = Cookie.get('location') : null
            let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG + '?codigo=' + COD);
            const data = logData.data[0]
            let info = data['paises'].map(pais => {
                pais.flag = '/assets/images/ARGENTINA/132927077756435338-132875274988392861arg1.png'
                return pais
            })
            setPaises(info)
            // console.log('paises item');
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setLocation(Cookie.get('location'))

        if (!localStorage.getItem('etiquetas')) {
            getConfig()
        }
        else {
            let info = etiquetas['paises'].map(pais => {
                pais.flag = '/assets/images/ARGENTINA/132927077756435338-132875274988392861arg1.png'
                return pais
            })
            setPaises(info)
        }
    }, [])

    const handleClick = (item) => {
        console.log('click');
        setLocation(item)
        Cookie.set('location', item)
        // getConfig()
        router.push('/home')
    }
    const handleChangePais = () => {
        const all = 'LAT'
        setLocation(all)
    }

    ///agrego el esc para cerrar el menu
    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) setLocation(Cookie.get('location'))
    }, [setLocation])

    useEffect(() => {
        if (CountryList) document.addEventListener('keydown', handleEscape, '')
        return () => {
            document.removeEventListener('keydown', handleEscape, '')
        }
    }, [handleEscape]);

    
    //agrego el click outside para cerrar el menu
    const outsideRef = useRef()
    const handleClickOutside = useCallback(e => {
        if(outsideRef.current && !outsideRef.current.contains(e.target)) {
            setLocation(Cookie.get('location'))
        }
    }, [setLocation])

    useEffect(() => {
        if (CountryList) document.addEventListener('mousedown', handleClickOutside, false)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, false)
        }
      }, [handleClickOutside]);


    function CountryList() {

        return paises.map(pais => (
            <li className=" " key={pais.codigo} >
                <button onClick={() => { handleClick(pais.nombre);}} className={`group w-full flex flex-row justify-between items-center text-principal focus:outline-none ${props.Country ? "gap-2 bg-white px-6 py-2 " : "sm:flex-col gap-1 "}`}>
                    <span className={`order-3 rounded-full overflow-hidden block relative aspect-square outline outline-transparent group-hover:outline-2 group-hover:outline-current group-focus:outline-2 group-focus:outline-current transition-[outline] ${props.Country ? "w-10 h-10" : "sm:order-1 w-6 sm:w-20 h-6 sm:h-20 sm:mb-2 sm:mx-auto"}`}>
                        <img src={pais.flag} alt='' className='w-full h-full object-cover' />
                    </span>
                    <span className='order-2'>{pais.nombre}</span>
                </button>
            </li>
        ))
    }

    function CurrentCountry() {
        let elem = null
        paises.map(pais => {
            (
                location?.toLowerCase() == pais.nombre.toLowerCase() ?
                    elem = (<li className="" key={pais.codigo} >
                        <button aria-label={pais.nombre} onClick={() => handleChangePais()} className="group w-full flex flex-row sm:flex-col justify-between items-center gap-1 text-principal focus:outline-none">
                            <span className={`order-3 sm:order-1 rounded-full overflow-hidden block relative aspect-square outline outline-transparent group-hover:outline-2 group-hover:outline-current group-focus:outline-2 group-focus:outline-current transition-[outline] ${props.Country ? "w-14 h-14" : "w-6 sm:w-20 h-6 sm:h-20 sm:mb-2 sm:mx-auto"}`}>
                                <img src={pais.flag} alt='' className='w-full h-full object-cover' />
                            </span>
                            {router.asPath==='/' && <span className='order-2'>{pais.nombre}</span>}
                        </button>
                    </li>)
                    : null
            )
        })
        return elem
    }

    return (
        <>
            <ul ref={outsideRef} aria-label='País seleccionado' className={`max-w-2xl flex flex-col justify-between ${props.Country ? "absolute right-0 -top-0 z-30" : "mt-8 sm:mb-14 min-h-[120px] xl:max-w-full sm:flex-row flex-wrap xl:flex-nowrap gap-2 sm:gap-10 xl:gap-8"}`}>
                {
                    location != 'LAT' ? CurrentCountry() : CountryList()
                }
            </ul>
        </>
    )
}
