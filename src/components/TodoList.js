import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TodoList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
