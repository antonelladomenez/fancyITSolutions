import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MyNavbar from "../components/Menu";
import "../styles/Services.css";
import Footer from "../components/Footer";
import project2 from "../images/fisioTeamLogo.png";
import project1 from "../images/Just-Devine-Gelato-Solid-Colour-Logo.png";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslation();
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
  const { ref: projectFisio, inView: projectFisioImgInView } = useInView({
    triggerOnce: true,
  });

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
              <h2 className="titleService">{t("header_our_projects")}</h2>
            </Col>
          </Row>
        </div>
        <TextAnimation />

        <Row>
          <Col
            xs={12}
            className="my-4 service-section justify-content-center align-items-center"
          >
            <Card>
              <Row className="no-gutters">
                <Col
                  md={6}
                  ref={imgRef}
                  className={imgInView ? "animate__slideInFromCenterLeft " : ""}
                >
                  {" "}
                  <Link to="https://justdevinegelato.com.au/" target="_blank">
                    {" "}
                    <Card.Img
                      src={project1}
                      alt="Just Devine"
                      style={{
                        marginBottom: "5px",
                        height: "200px",
                        width: "200px",
                      }}
                    />
                  </Link>
                </Col>
                <Col
                  md={6}
                  ref={projectFisio}
                  className={
                    projectFisioImgInView
                      ? "animate__slideInFromCenterLeft"
                      : ""
                  }
                >
                  <Link to="https://www.fisioteam.kesug.com/" target="_blank">
                    <Card.Img
                      src={project2}
                      alt="FisioTeam"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Link>
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

export default Projects;
