import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const Availableappointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-24'>
            <p className='text-secondary text-center text-2xl'>Available Appointments on {format(date, 'PP')}</p>

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
        </div>
    );
};

export default Availableappointment;