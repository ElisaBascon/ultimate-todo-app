import React, { useState } from 'react';
import './App.css';
import tasks from './list.json';
import TaskCard from './components/TaskCard';

function App() {
  const [task, setTask] = useState(tasks);

  const handleDelete = (name) => {
    const filtered = task.filter(elem => elem.name !==name);
    setTask(filtered);
  }

  return (
    <div className="App">
    <h1>To do list</h1>
    {task.map((elem) => {
      return (
        <TaskCard key={elem.name} task={elem} onDelete={handleDelete}/>
      )
    })}
    </div>
  );
}

export default App;
