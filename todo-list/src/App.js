import React, { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: false },
    { id: 3, text: 'Master CRUD', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="tasks">
        {tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
        ))}
      </div>
      <button onClick={() => addTask(prompt('Enter task:'))}>Add Task</button>
    </div>
  );
}

export default App;