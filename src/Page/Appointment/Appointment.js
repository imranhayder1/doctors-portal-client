import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppointmentBanner from './AppointmentBanner';
import Availableappointment from './Availableappointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <Availableappointment date={date}></Availableappointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;