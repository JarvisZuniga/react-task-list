import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTaskList from '../hooks/useTaskList';

const Header = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTaskList();

  return (
    <div>
      <h1>Task List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default Header;
