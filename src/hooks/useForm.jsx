import {useState} from 'react'

const useForm = (initialState = {}) => {

    const [value, setValue] = useState({ initialState })

    const reset = () => {
        setValue(initialState)
    }

    const hanldeChangeInput = ({target}) =>{
        
        setValue( { ...value,  [target.name]:target.value} )

    }

    return [value, hanldeChangeInput, reset]
  
}

export default useForm
