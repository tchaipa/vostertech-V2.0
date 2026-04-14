import { Container, Row, Col, Button } from "react-bootstrap";
import "./Banner.css";
import AnimatedContent from "./AnimatedContent";
import { Grid } from "@mui/material";

export default function Banner() {
  return (
    <section className="banner-section container-fluid" id="home">
      <Container className="banner-content ">
        <Row className="banner-row  ">
          <Col className="banner-col">
            <div data-aos="zoom-in">
              <h1>We Can Help You Take Your Business To The Next Level.</h1>
              <p>
                We offer a free consultation so that we can understand your
                specific needs and provide you with the best possible advice.
                Contact us today to learn more about our services.
              </p>
              <Button className="banner-button" href="sign-up">
                Book An Appointment
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
}
