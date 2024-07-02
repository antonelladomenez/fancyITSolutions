import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Marquee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

function TextAnimation() {
  const { t } = useTranslation();

  return (
    <Container fluid className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          <span>{t('transform_digital_solutions')}</span>
          <span>{t('success_starts_here')}</span>
          <span>{t('transform_digital_solutions')}</span>
          <span>{t('success_starts_here')}</span>
          <span>{t('transform_digital_solutions')}</span>
          <span>{t('success_starts_here')}</span>
          <span>{t('transform_digital_solutions')}</span>
          <span>{t('success_starts_here')}</span>
          <span>{t('transform_digital_solutions')}</span>
          <span>{t('success_starts_here')}</span>
          <span>{t('transform_digital_solutions')}</span>
          <span>{t('success_starts_here')}</span>
        </div>
      </div>
    </Container>
  );
}

export default TextAnimation;
