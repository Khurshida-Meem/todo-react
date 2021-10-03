import React from 'react';
import { Badge, Col } from 'react-bootstrap';
import './SingleTodo.css'

const SingleTodo = (props) => {

    const { userId, title, completed } = props.todo;
    const badge = completed ? <Badge bg="success">Completed</Badge> : <Badge bg="danger">Pending...</Badge>;
    return (
        <div className="item-container m-2">
            <h3>{title}</h3>
            <p>id: {userId}</p>
            {badge}
        </div>

    );
};

export default SingleTodo;