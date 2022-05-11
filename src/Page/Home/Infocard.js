import React from 'react';

const Infocard = ({ img, cardTitle, bgclass }) => {
    return (
        <div class={`card lg:card-side shadow-xl text-white ${bgclass}`}>
            <figure className='pl-8 pt-20 md:pt-0 lg:pt-0'>
                <img src={img} alt="Album" />

            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default Infocard;