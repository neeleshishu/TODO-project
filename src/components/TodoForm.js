import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TodoForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskText, setTaskText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container todo-form">
    <hr/>
    <h3>TO Do List</h3>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
