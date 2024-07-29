import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)} 
      />
      <span>{todo.text}</span>
    </div>
  );
}

export default TodoItem;
