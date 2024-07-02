import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import MyNavbar from "../components/Menu";
import "../styles/Services.css";
import Footer from "../components/Footer";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <MyNavbar />
      <Container fluid className="service p-0 overflow-hidden">
        <div className="headerGeneral d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <h2 className="titleService">{t('header_our_services')}</h2>
            </Col>
          </Row>
        </div>
        <TextAnimation />
        <Row className="align-items-center container-black">
          <Col>
            <h3 className="textIdeas">
              {t('description_unique_websites')}
            </h3>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} className="my-4 service-section">
            <Card>
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img src={service1} alt="Web Design" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t('service_web_design')}</Card.Title>
                    <Card.Text>
                      {t('service_web_design_description')}
                    </Card.Text>
                    <Button href="/contact" variant="outline-secondary buttonInfo">
                      {t('button_information')}
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <div className="horizontal-line my-4 mx-auto"></div>
          <Col xs={12} className="mb-4 service-section">
            <Card>
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img src={service2} alt="Web Development" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t('service_web_development')}</Card.Title>
                    <Card.Text>
                      {t('service_web_development_description')}
                    </Card.Text>
                    <Button href="/contact" variant="outline-secondary buttonInfo">
                      {t('button_information')}
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <div className="horizontal-line my-4 mx-auto"></div>
          <Col xs={12} className="mb-4 service-section">
            <Card>
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img src={service3} alt="Branding" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t('service_branding')}</Card.Title>
                    <Card.Text>
                      {t('service_branding_description')}
                    </Card.Text>
                    <Button href="/contact" variant="outline-secondary buttonInfo">
                      {t('button_information')}
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
