import { Image } from "react-bootstrap";
import "./Footer.css";
import logo from "./assets/vlogo.png";

function Footer() {
  return (
    <div className="footer-section ">
      <div className="container ">
        <div className="footer ">
          <div className="newsletter">
            <div className="newsletter-left">
              <h2>Subscribe to our</h2>
              <h1>Newsletter</h1>
            </div>
            <div className="newsletter-right">
              <div className="newsletter-input">
                <input type="text" placeholder="Enter Your Email Address" />
                <button>Submit</button>
              </div>
            </div>
          </div>

          <div className="footer-content">
            <div className="footer-main">
              <Image src={logo} className="footer-logo"></Image>

              <div className="social-links">
                <a href="#">
                  <i className="ph-fill ph-instagram-logo"></i>
                </a>
                <a href="#">
                  <i className="ph-fill ph-twitter-logo"></i>
                </a>
                <a href="#">
                  <i className="ph-fill ph-tiktok-logo"></i>
                </a>
                <a href="#">
                  <i className="ph-fill ph-facebook-logo"></i>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="links">
            <p>Information</p>
            <a href="" className="link">
              Our Company
            </a>
            <a href="" className="link">
              About Us
            </a>
            <a href="" className="link">
              Blog
            </a>
          </div>
          <div className="links">
            <p>Helpful Links</p>
            <a href="" className="link">
              Services
            </a>
            <a href="" className="link">
              Support
            </a>
            <a href="" className="link">
              Terms & Conditions
            </a>
          </div>
          <div className="links">
            <p>Navigations</p>
            <a href="" className="link">
              Home
            </a>
            <a href="" className="link">
              About Us
            </a>
            <a href="" className="link">
              Contact
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
