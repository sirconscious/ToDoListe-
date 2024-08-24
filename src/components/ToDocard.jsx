import React from 'react'

export default function ToDocard(props) {
  const { todo, index, DeleteTodo, HandleEditToDo, Up, Down } = props

  return (
    <div className="todoItem">
      {todo}
      <div className="actionsContainer">
        <button onClick={() => HandleEditToDo(index)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => DeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <div className="upDown">
          <button className='btn' onClick={() => Up(index)}>👆</button>
          <button className='btn' onClick={() => Down(index)}>👇</button>
        </div>
      </div>
    </div>
  )
}
