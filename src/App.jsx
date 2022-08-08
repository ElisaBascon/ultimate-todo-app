import React, { useState } from 'react';
import './App.css';
import tasks from './list.json';
import TaskCard from './components/TaskCard';
import SearchBar from './components/SearchBar';
import NewTask from './components/NewTask';

function App() {
  const [task, setTask] = useState(tasks);
  const [showForm, setShowForm]= useState(false);

  const handleDelete = (name) => {
    const filtered = task.filter(elem => elem.name !==name);
    setTask(filtered);
  }

  const handleSearch = (searchValue) =>{
    if (searchValue === '') {
      setTask(tasks)
    } else {
      const filtered = task.filter(elem => elem.name.toLowerCase().includes(searchValue));
      setTask(filtered)
    } }

  const handleNewTask = (task) => {
    task.name = task.length +1;
    const updateTasks = [...tasks];
    updateTasks.push(task);
    setTask(updateTasks);
  }  

  const handleUrgency = () => {
    const orderUrgency = [...task].sort((a, b) => b.urgency - a.urgency);
    setTask(orderUrgency);
  }

  return (
    <div className="App">
    <nav>
      <span>
        <img className='logo' src='./images/logo.png' width="10%"></img>
        <h1>To do list</h1>
      </span>
      
      <SearchBar onSearch={handleSearch} />

      {showForm && <NewTask newTask={handleNewTask} />}
      <button onClick={() => setShowForm(prev => !prev)}>{!showForm ? "Add New Task" : "Hide form"}</button>
    
      <button onClick={handleUrgency}>Short by Urgency</button>
    
    </nav>

    {task.map((elem) => {
      return (
        <TaskCard key={elem.name} task={elem} onDelete={handleDelete}/>
      )})}
    </div>
  );
}

export default App;
