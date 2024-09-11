import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });

  const handleShowModal = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
    };

    if (newErrors.name || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
    setFormData({ name: "", phone: "", message: "" });
    setErrors({ name: false, phone: false });
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact-container d-flex flex-column flex-md-row">
      <div className="contact-left flex-grow-1">
        <h2>{t("contact.onlineReservation")}</h2>
        <Form>
          <div className="form-row">
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
                isInvalid={errors.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                {t("contact.nameError")}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.phonePlaceholder")}
                isInvalid={errors.phone}
                required
              />
              <Form.Control.Feedback type="invalid">
                {t("contact.phoneError")}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
            />
          </Form.Group>

          <Button className="button" onClick={handleShowModal}>
            {t("contact.sendButton")}
          </Button>
        </Form>
      </div>

      <div className="contact-right flex-grow-1">
        <h2>{t("contact.contactTitle")}</h2>

        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <a
            href="https://www.google.pl/maps/place/Rynek+G%C5%82%C3%B3wny+1,+31-042+Krak%C3%B3w"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact.address")}
          </a>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+48123456789">{t("contact.phone")}</a>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:kontakt@twojadomena.pl">{t("contact.email")}</a>
        </div>

        <p className="p-hours">
          {t("contact.openingHours")} <br />
        </p>
        <p className="p-hours2">{t("contact.hoursDetail")}</p>
      </div>

      {/* Modal dla formularza */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("contact.confirmationTitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("contact.confirmationMessage")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="button"
            variant="secondary"
            onClick={handleCloseModal}
          >
            {t("contact.closeButton")}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;
