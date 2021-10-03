import React, { useEffect, useState } from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';

const Home = () => {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            {
                todos.map(todo => <SingleTodo
                    key={todo.id}
                    todo={todo}
                ></SingleTodo>)
            }
        </div>
    );
};

export default Home;