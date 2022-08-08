import React, { useState } from 'react';
import './App.css';
import tasks from './list.json';
import TaskCard from './components/TaskCard';
import SearchBar from './components/SearchBar';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [task, setTask] = useState(tasks);

  const handleDelete = (name) => {
    const filtered = task.filter(elem => elem.name !==name);
    setTask(filtered);
  }

  const handleSearch = (searchValue) =>{
    if (searchValue == '') {
      setTask(tasks)
    } else {
      const filtered = task.filter(elem => elem.name.toLowerCase().includes(searchValue));
      setTask(filtered)
    } }

  return (
    <div className="App">
    <h1>To do list</h1>
    <SearchBar onSearch={handleSearch} />

    {task.map((elem) => {
      return (
        <TaskCard key={elem.name} task={elem} onDelete={handleDelete}/>
      )
    })}
    </div>
  );
}

export default App;
