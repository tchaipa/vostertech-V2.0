import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container className="banner-text">
        <Row className="align-items-center">
          <Col>
            <h1>We Can Help You Take Your Business To The Next Level.</h1>
            <p>
              We offer a free consultation so that we can understand your
              specific needs and provide you with the best possible advice.
              Contact us today to learn more about our services. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
