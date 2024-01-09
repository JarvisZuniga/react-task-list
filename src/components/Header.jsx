import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Header = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h1>Task List</h1>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default Header;