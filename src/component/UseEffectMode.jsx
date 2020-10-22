import React from 'react'    
import '../component/css/Efectos.css'
import useForm from '../hooks/useForm'

const UseEffectMode = () => {

    const [formValues , hanldeChangeInput] = useForm({ }) 
    
    const {nombre='', 
           email='',
           edad,
           rut=''

        } = formValues




    return (
        <div className="form-group">

            <input 
            type="email"
            className="form-control m-5 input"
            name="email"
            value={email}
            placeholder='Ingrese Email'
            onChange={hanldeChangeInput}
            
            
            />

    <p>{email}</p>

            <input 
            type="text"
            className="form-control m-5"
            name="nombre"
            value={nombre}
            placeholder='Ingrese Nombre'
            onChange={hanldeChangeInput}
            
            
            />
            <p>{nombre}</p>

            <input 
            type="text"
            className="form-control m-5"
            name="rut"
            value={rut}
            placeholder='Ingrese rut'
            onChange={hanldeChangeInput}
            
            
            />

<input 
            type="number"
            className="form-control m-5"
            name="edad"
            value={edad}
            placeholder='Ingrese Edad'
            onChange={hanldeChangeInput}
            
            
            />



        </div>
    )
}

export default UseEffectMode
