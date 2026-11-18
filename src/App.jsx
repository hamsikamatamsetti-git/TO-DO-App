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
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultTodos;
    } catch {
      return defaultTodos;
    }
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.error('Failed to save todos in localStorage', err);
    }
  }, [todos]);

  const handleAddTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <div className="todo-card">
        <TodoHeader
          totalTasks={todos.length}
          completedTasks={completedCount}
        />

        <TodoInput onAddTask={handleAddTask} />

        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          counts={{
            all: todos.length,
            active: activeCount,
            completed: completedCount,
          }}
          onClearCompleted={handleClearCompleted}
        />

        <TodoList
          todos={filteredTodos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
          filter={filter}
        />
      </div>

      <footer className="app-footer">
        <p>Simple TODO App &bull; Built with React &bull; Ready for GitHub Pages</p>
      </footer>
    </div>
  );
}
