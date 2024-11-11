import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "../styles/AboutUs.css";

import aboutus1 from "../assets/aboutus1.jpg";
import aboutus2 from "../assets/aboutus2.jpg";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleShowModal = () => {
    setShowModal(true);
    setMessageSent(false);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSend = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
    };

    if (newErrors.name || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    setMessageSent(true);
    setFormData({ name: "", phone: "", message: "" });
    setErrors({ name: false, phone: false });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="about-us-container">
      <div className="container">
        <div className="row">
          <div
            className={`col-md-6 about-us-images ${
              imageInView ? "in-view" : ""
            }`}
            ref={imageRef}
          >
            <img
              src={aboutus1}
              alt={t("aboutUs.imageAlt1")}
              className="img-fluid image-style"
            />
            <img
              src={aboutus2}
              alt={t("aboutUs.imageAlt2")}
              className="img-fluid image-style"
            />
          </div>

          <div className="col-md-6">
            <p className="about-us">{t("aboutUs.title")}</p>
            <h2>{t("aboutUs.heading")}</h2>
            <h4>{t("aboutUs.subheading")}</h4>
            <p>{t("aboutUs.description")}</p>
            <Button className="button" onClick={handleShowModal}>
              {t("aboutUs.bookOnline")}
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          {!messageSent && <Modal.Title>{t("aboutUs.modalTitle")}</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          {messageSent ? (
            <div className="confirmation-message">
              <h4>{t("aboutUs.confirmation")}</h4>
              <p>{t("aboutUs.message2")}</p>
            </div>
          ) : (
            <Form id="contactForm">
              <Form.Group controlId="formName">
                <Form.Label>{t("aboutUs.formName")}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("aboutUs.formNamePlaceholder")}
                  isInvalid={errors.name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {t("aboutUs.nameError")}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>{t("aboutUs.formPhone")}</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("aboutUs.formPhonePlaceholder")}
                  isInvalid={errors.phone}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {t("aboutUs.phoneError")}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>{t("aboutUs.formMessage")}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("aboutUs.formMessagePlaceholder")}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!messageSent && (
            <>
              <Button className="button" onClick={handleSend}>
                {t("aboutUs.send")}
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default AboutUs;
