
import '../Conter.css';


import React from 'react'

import useComponentState from '../hooks/useComponentState.jsx'

const ConterApp = () => {
    const {state, add, res, reset} = useComponentState(5)

    
    return (
        <div className="row columnas">   
          <div className="col-m3 bg-red ">
          <p>{state}</p>
           
              <button  onClick={()=>add()} className="btn btn-dark btn-block mt-5 boton">Sumar</button>
              <button  onClick={()=>res()} className="btn btn-dark btn-block mt-5 boton">restar</button>
              <button  onClick={()=>reset()} className="btn btn-dark btn-block mt-5 boton">reset</button>
    



</div>


            


            
        </div>
    )
}

export default ConterApp
