import { NavLink } from 'react-router-dom';

import phonecall from '../assets/phone-call.png';
import search from '../assets/search.png';
import arrow_up_right from '../assets/arrow_up_right.png';


function Nav() {

  return (
    <>
        <nav className='nav'>
            <div className='left-nav'>
                <ul>
                    <li><NavLink to="/" className="nav-Link">HOME</NavLink></li>
                    <li><NavLink to="/pages" className="nav-Link">PAGES</NavLink></li>
                    <li><NavLink to="/services" className="nav-Link">SERVICES</NavLink></li>
                    <li><NavLink to="/portfolio" className="nav-Link">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/blog" className="nav-Link">BLOG</NavLink></li>
                    <li><NavLink to="/about" className="nav-Link">ABOUT</NavLink></li>
                    <li><NavLink to="/contact" className="nav-Link">CONTACT US</NavLink></li>
                </ul>
            </div>
            <div className='right-nav'>
                <ul>
                    <li className='call-us'>
                        <img src={phonecall} alt="phonecall" />
                        <small>
                            Call us Now<br/>
                            + 1(212) 255-511
                        </small>
                    </li>
                    <li className='search'>
                        <span><img src={search} alt="search" /></span> noreply@pbminfotech.com
                    </li>
                </ul>
            </div>
        </nav>
        <div className="small-box">
            <div className="inner">
                <span>Get in Touch </span>
                <span> <img src={arrow_up_right} alt="pointer" /></span>
            </div>
        </div>
        <div className="vectors v1"></div>
        <div className="vectors v2"></div>
    </>
  );
}

export default Nav
