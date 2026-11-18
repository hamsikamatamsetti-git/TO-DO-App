import React from 'react';

export default function TodoFilter({ filter, setFilter, counts, onClearCompleted }) {
  const filters = [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'active', label: 'Active', count: counts.active },
    { id: 'completed', label: 'Completed', count: counts.completed },
  ];

  return (
    <div className="todo-filter-container">
      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label} <span className="badge">{f.count}</span>
          </button>
        ))}
      </div>

      {counts.completed > 0 && (
        <button
          type="button"
          className="btn-clear-completed"
          onClick={onClearCompleted}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}
