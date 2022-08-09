import React from "react";

export default function TaskCard(props) {
    const {task: {name, image, useful_link, urgency, description, done }, onDelete} = props;
    return (
    <div className="cardTask">
    <button className="deleteButton" onClick={() => onDelete(name)}>✖</button>
        <img src={image} alt="name" width="100%"/>
        <h3> {urgency} -</h3>
        <h3>{name}</h3>
        <p>{description}</p>
        <h6>⚡ {useful_link} ⚡</h6>
        
    </div>
    )
}