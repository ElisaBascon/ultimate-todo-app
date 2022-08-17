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
      <ul>
        <li><img className='logo' src='./images/logo.png' width="50px" alt='imageLogo' ></img></li>
        <li>{showForm && <NewTask newTask={handleNewTask} />}
          <button onClick={() => setShowForm(prev => !prev)}>{!showForm ? "Add New Task" : "Hide form"}</button></li>
        <li><button onClick={handleUrgency}>Short by Urgency</button></li>
        <li><SearchBar onSearch={handleSearch} /></li>
      </ul>
    </nav>

    <header>
      <h1>To do list</h1>
    </header>  
    
    <div className='taskContainer'>
      {task.map((elem) => {
        return (
          <TaskCard key={elem.name} task={elem} onDelete={handleDelete}/>
        )})}
    </div>

    </div>
  );
}

export default App;
