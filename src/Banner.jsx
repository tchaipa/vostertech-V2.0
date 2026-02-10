import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import AnimatedContent from "./AnimatedContent";

// import image from "./assets/bannerr.jpg";

export default function Banner() {
  return (
    <section className="banner-section " id="home">
      <Container className="banner-content ">
        <Row className="banner-row  ">
          <Col className="banner-col" size={6}>
            <AnimatedContent
              distance={300}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.5}
            >
              <div data-aos="zoom-in">
                <h1>We Can Help You Take Your Business To The Next Level.</h1>
              </div>
            </AnimatedContent>
            <p>
              We offer a free consultation so that we can understand your
              specific needs and provide you with the best possible advice.
              Contact us today to learn more about our services.
            </p>
          </Col>
          <Col size={6}></Col>
        </Row>
      </Container>
    </section>
  );
}
