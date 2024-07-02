import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/home.css";
import headerImage from "../images/image1.png"; // Ajusta la ruta según la ubicación de tu archivo
import Footer from "../components/Footer";
import MyNavbar from "../components/Menu";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";
import LanguageModal from "../components/LanguageModal";

const Home = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (!language) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => setShowModal(false);
  return (
    <>
      <Container fluid className="home p-0 overflow-hidden">
        <MyNavbar />
        <LanguageModal show={showModal} handleClose={handleClose} />

        <Row className="header-section align-items-center">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center ml-5"
          >
            <div className="main-header-text">{t("main_header_text")}</div>
            <div className="sub-text">{t("sub_text")}</div>
            <Button className="info-button mb-3">{t("services")}</Button>
          </Col>
          <Col md={6} className="image-col">
            <img
              src={headerImage}
              alt="Header"
              className="img-fluid image-computer"
            />
          </Col>
        </Row>
        <TextAnimation />
        <Row className="services-section">
          <Row className="text-center my-5">
            <Col>
              <h2 className="section-title">{t("our_services")}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center px-5 ">
            <Col
              md={5}
              className="service-card d-flex flex-column justify-content-center align-items-center text-center "
            >
              <h3 className="service-title">{t("professional_web_design")}</h3>
              <p className="service-text">
                {t("professional_web_design_text")}
              </p>
            </Col>
            <Col
              md={5}
              className="service-card d-flex flex-column justify-content-center align-items-center text-center"
            >
              <h3 className="service-title">
                {t("innovative_web_development")}
              </h3>
              <p className="service-text">
                {t("innovative_web_development_text")}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center px-5 ">
            <Col
              md={5}
              className="service-card d-flex flex-column justify-content-center align-items-center text-center "
            >
              <h3 className="service-title">{t("branding")}</h3>
              <p className="service-text">{t("branding_text")}</p>
            </Col>
          </Row>
        </Row>
        <Row className="text-center aboutUsHome">
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
