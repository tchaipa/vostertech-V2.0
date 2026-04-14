import "./Testimonials.css";
import Avatar from "@mui/material/Avatar";
import john from "./assets/20.jpeg";
import jane from "./assets/21.jpeg";
import james from "./assets/22.jpeg";
import { Button } from "react-bootstrap";
import { FaStar, FaHotel } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <p>Here is what our clients had to say about us</p>
      <div className="testimonials-content container-fluid">
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
      </Button>
    </div>
  );
}

export default Testimonials;
