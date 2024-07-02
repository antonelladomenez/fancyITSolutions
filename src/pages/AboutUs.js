import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../components/Menu";
import "../styles/aboutUs.css";
import Footer from "../components/Footer";
import team1 from "../images/Marlene Domenez copia.jpg";
import service2 from "../images/AntonellaPhoto.jpg";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <MyNavbar />
      <Container fluid className="aboutUs p-0 overflow-hidden">
        <Row className="headerGeneral d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <h2 className="titleService">{t('who_we_are')}</h2>
            </Col>
          </Row>
        </Row>
        <TextAnimation />
        <Row className="text-center aboutUsSection">
          <Col>
            <h2 className="section-title">{t('our_journey')}</h2>
            <p className="textAbout mx-5">
              {t('about_us_text')}
            </p>
            <Button variant="outline-secondary buttonInfoAbout">
              {t('explore_services')}
            </Button>
            <Button variant="outline-secondary buttonInfoAbout">
              {t('contact_us')}
            </Button>
          </Col>
        </Row>
        <Row className="my-5 ">
          <Col xs={12} className="my-4 service-section">
            <Card>
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img src={team1} alt="Diseño Web" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t('marlene_title')}</Card.Title>
                    <h6 className="subtitlesAboutUs text-center text-sm-start">
                      {t('marlene_subtitle')}
                    </h6>
                    <Card.Text>
                      {t('marlene_text')}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <div className="horizontal-line my-4 mx-auto"></div>
          <Col xs={12} className="mb-4 service-section">
            <Card>
              <Row className="no-gutters">
                <Col md={8}>
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t('antonella_title')}</Card.Title>
                    <h6 className="subtitlesAboutUs text-center text-sm-start">
                      {t('antonella_subtitle')}
                    </h6>
                    <Card.Text>
                      {t('antonella_text')}
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={4}>
                  <Card.Img src={service2} alt="Desarrollo Web" />
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

export default AboutUs;
