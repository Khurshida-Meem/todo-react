import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../img/todo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='header-container' expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className='text-color' to="/home">Home</NavLink>
                            <NavLink className='text-color' to="/pending">Pending</NavLink>
                            <NavLink className='text-color' to="/completed">Completed</NavLink>
                            <NavLink className='text-color' to="/about">About Us</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;