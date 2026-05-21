import { Button } from "react-bootstrap";
import "./Works.css";

function Works() {
  return (
    <div className="works-section">
      <span class="tag">The Process</span>
      <h2 class="section-title">How It Works</h2>
      <div class="divider mx-auto"></div>
      <p class="section-sub">
        Get your company registered in three simple steps — fast, affordable, and fully compliant.
      </p>
      <div className="works-row row ">
        <div className="works-col col">
          <div className="works-number">1</div>
          <h4>Submit your details</h4>
          <span>
            Fill in our simple online form with your company details and chosen
            structure.
          </span>
        </div>
        <div className="works-col col">
          <div className="works-number">2</div>
          <h4>We review your application</h4>
          <span>
            Our team will carefully review your submission and provide feedback.
          </span>
        </div>
        <div className="works-col col">
          <div className="works-number">3</div>
          <h4>Get your company certificate</h4>
          <span>
            Receive your registration certificate and all documents within 48
            hours.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Works;
