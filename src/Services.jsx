import { Box, Card, Grid, Icon } from "@mui/material";
import "./Services.css";
import { Image, Row } from "react-bootstrap";
import reg from "./assets/registration.png";
import tax from "./assets/tax.png";
import comp from "./assets/compliance.png";
import fin from "./assets/financial.png";
import social from "./assets/secretary.png";
import buscon from "./assets/buscon.png";
import legal from "./assets/public.svg";
import web from "./assets/private.svg";
import AnimatedContent from "./AnimatedContent";

// import { Col, Row } from "react-bootstrap";

function Services() {
  return (
    <div className="services-section ">
      <h1 className="services-title ">Our Services</h1>
      <p>
        Vostertech Consultancy is a leading provider of business registration
        services in Zimbabwe. We offer a wide range of services including:
      </p>

      <Box className="services-box ">
        <Grid className="services-grid ">
          <Card className="services-card ">
            <Image className="services-icons" src={reg}></Image>
            <h3>Company Registration</h3>
          </Card>
          <Card className="services-card ">
            <Image className="services-icons" src={buscon}></Image>

            <h3>Business Consultations</h3>
          </Card>
          <Card className="services-card ">
            <Image className="services-icons" src={tax}></Image>
            <h3>Tax Advisory</h3>
          </Card>
          <Card className="services-card ">
            <Image className="services-icons" src={fin}></Image>
            <h3> Financial Advisory</h3>
          </Card>
        </Grid>
        <Grid className="services-grid ">
          <Card className="services-card ">
            <Image className="services-icons" src={comp}></Image>
            <h3>Compliance Services</h3>
          </Card>
          <Card className="services-card ">
            <Image className="services-icons" src={legal}></Image>
            <h3>Business Legal Services</h3>
          </Card>
          <Card className="services-card ">
            <Image className="services-icons" src={web}></Image>
            <h3> Website Development</h3>
          </Card>
          <Card className="services-card">
            <Image className="services-icons" src={social}></Image>
            <h3> Social Media Management</h3>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}

export default Services;
