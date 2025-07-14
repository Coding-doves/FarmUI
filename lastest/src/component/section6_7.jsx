import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSunPlantWilt } from '@fortawesome/free-solid-svg-icons';

import about_banner2 from '../assets/about_banner2.png';
import leaf from '../assets/leaf.png';
import arrow_up_right from '../assets/arrow_up_right.png';

const Section6_7 = () => {
    return (
        <div>
            <section className="section6a">
                <span className='tiny'>
                    <img src={leaf} alt="leaf" />
                    <span>Our History</span>
                </span>

                <div className='div1'>
                    <div>
                        <h1>Farming have been since <br/>
                        1866</h1>
                    </div>
                    <div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even.</p>
                    </div>
                </div>

                <div className='div2'>
                    <div>
                        <span>1987</span>
                        <hr />
                        <small></small>
                        <span>
                            <h5>Start of Agriculture</h5>
                            <p>Consequatur magni Corrupti ut minus!
                            Iusto eos consectetur similique minus
                            culpa odio temporibus.</p>
                        </span>
                    </div>
                    <div>
                        <span>1995</span>
                        <hr />
                        <small></small>
                        <span>
                            <h5>Start of Agriculture</h5>
                            <p>Consequatur magni Corrupti ut minus!
                            Iusto eos consectetur similique minus
                            culpa odio temporibus.</p>
                        </span>
                    </div>
                    <div>
                        <span>2000</span>
                        <hr />
                        <small></small>
                        <span>
                            <h5>Start of Agriculture</h5>
                            <p>Consequatur magni Corrupti ut minus!
                            Iusto eos consectetur similique minus
                            culpa odio temporibus.</p>
                        </span>
                    </div>
                    <div>
                        <span>1910</span>
                        <hr />
                        <small></small>
                        <span>
                            <h5>Start of Agriculture</h5>
                            <p>Consequatur magni Corrupti ut minus!
                            Iusto eos consectetur similique minus
                            culpa odio temporibus.</p>
                        </span>
                    </div>
                </div>
            </section>

            <section className="section7a" style={{ background: `url(${about_banner2}) no-repeat bottom` }}>
                <div>
                <span>
                    <FontAwesomeIcon icon={faSunPlantWilt} size="2x" />
                </span>
                <h3>We’re popular leader in <br/>
                agriculture market globally</h3>
                </div>

                <div>
                <span>Discover More</span>
                <img src={arrow_up_right} alt="pointer" />
                </div>
            </section>
        </div>
    );
}

export default Section6_7;