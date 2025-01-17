import React from "react";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/menu.css";
import "animate.css";

const MyNavbar = () => {
  const { t } = useTranslation();

  return (
    <div className="menu">
      <Row className="header-row">
        <Col>
          <div className="header-text">{t("smart_web_solutions")}</div>
        </Col>
      </Row>
      <Navbar collapseOnSelect expand="lg" className="navbar-custom py-4">
        <Container>
          <Navbar.Brand href="/">
            <div>
              <h2 className="logo-title" style={{ fontFamily: "TAN Pearl" }}>
                Fancy IT
              </h2>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center nav-links  animate__animated animate__slideInUp">
              <Nav.Link href="/">{t("home")}</Nav.Link>
              <Nav.Link href="/about-us">{t("about_us")}</Nav.Link>
              <Nav.Link href="/services">{t("services")}</Nav.Link>
              <Nav.Link href="/projects">{t("projects")}</Nav.Link>
              <Nav className="nav-button-link">
                <Button href="/contact" className="custom-button mx-0">
                  {t("contact_us")}
                </Button>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
