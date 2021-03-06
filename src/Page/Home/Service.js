import React from 'react';

const Service = ({ service }) => {
    return (
        <div class="card w-lg-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={service.img} class="rounded-xl" alt='Image' />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;