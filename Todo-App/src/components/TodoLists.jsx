import React, { useState } from 'react';

const TodoLists = ({todo, deleteTodoHandler, index, editTodoHandler}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodoHandler(index, editedText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div>
        <div className='w-full flex justify-between items-center px-4 py-5 border-b border-gray-700'>
            {isEditing ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="text-sm font-bold text-white px-2 py-3 rounded w-full border-none outline-none bg-gray-400 auto-focus"
              />
            ) : (
              <p className='text-sm font-bold text-white'>{todo.text}</p>
            )}
            <div className='flex gap-x-2'>
                <button 
                  onClick={handleEdit} 
                  className='text-green-500 text-sm font-semibold mr-3'
                >
                  {isEditing ? 'Save' : 'Edit'}
                </button>
                <button 
                  onClick={()=>deleteTodoHandler(index)} 
                  className='text-red-500 text-sm font-semibold'
                >
                  Delete
                </button>
            </div>
        </div>
    </div>
  )
}

export default TodoLists;