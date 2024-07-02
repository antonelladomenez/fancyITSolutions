import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles/modal.css'
const LanguageModal = ({ show, handleClose }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    handleClose();
  };

  return (
    <Modal className='text-center  ' show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className='text-center '>Select Language</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button className="custom-button" variant="primary" onClick={() => changeLanguage('en')} block>
          English
        </Button>
        <Button className="custom-button" variant="secondary" onClick={() => changeLanguage('es')} block>
          Español
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageModal;
