import React from 'react';

import Footer from '../component/footer';
import Nav from '../component/nav';
import Section2_3 from '../component/section2_3';
import Section6_7 from '../component/section6_7';
import Testimonial from '../component/testimonial';
import banner1 from '../assets/banner1.jpg';
import bg2 from '../assets/bg2.png';


const Home = () => {
    return (
        <div>
            <header className='banner' style={{ background: `url(${banner1}) no-repeat center/cover` }}>
                <Nav/>
            </header>

            <section className="section1"></section>

            <Section2_3 />
            
            <section className="section4" style={{ backgroundSize: '99% 200px', background: `url(${bg2}) no-repeat bottom #5B8C51` }}></section>
            <section className="section5"></section>
                        
            <Testimonial />

            <section className="section7"></section>
            <section className="section8"></section>
            
            <Section6_7 />
            
            <section className="section11"></section>
            
            <Footer />
        </div>
    )
}

export default Home;
