import React from 'react'
import './reducer.css'

export const TodoList = ({todo,handleCrossOut,borraItem,i}) => {
    return (
      <div className="list-group-item">
        <p
          className={`${todo.done && "complete"}`}
          onClick={() => handleCrossOut(todo)}
        >
          {i + 1}- {todo.desc}
        </p>

        <button
          onClick={() => borraItem(todo.id)}
          className="btn btn-outline-info boton "
        >
          Borrar
        </button>
      </div>
    );
}
