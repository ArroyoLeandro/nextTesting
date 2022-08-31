import AppLayout from '../../components/AppLayout';
import Link from 'next/Link';
import FormContratar from '../../components/FormContratar';
import { useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {parseCookies,getUserLocation, formatNum} from '../../helpers/index'
import {headerGet} from '../../helpers/index'
import { addDays,format} from 'date-fns';
import spanish from 'date-fns/locale/es'
import axios from 'axios'
import Cookie from 'js-cookie';
import { getRegion,getPromoActual } from '../../apiFunctions/index'
import { clearPreviewData } from 'next/dist/server/api-utils';
import { useLocation } from '../../context/locationContext'


import {useLocalStorage} from '../../helpers/index'
import {useConfig} from '../../context/configContext'


export default function Contratar ({initialLocation,cotizacion,id_contratar}){

    const router = useRouter()
    const idContratar = id_contratar ? id_contratar : undefined
    const [producto, setProducto] = useState(null)
    const [region, setRegion] = useState('')
    const [cotizacionProducto, setCotizacionProducto] = useState(null)
    const { location, setLocation } = useLocation()
    const [diferenciaDias, setDiferenciaDias] = useState(0)
    const {config, setConfig} = useConfig()
    const [etiquetas,setEtiquetas] = useLocalStorage('etiquetas','')
 

    useEffect(()=>{
    // console.log('idContratar: ',idContratar);
    // router.query.idContratar
       idContratar != undefined ? obtenerData() :  getPlanes(cotizacion)
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const obtenerData = async () => {
        var data = ''
        try {
            let datos = await axios.get(process.env.NEXT_PUBLIC_API_SHARED_URL+idContratar+'/detail');
            if(datos.data.response == null) router.push('/home')
      
            data = JSON.parse(datos.data.response.json)
            data = JSON.parse(data).data
            localStorage.setItem('planContratar',JSON.stringify(data.producto))
            setProducto(data.producto)
            buscarRegion(data.producto.regionId)
        }
        catch (e) {
            console.log('error 1:',e)
        }

        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`
            fetch(url)
                .then(response => response.json())
                .then( (json) => { 
                    let country = json.address.country.toLowerCase()
                    Cookie.set('location',country)
                    setLocation(Cookie.get('location'))
                    buscarPromo(data)
                })
            },
            (err) => {
                console.log('no se pudo acceder a la geolocalizacion')
                let country = 'ARGENTINA'
                setLocation(country)
                Cookie.set('location',country)
            }
        )
        
    }

    const buscarRegion = (idRegion) => {

        getRegion(Cookie.get('location')).then(res => {
            let region = res.filter(item => item.id == idRegion)
            setRegion(region[0].nombreB2C)
        })
    }

    const buscarPromo = (data) => {  
        // console.log('data,',data);
        getPromoActual(Cookie.get('location')).then(res => {
            Cookie.set('promoActual',JSON.stringify(res))
            data.producto.promocion = res
            Recotizar(data)
        })
    }
    const getDateDiff = (time1, time2) => {

        let date1=new Date(time1[0], time1[1] -1, time1[2])
        let date2=new Date(time2[0], time2[1] -1, time2[2])
        let difference = date2 > date1 ? date2 - date1 : date1 - date2
        let diff_days = Math.floor( difference / (1000 * 3600 * 24) )

        setDiferenciaDias(diff_days)
    }

    // function getMonthDifference(startDate, endDate) {
    //     return (
    //       endDate.getMonth() -
    //       startDate.getMonth() +
    //       12 * (endDate.getFullYear() - startDate.getFullYear())
    //     );
    //   }

    const getPlanes = async () => {
        try {
            const cotizacionID = Cookie.get('cotizacionID')
            let prod = JSON.parse(localStorage.getItem('planContratar'))

            setProducto(prod)
            
            getDateDiff(prod.fechaDesde.split(' ')[0].split('/').reverse(),prod.fechaHasta.split(' ')[0].split('/').reverse())
            
            let datos = await axios.get(process.env.NEXT_PUBLIC_URL_SEARCH+'?cotizacionId='+cotizacionID);
            
            const cotizacion = datos.data[0]
            
            let product = null

            cotizacion.productos.map((item,idx)=>{
                if(item.producto.id == prod.producto.id){
                    product = item
                }
            })

            let recotizar = {};
            
            recotizar['cotizacionId'] = cotizacionID
            let promo = JSON.parse(Cookie.get('promoActual'))
           
            recotizar['producto'] = {
                ...product,
                id:prod.id,
                producto:product.producto,
                promocion:promo
            }

            recotizar['personas'] = recotizar['producto'].personas
            setCotizacionProducto(recotizar.producto)
            setRegion(cotizacion.region)
            Recotizar(recotizar)

        }
        catch (e) {
          console.log(e)
        }
      }


      const Recotizar = async (producto) =>{

        try {
            let datos = await axios.post(process.env.NEXT_PUBLIC_URL_POST_RECOTIZACION, producto);
            const res = datos.data[0]

            // setRecotizacion(datos.data.response.data)
            Cookie.set('cotizacionID', res.cotizacionId)         
        }
        catch (e) {
          console.log(e)
        }

      }

    const getConfig = async () => {

        try {
            let COD = 'LAT'
            Cookie.get('location') != undefined ? COD = Cookie.get('location') : null
            let logData = await axios.get(process.env.NEXT_PUBLIC_API_CONFIG+'?codigo='+COD);
            const data = logData.data[0]
            setConfig(data)
            setEtiquetas(data)

        }
        catch (e) {
        console.log(e)
        }
    }  
  
  
    useEffect(()=>{
        if(!localStorage.getItem('etiquetas')){
            getConfig()
        }
        else{
            setConfig(etiquetas)
        }     
    },[])

    return (
        // <AppLayout>
        <>
            <section className='w-full text-principal'>
                <h1 className='max-w-screen-xl mx-auto text-4xl font-extrabold pt-8 lg:pt-14 pb-2 px-6 2xl:px-0'>{config?.etiquetas.Title_Contratacion}</h1>
                <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 px-6 2xl:px-0 pb-14'>
                    <div className='flex-1 flex flex-col'>
                        <FormContratar producto={cotizacionProducto}/>
                    </div>
                    <div className='lg:w-1/4 hidden lg:flex flex-col'>
                        <h2 className='lg:text-xl mb-2'>Detalle de tu compra</h2>
                        <article className='flex flex-col rounded-lg shadow-3xl overflow-hidden'>
                        {producto != null ? 
                        <>
                            <header className='w-full py-6 px-8 bg-turquesa'>
                                <h3 className='text-2xl font-bold'>{producto.producto.nombreB2C}</h3>
                                <p className='font-light'>{producto.producto.descripcion}</p>
                            </header>
                                
                            <div className='w-full py-6 px-8 flex flex-col gap-1'>
                                {
                                    diferenciaDias? 
                                        <h2 className='font-bold'>Estadía de {diferenciaDias} días  </h2>
                                    : <></>
                                }
                                    
                                 {/* <h2 className='font-bold'>Larga estadía + 3 meses </h2> */}
                                <p className='flex gap-3 items-center text-sm font-light'><span className='icon-calendario text-lg text-gris-medio'></span>Del {producto.fechaDesde} al {producto.fechaHasta}</p>
                                <p className='flex gap-3 items-center text-sm font-light'><span className='icon-pasajeros text-lg text-gris-medio'></span>{producto.personas.length} pas.</p>
                                <p className='flex gap-3 items-center text-sm font-light'><span className='icon-marker text-lg text-gris-medio'></span>{region}</p>
                                {/* <h2 className='text-2xl border-t-2 border-gris-claro pt-5 pb-3 mt-5'>Detalles del precio</h2>
                                <p className='flex gap-3 items-center justify-between'>
                                    <span className=''>{producto.producto.nombreB2C}</span>
                                    <span className=''>{producto.monedaLocalSimbolo} {formatNum(producto.precioEnPesos)}</span>
                                </p> */}
                                <div className='flex gap-3 items-center justify-between border-t-2 border-gris-claro pt-5 mt-5'>
                                    <p className='font-extrabold text-lg'>TOTAL</p>
                                    <p className='flex-1 flex flex-col items-end'>
                                        <span className='text-gris-medio line-through font-light text-sm leading-none'>{producto.monedaLocalSimbolo} {formatNum(producto.precioSinPromocion * parseFloat(producto.tipoDeCambioMonto)) }</span>
                                        <span className='text-lg font-extrabold'>{producto.monedaLocalSimbolo} {formatNum(producto.precioEnPesos)}</span>
                                        <span className='text-lg leading-none'>{producto.monedaSimbolo} {formatNum(producto.precio)}</span>
                                    </p>
                                </div>
                            </div>
                        </>
                           : null}
                        </article>
                    </div>
                </div>
            </section>
        </>
        //</AppLayout>
    )
}

Contratar.getInitialProps = (context) => {
    console.log('=======================================')
    console.log('parametros :',context.query )
    console.log('=======================================')
    const cookies = parseCookies(context.req);

    return {
      initialLocation:  cookies.location,
      cotizacion: cookies.cotizacionID,
      id_contratar:context.query.idContratar
    }
  }

//   export async function getServerSideProps(context) {
//     const id = context.query.idContratar
//     console.log('=======================================')
//     console.log('parametros :',context.query )
//     console.log('=======================================')
//   }