import React from 'react';
import Appointments from './Appointments';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointments></Appointments>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;