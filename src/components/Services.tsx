import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // Hook do tłumaczeń
import "../styles/Services.css"; // Importujemy plik CSS

const servicesList = [
  { name: "Mikropigmentacja", price: "100 PLN" },
  { name: "Biostymulatory", price: "150 PLN" },
  { name: "Modelowanie sylwetki", price: "200 PLN" },
  { name: "Depilacja laserowa", price: "250 PLN" },
  { name: "Peeling chemiczny", price: "300 PLN" },
  { name: "Mezoterapia", price: "350 PLN" },
  { name: "Radiofrekwencja", price: "400 PLN" },
  { name: "Terapia światłem", price: "450 PLN" },
];

const Services: React.FC = () => {
  const { t } = useTranslation(); // Użycie hooka do tłumaczeń
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="services-container">
      <div className="services-background">{/* Tło z rozmyciem */}</div>

      <div className="services-content">
        <div className="services-header">
          <p className="p-services">
            {t('services.spendTimeWithProfessionals')}
          </p>
          <h2>{t('services.servicesAndPricing')}</h2>
        </div>
        <div className="container">
          <div className="row">
            {/* Sekcja po lewej stronie */}
            <div className="col-md-6">
              <div className="services-list">
                <ul>
                  {servicesList
                    .slice(0, servicesList.length / 2)
                    .map((service, index) => (
                      <li key={index}>
                        {t(`services.list.${index}.name`)} - {service.price}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Sekcja po prawej stronie */}
            <div className="col-md-6">
              <div className="services-list">
                <ul>
                  {servicesList
                    .slice(servicesList.length / 2)
                    .map((service, index) => (
                      <li key={index}>
                        {t(`services.list.${index + servicesList.length / 2}.name`)} - {service.price}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Przycisk rezerwacji online */}
          <div className="text-center mt-4">
            <Button className="button" onClick={handleShowModal}>
              {t('services.bookOnline')}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal z formularzem */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t('services.modalTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>{t('services.formName')}</Form.Label>
              <Form.Control type="text" placeholder={t('services.formNamePlaceholder')} />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>{t('services.formPhone')}</Form.Label>
              <Form.Control type="tel" placeholder={t('services.formPhonePlaceholder')} />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>{t('services.formMessage')}</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder={t('services.formMessagePlaceholder')} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={handleCloseModal}>
            {t('services.close')}
          </Button>
          <Button className="button">{t('services.send')}</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Services;
