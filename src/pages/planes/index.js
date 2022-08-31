import AppLayout from '../../components/AppLayout';
import Banner from '../../components/Banner';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { formatNum } from '../../helpers/index'
import { parseCookies, getUserLocation } from '../../helpers/index'
import Cookie from 'js-cookie';
import Modal from '../../components/Modal';
import PlanCardDetail from '../../components/PlanCardDetail';
import axios from 'axios'
import { useLocalStorage } from '../../helpers/index'
import { useConfig } from '../../context/configContext'
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Planes({ initialLocation, cotizacion }) {
    const router = useRouter();
    const [planes, setPlanes] = useState(null)
    const [prod, setProd] = useState(null)
    const [loading, setLoading] = useState(false)
    const { config, setConfig } = useConfig()
    const [etiquetas, setEtiquetas] = useLocalStorage('etiquetas', '')
    const [currenCountry, setCurrenCountry] = useState('LAT')
    

    const recommended = 14 //titanium id
    const bestSeller = 15 //gold id

    useEffect(() => {
        if (!localStorage.getItem('etiquetas')) {
            getConfig()
        }
        else {
            setConfig(etiquetas)
        }
       
        setCurrenCountry( Cookie.get('location'))
        getPlanes(cotizacion)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const modal = useRef(null)
    const openButtonRef = useRef(null)
    // console.log('ref'+openButtonRef.current)
    
    //details element open close segun tamaño de pantalla
    const isMobile = useMediaQuery('(max-width: 640px)');
    
    

    const getConfig = async () => {
        try {
            let COD = 'LAT'
            Cookie.get('location') != undefined ? COD = Cookie.get('location') : null
            let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG + '?codigo=' + COD);
            const data = logData.data[0]
            setConfig(data)
            setEtiquetas(data)

        }
        catch (e) {
            console.log(e)
        }

    }

    const getPlanes = async (cotizacionID) => {
        try {
            setLoading(true)
            let logData = await axios.get(process.env.NEXT_PUBLIC_URL_SEARCH + '?cotizacionId=' + cotizacionID);
            const data = logData.data[0]
            setPlanes(data.productos)
            setLoading(false)

        }
        catch (e) {
            console.log(e)
        }
    }

    const getPrestaciones = (prestaciones) => {

        return prestaciones.map((val, idx) =>
        (
            idx < 5 ? <li key={idx} className='flex gap-1 pb-2'><span className="flex-none icon-done text-[8px] w-5 h-5 -mt-1 flex justify-center items-center rounded-full bg-whatsapp text-white" aria-hidden="true"></span>
                {val.labelNombre} {val.tipo.toLowerCase() == 'por monto' ? ('($'+formatNum(val.montoMenores)+')') : '' }</li> : null
        )
        )
    }

    const buscandoPlanes = () => {
        return (<h1 className='max-w-screen-xl mx-auto text-2xl font-extrabold text-gris-oscuro pt-8 lg:pt-14 pb-6 px-6 2xl:px-0'>
                    <img src="assets/images/BUSCANDO.gif" className='flex mx-auto'/>
                    Buscando la mejor asistencia para tu viaje
                    {/* <BounceLoader color={'#00239c'} loading={loading} size={150}  /> <br/> Buscando planes que se ajusten a tu busqueda... */}
                </h1>
            )
    }
    const cargarProducto = (item) => {
        localStorage.setItem('planContratar',JSON.stringify(item))
        router.push({
            pathname: '/contratar'
        });  
    }

    const listPlanes = () => {
        
        if (planes.length > 0) {
            planes.sort(function(a, b) {
                return b.precio - a.precio;
            });
            return planes.map((item, index) =>
            (
                <article className={`sm:min-w-[250px] sm:max-w-[300px] flex-1 flex flex-col items-center rounded-lg bg-white text-principal shadow-3xl overflow-hidden ${item.producto.id != recommended && item.producto.id != bestSeller ? 'sm:mt-14' : ''} `} key={index}>
                    {
                        item.producto.id == bestSeller ? 
                            <h2 className='w-full py-4 px-2 text-white font-bold text-center bg-fucsia'>PLAN MÁS VENDIDO</h2>
                        :null
                    }
                    {
                        item.producto.id == recommended ? 
                            <h2 className='w-full py-4 px-2 text-white font-bold text-center bg-turquesa'>PLAN RECOMENDADO</h2>
                        :null
                    }
                    {   item.precioSinPromocion == item.precio ? 
                            <p className='w-full py-1 px-2 text-white font-bold text-center bg-amarillo'>OFERTA</p>
                        :   <span className='hidden sm:block h-8'></span>
                    }
                    <h3 className='px-2 pt-6 text-2xl font-bold text-center'>{item.producto.nombreB2C}</h3>
                    <p className='px-2 text-sm font-light text-center truncate max-w-full'>{item.producto.descripcion}</p>
                    {item.precioSinPromocion == item.precio ? //esto deberia ser precio sin promo < precio pero quiero verlo por el momento
                        <p className='px-2 pt-6 text-gris-medio line-through'>{item.monedaLocalSimbolo} {formatNum(((Number(item.tipoDeCambioMonto.replace(',', '.')) * item.precioSinPromocion).toFixed(2)))} </p>
                        : <span className='hidden sm:block pt-6 h-6'></span>
                    }
                    
                    <h4 className='px-2 flex gap-1 items-end'>
                        <span className='text-md'>{item.monedaLocalSimbolo}</span>
                        <span className='text-5xl font-extrabold '>{formatNum(item.precioEnPesos)}</span>
                        <span className='text-sm font-bold self-center pb-2'>*</span></h4>
                    <p className='px-2 text-2xl pt-1'>{item.monedaSimbolo} {item.precioSinPromocion}</p>
                    <button className='my-5 p-3 w-44 rounded-lg text-white bg-principal shadow-sm'
                        onClick={()=> {cargarProducto(item)}}
                    >Contratar</button>
                    <details className='w-full group flex-1' open={!isMobile}>
                        <summary className='group flex flex-col items-center sm:items-start px-4 py-2 text-sm cursor-pointer sm:cursor-text sm:pointer-events-none focus:outline-none'>
                            <span className='border-b-2 border-transparent group-focus:border-principal'>Beneficios por persona</span>
                            <span className='icon-chevron text-sm sm:hidden transition-all ease-linear rotate-180 group-open:rotate-0'></span>
                        </summary>
                        <ul className='px-4 text-sm mb-6 leading-4 transition-opacity duration-200 opacity-0 group-open:opacity-100'>
                            {
                                getPrestaciones(item.producto.prestaciones)
                            }
                        </ul>
                    </details>
                    <button ref={openButtonRef} onClick={() => {modal.current.openModal();setProd(item)}} className="text-sm text-principal hover:text-secundario focus:text-secundario focus:outline-none border-b-2 border-principal">
                        Ver detalle de cobertura
                    </button>
                    <a href={config?.etiquetas.Url_CondicionesGenerales} target="_blank" rel="noreferrer" className="py-4 text-sm text-principal hover:text-secundario focus:text-secundario focus:outline-none flex items-center gap-2">
                        <span className='icon-mas text-lg'></span> Ver condiciones generales
                    </a>
                    {
                        currenCountry?.toLowerCase() === 'argentina' 
                        && <p className='px-10 text-center text-[11px] text-gris-medio mb-8'>Contratos de  Adhesión. Ley N* 24.240 de Defensa del Consumidor.</p>
                    }
                    <Modal ref={modal}>
                        <PlanCardDetail producto={prod}/>
                    </Modal>
                </article>
            )
            )
        }
        else {
            return (<h1 className='max-w-screen-xl mx-auto text-2xl font-extrabold text-gris-oscuro pt-8 lg:pt-14 pb-6 px-6 2xl:px-0'>{config?.etiquetas.Title_NoHayProductos}</h1>)
        }

    }

    return (
        // <AppLayout>
        <>
            <Banner banner='planes-seleccionados' showCotizar={isMobile}  />
            <section className='w-full bg-gris-claro'>
                <h1 className='max-w-screen-xl mx-auto text-2xl font-extrabold text-gris-oscuro pt-8 lg:pt-14 pb-6 px-6 2xl:px-0'>PLANES PARA VOS</h1>
                <div className='max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 lg:gap-8 px-6 2xl:px-0 pb-14'>
                    {
                        planes != null ?
                            listPlanes() : buscandoPlanes()
                    }
                </div>
            </section>
        </>
        //</AppLayout>
    )
}

Planes.getInitialProps = async ({ req }) => {
    const cookies = parseCookies(req);
    return {
        initialLocation: cookies.location,
        cotizacion: cookies.cotizacionID
    }
}