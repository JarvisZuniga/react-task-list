import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      addTodo({
        text: todoInput,
        description: descriptionInput,
        completed: false,
      });
      setTodoInput('');
      setDescriptionInput('');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;

