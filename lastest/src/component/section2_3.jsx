import section2 from '../assets/section2.jpg';
import leaf from '../assets/leaf.png';
import truck from '../assets/truck.png';
import fence from '../assets/fence.png';


const Section2_3 = () => {
    return (
        <div>
            <section className="section2">
                <div className="left">
                    <div className="vectors v1"></div>
                    <div className="vectors v2"></div>

                    <div className="big-box">
                        <img src={section2} alt="lady pluck's fruit" />
                    </div>

                    <div className="small-box">
                        <div className="inner">
                            <div>
                                <span>*</span>
                                <span><h1>435</h1></span>
                                <span>+</span>
                            </div>
                            <div><p>Growth Tons' of Harvest</p></div>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="one">
                        <span className='tiny'>
                            <img src={leaf} alt="leaf" />
                            <span>who we are</span>
                        </span>
                        
                        <div className="text">
                            <p>
                                <span>Currently we are growing</span>
                                <span>and selling organic food</span>
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration in some form, by injected humour, or randomised words
                                which don't look even.
                            </p>
                        </div>
                    </div>
                    <div className="two">
                        <div>
                            <span><img src={fence} alt="fence" /></span>
                            <div>
                                <h4>Eco Farms Worldwide</h4>
                                <p>There are many variations of pass</p>
                                <p>ages of lorem ipsum available</p>
                                <p>majority have suffered.</p>
                            </div>
                        </div>
                        <div>
                            <span><img src={truck} alt="truck" /></span>
                            <div>
                                <h4>Special Equipment</h4>
                                <p>There are many variations of pass</p>
                                <p>ages of lorem ipsum available</p>
                                <p>majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3" >
                <div className="one">* <span>Agriculture</span></div>
                <div className="two">* <span>Farming</span></div>
                <div className="three">* <span>Organic</span></div>
                <div className="four">* <span>Vegetables</span></div>
            </section>
        </div>
    )
}

export default Section2_3;