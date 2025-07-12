
import envelope from '../assets/envelope.png'
import footerBg from '../assets/footer-background.png'
import phonecall from '../assets/phone-call.png'
import facebook from '../assets/facebook.png'
import x from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <footer style={{ backgroundSize: '99% 200px', background: `url(${footerBg}) no-repeat bottom` }}>
      <div className="top">
        <div>
          <ul>
            <li>FARMERS</li>
            <li>ORGANIC</li>
            <li>FOODS</li>
            <li>PRODUCT</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><span><img src={phonecall} alt="phonecall" /></span> + 1(212) 255-511</li>
            <li><span><img src={envelope} alt="envelope" /></span> noreply@pbminfotech.com</li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="one">Logo</div>
          <div className="two">
            <div>
              <p>Mauris sed molestie sem. Sed vel vestibulum</p>
              <p>elit, non accumsan risus. In vitae sapien viverra</p>
              <p>est Duo ei ullum inani senserit.</p>
            </div>
            <div>
              <span><img src={facebook} alt="facebook" /></span>
              <span><img src={x} alt="x" /></span>
              <span><img src={linkedin} alt="linkedin" /></span>
              <span><img src={instagram} alt="instagram" /></span>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="one">
            <p>Professional & modern, a theme designed to help</p>
            <p>your business stand out from the rest.</p>
          </div>
          <div className="two">
            <div>
              <h4>Useful Link</h4>
              <p>Company</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div>
              <h4>Working Time</h4>
              <p>Mon - Fri: 9.00am - 5.00pm</p>
              <p>Saturday: 10.00am - 6.00pm</p>
              <p>Sunday Closed</p>
            </div>
            <div>
              <h4>Our address</h4>
              <address>
                <p>Old Westbury 256, New York</p>
                <p>11201, United States</p>
              </address>
            </div>
          </div>
          <div className="three">
            <span>Terms & Conditions | Privacy Policy</span>
            <span>Copyright © 2024 Agrimo, All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
