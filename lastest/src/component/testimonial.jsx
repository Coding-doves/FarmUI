import leaf from '../assets/leaf.png';
import arrow_up_right from '../assets/arrow_up_right.png';
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
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
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
                        <span className='image'><img src={section2} alt="lady pluck's fruit" /></span>
                        <span className='details'>
                            <h3>Henry Carol</h3>
                            <p>CEO & Founder</p>
                        </span>
                    </div>
                    <div className='inner'>
                        <span><img src={arrow_up_right} alt="" /></span>
                    </div>
                    <div className="vectors v1"></div>
                    <div className="vectors v2"></div>
                </div>

                <div className="card">
                    <div className="stars">
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
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
                        <span className='image'><img src={section2} alt="lady pluck's fruit" /></span>
                        <span className='details'>
                            <h3>Henry Carol</h3>
                            <p>CEO & Founder</p>
                        </span>
                    </div>
                    <div className='inner'>
                        <span><img src={arrow_up_right} alt="" /></span>
                    </div>
                    <div className="vectors v1"></div>
                    <div className="vectors v2"></div>
                </div>

                <div className="card">
                    <div className="stars">
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
                        <img src={leaf} alt="star" />
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
                        <span className='image'><img src={section2} alt="lady pluck's fruit" /></span>
                        <span className='details'>
                            <h3>Henry Carol</h3>
                            <p>CEO & Founder</p>
                        </span>
                    </div>
                    <div className='inner'>
                        <span><img src={arrow_up_right} alt="" /></span>
                    </div>
                    <div className="vectors v1"></div>
                    <div className="vectors v2"></div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
