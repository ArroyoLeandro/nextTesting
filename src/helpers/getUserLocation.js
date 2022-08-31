import Cookie from 'js-cookie'
import {useRouter} from 'next/router';

export const getUserLocation = async()=>{

    var data = {}

    navigator.geolocation.getCurrentPosition(
        ({coords}) => {
        // const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=8.9936&lon=-79.51973`//panama
        // const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=11.74014&lon=76.07369`//india
        
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`
        fetch(url).then(response => response.json()).then(json=> {   
            let country = json.address.country.toLowerCase()
            Cookie.set('location',country)
            return country
        })
        },
        (err) => {
            console.log('no se pudo acceder a la geolocalizacion')
        }
    )
}