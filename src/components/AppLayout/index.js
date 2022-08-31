import {useState,useEffect} from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import Link from 'next/Link';
import styles from './layout.module.css';
import axios from 'axios'



import {LocationProvider} from '../../context/locationContext'
import {ConfigProvider} from '../../context/configContext'
import {useRouter} from 'next/router'
import Cookie from 'js-cookie';
import {useConfig} from '../../context/configContext'


export default function AppLayout({children}){
    
    const router = useRouter();
    
    return (
        <LocationProvider>
            <Head>
                <title>Europ Assistance: Cotizador de Asistencia al Viajero</title>
                <meta name="description" content="Europ Assistance: Cotizador de Asistencia al Viajero" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/assets/iconos/iconos.css" />
                {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}

            </Head>
          <ConfigProvider>
              <Header page={router.asPath}/>
              <main role='main' className='w-full flex-1 flex flex-col'>
                  {children}
              </main>
              {router.asPath!=='/' && <Footer/>}
          </ConfigProvider>

        </LocationProvider>
    )
}