import React from 'react';


const TodoList = ({ todos, setTodos }) => {
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    };
    const toggleComplete = (id) => {
        const newTodos = [...todos];
        newTodos[id].completed = !newTodos[id].completed;
        setTodos(newTodos);
    };

    return (
        <ul>
        {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
            <div className="task-container">
            <span>{todo.text}</span>
            <div className='check'>
                <svg  onClick={() => toggleComplete(index)}
                    xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 12l2 2l4 -4" />
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                </svg>
            
                <svg className='icon' onClick={() => deleteTodo(index)}
                    xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />                
                </svg>
            </div>
            </div>
            </li>
        ))}
        </ul>
    );
};


export default TodoList;



