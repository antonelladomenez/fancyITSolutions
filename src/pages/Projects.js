import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/Menu";
import "../styles/Projects.css";
import Footer from "../components/Footer";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "animate.css";
import project1 from "../images/logo Just.png";
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
      title: "JUST DEVINE | WEBSITE",
    },
    {
      link: "https://www.fisioteam.kesug.com/",
      image: project2,
      alt: "FisioTeam",
      title: "FISIOTEAM | WEBSITE",
    },
    {
      link: "https://www.factorynails.wuaze.com/",
      image: project3,
      alt: "Factory Nails",
      title: "FACTORY NAILS | CUSTOM BRAND + WEBSITE",
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
        <Container className="projects-container my-5">
          {projects.map((project, index) => (
            <Row
              key={index}
              className={`project-row my-4 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <Col md={5}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="project-image"
                  />
                </a>
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <h3 className="project-title">{project.title}</h3>
                  </a>{" "}
                  <hr className="divider" />
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
