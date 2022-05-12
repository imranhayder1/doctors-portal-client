import React from 'react';
import backimg from '../../assets/images/appointment.png';
import Button from '../Button/Button';

const Contact = () => {
    return (
        <div style={{
            background: `url(${backimg})`
        }} className='text-center my-20 py-24'>
            <div>
                <h4 className='text-primary font-bold'>Contact Us</h4>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Email" class="input input-bordered input-md w-full max-w-xs my-5" /><br />

                <input type="text" placeholder="Subject" class="input input-bordered input-md w-full max-w-xs mb-5" /><br />

                <textarea class="textarea textarea-bordered w-full max-w-xs mb-3" placeholder="Your Message"></textarea><br />
                <div className='w-full'>
                    <Button>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;