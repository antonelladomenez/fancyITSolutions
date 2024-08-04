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
import { useInView } from "react-intersection-observer";
import "animate.css";

const Services = () => {
  const { t } = useTranslation();
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
  const { ref: antonellaImgRef, inView: antonellaImgInView } = useInView({
    triggerOnce: true,
  });
  const { ref: brandingImgRef, inView: brandingImgInView } = useInView({
    triggerOnce: true,
  });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <>
      <MyNavbar />
      <Container fluid className="service p-0 overflow-hidden">
        <div className="headerGeneral d-flex justify-content-center align-items-center">
          <Row>
            <Col
              ref={titleRef}
              className={` ${titleInView ? "animate__slideInFromRight" : ""}`}
            >
              <h2 className="titleService">{t("header_our_services")}</h2>
            </Col>
          </Row>
        </div>
        <TextAnimation />
        <Row className="align-items-center container-black">
          <Col>
            <h3
              ref={textRef}
              className={`textIdeas ${textInView ? "animate__slideInUp" : ""}`}
            >
              {t("description_unique_websites")}
            </h3>
          </Col>
        </Row>
        <Row className="my-5 align-items-center service-row">
          <Col xs={12} className="my-4 service-section">
            <Card className="service-card">
              <Row className="no-gutters">
                <Col
                  md={4}
                  ref={imgRef}
                  className={imgInView ? "animate__slideInFromCenterLeft" : ""}
                >
                  <Card.Img src={service1} alt="Web Design" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t("service_web_design")}</Card.Title>
                    <Card.Text>{t("service_web_design_description")}</Card.Text>
                    <Button
                      href="/contact"
                      variant="outline-secondary buttonInfo"
                    >
                      {t("button_information")}
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <div className="horizontal-line mx-auto"></div>
          <Col xs={12} className="mb-4 service-section">
            <Card className="service-card">
              <Row className="no-gutters">
                <Col md={8} className="order-md-1 order-2">
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t("service_web_development")}</Card.Title>
                    <Card.Text>
                      {t("service_web_development_description")}
                    </Card.Text>
                    <Button
                      href="/contact"
                      variant="outline-secondary buttonInfo"
                    >
                      {t("button_information")}
                    </Button>
                  </Card.Body>
                </Col>{" "}
                <Col
                  md={4}
                  ref={antonellaImgRef}
                  className={`${
                    antonellaImgInView ? "animate__slideInFromCenterLeft" : ""
                  } order-md-2 order-1`}
                >
                  <Card.Img src={service2} alt="Web Development" />
                </Col>
              </Row>
            </Card>
          </Col>
          <div className="horizontal-line mx-auto"></div>
          <Col xs={12} className="mb-4 service-section">
            <Card className="service-card">
              <Row className="no-gutters">
                <Col
                  md={4}
                  ref={brandingImgRef}
                  className={
                    brandingImgInView ? "animate__slideInFromCenterLeft" : ""
                  }
                >
                  <Card.Img src={service3} alt="Branding" />
                </Col>
                <Col md={8}>
                  <Card.Body className="text-center text-sm-start">
                    <Card.Title>{t("service_branding")}</Card.Title>
                    <Card.Text>{t("service_branding_description")}</Card.Text>
                    <Button
                      href="/contact"
                      variant="outline-secondary buttonInfo"
                    >
                      {t("button_information")}
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
