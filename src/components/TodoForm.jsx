import React, { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Input, Stack } from '@chakra-ui/react'


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
    <Stack spacing={2}>  
      <Input size='sd' variant='filled' type="text" placeholder='Title' value={todoInput}  onChange={(e) => setTodoInput(e.target.value)} />
      <Input size='sd' variant='filled' type="text" placeholder='Description'  value={descriptionInput}  onChange={(e) => setDescriptionInput(e.target.value)} />
    </Stack>  
     
      <Button rightIcon={<AddIcon />} size='sm'  type="submit" colorScheme='black' variant='outline'>
        New Task
      </Button>
      
    </form>
    
  );
};

export default TodoForm;

