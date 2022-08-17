import React, { useState } from "react";

export default function NewTask(props) {
    const { newTask } = props;

    const [task, setTask] = useState({
        name: '',
        image: '',
        useful_link: '',
        urgency: '',
        description: '',
        done: false
    })

    const handleForm = (elem) => {
        elem.preventDefault();
        newTask(task);
        setTask({
            name: '',
            image: '',
            useful_link: '',
            urgency: '',
            description: '',
            done: false
        })
    }

    const handleChange = (elem) => {
        const conditionalValue = elem.target.name === 'urgency' ? parseInt(elem.target.value) : elem.target.value;
        setTask(prev => {
            return {
                ...prev,
                [elem.target.name]: conditionalValue
            }
        })
        console.log(task)
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Name" name="name" value={task.name} onChange={(elem) => handleChange(elem)}/>
                <input type="text" placeholder="Image Url" name="image" value={task.image} onChange={(elem) => handleChange(elem)}/>
                <input type="text" placeholder="Useful link" name="useful_link" value={task.useful_link} onChange={(elem) => handleChange(elem)}/>
                <input type="number" placeholder="Urgency" name="urgency" value={task.urgency} onChange={(elem) => handleChange(elem)}/>
                <input type="text" placeholder="Description" name="description" value={task.description} onChange={(elem) => handleChange(elem)}/>
                <label>Done</label>
                    <input type="checkbox" checked={task.done} name="done" onChange={(elem) => handleChange(elem)}/>
                <button type="submit">Save new task</button>
            </form>
        </div>
    )
}
