import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "animate.css";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Col
      md={6}
      ref={ref}
      className={inView ? "animate__slideInFromCenterLeft " : ""}
    >
      <Link to={project.link} target="_blank">
        <Card.Img
          src={project.image}
          alt={project.alt}
          style={{ marginBottom: "5px", height: "200px", width: "200px" }}
          className="my-2"
        />
      </Link>
    </Col>
  );
};

export default ProjectCard;
