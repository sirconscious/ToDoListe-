import React from 'react'
import { useState } from 'react'
export default function ToDoinput(props) {
    const {newtodo,setNewToDo,HandleAddToDo} = props
  return (
    <header>
      <input type="text" placeholder='Enter ToDo....' onChange={(e)=>setNewToDo(e.target.value)} value={newtodo}/>
      <button onClick={()=>HandleAddToDo(newtodo)}>Add</button>
    </header>
  )
}
