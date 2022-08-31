
// import AppLayout from '../../components/AppLayout';
import Banner from '../../components/Banner';
import { useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
// import {parseCookies} from '../../helpers/index'
import { getCotizacion } from '../../apiFunctions/index'
import { format } from 'date-fns';
import axios from 'axios'
import Cookie from 'js-cookie'



function Gracias() {
    const router = useRouter()

    const [dateDiff, setDateDiff] = useState(0)
    const [emisionId, setEmisionId] = useState(null);



    useEffect(()=>{     

        // if(Cookie.get('cotizacionID')){
            getCotizacion().then(res=>{
                //set emisionId
                setEmisionId(res.emisionId);
    
                //calc diff date
                const today= format(new Date(), 'yyyy-MM-dd')
                const fechaInicio = new Date(res.desde).toISOString().slice(0,10)
                let diffDays = getDateDiff(today.split(' ')[0].split('-'),fechaInicio.split(' ')[0].split('-'))
                setDateDiff(diffDays)
    
                
                sendVoucher(res.emisionId)
    
            })
        // }
      


    },[])
    const sendVoucher = async (id) => {
        try {
            let user = Cookie.get('location').toUpperCase()
            let logData = await axios.get(process.env.NEXT_PUBLIC_URL_ENVIAR_VOUCHER+'?emisionId='+id+'&codigoUsuario='+user);
            const data = logData.data[0]
            console.log('res enviar: ',data)
          }
          catch (e) {
            console.log(e)
          }
    }
       
    const getDateDiff = (time1, time2) => {

        let date1=new Date(time1[0], time1[1] -1, time1[2])
        let date2=new Date(time2[0], time2[1] -1, time2[2])
        let difference = date2 > date1 ? date2 - date1 : date1 - date2
        let diff_days = Math.floor( difference / (1000 * 3600 * 24) )
        return diff_days
    }

    const downloadVoucher = async () =>{
        try {
            let logData = await axios.get(process.env.NEXT_PUBLIC_URL_DESCARGAR_VOUCHER+'?emisionId='+emisionId);
            const data = logData.data[0]
            console.log('res enviar: ',data)
          }
          catch (e) {
            console.log(e)
          }
    }


    return ( 
        // <AppLayout>
        <>
            <Banner banner='gracias'/>
            <section className='w-full bg-gris-claro text-principal'>
            <div className='max-w-screen-md mx-auto flex flex-col gap-6 lg:gap-8 items-center text-center px-6 2xl:px-0 py-14'>
                <header>
                    <h3 className='text-3xl sm:text-4xl font-extrabold'>
                        Estas a {dateDiff && dateDiff} días <span className='whitespace-nowrap'>de tu viaje!</span>
                    </h3>
                    <h2 className='text-3xl sm:text-4xl font-extrabold'>
                        Con <span className='whitespace-nowrap'>Europ Assistance</span> viajás tranquilo. 
                    </h2>
                </header>
                <p className='text-xl'>Recordá llevar con vos el voucher de tu viaje, que seguramente lo tenés
                   en tu casilla de e-mail. Sino en todo caso podés
                  <button onClick={() => {downloadVoucher()}}  className="pl-2 whitespace-nowrap font-extrabold"> descargar el voucher acá</button>
                </p>
                <p className='text-xl'>Por cualquier duda o consulta escribinos por mail o hablamos por Whatsapp.</p>
                <footer className="flex gap-4">
                    <button className="py-5 px-6 btn btn-celeste lg:w-56">
                        Escribir mail
                    </button>
                    <button className="py-5 px-6 btn btn-amarillo lg:w-56">
                        Chat por Whatsapp
                    </button>
                </footer>
            </div>
            </section>
        </>
        // </AppLayout>
        )
    }
    
export default Gracias;



// Gracias.getInitialProps = ({req}) => {
//     const cookies = parseCookies(req);
//     return {
//       initialLocation:  cookies.location
//     }
//   }