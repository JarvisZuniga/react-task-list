import React, { useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
    const [todoInput, setTodoInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (todoInput.trim()) {
        setTodos([...todos, { text: todoInput, isCompleted: false }]);
        setTodoInput('');
        }
    };

    return (
        <form className='form' onSubmit={addTodo}>
        <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit">Add</button>
        
    </form>
    );
};

export default TodoForm;