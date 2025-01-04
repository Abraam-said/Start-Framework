import React from 'react'
import Style from './Contact.module.css'

export default function Contact() {
    return (
        <div className={`${Style['contact']}`}>
            <div className='mb-4'>
                <div className='pt-5'>
                    <div className='text-center pt-4'>
                        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>
                            conatct section
                        </h2>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className={`line me-3 ${Style['line']}`}></div>
                            <i className={`fa-solid fa-star ${Style['star-icon']}`}></i>
                            <div className={`line ms-3 ${Style['line']}`}></div>
                        </div>
                    </div>
                    <form className='w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid'>
                        <label for='userName' className={`position-relative top-0 ${Style['top']} `}>userName : </label>
                        <input id='userName' type="text" placeholder="userName" name="userName"
                            class="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" />
                        <label for='userAge' className={`position-relative top-0 ${Style['top']}`}>userAge : </label>
                        <input id='userAge' type="text" placeholder="userAge" name="userName"
                            class="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" />
                        <label for='userEmail' className={`position-relative top-0 ${Style['top']}`}>userEmail : </label>
                        <input id='userEmail' type="text" placeholder="userEmail" name="userName"
                            class="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" />
                        <label for='userPassword' className={`position-relative top-0 ${Style['top']}`}>userPassword : </label>
                        <input id='userPassword' type="text" placeholder="userPassword" name="userName"
                            class="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" />
                        <button className={`mt-4 text-white ${Style['btn']}`}> send Message </button>
                    </form>
                </div>
            </div>
        </div >
    )
}
