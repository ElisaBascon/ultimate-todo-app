import React from "react";

export default function TaskCard(props) {
    const {task: {name, image, useful_link, urgency, description, done }, onDelete} = props;
    return (
    <div className="cardTask">
        <button className="deleteButton" onClick={() => onDelete(name)}>✖</button>
        <label><input type="checkbox"/>{done}  Done </label>
        <img src={image} alt="name"/>
        <h2> {urgency} - {name}</h2>
        <p>{description}</p>
        <a href={useful_link}>⚡ Resources ⚡</a>
    </div>
    )
}