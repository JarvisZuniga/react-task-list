import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Header = () => {
  // Obtener las tareas almacenadas en localStorage al inicio
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(storedTodos);

    // Función para agregar tarea
    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        // Guardar en localStorage cada vez que se agregue una tarea
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    // Función para eliminar tarea
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
        // Guardar en localStorage cada vez que se elimine una tarea
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    // Función para editar tarea
    const editTodo = (id, editedTodo) => {
        const newTodos = [...todos];
        newTodos[id] = editedTodo;
        setTodos(newTodos);
        // Guardar en localStorage cada vez que se edite una tarea
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    return (
        <div>
        <h1>Task List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    );
};

export default Header;
