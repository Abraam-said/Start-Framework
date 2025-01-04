import React from 'react';
import Style from './Portfolio.module.css';
import img_1 from '../../assets/poert1.png';
import img_2 from '../../assets/port2.png'
import img_3 from '../../assets/port3.png'


export default function Portfolio() {
    return (
        <div className={`${Style['portfolio']}`}>
            <div className='mb-4'>
                <div className='pt-5'>
                    <div className='text-center pt-4'>
                        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>
                            Portfolio Component
                        </h2>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className={`line me-3 ${Style['line']}`}></div>
                            <i className={`fa-solid fa-star ${Style['star-icon']}`}></i>
                            <div className={`line ms-3 ${Style['line']}`}></div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row g-4 justify-content-center'>
                            <div className='col-lg-4 col-md-6 text-center'>
                                <div className='rounded-3 overflow-hidden position-relative'>
                                    <img src={img_1} className='img-fluid' alt="Item 1" />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 text-center'>
                                <div className='rounded-3 overflow-hidden position-relative'>
                                    <img src={img_2} className='img-fluid' alt="Item 2" />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 text-center'>
                                <div className='rounded-3 overflow-hidden position-relative'>
                                    <img src={img_3} className='img-fluid' alt="Item 3" />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 text-center'>
                                <div className='rounded-3 overflow-hidden position-relative'>
                                    <img src={img_1} className='img-fluid' alt="Item 4" />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 text-center'>
                                <div className='rounded-3 overflow-hidden position-relative'>
                                    <img src={img_2} className='img-fluid' alt="Item 5" />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 text-center'>
                                <div className='rounded-3 overflow-hidden position-relative'>
                                    <img src={img_3} className='img-fluid' alt="Item 6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
