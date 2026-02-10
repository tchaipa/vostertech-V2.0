import { Col, Image, Row, Button } from "react-bootstrap";
import "./AboutUs.css";
import { Grid } from "@mui/material";
import aboutus from "./assets/aboutus1.png";

function AboutUs() {
  return (
    <div className="about-us-section">
      <Grid className="aboutus-grid">
        <Row className="aboutus-row">
          <Col className="aboutus-col">
            <Image className="about-us-image" src={aboutus}></Image>
          </Col>
          <Col className="aboutus-col">
            <h1 className="about-us-h1">About Us</h1>
            <p>
              We are a travel agency company with our main objective of offering
              travel adventures to everyone. Our operations mainly target
              Zimbabwe tourism destinations.
            </p>
            <Button className="about-us-button" href="">
              Read More
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default AboutUs;
