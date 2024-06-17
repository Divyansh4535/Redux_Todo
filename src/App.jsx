import React from 'react';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';


const App = () => {
  return (
    <div className='bg-gray-300 h-screen w-full p-5  text-center font-black '>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App