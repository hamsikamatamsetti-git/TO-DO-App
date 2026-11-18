import React from 'react';
import { CheckSquare } from 'lucide-react';

export default function TodoHeader({ totalTasks, completedTasks }) {
  return (
    <header className="todo-header">
      <div className="header-title">
        <CheckSquare className="header-icon" size={32} />
        <h1>My Tasks</h1>
      </div>
      <p className="header-subtitle">
        {totalTasks === 0
          ? 'No tasks yet. Add one below!'
          : `${completedTasks} of ${totalTasks} task${totalTasks === 1 ? '' : 's'} completed`}
      </p>
    </header>
  );
}
