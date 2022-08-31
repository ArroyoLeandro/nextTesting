import { useState, useEffect, useRef } from "react";
import { format } from 'date-fns';
import { getCotizacion } from '../../apiFunctions/index'
import { useTranslation } from 'react-i18next';

function PaymentData({ formData, setFormData, initForm, position }) {
    const [t, i18n] = useTranslation('global');



    const yearActual = format(new Date(), 'yyyy')
    const [aniosTarjeta, setAniosTarjeta] = useState(null)
    const [datoPersona, setDatoPersona] = useState(initForm)
    const [validCard, setValidCard] = useState(false)
    const paso = useRef(false);

    useEffect(() => {

        let anios = []
        if (paso.current == false) {
            for (let index = 0; index < 10; index++) {
                if (parseInt(yearActual) < (yearActual + 10)) {
                    anios.push(parseInt(yearActual) + index)
                }
            }
            paso.current = true
            setAniosTarjeta(anios)
        }
        
        setDatoPersona(formData)
        // if(formData.numeroTarjeta != '') setValidCard(true)
    }, [])


    const setDato = (name, value) => {
        setDatoPersona({ ...datoPersona, [name]: value })
    }

    useEffect(() => {
        setFormData(datoPersona)
    }, [datoPersona])


    const validTarjeta = (numb) => {
     
        if (valid_credit_card(numb)) {
            let cardType = detectCardType(numb)

            switch(cardType){
                case 'visa':
                    datoPersona.tipoTarjeta = "1"
                break;
                case 'master':
                    datoPersona.tipoTarjeta = "15"
                break;
                case 'american':
                    datoPersona.tipoTarjeta = "65"
                break;

            }
            if(datoPersona.tipoTarjeta == ''){
                setValidCard(false)
                return
            }
            
            setValidCard(true)
            datoPersona.numeroTarjeta = numb
            console.log(datoPersona);
            // setFormData(datoPersona)
            setDatoPersona(datoPersona)
        }
        else {
            return
        }
    }

    function detectCardType(number) {
        var re = {
            visa: /^4[0-9]{12}(?:[0-9]{3})/,
            master: /^5[1-5][0-9]{14}/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
            american: /^3[47][0-9]{13}/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
            hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
            elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}/

        }

        for (var key in re) {
            if (re[key].test(number)) {
                return key
            }
        }
    }

    const valid_credit_card = (value) => {
        if (value.length < 14 || value.length > 16) return false
        // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value)) return false;

        // The Luhn Algorithm
        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }

    const getAnios = () => {
        return aniosTarjeta?.map((item, idx) => (
            <option value={item.toString().slice(-2)} key={idx}>{item.toString()}</option>
        ))
    }

    return (
        <>
            <div className='flex flex-col'>
                <header className='flex gap-4 py-6 px-6'>
                    <h1 className="text-xl">{t("formContratar.formaPago")}</h1>
                </header>
                <div className='flex flex-col lg:grid lg:grid-cols-3 gap-4 py-6 px-6 rounded-lg shadow-3xl overflow-hidden'>
                    <p className="flex-none col-span-full">{t("formContratar.formaPagoSubtitulo")}</p>
                    <label className='flex-1' htmlFor="tarjeta"><input
                        type='number'
                        placeholder='Nro de Tarjeta'
                        value={formData?.numeroTarjeta}
                        onChange={(e) => {
                            setDato('numeroTarjeta', e.target.value);
                            validTarjeta(e.target.value)
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input>
                    </label>
                    <label className='flex-1' htmlFor="cuotas">
                        <select name="cuotas" className='w-full py-3 px-4 border border-principal rounded' 
                            onChange={(e) => {
                                setFormData({ ...formData, cuotas: e.target.value });
                            }}>
                            <option value="value1">{t("formContratar.cuotas")}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <label className='flex-1' htmlFor="mesVencimiento">
                        <select name="mesVencimiento" className='w-full py-3 px-4 border border-principal rounded' 
                            onChange={(e) => {
                                setFormData({ ...formData, mesVencimiento: e.target.value });
                            }}>
                            <option value="value1">{t("formContratar.vtoMes")}</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </label>

                    <label className='flex-1' htmlFor="anioVencimiento">
                        <select name="anioVencimiento" className='w-full py-3 px-4 border border-principal rounded'
                            onChange={(e) => {
                                setFormData({ ...formData, anioVencimiento: e.target.value });
                            }}>
                            <option value="value1">{t("formContratar.vtoAnio")}</option>
                            {
                                getAnios()
                            }
                            {/* <option value="2022">2022</option> */}
                        
                        </select>
                    </label>
                    <label className='flex-1' htmlFor="codigo">
                        <input
                        type='text'
                        placeholder='Cód. seg.'
                        value={formData?.codigoSeguridad}
                        onChange={(e) => {
                            setFormData({ ...formData, codigoSeguridad: e.target.value });
                        }}
                        className='w-full py-3 px-4 border border-principal rounded' ></input>
                        </label>
                    <h2 className="flex-none col-span-full mt-4">{t("formContratar.titularTarjeta")}</h2>
                    <label className='flex-1' htmlFor="titular"><input
                        type='text'
                        placeholder='Nombre y Apellido'
                        value={formData?.titular}
                        onChange={(e) => {
                            setFormData({ ...formData, titular: e.target.value });
                        }}
                        className='w-full py-3 px-4 border border-principal rounded' ></input>
                        </label>
                    <label className='flex-1' htmlFor="dniTitular"><input
                        type='number'
                        placeholder='Documento Nro.'
                        value={formData?.dniTitular}
                        onChange={(e) => {
                            setFormData({ ...formData, dniTitular: e.target.value });
                        }}
                        className='w-full py-3 px-4 border border-principal rounded' ></input></label>
                </div>
            </div>
        </>
    )
}

export default PaymentData;