import React from "react";

export default function TaskCard(props) {
    const {task: {name, image, useful_link, urgency, description, done }, onDelete} = props;
    return (
    <div>
        <image src={image}></image>
        <p>{urgency}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p>resources: {useful_link}</p>
        <button onClick={() => onDelete(name)}>🗑️</button>
    </div>
    )
}