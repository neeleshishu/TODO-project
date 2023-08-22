import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
