import { Col, Image, Row } from "react-bootstrap";
import "./AboutUs.css";
import aboutus from "./assets/aboutus1.png";

function AboutUs() {
  return (
    <div className="about-us-section container-fluid">
        
<Row className="about-us-row container-fluid">
    <Col className="about-us-col container-fluid" size={6}>
    <h1 className="about-us-h1">About Us</h1>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a libero. Phasellus vehicula placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique. In augue diam, pellentesque nec pulvinar in, sagittis ac nulla. Sed eu lectus vitae justo vehicula viverra. Aenean vel urna vitae massa consequat blandit. Quisque sodales sapien vitae malesuada ultricies. Curabitur pretium ipsum non nunc facilisis semper.</span>
    </Col>
    <Col className="about-us-col container-fluid" size={6}>
    <Image className="about-us-image" src={aboutus} ></Image>
    </Col>
</Row>
    </div>
  );
}

export default AboutUs;
