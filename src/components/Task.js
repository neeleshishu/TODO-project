import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Task = ({ task }) => {
  const { toggleTask, removeTask } = useContext(TaskContext);

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={`taskCheckbox-${task.id}`}
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <label className="custom-control-label" htmlFor={`taskCheckbox-${task.id}`}>
          {task.text}
        </label>
      </div>
      <button
        className="btn btn-danger ml-2"
        onClick={() => removeTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
