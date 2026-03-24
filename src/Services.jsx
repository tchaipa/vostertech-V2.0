import { Box, Card, Grid, Icon } from "@mui/material";
import "./Services.css";
import { FaBus, FaHotel } from "react-icons/fa";

import AnimatedContent from "./AnimatedContent";

function Services() {
  return (
    <div className="services-section container-fluid">
      <h2 className="services-title ">Services</h2>
      <p className="services-description">
        Vostertech Consultancy is a leading provider of business registration
        services in Zimbabwe. We offer a wide range of services including:
      </p>

      <Box className="services-box ">
        <Grid className="services-grid ">
          <Card className="services-card ">
            <h4>Business Consultations</h4>
            <p>
              We provide you with consultations on your business with how to
              move forward be it a startup or a large organization.
            </p>
          </Card>
          <Card className="services-card ">
            <h4>Tax Advisory</h4>
            <p>We offer Tax Advisory services</p>
          </Card>
          <Card className="services-card ">
            <h4> Financial Advisory</h4>
            <p>We also offer Financial Advisory services.</p>
          </Card>
        </Grid>
        <Grid className="services-grid ">
          <Card className="services-card ">
            <h4>Compliance Services</h4>
            <p>
              We help your company stay compliant to all the rules and laws that
              govern companies.
            </p>
          </Card>
          <Card className="services-card ">
            <h4>Business Legal Services</h4>
            <p>
              We offer business legal advice with professionals on standy 24/7
              to help your business grow
            </p>
          </Card>
          <Card className="services-card ">
            <h4> Website Development</h4>
            <p>
              We offer website design and development services to help put your
              company on the digital map.
            </p>
          </Card>
        </Grid>
        <Grid className="services-grid ">
          <Card className="services-card ">
            <h4> Website Development</h4>
            <p>
              We offer website design and development services to help put your
              company on the digital map.
            </p>
          </Card>
          <Card className="services-card">
            <h4> Social Media Management</h4>
            <p>We help you manage your company brand socially</p>
          </Card>
          <Card className="services-card ">
            <h4>Company Registration</h4>
            <p>
              We offer company registration services for all kinds of business
              and all industries
            </p>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}

export default Services;
