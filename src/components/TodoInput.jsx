import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TodoInput({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text.trim());
    setText('');
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button type="submit" className="btn-add" disabled={!text.trim()}>
        <Plus size={20} />
        <span>Add</span>
      </button>
    </form>
  );
}
