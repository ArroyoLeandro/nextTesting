import { useEffect} from 'react';
import Banner from '../../components/Banner';
import Cookie from 'js-cookie';
import axios from 'axios'
import {useLocalStorage} from '../../helpers/index'
import {useConfig} from '../../context/configContext'
//import useOnScreen from '../../hooks/useOnScreen';

export default function Home (){
    
    const {config, setConfig} = useConfig()
    const [etiquetas,setEtiquetas] = useLocalStorage('etiquetas','')
 
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
            <Banner banner='home'/>
            {/* Tarjetas */}
                <section className='w-full max-w-screen-xl mx-auto flex items-center justify-between lg:justify-center lg:gap-20 py-10 px-6 2xl:px-0'>
                    <article className='flex flex-col items-center justify-center text-center leading-4'>
                        <img src="/assets/images/logo-visa.png" alt="Visa" className='max-h-12 lg:max-h-20 mb-3' />
                        <p className='text-sm lg:text-md font-light w-24'>{config?.etiquetas.Label_Hasta3Cuotas}</p>
                    </article>
                    <article className='flex flex-col items-center justify-center text-center leading-4'>
                        <img src="/assets/images/logo-master.png" alt="Mastercard" className='max-h-12 lg:max-h-20 mb-3' />
                        <p className='text-sm lg:text-md font-light w-24'>{config?.etiquetas.Label_Hasta3Cuotas}</p>
                    </article>
                    <article className='flex flex-col items-center justify-center text-center leading-4'>
                        <img src="/assets/images/logo-american.png" alt="American Express" className='max-h-12 lg:max-h-20 mb-3' />
                        <p className='text-sm lg:text-md font-light w-24'>{config?.etiquetas.Label_Hasta1Cuotas}</p>
                    </article>
                </section>
                 {/* iconos asistencias */}
            <section  className={`w-full bg-gris-claro transition-all duration-150 ease-in-out translate-y-0 opacity-1`}>
                <div className='max-w-screen-xl mx-auto grid grid-cols-2 lg:flex items-center justify-between gap-1 lg:gap-6 py-10 px-6 2xl:px-0 text-principal'>
                    <h3 className='lg:min-w-max text-xl xl:text-2xl col-span-2 text-center lg:text-left font-bold lg:font-normal mb-3 lg:mb-0'>Te asistimos <span className='lg:block'>con</span></h3>
                    <hr className='h-20 border-l border-principal my-auto hidden lg:block' aria-hidden="true" />
                    <article className='lg:min-w-max flex items-center gap-3 lg:gap-4 p-3 lg:p-0 border-2 border-principal lg:border-none rounded-md'>
                        <span className="icon-ico-covid text-3xl lg:text-6xl" aria-hidden="true"><span className="path1 text-turquesa"></span><span className='path2 text-black'></span></span>
                        <div className='leading-4'>
                            <h4 className='xl:text-xl font-bold'>{config?.etiquetas.Label_Prestacion1}</h4>
                            <p className='text-sm xl:text-[1rem] hidden lg:block mb-4'>{config?.etiquetas.Label_Prestacion5}</p>
                        </div>
                    </article>
                    <hr className='h-20 border-l border-principal my-auto hidden lg:block' aria-hidden="true" />
                    <article className='flex items-center gap-3 lg:gap-4 p-3 lg:p-0 border-2 border-principal lg:border-none rounded-md'>
                        <span className="icon-ico-embarazadas text-3xl lg:text-6xl" aria-hidden="true"><span className="path1 text-turquesa"></span><span className='path2 text-black'></span></span>
                        <div className='leading-4'>
                            <h4 className='xl:text-xl font-bold'>{config?.etiquetas.Label_Prestacion2}</h4>
                            <p className='text-sm xl:text-[1rem] hidden lg:block'>{config?.etiquetas.Label_Prestacion6}</p>
                        </div>
                    </article>
                    <hr className='h-20 border-l border-principal my-auto hidden lg:block' aria-hidden="true" />
                    <article className='flex items-center gap-3 lg:gap-4 p-3 lg:p-0 border-2 border-principal lg:border-none rounded-md'>
                        <span className="icon-ico-equipaje text-3xl lg:text-6xl" aria-hidden="true"><span className="path1 text-turquesa"></span><span className='path2 text-black'></span></span>
                        <div className='leading-4'>
                            <h4 className='xl:text-xl font-bold'>{config?.etiquetas.Label_Prestacion3}</h4>
                            <p className='text-sm xl:text-[1rem] hidden lg:block'>{config?.etiquetas.Label_Prestacion7}</p>
                        </div>
                    </article>
                    <hr className='h-20 border-l border-principal my-auto hidden lg:block' aria-hidden="true" />
                    <article className='flex items-center gap-1 lg:gap-4 py-3 pl-2 pr-1 lg:py lg:pl-0 lg:pr-0 border-2 border-principal lg:border-none rounded-md'>
                        <span className="icon-ico-cruceros text-3xl lg:text-6xl" aria-hidden="true"><span className="path1 text-turquesa"></span><span className='path2 text-black'></span></span>
                        <div className='leading-4'>
                            <h4 className='xl:text-xl font-bold'>{config?.etiquetas.Label_Prestacion4}
                            </h4>
                        </div>
                    </article>
                </div>
            </section>
            {/* banner 2 */}
            <Banner banner='home-secundario' config={config} />
            {/* accesos baja */}
            <section  className={`w-full bg-gris-claro transition-all duration-150 ease-in-out translate-y-0 opacity-1`}>
                <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-around xl:justify-center gap-8 xl:gap-16 py-14 px-8 2xl:px-0 text-white'>
                    <article  className={`flex-1 p-5 lg:p-6 flex flex-col items-center lg:items-start text-center lg:text-left rounded-lg bg-amarillo shadow-3xl transition-all duration-150 ease-in-out translate-x-0 opacity-1`}>
                        <span aria-hidden="true" className='rounded-full aspect-square bg-white p-3 flex items-center justify-center lg:self-start mb-3'><span className="icon-ico-telefono text-3xl leading-3" aria-hidden="true"><span className="path1 text-amarillo"></span><span className='path2 text-black'></span></span></span>
                        <h4 className='text-xl'>{config?.etiquetas.Label_VentaTelefonica}</h4>
                        <address className='text-4xl not-italic'>{config?.etiquetas.Label_Telefono}</address>
                        <p className='font-light'>{config?.etiquetas.Label_HorarioTelefono}</p>
                    </article>
                    <article className='flex-1 p-5 lg:p-6 flex flex-col items-center lg:items-start text-center lg:text-left rounded-lg bg-celeste shadow-3xl'>
                        <span aria-hidden="true" className='rounded-full aspect-square bg-white p-3 flex items-center justify-center lg:self-start mb-3'><span className="icon-ico-chat text-3xl leading-3" aria-hidden="true"><span className="path1 text-celeste"></span><span className='path2 text-black'></span></span></span>
                        <h4 className='text-xl'>¿Tenés alguna duda o preferís<span className='block'>comprar por Whats App?</span></h4>
                        <p className='font-light text-xs flex-1 my-2'>Escribinos, hay asesores disponibles de lunes a viernes de 9hs a 18hs. Sino podes dejarnos un mensaje y te responderemos en el horario indicado.</p>
                        <button className='py-1 px-3 w-28 lg:self-start justify-self-end mt-2 rounded-lg bg-white text-principal shadow-sm'>Iniciar chat</button>
                    </article>
                    <article className={`flex-1 p-5 lg:p-6 flex flex-col items-center lg:items-start text-center lg:text-left rounded-lg bg-rosa shadow-3xl transition-all duration-150 ease-in-out translate-x-0 opacity-1`}>
                        <span aria-hidden="true" className='rounded-full aspect-square bg-white p-3 flex items-center justify-center lg:self-start mb-3'><span className="icon-ico-alert text-3xl leading-3" aria-hidden="true"><span className="path1 text-rosa"></span><span className='path2 text-black'></span></span></span>
                        <h4 className='text-xl'>¿Te arrepentiste<span className='block'>de tu compra?</span></h4>
                        <p className='font-light text-sm flex-1 my-2'>Iniciá el proceso de arrepentimiento ahora mismo.</p>
                        <button aria-label='Iniciar arrepentimiento' className='py-1 px-3 w-28 lg:self-start justify-self-end mt-2 rounded-lg bg-white text-principal shadow-sm'>Iniciar</button>
                    </article>

                </div>
            </section>
            </>
            // </AppLayout>     
    )
   
}
