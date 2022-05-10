import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import Infocard from './Infocard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <Infocard cardTitle='Opening Hours' bgclass='bg-primary' img={clock}></Infocard>
            <Infocard cardTitle='Visit our location' bgclass='bg-accent' img={marker}></Infocard>
            <Infocard cardTitle='Contact us now' bgclass='bg-primary' img={phone}></Infocard>
        </div>
    );
};

export default Info;