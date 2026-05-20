import "./Testimonials.css";
import Avatar from "@mui/material/Avatar";
// import john from "./assets/20.jpeg";
// import jane from "./assets/21.jpeg";
// import james from "./assets/22.jpeg";
import { Button } from "react-bootstrap";
import { FaStar, FaHotel } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="testimonials-section">
      {/* <h2 className="testimonials-title">Testimonials</h2>
      <p>Here is what our clients had to say about us</p> */}
      {/* <div className="testimonials-content container-fluid">
        <div className="testimonials-card card">
          <p>Vostertech offers exceptional services They simply are the best</p>
          <Avatar alt="John Doe" src={john}></Avatar>
          <h4>John Doe</h4>
          <div>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
          </div>
        </div>
        <div className="testimonials-card card">
          <p>Vostertech offers exceptional services They simply are the best</p>
          <Avatar alt="Jane Doe" src={jane}></Avatar>
          <h4>Jane Doe</h4>
          <div>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
          </div>
        </div>
        <div className="testimonials-card card">
          <p>Vostertech offers exceptional services They simply are the best</p>
          <Avatar alt="James Doe" src={james}></Avatar>
          <h4>James Doe</h4>
          <div>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
            <FaStar className="fa-star"></FaStar>
          </div>
        </div>
      </div>
      <br />
      <Button className="testimonials-button" href="not-found">
        Read More
      </Button> */}
      <section class="section testimonials-bg">
        <div class="section-inner">
          <div class="section-header center">
            <span class="section-tag">Client Feedback</span>
            <h2 class="section-title-test">What Our Clients Say</h2>
            <div class="divider center"></div>
            <p class="section-sub">
              Here is what our clients have to say about us.
            </p>
          </div>
          <div class="testimonials-grid">
            <div class="testi-card">
              <div class="stars">★★★★★</div>
              <p>
                "VosterTech offers exceptional services. They are simply the
                best consultancy I've worked with. My company was registered in
                under 24 hours."
              </p>
              <div class="testi-author">
                <div class="avatar">JD</div>
                <div>
                  <h4>John Doe</h4>
                  <span>CEO, Alpha Ventures</span>
                </div>
              </div>
            </div>
            <div class="testi-card">
              <div class="stars">★★★★★</div>
              <p>
                "The team handled everything seamlessly. From tax advice to
                company formation — professional, responsive, and deeply
                knowledgeable."
              </p>
              <div class="testi-author">
                <div class="avatar">JN</div>
                <div>
                  <h4>Jane Ndlovu</h4>
                  <span>Founder, Blossom Brands</span>
                </div>
              </div>
            </div>
            <div class="testi-card">
              <div class="stars">★★★★★</div>
              <p>
                "I was impressed by how quickly they turned around my
                registration. Highly professional. I recommend VosterTech to any
                entrepreneur."
              </p>
              <div class="testi-author">
                <div class="avatar">JM</div>
                <div>
                  <h4>James Moyo</h4>
                  <span>Director, Peak Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
