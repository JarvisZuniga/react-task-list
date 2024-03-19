import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Input, Stack, Text } from '@chakra-ui/react';

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación: El nombre de la tarea debe tener al menos 3 caracteres
    if (todoInput.trim().length < 3) {
      setShowError(true);
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
    // Oculta el mensaje de error
    setShowError(false);
  };
    
  return (  
    <form className='form' onSubmit={handleSubmit}>
      <Stack spacing={2}>  
        <Input size='sd' variant='filled' type="text" color='tomato' placeholder='Title' _placeholder={{ opacity: 0.4, color: 'inherit' }} value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <Input size='sd' variant='filled' type="text" color='tomato' placeholder='Description' _placeholder={{ opacity: 0.4, color: 'inherit' }} value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
      </Stack>      
      {showError && <Text color='red'>El nombre de la tarea debe tener al menos 3 caracteres.</Text>}
      <Button rightIcon={<AddIcon marginLeft='center' />} size='sm' type="submit" colorScheme='black' variant='outline'>Add</Button>      
    </form>    
  );
};

export default TodoForm;
