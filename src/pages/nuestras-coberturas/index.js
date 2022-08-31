
import AppLayout from '../../components/AppLayout';
import Banner from '../../components/Banner';
import { useRouter } from 'next/router';

function NuestrasCoberturas() {
    const router = useRouter();
    return ( 
        //<AppLayout>
        <>
            <Banner banner='nuestras-coberturas'/>
            <section className='w-full flex flex-col bg-celeste text-white'>
                <div className='max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 px-6 2xl:px-0 pb-14'>
                    <article className='sm:max-w-[250px] sm:min-w-[200px] flex-1 flex flex-col py-6 px-6 lg:pt-12 lg:pb-8 lg:px-8 rounded-lg bg-white text-principal shadow-3xl overflow-hidden'>
                        <h3 className='text-3xl font-bold'>TITANIUM PLUS</h3>
                        <p className='text-xl mt-1 mb-4'>Cobertura médica: <span className='whitespace-nowrap'>U$D 150.000.-</span></p>
                        <p className='text-xs font-light flex-1'>Este es el tope de cobertura por asistencia médica de este plan.</p>
                    </article>
                    <article className='sm:max-w-[250px] sm:min-w-[200px] flex-1 flex flex-col py-6 px-6 lg:pt-12 lg:pb-8 lg:px-8 rounded-lg bg-white text-principal shadow-3xl overflow-hidden'>
                        <h3 className='text-3xl font-bold'>TITANIUM </h3>
                        <p className='text-xl mt-1 mb-4'>Cobertura médica: <span className='whitespace-nowrap'>U$D 100.000.-</span></p>
                        <p className='text-xs font-light flex-1'>Este es el tope de cobertura por asistencia médica de este plan.</p>
                    </article>
                    <article className='sm:max-w-[250px] sm:min-w-[200px] flex-1 flex flex-col py-6 px-6 lg:pt-12 lg:pb-8 lg:px-8 rounded-lg bg-white text-principal shadow-3xl overflow-hidden'>
                        <h3 className='text-3xl font-bold'>GOLD</h3>
                        <p className='text-xl mt-1 mb-4'>Cobertura médica: <span className='whitespace-nowrap'>U$D 60.000.-</span></p>
                        <p className='text-xs font-light flex-1'>Este es el tope de cobertura por asistencia médica de este plan.</p>
                    </article>
                    <article className='sm:max-w-[250px] sm:min-w-[200px] flex-1 flex flex-col py-6 px-6 lg:pt-12 lg:pb-8 lg:px-8 justify-start rounded-lg bg-white text-principal shadow-3xl overflow-hidden'>
                        <h3 className='text-3xl font-bold'>SILVER</h3>
                        <p className='text-xl mt-1 mb-4'>Cobertura médica: <span className='whitespace-nowrap'>U$D 35.000.-</span></p>
                        <p className='text-xs font-light flex-1'>Este es el tope de cobertura por asistencia médica de este plan.</p>
                    </article>
                    <article className='sm:max-w-[250px] sm:min-w-[200px] flex-1 flex flex-col py-6 px-6 lg:pt-12 lg:pb-8 lg:px-8 rounded-lg bg-white text-principal shadow-3xl overflow-hidden'>
                        <h3 className='text-3xl font-bold'>BRONCE</h3>
                        <p className='text-xl mt-1 mb-4'>Cobertura médica: <span className='whitespace-nowrap'>U$D 15.000.-</span></p>
                        <p className='text-xs font-light flex-1'>Este es el tope de cobertura por asistencia médica de este plan.</p>
                    </article>
                </div>
                <button className='mb-5 lg:mb-10 mx-auto py-3 px-8 btn btn-principal shadow-sm'
                    onClick={() => {router.push('/home');}}
                    >Cotizá tu asistencia al viajero
                </button>
            </section>
            <section className='w-full text-principal relative'>
                <span className="absolute left-0 top-0.5 icon-apertura text-5xl lg:text-[15rem] text-gris-claro -z-10" aria-hidden="true"></span>
                <div className='max-w-screen-md mx-auto flex flex-col gap-6 lg:gap-8 px-6 2xl:px-0 py-14'>
                    <header className='flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between'>
                        <h2 className='flex-1 text-4xl lg:text-6xl font-extrabold'>
                        NUESTROS<span className='block'>UPGRADES </span>
                        </h2>
                        <p className='flex-1 text-sm font-light'>Durante más de 50 años hemos estado ofreciendo asistencia y ayuda a millones de personas
                            alrededor del mundo. Nuestro ADN no ha cambiado desde que se fundó la compañía
                            y estamos orgullosos de lo que hacemos. Nos dedicamos a cuidar a las personas, a facilitarles la vida
                            a nuestros clientes proporcionándoles tranquilidad y seguridad. </p>
                    </header>
                    <article className='relative flex flex-col sm:grid grid-flow-col text-center sm:text-left rounded-lg border border-principal p-6 gap-x-4 gap-y-3'>
                        <span className="sm:row-span-2 icon-ico-enfermedad text-7xl self-center" aria-hidden="true"><span className="path1 text-rosa"></span><span className='path2 '></span></span>
                        <h3 className='flex-1 uppercase text-2xl font-semibold'>Adicional por enfermedades pre-existentes.</h3>
                        <p className='sm:flex-initial text-sm font-light'>Contamos con 3 tipos de adicionales en este caso, de U$S 10.000, U$S 20.000 y U$S 30.000. 
                        Este beneficio fué desarrollado pensando en personas que con enfermedades pre-existentes y quieran o prefieran sumar a su plan un adicional extra para viajar con mayor tranquilidad. Podrían optar por cualquiera de las 3 opciones disponibles. 
                        </p>
                    </article>
                    <article className='relative flex flex-col sm:grid grid-flow-col text-center sm:text-left rounded-lg border border-principal p-6 gap-x-4 gap-y-3'>
                    <span className="row-span-2 icon-ico-deportes text-7xl sm:self-center" aria-hidden="true"><span className="path1 text-rosa"></span><span className='path2 '></span></span>
                        <h3 className='uppercase text-2xl font-semibold'>Up Grade Deportes Profesionales. </h3>
                        <p className='text-sm font-light'>Este beneficio fué desarrollado especialmente para acompañar a deportistas profesionales que viajan a realizar sus prácticas deportivas, para que puedan seguir haciéndolo pero siempre: protegidos. 
                        </p>
                    </article>
                    <article className='relative flex flex-col sm:grid grid-flow-col text-center sm:text-left rounded-lg border border-principal p-6 gap-x-4 gap-y-3'>
                        <span className="row-span-2 icon-ico-extras text-7xl sm:self-center" aria-hidden="true"><span className="path1 text-rosa"></span><span className='path2 '></span></span>
                        <h3 className='uppercase text-2xl font-semibold'>Extra Total Cancelation - Justas Causas.</h3>
                        <p className='text-sm font-light'>Contamos con adicionales para cubrirte frente a cancelaciones, pueden ser  de U$S 1.000, U$S 2.000, U$S 3.000, U$S 4.000
                        y U$S 5.000. Porque imprevistos pueden haber y queremos que puedas seguir viajando, es que desarrollamos este adicional.
                        </p>
                    </article>
                    <article className='relative flex flex-col sm:grid grid-flow-col text-center sm:text-left rounded-lg border border-principal p-6 gap-x-4 gap-y-3 bg-principal text-white'>
                        <span className="row-span-2 icon-ico-embarazadas2 text-7xl sm:self-center" aria-hidden="true"><span className="path1 text-rosa"></span><span className='path2'></span></span>
                        <p className=''>Como seguramente te diste cuenta, no contamos con un Upgrade para <strong>embarazadas</strong>,
                        porque si te fijás, <strong>lo incluimos en todas las asistencias, cubriendo hasta 32 semanas
                        de embarazo.</strong>
                        </p>
                    </article>
                </div>
                <span className="absolute right-0 bottom-0 icon-cierre text-5xl lg:text-[15rem] text-gris-claro -z-10" aria-hidden="true"></span>
            </section>
            <section className='w-full text-principal mb-6'>
                <div className='relative max-w-screen-md mx-auto flex flex-col gap-2 items-center text-center px-6 2xl:px-0 py-14'>
                    <span className="absolute left-0 lg:-translate-x-full top-0.5 icon-apertura text-5xl lg:text-6xl text-amarillo" aria-hidden="true"></span>
                    <p className='text-2xl lg:px-6'><strong className='font-extrabold'>Europ Assistance</strong> es la empresa creadora de la asistencia al viajero, y por ese motivo cuenta con la mayor trayectoria y experiencia en la creación de planes. </p>
                    <p className='text-sm font-light mt-10'>¿Todavía no viajaste con nosotros?</p>
                    <button className="py-5 px-6 btn-amarillo rounded-xl sm:rounded-full shadow-2xl shadow-amarillo hover:shadow-principal focus:shadow-principal"
                        onClick={() => {router.push('/home');}}
                    >
                        Cotizá ahora tu asistencia al viajero y viví la experiencia Europ
                    </button>
                    <span className="absolute right-0 lg:translate-x-full bottom-0 icon-cierre text-5xl lg:text-6xl text-secundario" aria-hidden="true"></span>
                </div>
            </section>
            </>
       // </AppLayout>
        )
    }
    
export default NuestrasCoberturas;