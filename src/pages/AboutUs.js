import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../components/Menu";
import "../styles/aboutUs.css";
import Footer from "../components/Footer";
import team1 from "../images/Marlene Domenez copia.jpg";
import service2 from "../images/AntonellaPhoto.jpg";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";
import "animate.css";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { t } = useTranslation();

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: button1Ref, inView: button1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: button2Ref, inView: button2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
  const { ref: antonellaImgRef, inView: antonellaImgInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <MyNavbar />
      <Container fluid className="aboutUs p-0 overflow-hidden">
        <Row className="headerGeneral d-flex justify-content-center align-items-center">
          <Row>
            <Col className="animate__slideInFromRight">
              <h2 className="titleService">{t("who_we_are")}</h2>
            </Col>
          </Row>
        </Row>
        <TextAnimation />
        <Row className="text-center aboutUsSection">
          <Col>
            <h2
              ref={titleRef}
              className={`section-title ${
                titleInView ? "animate__slideInFromRight" : ""
              }`}
            >
              {t("our_journey")}
            </h2>
            <p className="textAbout mx-5">{t("about_us_text")}</p>
            <Button
              ref={button1Ref}
              href="/services"
              variant="outline-secondary"
              className={`buttonInfoAbout ${
                button1InView ? "animate__slideInFromRight" : ""
              }`}
            >
              {t("explore_services")}
            </Button>
            <Button
              ref={button2Ref}
              href="/contact"
              variant="outline-secondary"
              className={`buttonInfoAbout ${
                button2InView ? "animate__slideInFromRight" : ""
              }`}
            >
              {t("contact_us")}
            </Button>
          </Col>
        </Row>

        <Row className="mb-4 align-items-center aboutUs-row">
          <Col xs={12} className="my-4 aboutUs-section">
            <Card className="aboutUsCard">
              <Row className="no-gutters">
                <Col
                  md={4}
                  ref={imgRef}
                  className={imgInView ? "animate__slideInFromCenterLeft" : ""}
                >
                  <Card.Img src={team1} alt="Diseño Web" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-center text-md-start">
                    <Card.Title>{t("marlene_title")}</Card.Title>
                    <h6 className="subtitlesAboutUs">
                      {t("marlene_subtitle")}
                    </h6>
                    <Card.Text>{t("marlene_text")}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <div className="horizontal-line"></div>
          <Col xs={12} className="mb-4 service-section">
            <Card className="aboutUsCard">
              <Row className="no-gutters">
                <Col md={8}>
                  <Card.Body className="text-center text-md-start">
                    <Card.Title>{t("antonella_title")}</Card.Title>
                    <h6 className="subtitlesAboutUs">
                      {t("antonella_subtitle")}
                    </h6>
                    <Card.Text>{t("antonella_text")}</Card.Text>
                  </Card.Body>
                </Col>
                <Col
                  md={4}
                  ref={antonellaImgRef}
                  className={
                    antonellaImgInView ? "animate__slideInFromCenterRight" : ""
                  }
                >
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
