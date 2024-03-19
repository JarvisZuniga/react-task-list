import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTaskList from '../hooks/useTaskList';
import image from '../image/TL.jpg';

const Header = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTaskList();

  return (
    <div> 
          <center>
          <img src={image} alt="Imagen de inicio" style={{ cursor: 'pointer' }} />    
          </center>
        <div className='Body'>
        <TodoForm addTodo={addTodo} />  
        </div>        
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />        
    </div>
  );
};

export default Header;
