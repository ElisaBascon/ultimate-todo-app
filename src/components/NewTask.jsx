import React, { useSate } from "react";

export default function NewTask(props) {
    const { newTask } = props;

    const [task, setTask] = useSate({
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

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Name" name="name" value={task.name}/>
                <input type="text" placeholder="Image Url" name="image" value={task.image}/>
                <input type="text" placeholder="Useful link" name="useful_link" value={task.useful_link}/>
                <input type="text" placeholder="Urgency" name="urgency" value={task.urgency}/>
                <input type="text" placeholder="Description" name="description" value={task.description}/>
                <label>Done</label>
                    <input type="checkbox" checked={task.done} name="done" />
                <button type="submit">Save new task</button>
            </form>
        </div>
    )
}
