import React from "react";

export default function TaskCard(props) {
    const {task: {name, image, useful_link, urgency, description, done }, onDelete} = props;
    return (
    <div>
        <img src={image} alt="name" width="10%"/>
        <p>Urgency {urgency} !</p>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>⚡ {useful_link} ⚡</p>
        <button onClick={() => onDelete(name)}>🗑️</button>
    </div>
    )
}