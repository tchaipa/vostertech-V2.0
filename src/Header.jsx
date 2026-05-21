import "./Header.css";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import image from "./assets/vlogo.png";



function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <img className="logo" src={image} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto nav-list">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="services"
              className={
                activeLink === "services" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("services")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="faq"
              className={
                activeLink === "faq" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("faq")}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="contacts"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
            {/* <Button  className="header-button" href="log-in">
              Log In
            </Button> */}
              {/* <a className="btn header-btn" href="log-in" onclick="go('log-in')">
              Log In
            </a> */}
            <Nav.Link
              href="log-in"
              className={
                activeLink === "login" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("log-in")}
            >
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
