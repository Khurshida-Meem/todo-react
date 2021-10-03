import React from 'react';

const SingleTodo = (props) => {

    const { userId, title, completed } = props.todo;
    return (
        <div>
            <li>{title}</li>
        </div>
    );
};

export default SingleTodo;