'use client';

import React, { useState } from "react";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export function ListRendering() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Learn React', completed: true },
        { id: 2, text: 'Build a React App', completed: false },
        { id: 3, text: 'Deploy the app', completed: false },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const handleAddTodo = () => {
        if( newTodo.trim() !== '' )
        {
            setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
            setNewTodo('');
        }
    };

    const handleToggleTodo = (id: number ) => {
        setTodos(
            todos.map( todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const handleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map( todo =>(
                        <li key={todo.id}
                            onClick={() => handleToggleTodo(todo.id)}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                        </li>
                    ))
                }
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={handleChanged}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );

}