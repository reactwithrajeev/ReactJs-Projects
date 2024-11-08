import React from 'react'
import TodoLists from './TodoLists'

const TodoListBox = ({todos, deleteTodoHandler, editTodoHandler}) => {
  return (
    <div>
        {todos.map((todo, index)=>(
            <TodoLists key={index} todo={todo} deleteTodoHandler={deleteTodoHandler} editTodoHandler={editTodoHandler} index={index} />
        ))}
    </div>
  )
}
        
export default TodoListBox