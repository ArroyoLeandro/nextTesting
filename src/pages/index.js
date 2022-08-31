import AppLayout from '../components/AppLayout'
import { useEffect } from 'react'
import { parseCookies, getUserLocation } from '../helpers/index'
import PaisesItem from '../components/PaisesItem';
import Cookie from 'js-cookie';
import {useConfig} from '../context/configContext' 
import { useRouter } from 'next/router'

import axios from 'axios'

import { useTranslation } from 'react-i18next';

export default function Home() {
  const [t, i18n] = useTranslation('global');

  const router = useRouter()
  const {config, setConfig} = useConfig()


  const getConfig = async () => {
    try {
      Cookie.set('location', 'LAT')

      let COD = 'LAT'
      let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG+'?codigo='+COD);
      const data = logData.data[0]
      setConfig(data)
    }
    catch (e) {
      console.log(e)
    }
  }  


  useEffect(() => {
      getConfig()    
  }, [])

  return (
    <>
      {/* <AppLayout> */}
        <div className='text-principal w-max max-w-full mx-auto self-center sm:my-auto px-6 lg:px-0'>
          <span className='flex gap-2 mb-4'><span className="icon-avion" aria-hidden="true"></span><span className="icon-slash" aria-hidden="true"></span><span className="icon-corazon" aria-hidden="true"></span></span>
          <h1 className='text-6xl sm:text-7xl font-extrabold'>{t("preHome.hola")}<span className='block'>{t("preHome.selecciona")}</span></h1>
          <PaisesItem />
        </div>
        <div className="flex flex-col justify-center sticky bottom-0 sm:hidden w-full bg-white mt-6">
          <address className='border-t sm:border-t-0 border-principal bg-white sm:bg-transparent py-3 sm:py-0 px-6 not-italic text-principal flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end sm:gap-2'>
            <span className='text-sm uppercase order-3 sm:order-1'>{config?.etiquetas.Label_Urgencias}</span>
            <span className='text-2xl font-extrabold order-2'>{config?.etiquetas.Label_DesdeElExteriorTelefono}</span>
          </address>
          <address className='border-t sm:border-t-0 lg:border-l border-principal bg-white sm:bg-transparent py-3 sm:py-0 px-6 not-italic text-principal flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end sm:gap-2'>
            <span className='text-sm uppercase order-3 sm:order-1'>{config?.etiquetas.Label_VentaTelefonica}</span>
            <span className='text-2xl font-extrabold order-2'>{config?.etiquetas.Label_Telefono}</span>
            <span className='text-sm uppercase order-4'>{config?.etiquetas.Label_HorarioTelefono}</span>
          </address>
        </div>
      {/* </AppLayout> */}
    </>
  )
}