import { Col, Image, Row, Button } from "react-bootstrap";
import "./AboutUs.css";
import { Grid } from "@mui/material";
import aboutus from "./assets/aboutus1.png";

function AboutUs() {
  return (
    <div className="about-us-section container-fluid">
      <Grid className="aboutus-grid">
        <Row className="aboutus-row">
          <Col className="aboutus-col">
            <Image className="about-us-image" src={aboutus} fluid></Image>
          </Col>
          <Col className="aboutus-col">
            <h2 className="about-us-h4">About Us</h2>
            <p className="about-us-p">
              Welcome to Vostertech Consultancy, your trusted partner in
              business registration and compliance. We are a team of experienced
              professionals dedicated to helping you navigate the complex world
              of business registration and compliance.
              {/* <br />
              Our mission is to provide comprehensive, efficient, and
              cost-effective solutions tailored to your specific needs.
              <br />
              Whether you are starting a new business, expanding your existing
              operations, or looking to streamline your compliance processes, we
              are here to support you every step of the way. */}
            </p>
            <Button className="about-us-button" href="">
              Explore More
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default AboutUs;
