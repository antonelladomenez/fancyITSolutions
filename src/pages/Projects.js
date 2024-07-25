import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MyNavbar from "../components/Menu";
import "../styles/Services.css";
import Footer from "../components/Footer";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "animate.css";
import ProjectCard from "../components/ProjectCard";
import project1 from "../images/Just-Devine-Gelato-Solid-Colour-Logo.png";
import project2 from "../images/fisioTeamLogo.png";
import project3 from "../images/factoryNails.png";

const Projects = () => {
  const { t } = useTranslation();
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });

  const projects = [
    {
      link: "https://justdevinegelato.com.au/",
      image: project1,
      alt: "Just Devine",
    },
    {
      link: "https://www.fisioteam.kesug.com/",
      image: project2,
      alt: "FisioTeam",
    },
    {
      link: "https://www.factorynails.wuaze.com/",
      image: project3,
      alt: "Factory Nails",
    },
  ];

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
        <Row className="my-sm-4 my-3">
          <Col
            xs={12}
            className="my-sm-5 my-3 service-section justify-content-center align-items-center"
          >
            <Card>
              <Row className="no-gutters text-center">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
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
