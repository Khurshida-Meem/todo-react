import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TodoDetail = () => {
    const { todoid } = useParams();
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoid}`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])

    console.log(todo);

    return (
        <div>
            single todo detail
        </div>
    );
};

export default TodoDetail;