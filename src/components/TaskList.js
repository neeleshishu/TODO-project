import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="container task-list">
      <h2 className="mb-4">Task List</h2>
      <ul className="list-group">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
