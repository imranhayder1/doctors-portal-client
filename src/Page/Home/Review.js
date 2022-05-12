import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum voluptas perspiciatis fugiat, accusantium enim.</p>
                <div class="flex items-center mt-5">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='people' />
                        </div>
                    </div>
                    <div>
                        <h3>{review.name}</h3>
                        <h5>{review.location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;