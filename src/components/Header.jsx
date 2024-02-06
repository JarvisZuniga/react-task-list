import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTaskList from '../hooks/useTaskList';
import { Image } from '@chakra-ui/react'

const Header = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTaskList();

  return (
    <div> 
        <div className='image'>
          <Image w='300px' src='src\image\TL.jpg' alt='Dan Abramov' />    
        </div>
        <div className='Body'>
        <TodoForm addTodo={addTodo} />  
        </div>        
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        
    </div>
  );
};

export default Header;
