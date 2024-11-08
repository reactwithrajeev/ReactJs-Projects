import React, { useState, useRef } from 'react'
import TodoInput from './components/TodoInput'
import TodoListBox from './components/TodoListBox'

const App = () => {
  const [todos, setTodos] = useState([]);
  

  const inputRef = useRef();
  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos([{
      text: inputRef.current.value,
      completed: false
    }, ...todos]);
    inputRef.current.value = "";

  };

  const deleteTodoHandler = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodoHandler = (index, newText) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };





  return (
    <div className='bg-[#172842] min-h-screen py-8'>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white border flex flex-col items-center justify-center gap-y-3'>
        <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>
        <div className='mb-4'>
          <TodoInput inputRef={inputRef} addTodoHandler={addTodoHandler} />
        </div>
        <div className='w-full border flex flex-col gap-y-3'>
          <TodoListBox todos={todos} deleteTodoHandler={deleteTodoHandler} editTodoHandler={editTodoHandler} />
        </div>
      </div>
    </div>
  )
}

export default App