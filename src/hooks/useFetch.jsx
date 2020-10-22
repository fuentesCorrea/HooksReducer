import {useState, useEffect, useRef} from 'react'

const useFetch = (url) => {

    const [state, setData] = useState({data: null, loading: true, error:false})

    const inMount = useRef(true)


    useEffect(()=>{

       return () => (
        inMount.current = false
       )
      
    },[])


    useEffect(()=>{

        setData({data: null, loading: true, error:false})

        fetch(url)
        .then(datos=> datos.json())
        .then(datos => {

                if (inMount.current) {
                    setData({
                        data: datos,
                        loading: false,
                        error: false
                    })
                }
        })
        .catch(err=>{
            setData({
                data: null,
                loading: true,
                error: err
            })
        })

       

    },[ url])

    
    return state


    
}

export default useFetch
