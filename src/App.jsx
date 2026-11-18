import React, { useState, useEffect } from 'react';
import TodoHeader from './components/TodoHeader.jsx';
import TodoInput from './components/TodoInput.jsx';
import TodoFilter from './components/TodoFilter.jsx';
import TodoList from './components/TodoList.jsx';

const STORAGE_KEY = 'simple_todo_react_app';
const defaultTodos = [
  { id: 1, text: 'Learn React component structure', completed: true },
  { id: 2, text: 'Build simple TODO application', completed: false },
  { id: 3, text: 'Deploy live to GitHub Pages', completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultTodos;
    } catch {
      return defaultTodos;
    }
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const completed = todos.filter((t) => t.completed).length;
  const filtered = todos.filter((t) =>
    filter === 'active' ? !t.completed : filter === 'completed' ? t.completed : true
  );

  return (
    <div className="app-container">
      <div className="todo-card">
        <TodoHeader totalTasks={todos.length} completedTasks={completed} />
        <TodoInput onAddTask={(text) => setTodos([{ id: Date.now(), text, completed: false }, ...todos])} />
        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          counts={{ all: todos.length, active: todos.length - completed, completed }}
          onClearCompleted={() => setTodos(todos.filter((t) => !t.completed))}
        />
        <TodoList
          todos={filtered}
          onToggleTodo={(id) => setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))}
          onDeleteTodo={(id) => setTodos(todos.filter((t) => t.id !== id))}
          filter={filter}
        />
      </div>
      <footer className="app-footer">
        <p>Simple TODO App &bull; Built with React &bull; Ready for GitHub Pages</p>
      </footer>
    </div>
  );
}
