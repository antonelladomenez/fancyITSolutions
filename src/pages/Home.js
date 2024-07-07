import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "../styles/home.css";
import Footer from "../components/Footer";
import MyNavbar from "../components/Menu";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";
import LanguageModal from "../components/LanguageModal";
import "animate.css"; // Importar animate.css
import { useInView } from "react-intersection-observer";
import headerImage1 from "../images/homepageImage.png"; // Asegúrate de ajustar las rutas a tus imágenes
import headerImage2 from "../images/fisioteam.png";
const Home = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (!language) {
      setShowModal(true);
    }
  }, []);
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: leftCardRef, inView: leftCardInView } = useInView({
    triggerOnce: true,
  });
  const { ref: rightCardRef, inView: rightCardInView } = useInView({
    triggerOnce: true,
  });
  const { ref: bottomCardRef, inView: bottomCardInView } = useInView({
    triggerOnce: true,
  });
  const { ref: rowRef, inView: rowInView } = useInView({ triggerOnce: true });

  const handleClose = () => setShowModal(false);
  return (
    <>
      <Container fluid className="home p-0 overflow-hidden">
        <MyNavbar />
        <LanguageModal show={showModal} handleClose={handleClose} />

        <Row className="header-section align-items-center">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center ml-5 "
          >
            <div className="main-header-text animate__slideInFromCenterLeft">
              {t("main_header_text")}
            </div>
            <div className="sub-text animate__slideInFromCenterLeft">
              {t("sub_text")}
            </div>
            <Button href="/services" className="info-button mb-3">
              {t("services")}
            </Button>
          </Col>
          <Col md={6} className="image-col animate__slideInFromCenterRight">
            <Carousel>
              <Carousel.Item>
                <img
                  className="img-fluid image-computer"
                  src={headerImage1}
                  alt="Header 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid image-computer"
                  src={headerImage2}
                  alt="Header 2"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <TextAnimation />
        <Row className="services-section">
          <Row className="text-center my-5">
            <Col>
              <h2
                ref={titleRef}
                className={`section-title ${
                  titleInView ? "animate__animated animate__slideInUp" : ""
                }`}
              >
                {t("our_services")}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center px-5">
            <Col
              md={5}
              ref={leftCardRef}
              className={`service-card d-flex flex-column justify-content-center align-items-center text-center ${
                leftCardInView ? "animate__slideInFromCenterLeft" : ""
              }`}
            >
              <h3 className="service-title">{t("professional_web_design")}</h3>
              <p className="service-text">
                {t("professional_web_design_text")}
              </p>
            </Col>
            <Col
              md={5}
              ref={rightCardRef}
              className={`service-card d-flex flex-column justify-content-center align-items-center text-center ${
                rightCardInView ? "animate__slideInFromCenterRight" : ""
              }`}
            >
              <h3 className="service-title">
                {t("innovative_web_development")}
              </h3>
              <p className="service-text">
                {t("innovative_web_development_text")}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center px-5">
            <Col
              md={5}
              ref={bottomCardRef}
              className={`service-card d-flex flex-column justify-content-center align-items-center text-center ${
                bottomCardInView ? "animate__slideInUp" : ""
              }`}
            >
              <h3 className="service-title">{t("branding")}</h3>
              <p className="service-text">{t("branding_text")}</p>
            </Col>
          </Row>
        </Row>
        <Row
          ref={rowRef}
          className={`text-center aboutUsHome ${
            rowInView ? "animate__slideInUp" : ""
          }`}
        >
          <Col>
            <h2 className="section-title">{t("why_choose_us")}</h2>
            <p>{t("why_choose_us_text")}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
