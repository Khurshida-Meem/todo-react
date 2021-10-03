import React from 'react';
import { Badge } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './SingleTodo.css'

const SingleTodo = (props) => {

    const { id, userId, title, completed } = props.todo;
    const badge = completed ? <Badge bg="success">Completed</Badge> : <Badge bg="danger">Pending...</Badge>;

    const history = useHistory();
    const handleTodoClick = () => {
        history.push(`/home/${id}`);
    }

    return (
        <div className="item-container m-2">
            <h3>{title}</h3>
            <p>id: {userId}</p>
            <div className='d-flex'>
                {badge}
                <button onClick={handleTodoClick} className='ms-auto p-2'>Show Details</button>
            </div>

        </div>

    );
};

export default SingleTodo;