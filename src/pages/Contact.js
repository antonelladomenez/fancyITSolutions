import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../styles/FormComponent.css";
import MyNavbar from "../components/Menu";
import Footer from "../components/Footer";
import formPhoto from "../images/photoFormContact.png";
import TextAnimation from "../components/textAnimation";
import { useTranslation } from "react-i18next";
import "animate.css";

const FormComponent = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c2spftq",
        "template_pas0pjm",
        form.current,
        "MnL6L7JvnIUe681mb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("email_sent_successfully"));
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.log(error.text);
          alert(t("email_error"));
        }
      );
  };

  return (
    <>
      <MyNavbar />
      <Container fluid className="service p-0 overflow-hidden">
        <div className="headerGeneral d-flex justify-content-center align-items-center">
          <Row>
            <Col className="animate__slideInFromRight">
              <h2 className="titleService">{t("form_header")}</h2>
            </Col>
          </Row>
        </div>
        <TextAnimation />
        <Container fluid className="form-container">
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col md={6} lg={6} className="image-side">
              <div className="image-wrapper">
                <img
                  src={formPhoto}
                  alt="Form Background"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6} lg={5} className="form-side">
              <Form ref={form} onSubmit={sendEmail}>
                <h2 className="text-center text-h2">{t("form_subheader")}</h2>
                <p className="text-center text-p">
                  {t("form_subheader_description")}
                </p>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder={t("form_name_placeholder")}
                    className="rectangleform"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder={t("form_email_placeholder")}
                    className="rectangleform"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    placeholder={t("form_message_placeholder")}
                    className="rectangleform"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="buttonSend"
                  >
                    {t("form_button_send")}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default FormComponent;
