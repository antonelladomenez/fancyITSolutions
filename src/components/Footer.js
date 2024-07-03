import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="justify-content-between">
          <Col md={4} className="footer-brand">
            <h2>FancyIT</h2>
            <p>{t('footer_slogan')}</p>
          </Col>
          <Col md={4} className="footer-links">
            <ul>
              <li><a href="/">{t('home')}</a></li>
              <li><a href="/about-us">{t('about_us')}</a></li>
              <li><a href="/services">{t('services')}</a></li>
              <li><a href="/contact">{t('contact_us')}</a></li>
              <li><a href="/privacy-policy">{t('privacy_policy_title')}</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-contact">
            <h3>{t('contact')}</h3>
            <p>(+61) 426 747 605 (Australia)</p>
            <p>(+34) 623 451 423 (España)</p>
            <p>(+54) 362 465 6029 (Argentina)</p>

            <p><a href="mailto:fancyitsolutions@gmail.com">fancyitsolutions@gmail.com</a></p>
            <a href="https://www.instagram.com/fancyitsolutions" className="footer-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </Col>
        </Row>
        <div className="horizontal-line-footer my-3 mx-auto"></div>
        <Row className="justify-content-center">
          <Col md={12} className="text-center footer-copyright">
            <p style={{ fontSize: "12px", margin: "0 0" }}>
               {t('rights_reserved')} 
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
