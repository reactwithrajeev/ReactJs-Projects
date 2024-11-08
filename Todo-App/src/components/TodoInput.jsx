import React from "react";

const todoInput = ({inputRef, addTodoHandler}) => {
  

  return (
    <div className="flex gap-x-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new todo"
        className="w-full border px-4 py-2 rounded-md text-black"
      />
      <button onClick={addTodoHandler} className="bg-indigo-500 text-white px-5 py-2 rounded-md">
        Add Todo
      </button>
    </div>
  );
};

export default todoInput;
