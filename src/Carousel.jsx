import Carousel from "react-bootstrap/Carousel";
import { Card, CarouselItem, Image } from "react-bootstrap";
import "./Carousel.css";

function Carousell() {
  return (
    <Carousel>
      <CarouselItem className="carousel-item">
        <Card className="carousel-card">1</Card>
        {/* <Card className="carousel-card">1</Card>
        <Card className="carousel-card">1</Card> */}
      </CarouselItem>
      <CarouselItem className="carousel-item">
        <Card className="carousel-card">2</Card>
      </CarouselItem>
      <CarouselItem className="carousel-item">
        <Card className="carousel-card">3</Card>
      </CarouselItem>
    </Carousel>
  );
}

export default Carousell;
