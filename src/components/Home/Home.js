import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import SingleTodo from '../SingleTodo/SingleTodo';
import './Home.css'

const Home = () => {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container className='todo-container'>
                {
                    todos.map(todo => <SingleTodo
                        key={todo.id}
                        todo={todo}
                    ></SingleTodo>)
                }
            </Container>

        </div>
    );
};

export default Home;