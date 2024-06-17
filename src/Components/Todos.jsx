import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [updateId, setUpdateId] = useState(null)
  const [updateText, setUpdateText] = useState(' ')

  const handleUpdateClick = (id, currentText) => {
    setUpdateId(id)
    setUpdateText(currentText)
  }

  const handleSaveUpdate = (e) => {
    // e.preventDefalut()
    dispatch(updateTodo({ id: updateId, text: updateText }))
    setUpdateId(null)
    setUpdateText('')
  }

  return (
    <>
      <div className='mb-6 text-5xl font-bold '> Todos</div>
      <ul className='list-none w-full '>
        {todos.map((todo) => (
          <li key={todo.id} className='mt-4 flex justify-between text-white font-normal items-center bg-slate-400 px-4 py-2 rounded'>
            <div className='text-white'>
              {todo.text}
            </div>
            <div className=' flex  gap-6'>

            <button onClick={()=>handleUpdateClick(todo.id, todo.text)}
              className='bg-blue-400 py-1 px-4 rounded-md '
              >
              update
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className='bg-red-600 py-1 px-3 rounded-md '  > Delete </button>
              </div>
          </li>
        ))}
      </ul >
      {updateId !== null && (
        <div className='mt-4'>
          <input type="text"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            className='w-full py-2 px-4 rounded '
            placeholder='update your text '
          />
          <button
          onClick={handleSaveUpdate}
            className='bg-green-600  mt-5  py-2 px-4 rounded-md '  > Save Update </button>

        </div>
      )}
    </>
  )
}

export default Todos
