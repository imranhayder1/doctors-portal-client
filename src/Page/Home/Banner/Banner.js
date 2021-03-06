import React from 'react';
import chair from '../../../assets/images/chair.png';
import Button from '../../Button/Button';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-0 lg:px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='This is a chair' />
                <div class="">
                    <h1 class="text-5xl font-bold">Your new smile start here!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button> */}
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;