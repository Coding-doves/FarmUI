import React from 'react';


import Footer from '../component/footer';
import Nav from '../component/nav';
import Section2_3 from '../component/section2_3';
import Testimonial from '../component/testimonial';
import Section6_7 from '../component/section6_7';
import about_banner from '../assets/about_banner.jpg';
import bg2 from '../assets/bg2.png';
import leaf from '../assets/leaf.png';
import arrow_up_right from '../assets/arrow_up_right.png';
import section2 from '../assets/section2.jpg';
import farm_tractor from '../assets/farm_tractor.jpg';
import woman_plant from '../assets/woman_plant.jpg';
import fertilize from '../assets/fertilize.jpg';
import fresh_veg from '../assets/fresh_veg.jpg';
import men_on_farm from '../assets/men_on_farm.jpg';


const About = () => {
    return (
        <div>
            <header className='bannera' style={{ background: `url(${about_banner}) no-repeat center/cover` }}>
                <Nav/>
            </header>

            <Section2_3 />

            <section className="section4a"> 
                <span className='tiny'>
                    <img src={leaf} alt="leaf" />
                    <span>who we are</span>
                </span>
                <h1>Best Agriculture Services</h1>
                <div className='cards'>
                    <div className="card">
                        <div className="big-card">
                            <span className='image'><img src={farm_tractor} alt="" /></span>
                            <span className='list'>
                                <ul>
                                    <li>FERTILIZER</li>
                                    <li>Harvest Concepts</li>
                                </ul>
                            </span>
                        </div>
                        <div className='inner'>
                            <span><img src={arrow_up_right} alt="" /></span>
                        </div>
                        <div className="vectors v1"></div>
                        <div className="vectors v2"></div>
                    </div>

                    <div className="card">
                        <div className="big-card">
                            <span className='image'><img src={woman_plant} alt="" /></span>
                            <span className='list'>
                                <ul>
                                    <li>FRUITS</li>
                                    <li>Farming Products</li>
                                </ul>
                            </span>
                        </div>
                        <div className='inner'>
                            <span><img src={arrow_up_right} alt="" /></span>
                        </div>
                        <div className="vectors v1"></div>
                        <div className="vectors v2"></div>
                    </div>

                    <div className="card">
                        <div className="big-card">
                            <span className='image'><img src={fertilize} alt="lady pluck's fruit" /></span>
                            <span className='list'>
                                <ul>
                                    <li>FERTILIZER</li>
                                    <li>Soil fertilization</li>
                                </ul>
                            </span>
                        </div>
                        <div className='inner'>
                            <span><img src={arrow_up_right} alt="" /></span>
                        </div>
                        <div className="vectors v1"></div>
                        <div className="vectors v2"></div>
                    </div>

                    <div className="card">
                        <div className="big-card">
                            <span className='image'><img src={fresh_veg} alt="lady pluck's fruit" /></span>
                            <span className='list'>
                                <ul>
                                    <li>FRUITS</li>
                                    <li>Fresh Vegetables</li>
                                </ul>
                            </span>
                        </div>
                        <div className='inner'>
                            <span><img src={arrow_up_right} alt="" /></span>
                        </div>
                        <div className="vectors v1"></div>
                        <div className="vectors v2"></div>
                    </div>
                </div>
                <div className='slide-dots'>
                    <span className='active'></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>

            <section className="section5a" style={{ backgroundSize: '99% 200px', background: `url(${bg2}) no-repeat bottom #5B8C51` }}>
                <span className='tiny'>
                    <img src={leaf} alt="leaf" />
                    <span>Get To Know Us</span>
                </span>
                <div className='layer'>
                    <div className='one'>
                        <h1>Agriculture matters to the <br/>future of development</h1>
                        <div>
                            <img src={men_on_farm} alt="farm" />
                            <span></span>
                        </div>
                    </div>
                    <div className='two'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even.</p>
                        <table>
                            <tr>
                                <td>01</td>
                                <td>Schedule Your Experience</td>
                                <td>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Schedule Your Experience</td>
                                <td>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Schedule Your Experience</td>
                                <td>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Schedule Your Experience</td>
                                <td>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>

            <Section6_7 />

            <Testimonial />

            <Footer />
        </div>
    )
}

export default About;
