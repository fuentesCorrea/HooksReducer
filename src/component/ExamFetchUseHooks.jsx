import React from 'react'
import useComponentState from '../hooks/useComponentState'
import useFetch from '../hooks/useFetch'

const ExamFetchUseHooks = () => {   

    const {add , state} = useComponentState(1)

    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)
   
     console.log(state);

     const {author} = !!data && data[0]

     

    return (
           
        <div>
            {
                loading ?
               ( <div className="alert alert-primary text-center" role="alert">
                 Cargando...
                 
                </div>)
                : (
                    <p>{author}</p>  
                )
                
            }

          <button className="btn btn-dark btn-block" onClick={()=>add()}>Agragar</button>
         </div>
    )
}

export default ExamFetchUseHooks
