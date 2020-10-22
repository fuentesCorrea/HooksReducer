import {useState} from 'react'

const useComponentState = (initialState=1) => {

    const [state, setstate] = useState(initialState)

    const add = ()=>{
        setstate(state+1)
    }

    const res = () =>{
        setstate( state-1)
    }

    const reset = () => {
        setstate(initialState)
    }

    return{
        state,
        add,
        res,
        reset
    }

}

export default useComponentState
