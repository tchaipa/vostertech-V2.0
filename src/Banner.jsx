import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import AnimatedContent from "./AnimatedContent";
import { Grid } from "@mui/material";

export default function Banner() {
  return (
    <Grid container>
      <Grid>
        <section className="banner-section " id="home">
          <Container className="banner-content ">
            <Row className="banner-row  ">
              <Col className="banner-col" size={6}>
                <div data-aos="zoom-in">
                  <h1>We Can Help You Take Your Business To The Next Level.</h1>
                  <p>
                    We offer a free consultation so that we can understand your
                    specific needs and provide you with the best possible
                    advice. Contact us today to learn more about our services.
                  </p>
                </div>
              </Col>
              <Col size={6}></Col>
            </Row>
          </Container>
        </section>
      </Grid>
    </Grid>
  );
}
