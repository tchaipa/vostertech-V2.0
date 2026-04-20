import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./assets/vlogo.png";

function Footer() {
  return (
    <div className="footer-section container-fluid">
      <footer>
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">
              <img className="logo" src={image} />
            </div>
            <p>
              Your trusted partner in business registration and compliance. We
              help businesses across Zimbabwe and beyond get started the right
              way.
            </p>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Company Registration</a>
              </li>
              <li>
                <a href="#">Tax Advisory</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#" onclick="showPage('about')">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">📍 Harare, Zimbabwe</a>
              </li>
              <li>
                <a href="#">📞 +263 77 000 0000</a>
              </li>
              <li>
                <a href="#" onclick="showPage('contact')">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 VosterTech. All rights reserved.</span>
          <span>Made with ♦ in Zimbabwe</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
