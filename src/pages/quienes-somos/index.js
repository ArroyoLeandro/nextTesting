
import AppLayout from '../../components/AppLayout';
import Banner from '../../components/Banner';
import { useRef, useEffect } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import CountUp from 'react-countup';

function QuienesSomos() {
     // Ref para elementos animados on screen
    const refInView = useRef();

    return ( 
        // <AppLayout>
            <>
            <Banner banner='quienes-somos'/>
            <section className='w-full bg-principal text-white text-center px-6 2xl:px-0 py-14 lg:pt-28 lg:pb-20'>
                <h1 ref={refInView} className={`text-4xl lg:text-6xl font-extrabold drop-shadow-4xl uppercase transition-all motion-reduce:transition-none ease-in-out duration-500 ${useOnScreen(refInView, "120%") ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-8'}`}>
                    Misión & visión
                </h1>
                <h2 ref={refInView} className={`text-4xl lg:text-6xl font-extrabold text-principal drop-shadow-4xl uppercase leading-[.8] max-w-screen-lg mx-auto transition-all motion-reduce:transition-none ease-in-out duration-500 ${useOnScreen(refInView, "120%") ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-8'}`}>
                    To be the most reliable care company in the world 
                </h2>
                <div ref={refInView} className={`pt-6 max-w-screen-lg mx-auto transition-all motion-reduce:transition-none ease-in-out duration-500 ${useOnScreen(refInView, "120%") ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-8'}`}>
                    <p className='inline lg:block'>Somos y queremos seguir siendo la empresa de asistencia referente en el mercado.</p>
                    <p className='inline lg:block'>Tenemos como <strong>misión estar siempre disponibles, en cualquier momento y en cualquier circunstancia.</strong></p>
                    <p className='inline lg:block'><strong>Esta es la base de la relación con nuestros clientes y nuestra razón de ser. </strong></p>
                </div>
            </section>
            <section ref={refInView} className={`w-full bg-gris-claro text-principal text-center px-6 2xl:px-0 py-14 transition-all motion-reduce:transition-none ease-in-out duration-500 ${useOnScreen(refInView, "100%") ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-14'}`}>
                <h2 className='text-4xl lg:text-6xl font-extrabold uppercase max-w-screen-md mx-auto'>
                    From distress to relief
                    anytime anywhere 
                </h2>
                <p className='pt-6 max-w-screen-md mx-auto'>Durante más de 50 años hemos estado ofreciendo asistencia y ayuda a millones de personas
                    alrededor del mundo. Nuestro ADN no ha cambiado desde que se fundó la compañía
                    y estamos orgullosos de lo que hacemos. Nos dedicamos a cuidar a las personas, a facilitarles la vida 
                    a nuestros clientes proporcionándoles tranquilidad y seguridad. </p>
            </section>
            <section className='text-principal py-14 bg-contain bg-no-repeat mx-6 ' style={{backgroundImage : 'url(../../assets/images/mapa.png)'}}>
                <div className='max-w-screen-lg mx-auto flex flex-wrap flex-col lg:flex-row justify-between gap-6 lg:gap-16'>
                    <div ref={refInView} className={`lg:flex-1 transition-all motion-reduce:transition-none ease-in-out duration-500 ${useOnScreen(refInView, "85%") ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-28'}`}>
                        <p>Nuestras asistencias al viajero se encuentran permanentemente actualizadas y siempre adaptadas a las necesidades de los consumidores. Por que sabemos que no todos necesitamos lo mismo, contamos con una amplia variedad de planes y Upgrades para que cada una de las personas pueda armar el plan de viaje
                            más acorde a sus necesidades y momentos.
                        </p>
                        <p className='pt-8 text-3xl lg:text-4xl font-light max-w-sm'>En 1997, desembarca <span className='whitespace-nowrap'>Europ Assistance</span> en Argentina, lugar desde el cuál se desarrolla la región de LATAM. </p>
                    </div>
                    <div ref={refInView} className={`lg:flex-1 flex relative transition-all motion-reduce:transition-none ease-in-out duration-500 ${useOnScreen(refInView, "85%") ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-28'}`}>
                        <span className="icon-apertura text-5xl lg:text-8xl text-rosa absolute -top-3 lg:top-0 left-3 lg:left-16" aria-hidden="true"></span>
                        <img src="/assets/images/img-qs1.jpg" alt="Foto" className='max-w-lg w-full mx-auto mt-auto mb-6' />
                        <span className="icon-cierre text-5xl lg:text-8xl text-amarillo absolute bottom-8 lg:bottom-14 -right-3 xl:-right-10" aria-hidden="true"></span>
                    </div>
                    <div ref={refInView} className={`flex-none w-full text-center transition-all motion-reduce:transition-none ease-in-out duration-500 ${useOnScreen(refInView, "50%") ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-28'}`}>
                        <h2 className='text-4xl lg:text-6xl font-extrabold uppercase max-w-screen-md mx-auto'>
                            Algunos datos que
                            hablan por nosotros:
                        </h2>
                    </div>
                    
                    <div ref={refInView} className='flex-none w-full flex flex-wrap justify-between gap-6 min-h-[100px] text-center lg:text-left'>
                        {useOnScreen(refInView, "10%") && 
                        <>
                            <div className='flex-1'>
                                <p className='text-4xl lg:text-6xl font-extrabold'><CountUp end={208} /></p>
                                <p className='text-2xl font-extrabold uppercase'>Países</p>
                                <p className='text-xs md:text-sm font-light text-black pt-1 lg:pt-3 leading-tight'>Y territorios cubiertos <span className='lg:block'>por nuestros representantes.</span> </p>
                            </div>
                            <div className='flex-1'>
                                <p className='text-4xl lg:text-6xl font-extrabold'><CountUp end={300} /></p>
                                <p className='text-2xl font-extrabold uppercase'>Millones</p>
                                <p className='text-sm font-light text-black pt-1 lg:pt-3 leading-tight'>de usuarios activos.</p>
                            </div>
                            <div className='flex-1'>
                                <p className='text-4xl lg:text-6xl font-extrabold'><CountUp end={62} /></p>
                                <p className='text-2xl font-extrabold uppercase'>Millones</p>
                                <p className='text-sm font-light text-black pt-1 lg:pt-3 leading-tight'>de usuarios activos.</p>
                            </div>
                            <div className=''>
                                <p className='text-4xl lg:text-6xl font-extrabold'><CountUp end={1} /></p>
                                <p className='text-2xl font-extrabold uppercase'>Intervención</p>
                                <p className='text-sm font-light text-black pt-1 lg:pt-3 leading-tight'>cada 2 segundos <span className='block'> en el mundo.</span></p>
                            </div>
                        </>
                        }
                    </div>
                    <div ref={refInView} className='flex-none w-full grid grid-cols-2 md:flex justify-between gap-y-2 lg:gap-y-0 min-h-[50px] text-center lg:text-left'>
                        {useOnScreen(refInView, "0%") && 
                        <>
                            <div className=''>
                            <p className='text-4xl font-extrabold'><CountUp end={5000} /></p>
                            <p className='text-xs'>coordinadores de asistencia.</p>
                            </div>
                            <hr className='hidden lg:block w-0.5 h-full bg-principal'/>
                            <div className=''>
                                <p className='text-4xl font-extrabold'><CountUp end={7898} /></p>
                                <p className='text-xs'>empleados.</p>
                            </div>
                            <hr className='hidden lg:block w-0.5 h-full bg-principal'/>
                            <div className=''>
                                <p className='text-4xl font-extrabold'><CountUp end={44} /></p>
                                <p className='text-xs'>corresponsales y sucursales.</p>
                            </div>
                            <hr className='hidden lg:block w-0.5 h-full bg-principal'/>
                            <div className=''>
                                <p className='text-4xl font-extrabold'><CountUp end={750000} /></p>
                                <p className='text-xs'>proveedores de servicios.</p>
                            </div>
                            <hr className='hidden lg:block w-0.5 h-full bg-principal'/>
                            <div className=''>
                                <p className='text-4xl font-extrabold'><CountUp end={2} /></p>
                                <p className='text-xs'>llamadas atendidas por segundo.</p>
                            </div>
                            <hr className='hidden lg:block w-0.5 h-full bg-principal'/>
                            <div className=''>
                                <p className='text-4xl font-extrabold'><CountUp end={35} /></p>
                                <p className='text-xs'>centros de soporte.</p>
                            </div>
                        </>
                        }
                        </div>
                </div>
            </section>
            </>
        //</></AppLayout>
        )
    }
    
export default QuienesSomos;