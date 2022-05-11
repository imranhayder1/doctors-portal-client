import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Button from '../Button/Button';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum suscipit nisi tempora quos, facere quod!',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum suscipit nisi tempora quos, facere quod!',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum suscipit nisi tempora quos, facere quod!',
            img: whitening,
        }
    ]

    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h3 className='text-primary uppercase font-bold'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>

                    )
                }
            </div>
            <div class="card lg:card-side bg-base-100 my-24 w-3/4 m-auto h-full shadow-xl">
                <figure className='w-full'>
                    <img src={treatment} alt="Album" />
                </figure>
                <div class="card-body">
                    <div className='py-20 w-full'>
                        <h2 class="card-title">Exceptional Dental Care, on Your Terms</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div class="card-actions justify-start mt-5">
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;