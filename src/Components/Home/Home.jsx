import React from 'react';
import home_img from '../../assets/avataaars.svg';
import Style from './Home.module.css';

export default function Home() {
    return (
        <div className={`home d-flex justify-content-center align-items-center text-white ${Style['home']}`}>
            <div className='text-center'>
                <div className={`content ${Style['content']}`}>
                    <img src={home_img} className={`mb-3 ${Style['img']}`} alt="Avatar" />
                    <div className={`text-center pt-4 ${Style['text-section']}`}>
                        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>
                            Start Framework
                        </h2>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className={`line me-3 ${Style['line']}`}></div>
                            <i className={`fa-solid fa-star ${Style['star-icon']}`}></i>
                            <div className={`line ms-3 ${Style['line']}`}></div>
                        </div>
                        <div className={`${Style['description']}`}>
                            Graphic Artist - Web Designer - Illustrator
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

