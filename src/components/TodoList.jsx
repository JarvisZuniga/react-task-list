import React, { useState } from 'react';


const TodoList = ({ todos, deleteTodo, editTodo }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

        const toggleComplete = (id) => {
        const newTodos = [...todos];
        newTodos[id].completed = !newTodos[id].completed;
        editTodo(id, newTodos[id]);
        };
    
        const startEditing = (id, text, description) => {
        setEditIndex(id);
        setEditedText(text);
        setEditedDescription(description);
        };
    
        const finishEditing = (id) => {
        const updatedTodo = {
            text: editedText,
            description: editedDescription,
            completed: todos[id].completed,
        };
    
        editTodo(id, updatedTodo);
    
        // Limpiar los estados de edición
        setEditIndex(null);
        setEditedText('');
        setEditedDescription('');
        };

        return (
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                    <div className="task-container">
                        {editIndex === index ? (
                        <div>
                            <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            />
                            <input
                            type="text"
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            />
                            <button onClick={() => finishEditing(index)}>Done</button>
                        </div>
                        ) : (
                        <>
                            <span>{todo.text}</span>
                            <span>{todo.description}</span>
                            <div className='check'>                                
                                <svg 
                                    className='icon'
                                    onClick={() => toggleComplete(index)}
                                    xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-check" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                                {/* ... (código del icono) */}                     
                                
                                <svg 
                                    className='icon'
                                    onClick={() => startEditing(index, todo.text, todo.description)}
                                    xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                    <path d="M16 5l3 3" />
                                </svg>
                                {/* ... (código del icono) */}

                                <svg
                                className='icon'
                                onClick={() => deleteTodo(index)}
                                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                                {/* ... (código del icono) */}
                            
                            </div>
                        </>
                        )}
                    </div>
                    </li>
                ))}
            </ul>
        );
        };
        
        export default TodoList;

