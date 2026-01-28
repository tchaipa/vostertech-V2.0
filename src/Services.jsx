import { Box, Card, Grid } from "@mui/material";
import "./Services.css";
import { Row } from "react-bootstrap";
// import { Col, Row } from "react-bootstrap";

function Services() {
  return (
    <div className="services-section container-fluid">
        <h1 className="services-title container-fluid">Our Services</h1>
     <p>Vostertech Consultancy is a leading provider of business registration services in Zimbabwe.
     We offer a wide range of services including:</p>
    
        <Box className="services-box container-fluid">
            <Grid className="services-grid container-fluid">
                <Card className="services-card container-fluid">1</Card>
                <Card className="services-card container-fluid">2</Card>
                <Card className="services-card container-fluid">3</Card>
                <Card className="services-card container-fluid">4</Card>
                
            </Grid>
            <Grid className="services-grid container-fluid">
            <Card className="services-card container-fluid">1</Card>
                <Card className="services-card container-fluid">2</Card>
                <Card className="services-card container-fluid">3</Card>
                <Card className="services-card container-fluid">4</Card>
            </Grid>
        </Box>
    
    </div>
  );
}

export default Services;
