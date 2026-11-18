import React from 'react';
import { Trash2, Check } from 'lucide-react';

export default function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        type="button"
        className={`checkbox-btn ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label={todo.completed ? 'Mark task as incomplete' : 'Mark task as complete'}
      >
        {todo.completed && <Check size={16} strokeWidth={3} />}
      </button>

      <span
        className="todo-text"
        onClick={() => onToggleTodo(todo.id)}
        title="Click to toggle status"
      >
        {todo.text}
      </span>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDeleteTodo(todo.id)}
        aria-label="Delete task"
        title="Delete task"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
}
