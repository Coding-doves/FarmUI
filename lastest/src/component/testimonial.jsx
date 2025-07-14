import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuoteLeftAlt, faStar } from '@fortawesome/free-solid-svg-icons';

import leaf from '../assets/leaf.png';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import section2 from '../assets/section2.jpg';

const Testimonial = () => {
    return (
        <section className="section8a">
            <span className='tiny'>
                <img src={leaf} alt="leaf" />
                <span>Testimonial</span>
            </span>
            <div className='div1'>
                <span>What our customers say</span>
                <span>
                    <button> {`<`}</button>
                    <button> {`>`} </button>
                </span>
            </div>

            <div className='cards2'>
                <div className="card">
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                        <p>
                            “I would recommend practitioners at
                            this center to everyone! They are great
                            to work with and are excellent trainers.
                            Thank you all!”
                        </p>
                    </div>
                    <div>
                        <span className='image'><img src={person2} alt="person" /></span>
                        <span className='details'>
                            <h3>Martin Baliey</h3>
                            <p>SUPERVISOR</p>
                        </span>
                    </div>
                    <div className='inner'>
                        <span><FontAwesomeIcon icon={faQuoteLeftAlt} size="2x" /></span>
                    </div>
                    <div className="vectors v1"></div>
                    <div className="vectors v2"></div>
                </div>

                <div className="card">
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                        <p>
                            “I would recommend practitioners at
                            this center to everyone! They are great
                            to work with and are excellent trainers.
                            Thank you all!”
                        </p>
                    </div>
                    <div>
                        <span className='image'><img src={person1} alt="" /></span>
                        <span className='details'>
                            <h3>Emma Greed</h3>
                            <p>CUSTOMER</p>
                        </span>
                    </div>
                    <div className='inner'>
                        <span><FontAwesomeIcon icon={faQuoteLeftAlt} size="2x" /></span>
                    </div>
                    <div className="vectors v1"></div>
                    <div className="vectors v2"></div>
                </div>

                <div className="card">
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                        <p>
                            “I would recommend practitioners at
                            this center to everyone! They are great
                            to work with and are excellent trainers.
                            Thank you all!”
                        </p>
                    </div>
                    <div>
                        <span className='image'><img src={person3} alt="lady pluck's fruit" /></span>
                        <span className='details'>
                            <h3>Henry Carol</h3>
                            <p>CEO & Founder</p>
                        </span>
                    </div>
                    <div className='inner'>
                        <span><FontAwesomeIcon icon={faQuoteLeftAlt} size="2x" /></span>
                    </div>
                    <div className="vectors v1"></div>
                    <div className="vectors v2"></div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
