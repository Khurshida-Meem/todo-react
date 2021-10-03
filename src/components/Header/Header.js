import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../img/todo.png'
import './Header.css'
import banner from '../../img/banner.png'

import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <Navbar expand="lg">
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
            <Container>
                <div className='d-lg-flex justify-content-center align-items-center mx-3 banner'>
                    <div className='d-flex justify-content-center align-items-center my-3 header-text'>
                        <div>
                            <h1>Track <br /> Your Everyday Task</h1>
                            <p>Here you can show your finished tasks and pending task, you need not be worried if you forget what to do.</p>
                        </div>

                    </div>
                    <div className='d-flex justify-content-center ms-3 my-5 w-50'>
                        <img className='w-100 mb-5' src={banner} alt="" />
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Header;