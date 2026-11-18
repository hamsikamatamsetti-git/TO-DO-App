import React from 'react';
import TodoItem from './TodoItem.jsx';
import { ClipboardList } from 'lucide-react';

export default function TodoList({ todos, onToggleTodo, onDeleteTodo, filter }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <ClipboardList size={48} className="empty-icon" />
        <p className="empty-title">
          {filter === 'completed'
            ? 'No completed tasks yet!'
            : filter === 'active'
            ? 'No active tasks!'
            : 'No tasks to display!'}
        </p>
        <span className="empty-subtitle">
          {filter === 'all' ? 'Add your first task above to get started.' : 'Try switching filter tabs.'}
        </span>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}
