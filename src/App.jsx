import { useEffect, useState } from 'react'
import ToDoinput from './components/ToDoinput'
import ToDoListe from './components/ToDoListe'
import React from 'react'

export default function App() {
  const [todos,setTodos] = useState([])
  const [newtodo,setNewToDo] = useState('')

  function HandleAddToDo(newtodo) {
    if (!newtodo.trim()) {
      return
    }
    let newListe=[...todos,newtodo]
    setTodos(newListe)
    setNewToDo('')
    DataHandeling(newListe)
  }

  function DeleteTodo(index) {
    let newListe = todos.filter((_, i) => i !== index)
    setTodos(newListe)
    DataHandeling(newListe)

  }

  function HandleEditToDo(index) {
    let valueToChange = todos[index]
    setNewToDo(valueToChange)
    DeleteTodo(index)
  }

  function Up(index) {
    if (index !== 0) {
      let newListe = [...todos]
      let x = newListe[index]
      newListe[index] = newListe[index-1]
      newListe[index-1] = x
      setTodos(newListe)
    }
  }

  function Down(index) {
    if (index !== todos.length - 1) {
      let newListe = [...todos]
      let x = newListe[index]
      newListe[index] = newListe[index+1]
      newListe[index+1] = x
      setTodos(newListe)
    }
  }
  function DataHandeling(newListe) {
    localStorage.setItem("todos",JSON.stringify(newListe))
  }
  useEffect(()=>{
    if (!localStorage) {
        return 
    }
    let localtodos = localStorage.getItem('todos')
    if (!localtodos) {
      return
    }
    setTodos(JSON.parse(localtodos) )
  },[])
  return (
    <div>
      <ToDoinput newtodo={newtodo} setNewToDo={setNewToDo} HandleAddToDo={HandleAddToDo} />
      <ToDoListe todos={todos} DeleteTodo={DeleteTodo} HandleEditToDo={HandleEditToDo} Up={Up} Down={Down} />
    </div>
  )
}
