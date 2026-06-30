import { Col, Image, Row, Button } from "react-bootstrap";
import "./AboutUs.css";
import { Grid } from "@mui/material";
// import aboutus from "./assets/aboutus1.png";

function AboutUs() {
  return (
    <div className="about-us-section container-fluid">
      <section class="section">
        <div class="section-inner about-split">
          <div class="about-img">
            <div class="about-img-box">
              <div class="emoji-bg">🤝</div>
              <div class="img-label">PROFESSIONAL PARTNERS</div>
            </div>
            <div class="about-badge">
              <span class="big">5+</span>
              <span class="sm">Years of Excellence</span>
            </div>
          </div>
          <div class="about-text">
            <span class="tag">Who We Are</span>
            <h2>Your Trusted Partner in Business Registration & Compliance</h2>
            <div class="divider"></div>
            <p>
              Welcome to VosterTech Consultancy — a team of experienced
              professionals dedicated to helping you navigate the complex world
              of business registration and compliance.
            </p>
            <p>
              From startups to established enterprises, we provide tailored
              solutions that meet your specific needs — affordably, efficiently,
              and legally compliant.
            </p>
            <ul class="check-list">
              <li>
                <span class="chk">✓</span> Fast & fully compliant company
                registration
              </li>
              <li>
                <span class="chk">✓</span> Expert financial and tax advisory
              </li>
              <li>
                <span class="chk">✓</span> Dedicated compliance and legal
                support
              </li>
              <li>
                <span class="chk">✓</span> End-to-end digital business solutions
              </li>
            </ul>
            <a class="btn btn-gold" href="team" onclick="go('team')">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
