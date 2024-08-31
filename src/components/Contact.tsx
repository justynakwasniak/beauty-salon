import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // Importujemy hook do tłumaczeń
import "../styles/Contact.css"; // Import pliku CSS

const Contact: React.FC = () => {
  const { t } = useTranslation(); // Używamy hooka do tłumaczeń
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="contact-container">
      <div className="contact-left">
        <h2>{t("contact.onlineReservation")}</h2>
        <Form>
          <div className="form-row">
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder={t("contact.namePlaceholder")}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control
                type="tel"
                placeholder={t("contact.phonePlaceholder")}
              />
            </Form.Group>
          </div>

          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={t("contact.messagePlaceholder")}
            />
          </Form.Group>

          <Button className="button" onClick={handleShowModal}>
            {t("contact.sendButton")}
          </Button>
        </Form>
      </div>

      <div className="contact-right">
        <h2>{t("contact.contactTitle")}</h2>

        {/* Adres */}
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <a
            href="https://www.google.pl/maps/place/Rynek+G%C5%82%C3%B3wny+1,+31-042+Krak%C3%B3w/@50.0614748,19.9339349,17z/data=!3m1!4b1!4m6!3m5!1s0x47165b0de6c9cfcd:0x1f9a5e46a7c08a33!8m2!3d50.0614714!4d19.9365098!16s%2Fg%2F11csknb2n4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact.address")}
          </a>
        </div>

        {/* Telefon */}
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+48123456789">{t("contact.phone")}</a>
        </div>

        {/* Email */}
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:kontakt@twojadomena.pl">{t("contact.email")}</a>
        </div>

        {/* Godziny otwarcia */}
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
