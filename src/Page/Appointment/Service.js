import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    console.log(slots[0]);
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div class="card-body">
                <h2 class="card-title text-primary uppercase flex justify-center">{name}</h2>
                <p>{slots.length > 0 ?
                    <span>{slots[0]}</span> :
                    <span className='text-red-500'>try another date.</span>

                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-primary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;