'use client';

import React, { useState, useEffect } from "react";

import TodoItem from "../components/TodoItem";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export default function TodoList() {

    console.log('Rendering TodoList');

    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const [todosMounted, setTodosMounted] = useState<boolean>(false);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        console.log('Getting todos from localStorage');

        if (storedTodos) {
            try {
                const parsedTodos = JSON.parse(storedTodos);
                if(parsedTodos) {
                    setTodos( _ => parsedTodos as Todo[] );
                    console.log(`todos: ${storedTodos}`);
                }
            } catch (e) {
                console.error('Failed to parse todos from localStorage');
            }
        }
    }, []);

    // Todoリストが更新されたらローカルストレージに保存
    useEffect(() => {
        if(!todosMounted) {
            setTodosMounted( _ => true );
            return;
        }
        const json = JSON.stringify(todos);
        console.log('Saving todos to localStorage: ' + json);
        localStorage.setItem('todos', json);
    }, [todos]);

    const addTodo = () => {
        if( newTodo.trim() !== '') {
            setTodos( current => [...current, {id: Date.now(), text: newTodo, completed: false}]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id: number) => {
        console.log('Toggling todo: ' + id);
        setTodos( current => current.map(todo =>
            todo.id === id ? {
                ...todo, completed: !todo.completed
            } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        console.log('Deleting todo: ' + id);
        setTodos( current => current.filter(todo => todo.id !== id));
    };

    const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement> ) => {
        console.log('Setting new todo: ' + e.target.value);
        setNewTodo(e.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleChangeNewTodo}
                    className="border p-2 mr-2"
                    placeholder="Enter a new todo"
                />
                <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Todo
                </button>
            </div>
            <ul>
                {todos.map( todo => (
                    <li key={todo.id} className={`flex items-center justify-between p-2 ${todo.completed ? 'line-through text-black-500' : ''}`}>
                        <TodoItem
                            {...todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}