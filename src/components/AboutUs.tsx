import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/AboutUs.css";

import aboutus1 from "../assets/aboutus1.jpg";
import aboutus2 from "../assets/aboutus2.jpg";

const AboutUs: React.FC = () => {
  const { t } = useTranslation(); // Użycie hooka do tłumaczeń
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="about-us-container">
      <div className="container">
        <div className="row">
          {/* Lewa strona ze zdjęciami */}
          <div className="col-md-6">
            <div className="about-us-images">
              <img
                src={aboutus1}
                alt={t('aboutUs.imageAlt1')}
                className="img-fluid image-style"
              />
              <img
                src={aboutus2}
                alt={t('aboutUs.imageAlt2')}
                className="img-fluid image-style"
              />
            </div>
          </div>

          {/* Prawa strona z tekstem i przyciskiem */}
          <div className="col-md-6 ">
            <p className="about-us">{t('aboutUs.title')}</p>
            <h2>{t('aboutUs.heading')}</h2>
            <h4>{t('aboutUs.subheading')}</h4>
            <p>{t('aboutUs.description')}</p>
            <Button className="button" onClick={handleShowModal}>
              {t('aboutUs.bookOnline')}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal z formularzem */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t('aboutUs.modalTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>{t('aboutUs.formName')}</Form.Label>
              <Form.Control type="text" placeholder={t('aboutUs.formNamePlaceholder')} />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>{t('aboutUs.formPhone')}</Form.Label>
              <Form.Control
                type="tel"
                placeholder={t('aboutUs.formPhonePlaceholder')}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>{t('aboutUs.formMessage')}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={t('aboutUs.formMessagePlaceholder')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={handleCloseModal}>
            {t('aboutUs.close')}
          </Button>
          <Button className="button">{t('aboutUs.send')}</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default AboutUs;
