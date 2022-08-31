import {headerGet} from '../helpers/header'
import axios from 'axios'

export async function  getPromoActual(user){
    let promo = undefined
    try {
        // const response = await fetch(process.env.NEXT_PUBLIC_URL_PROMOACTUAL+'?codigoUsuario='+user,headerGet);
        // let datos= await response.json();
        //   const data = datos
        let logData = await axios.get(process.env.NEXT_PUBLIC_URL_PROMOACTUAL+'?codigoUsuario='+user);
        const data = logData.data[0]
        promo = data
        }
        catch (e) {
        console.log(e)
        }
    return promo
}