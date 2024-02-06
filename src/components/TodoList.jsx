import React, { useState } from 'react';
import { Icon, Input, Button } from '@chakra-ui/react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const toggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].completed = !newTodos[id].completed;
    updateTodo(id, newTodos[id]);
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

    updateTodo(id, updatedTodo);

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
                <Input placeholder='Title' size='xs' variant='filled' type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                <Input placeholder='Description' size='xs' variant='filled' type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />                
                <Button colorScheme='blue' size='sm' onClick={() => finishEditing(index)}>Done</Button>         
              </div>
            ) : (
              <>
                <span>{todo.text}</span>
            <span>{todo.description}</span>                                                   
                            <div className='check'>                                                            
                               <Icon as={FaRegSquareCheck} w={10} h={10} color='Black.500' className='transition' onClick={() => toggleComplete(index)} />                             
                               <Icon as={FaEdit} w={10} h={10} color='Black.500' className='transition' onClick={() => startEditing(index, todo.text, todo.description)} />
                               <Icon as={FaRegTrashAlt} w={10} h={10} color='Black.500' className='transition' onClick={() => deleteTodo(index)} />                                
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

