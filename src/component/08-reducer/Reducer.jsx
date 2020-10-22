import React , {useReducer, useEffect} from 'react'
import {todoReducer}  from './TodoReducer'

import './reducer.css'
import useForm from '../../hooks/useForm'
import { TodoList } from './TodoList'

const Reducer = () => {


    const [{descripcion}, setValor, reset] = useForm({
        descripcion:''
    })
    
    const init = () => {
        // return [{
        //     id: 444444455666644,
        //     desc: 'nada',
        //     done:true
        // }]

        return JSON.parse(localStorage.getItem('todos'))
    }


    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
    
        localStorage.setItem('todos', JSON.stringify(todos))
     
    }, [todos])

    const  borraItem = (id) => {

        const item = JSON.parse(localStorage.getItem('todos'))
        const nuevoArray = item.filter(itense => itense.id !== id)
        const action = {
            type: 'remove',
            payload: nuevoArray
        }
        const action2 ={
            type: 'remove',
            payload: action.payload
        }

        dispatch(action2);
     
    }

    const handleCrossOut = (todo) => {  
        
        
        const item = JSON.parse(localStorage.getItem('todos'))
        const nuevoArray = item.map(tarea => {
            if (tarea.id===todo.id) {
                return {
                    id: Math.random(2),
                    desc: todo.desc,
                    done: !todo.done
                 
                }
                
            }else{
                return tarea
            }
        })

        const action = {
            type: 'CrossOut',
            payload: nuevoArray
        }
        dispatch(action)

        console.log(nuevoArray);

    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        const newState = {
            id: Math.random(2),
            desc: descripcion,
            done:false
        }
        const action = {
            type: 'add',
            payload: newState
        }

     
        dispatch(action);
        reset();
    }

 


    return (
        <div>
            <h1>Reducer</h1>
            <hr/>

            <div className="row">
                
            <div className="col-7">
            <h4>TODOs</h4>
            <hr/>

            <ul className="list-group">
               { 
               todos.map((todo, i)=>{
                   return (  
                     <TodoList
                     className="list-group-item"
                     key={todo.id}
                     todo={todo}
                     i={i}
                     handleCrossOut={handleCrossOut}
                     borraItem={borraItem}
                     />
                   )
               })
               }
              </ul>

            </div>

            <div className="col-5">

            <h4>Agregar</h4>
                <hr/>

                <form onSubmit={handleSubmit}>

                   

                    <input 
                    type="text"
                    autoComplete="off"
                    placeholder="aprender ..."
                    name="descripcion"
                    value={descripcion}
                    onChange={setValor}
                    className="form-control"
                    />

                    <button className="btn btn-primary btn-block mt-2">Agregar</button>
                </form>

            </div>

            </div>


        </div>
    )
}

export default Reducer
