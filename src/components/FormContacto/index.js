import React, { useState } from "react";
import { useRouter } from 'next/router'

function FormContacto() {
    //const [paso, setPaso] = useState(0);
    const [formData, setFormData] = useState({
        name:"",
        apellido:"",
        email:"",
        motivo:"",
    });
    const router = useRouter();
  //const PasosLista = ["Paso 1", "Paso 2", "Paso 3"];

    return ( 
        <>
            <div role='form' aria-label="Contacto" className='w-full max-w-screen-lg mx-auto flex flex-col gap-6 py-10 lg:py-16 px-6 items-center'>
                <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-4 py-6 px-6 rounded-lg shadow-3xl overflow-hidden'>
                    <label className='flex-1' htmlFor="name"><input 
                        type='text' 
                        placeholder='Nombre' 
                        value={formData.name} 
                        onChange={(e) => {
                            setFormData({...formData, name:e.target.value});
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input></label>
                    <label className='flex-1' htmlFor="apellido"><input 
                        type='text' 
                        placeholder='Apellido'
                        value={formData.apellido} 
                        onChange={(e) => {
                            setFormData({...formData, apellido:e.target.value});
                        }} 
                        className='w-full py-3 px-4 border border-principal rounded'></input></label>
                    <label className='flex-1' htmlFor="email"><input 
                        type='text' 
                        placeholder='E-mail' 
                        value={formData.email} 
                        onChange={(e) => {
                            setFormData({...formData, email:e.target.value});
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></input></label>
                    <label className='flex-none w-full col-span-3' htmlFor="motivo"><textarea 
                        placeholder='¿En qué podemos ayudarte?' 
                        value={formData.motivo} 
                        onChange={(e) => {
                            setFormData({...formData, motivo:e.target.value});
                        }}
                        className='w-full py-3 px-4 border border-principal rounded'></textarea></label>
                    
                </div>
                <button className="py-5 px-6 btn btn-amarillo w-full lg:w-56 text-xl font-bold lg:font-normal shadow-2xl shadow-amarillo hover:shadow-principal focus:shadow-principal" 
                    onClick={() => {
                        if(formData.name) {
                        alert("Listo! en consola esta la data");
                        console.log(formData);
                        //router.push('/gracias');
                        }
                        else {
                            alert("Falta el nombre");
                        //setPaso((currPaso) => currPaso + 1)
                        }
                        
                    }}>
                        Enviar
                </button>
            </div>
        </>
    )
}

export default FormContacto