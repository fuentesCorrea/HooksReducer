import React from 'react'
import useForm from '../hooks/useForm'

const Form2 = () => {

    const [valor, setValor] = useForm({})

    const {
        direccion='',
        telefono,

    }= valor



    return (
        <div className="form-group">       
        <input 
            type="text"
            className="form-control m-5 input"
            name="direccion"
            value={direccion}
            placeholder='Ingrese Direccion'
            onChange={setValor}
            />

        <input 
            type="text"
            className="form-control m-5 input"
            name="telefono"
            value={telefono}
            placeholder='Ingrese telefono'
            onChange={setValor}
            />

        </div>

        
    )
}

export default Form2
