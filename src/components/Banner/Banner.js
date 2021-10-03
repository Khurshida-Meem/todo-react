import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../img/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <div className='d-lg-flex justify-content-center align-items-center mx-3'>
                    <div className='d-flex justify-content-center align-items-center my-3 banner-text'>
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

export default Banner;