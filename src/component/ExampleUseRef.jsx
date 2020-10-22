import React,{useState} from 'react'

import ExamFetchUseHooks from './ExamFetchUseHooks'

const ExampleUseRef = () => {

     const [estado, setEstado] = useState(false)

     const change = () => {
         setEstado(
             !estado
         )
     }


    return (
        <div>

           {
               estado && 
               <div>
                   <ExamFetchUseHooks/>
               </div>
           }
            
        <button 
            className="btn btn-primary"
            onClick={()=>change()}
        >
            mostrar/ocultar
        </button>

        </div>
    )
}

export default ExampleUseRef
