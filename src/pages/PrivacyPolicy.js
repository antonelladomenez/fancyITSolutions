import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from '../components/Menu';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div>
      <MyNavbar />
      <Container className="privacy-policy-container mb-5 pt-5">
        <Row>
          <Col>
            <h2>{t('privacy_policy_title')}</h2>
            <p>{t('privacy_policy_intro')}</p>
            <h3>{t('information_we_collect_title')}</h3>
            <p>{t('information_we_collect_description')}</p>
            <h4>{t('personal_data_title')}</h4>
            <p>{t('personal_data_description')}</p>
            <h4>{t('usage_data_title')}</h4>
            <p>{t('usage_data_description')}</p>
            <h3>{t('use_of_information_title')}</h3>
            <p>{t('use_of_information_description')}</p>
            <h4>{t('information_sharing_title')}</h4>
            <p>{t('information_sharing_description')}</p>
            <h3>{t('security_of_information_title')}</h3>
            <p>{t('security_of_information_description')}</p>
            <h3>{t('user_rights_title')}</h3>
            <p>{t('user_rights_description')}</p>
            <h3>{t('changes_to_policy_title')}</h3>
            <p>{t('changes_to_policy_description')}</p>
            <h3>{t('contact_information_title')}</h3>
            <p>{t('contact_information_description')}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
