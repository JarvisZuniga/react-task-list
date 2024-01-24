import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación: El nombre de la tarea debe tener al menos 3 caracteres
    if (todoInput.trim().length < 3) {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }
      // Si la descripción está vacía, se asigna una cadena vacía
      addTodo({
        text: todoInput,
        description: descriptionInput,
        completed: false,
      });
    // Reinicia los campos del formulario
      setTodoInput('');
      setDescriptionInput('');    
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

