import React from 'react';
import appoint from '../../assets/images/doctor-small.png';
import appointback from '../../assets/images/appointment.png';
import Button from '../Button/Button';


const Appointment = () => {
    return (
        <div style={{
            background: `url(${appointback})`
        }}
            className='flex justify-center items-center my-36'>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={appoint} alt="" />
            </div>
            <div className='flex-1 text-white px-10'>
                <p className='text-primary uppercase'>Appointment </p>
                <h2>Make an appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className='mt-5'>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;