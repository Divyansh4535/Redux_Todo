import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../Features/todo/todoSlice'


const AddTodo = () => {
  const [input , setInput] = useState("")
  const dispatch = useDispatch()


  const addTodoHandler=(e)=>{
    // console.log('hlo');
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div>
      <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input type="text" className='bg-gray-800 text-gray-100 font-normal rounded border border-gray-700 transition-colors duration-200 ease-in-out px-3 py-1 leading-8  ' placeholder='Enter a Todo.....' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit' className='text-white bg-indigo-500 border-0 font-semibold py-2 px-5  rounded mb-6' >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
















