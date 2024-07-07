'use client';

import React from "react";

type TodoItemProps = {
    id: number;
    text: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export default function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
    return (
        <div>
            <span onClick={ () => onToggle(id)} className="cursor-pointer">
                {text}
            </span>
            <button onClick={ () => onDelete(id)} className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
            </button>
        </div>
    );
}
