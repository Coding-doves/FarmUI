import React from 'react';

import Footer from '../component/footer';
import Nav from '../component/nav';
import Section2_3 from '../component/section2_3';
import Section6_7 from '../component/section6_7';
import Testimonial from '../component/testimonial';
import banner1 from '../assets/banner1.jpg';
import bg2 from '../assets/bg2.png';
import leaf from '../assets/leaf.png';
import section2 from '../assets/section2.jpg';
import arrow_up_right from '../assets/arrow_up_right.png';


const Home = () => {
    return (
        <div>
            <header className='banner' style={{ background: `url(${banner1}) no-repeat center/cover` }}>
                <Nav/>
            </header>

            <section className="section1">
                <div className="card_h1">
                    <div className="hvector"></div>
                    <div className="hvector"></div>

                    <div className="hbig-box">
                        <span className="icon-box">
                            <span></span>
                            <h2>Professional Farmers</h2>
                        </span>
                        <p>Nullam porta enim vel tellus commodo,
                            eget laoreet odio ultrices.</p>
                    </div>

                    <div className="hsmall-box">
                        <div className="inner4">
                            <img src={arrow_up_right} alt="pointer" />
                        </div>
                    </div>
                </div>

                <div className="card_h1">
                    <div className="hvector"></div>
                    <div className="hvector"></div>

                    <div className="hbig-box">
                        <span className="icon-box">
                            <span></span>
                            <h2>Fresh Vegetables</h2>
                        </span>
                        <p>Nullam porta enim vel tellus commodo,
                            eget laoreet odio ultrices.</p>
                    </div>

                    <div className="hsmall-box">
                        <div className="inner4">
                            <img src={arrow_up_right} alt="pointer" />
                        </div>
                    </div>
                </div>

                <div className="card_h1">
                    <div className="hvector"></div>
                    <div className="hvector"></div>

                    <div className="hbig-box">
                        <span className="icon-box">
                            <span></span>
                            <h2>Agriculture Products</h2>
                        </span>
                        <p>Nullam porta enim vel tellus commodo,
                            eget laoreet odio ultrices.</p>
                    </div>

                    <div className="hsmall-box">
                        <div className="inner4">
                            <img src={arrow_up_right} alt="pointer" />
                        </div>
                    </div>
                </div>

                <div className="card_h1">
                    <div className="hvector"></div>
                    <div className="hvector"></div>

                    <div className="hbig-box">
                        <span className="icon-box">
                            <span></span>
                            <h2>100% Guaranteed</h2>
                        </span>
                        <p>Nullam porta enim vel tellus commodo,
                            eget laoreet odio ultrices.</p>
                    </div>

                    <div className="hsmall-box">
                        <div className="inner4">
                            <img src={arrow_up_right} alt="pointer" />
                        </div>
                    </div>
                </div>
            </section>

            <Section2_3 />
            
            <section className="section4" style={{ backgroundSize: '99% 200px', background: `url(${bg2}) no-repeat bottom #5B8C51` }}>
                <span className='tiny'>
                    <img src={leaf} alt="leaf" />
                    <span>Our Services</span>
                </span>
                <span>
                    <h1>Best Agriculture Services</h1>
                    <span>
                        <button>{`<`}</button>
                        <button>{`>`}</button>
                    </span>
                </span>
                <div className='hdiv4'>
                    <div className="card_h4">
                        <div className="vectors4"></div>
                        <div className="vectors4"></div>

                        <div className="big-box4">
                            <img src={section2} alt="lady pluck's fruit" />

                            <div>
                                <span className="card4-tips">
                                    <small></small>
                                    <span>FERTILIZER</span>
                                </span>
                                <h3>Harvest Concepts</h3>
                                <p>Farming and animal husbandry and discuss
                                    with farmers and scientists.</p>
                            </div>
                        </div>

                        <div className="small-box4">
                            <div className="inner4">
                                <img src={arrow_up_right} alt="pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="card_h4">
                        <div className="vectors4"></div>
                        <div className="vectors4"></div>

                        <div className="big-box4">
                            <img src={section2} alt="lady pluck's fruit" />

                            <div>
                                <span className="card4-tips">
                                    <small></small>
                                    <span>FRUITS</span>
                                </span>
                                <h3>Farming Products</h3>
                                <p>Farming and animal husbandry and discuss
                                    with farmers and scientists.</p>
                            </div>
                        </div>

                        <div className="small-box4">
                            <div className="inner4">
                                <img src={arrow_up_right} alt="pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="card_h4">
                        <div className="vectors4"></div>
                        <div className="vectors4"></div>

                        <div className="big-box4">
                            <img src={section2} alt="lady pluck's fruit" />

                            <div>
                                <span className="card4-tips">
                                    <small></small>
                                    <span>Soil Fertilization</span>
                                </span>
                                <h3>Harvest Concepts</h3>
                                <p>Farming and animal husbandry and discuss
                                    with farmers and scientists.</p>
                            </div>
                        </div>

                        <div className="small-box4">
                            <div className="inner4">
                                <img src={arrow_up_right} alt="pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section12">
                <span className='tiny'>
                    <img src={leaf} alt="leaf" />
                    <span>Green Naturally</span>
                </span>

                <h1>Choose What's Perfect</h1>
                <h1>For Your Field</h1>

                <div className='s12-div'>
                    <div className='s12-inner-div'>
                        <div className="icon-box12">
                            <span></span>
                            <span>
                                <h3>Agriculture Products</h3>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </span>
                        </div>
                        <div className="icon-box12">
                            <span></span>
                            <span>
                                <h3>Quality Products</h3>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </span>
                        </div>
                    </div>

                    <div className="corn">
                        <img src={section2} alt="corn" />
                    </div>
                    
                    <div className='s12-inner-div'>
                        <div className="icon-box12">
                            <span></span>
                            <span>
                                <h3>Fresh Vegetables</h3>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </span>
                        </div>
                        <div className="icon-box12">
                            <span></span>
                            <span>
                                <h3>Pure & Organic</h3>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section5">
                <img src={banner1} alt="" />
                <img src={banner1} alt="" />
            </section>
                        
            <Testimonial />

            <section className="section7">
                <img src={banner1} alt="" />
                <img src={banner1} alt="" />
                <img src={banner1} alt="" />
                <img src={banner1} alt="" />
                <img src={banner1} alt="" />
                <img src={banner1} alt="" />
            </section>

            <section className="section8" style={{ background: `url(${banner1}) no-repeat left/cover` }}>
                <div className='s8'>
                    <span className='tiny'>
                        <img src={leaf} alt="leaf" />
                        <span>What we Do</span>
                    </span>
                    <h1>Healthy life with fresh <br />
                    products</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even.
                    </p>

                    <div>cricle work here</div>
                </div>
            </section>
            
            <Section6_7 />
            
            <section className="section11">
                <span className='tiny'>
                    <img src={leaf} alt="leaf" />
                    <span>Lastest Blog</span>
                </span>
                <div className='div1'>
                    <span>Lastest posts & articles</span>
                    <span>
                        <button> {`<`}</button>
                        <button> {`>`} </button>
                    </span>
                </div>

                <div className="hcards11">
                    <div className='card11'>
                        <div className='card-top'>
                            <span className='tiny2'>FOOD CROPS</span>
                            <span className="card-top-img">
                                <img src={section2} alt="" />
                            </span>
                            <span className="inner11">
                                <img src={arrow_up_right} alt="pointer" />
                            </span>
                        </div>
                        <div className="card-details">
                            <div className="info">
                                <span><img src={leaf} alt="icon" /> March 26 2024</span>
                                <span><img src={leaf} alt="icon" /> ADMIN</span>
                            </div>
                            <h3>What technology is used in veryical farming?</h3>
                        </div>
                    </div>
                    
                    <div className='card11'>
                        <div className='card-top'>
                            <span className='tiny2'>ORGANIC FARM</span>
                            <span className="card-top-img">
                                <img src={section2} alt="" />
                            </span>
                            <span className="inner11">
                                <img src={arrow_up_right} alt="pointer" />
                            </span>
                        </div>
                        <div className="card-details">
                            <div className="info">
                                <span><img src={leaf} alt="icon" /> March 26 2024</span>
                                <span><img src={leaf} alt="icon" /> ADMIN</span>
                            </div>
                            <h3>Which type of farming is more
                                prevalent today?</h3>
                        </div>
                    </div>
                    
                    <div className='card11'>
                        <div className='card-top'>
                            <span className='tiny2'>FARMING TIPS</span>
                            <span className="card-top-img">
                                <img src={section2} alt="" />
                            </span>
                            <span className="inner11">
                                <img src={arrow_up_right} alt="pointer" />
                            </span>
                        </div>
                        <div className="card-details">
                            <div className="info">
                                <span><img src={leaf} alt="icon" /> March 26 2024</span>
                                <span><img src={leaf} alt="icon" /> ADMIN</span>
                            </div>
                            <h3>The Farmers Sentiment Darkens
Hopes                           Fade</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default Home;
