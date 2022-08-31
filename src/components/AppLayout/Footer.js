
import Link from 'next/Link';
import { useEffect,useState} from 'react'
import Cookie from 'js-cookie';
import {useConfig} from '../../context/configContext'
import {useLocalStorage} from '../../helpers/useLocalStorage'
import axios from 'axios'
import {getPromoActual } from '../../apiFunctions/index'
import {getUserLocation} from '../../helpers/index'

import { useTranslation } from 'react-i18next';

export default function Footer(props) {
  const [t, i18n] = useTranslation('global');

    const {config, setConfig} = useConfig()
    const [etiquetas,setEtiquetas] = useLocalStorage('etiquetas','')
    const [promo,setPromoActual] = useState('')
    const socialMedia = {
      facebook: 'https://www.facebook.com/EuropAssistanceAR',
      instagram: 'https://www.instagram.com/europassistance_argentina'
    }
    const getConfig = async () => {
      try {
        let COD = 'LAT'
         Cookie.get('location') != undefined ? COD = Cookie.get('location') : null
        let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG+'?codigo='+COD);
        const data = logData.data[0]
        setConfig(data)
        setEtiquetas(data)
        // console.log('fetch footer')
      }
      catch (e) {
        console.error(e)
      }
    } 

  useEffect(() =>{
    getPromo()
    if(!localStorage.getItem('etiquetas')){
      getConfig()
    }
    else{
      setConfig(etiquetas)
    }

  },[])

  const getPromo = () => {

    getUserLocation()
    let COD = Cookie.get('location')
    if(COD){
      let promo = getPromoActual(COD.toUpperCase())
      promo.then(res => {
          Cookie.set('promoActual',JSON.stringify(res))
          setPromoActual(res)
      })
    }    
  }
  return (
 
      <footer role='contentinfo' className='bg-principal text-white px-6'>
      <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-x-8 px-6 py-8'>
        <div className="hidden lg:block"><img src="/assets/images/ea-bco.png" alt={t("menu.marca")} className='w-28' /></div>
        <div className="lg:pl-10 lg:pt-6 pb-6 lg:pb-0 flex-1">
          <ul className='lg:grid grid-flow-col grid-rows-3 auto-cols-max gap-x-10'>
            <li><Link href='/quienes-somos'><a className="block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none">{t("menu.quienesSomos")}</a></Link></li>
            <li><Link href='/nuestras-coberturas'><a className="block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none">{t("menu.coberturas")}</a></Link></li>
            <li><Link href='/preguntas-frecuentes'><a className="block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none">{t("menu.faq")}</a></Link></li>
            <li><Link href='/arrepentimiento'><a className="block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none">{t("menu.baja")}</a></Link></li>
            <li><Link href='/contacto'><a className="block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none">{t("menu.contacto")}</a></Link></li>
          </ul>
        </div>
        <div className="justify-self-end flex items-center gap-4 py-4 border-t border-b lg:border-none border-white">
          <img src="/assets/images/logo-ssl.png" alt="SSL" className='h-10 lg:h-12' />
          <img src="/assets/images/logo-visa-bco.png" alt="Visa" className='h-10 lg:h-12' />
          <img src="/assets/images/logo-master-bco.png" alt="Mastercard" className='h-10 lg:h-12' />
          <img src="/assets/images/logo-american-bco.png" alt="American Express" className='h-10 lg:h-12' />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center justify-center lg:justify-end gap-4 px-6 pb-5 border-b border-white">
         {t("redes.seguinos")}
        <button aria-label='Facebook' className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-principal ">           
            <a target="_blank" href={socialMedia.facebook} rel="noopener noreferrer">
              <span className="icon-facebook text-2xl" aria-hidden="true"></span>
            </a>
        </button>
        <button aria-label='Instagram' className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-principal ">           
            <a target="_blank" href={socialMedia.instagram} rel="noopener noreferrer">
              <span className="icon-instagram text-2xl" aria-hidden="true"></span>
            </a>
        </button>
        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        {/* <button aria-label='Facebook' className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-principal "><span className="icon-facebook text-2xl" aria-hidden="true"></span></button> */}
        {/* <button aria-label='Instagram' className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-principal "><span className="icon-instagram text-2xl" aria-hidden="true"></span></button> */}
      </div>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-4 px-6 py-8 text-xs font-light text-justify'>
          <p>{config?.etiquetas.Label_Copyright}<br/>{config?.etiquetas.Label_Footer}</p>
          {/* <p>(*) Promoción válida para la República Argentina desde el 30/05/2022 al 7/06/2022, inclusive. Fecha límite de inicio de vigencia 31/12/2022. Adquiriendo exclusivamente: Productos TITANIUM PLUS, y/o TITANIUM, y/o GOLD y/o SILVER y/o ENERGY y/o EXTREME en modalidad Diaria y/o Anual y/o Múltiples viajes, a través de nuestros canales directos habilitados, obtenga un beneficio de 60 (sesenta por ciento). Promoción no válida para contrataciones de extensión de asistencia y/o contratación de beneficios adicionales; ni acumulable con ningún otro beneficio. Plan familiar: cada 2 adultos hasta 3 menores de 21 años gratis. Límite de edad: TITANIUM PLUS y/o TITANIUM: Cobertura hasta 75 años; desde 76 hasta 85 años inclusive, la tarifa se incrementa un 50% (cincuenta por ciento). GOLD: Cobertura hasta 75 años; desde 76 hasta 90 años inclusive, la tarifa se incrementa un 50% (cincuenta por ciento). La contratación del producto TOTAL CANCELLATION deja sin efecto la promoción informada. Los precios publicados, en el Portal Web, de los productos alcanzados por esta promoción, ya cuentan con el porcentaje de descuento aplicado. Los servicios de EUROP ASSISTANCE ARGENTINA S.A. tienen limitaciones exclusivas según el tipo de producto adquirido. Aplican las limitaciones y exclusiones de uso habitual y/o legal en el país en que se emita el Producto EUROP ASSISTANCE ARGENTINA S.A. Los servicios y productos se rigen por Condiciones Generales que se informan con la compra de cada Producto EUROP ASSISTANCE ARGENTINA S.A. y se hallan a su disposición ingresando en el portal web de EUROP ASSISTANCE ARGENTINA S.A., también se pueden solicitar en forma telefónica o por e-mail. Las enfermedades preexistentes tienen exclusiones y limitaciones. EUROP ASSISTANCE ARGENTINA S.A. no es una empresa de seguros. EUROP ASSISTANCE ARGENTINA S.A., Carlos Pellegrini Nº 1149, Piso 9, CP 1009, CABA. CUIT 30-69121636-1. Tel: +5411-4814-9055.</p> */}
          <p>{promo?.pieLegalB2C}</p>
          <a href="#" target="_blank" className='focus:outline-none focus:underline'>Dirección General de defensa y protección del consumidor para consultas y/o denuncias ingrese aquí</a>
      </div>
    </footer>
  )
}