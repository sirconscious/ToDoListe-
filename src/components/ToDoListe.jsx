import React from 'react'
import ToDocard from './ToDocard'

export default function ToDoListe(props) {
  const { todos, DeleteTodo, HandleEditToDo, Up, Down } = props

  return (
    <div>
      <ul className='main'>
        {todos.map((todo, index) =>
          <ToDocard
            key={index}
            todo={todo}
            index={index}
            DeleteTodo={DeleteTodo}
            HandleEditToDo={HandleEditToDo}
            Up={Up}
            Down={Down}
          />
        )}
      </ul>
    </div>
  )
}
