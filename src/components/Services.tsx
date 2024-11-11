import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "../styles/Services.css";

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

  const { ref: backgroundRef, inView: backgroundInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="services-container">
      <div
        className={`services-background ${backgroundInView ? "in-view" : ""}`}
        ref={backgroundRef}
      ></div>

      <div className="services-content">
        <div className="services-header">
          <p className="p-services">
            {t("services.spendTimeWithProfessionals")}
          </p>
          <h2>{t("services.servicesAndPricing")}</h2>
        </div>
        <div className="container">
          <div className="row">
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

            <div className="col-md-6">
              <div className="services-list">
                <ul>
                  {servicesList
                    .slice(servicesList.length / 2)
                    .map((service, index) => (
                      <li key={index}>
                        {t(
                          `services.list.${
                            index + servicesList.length / 2
                          }.name`
                        )}{" "}
                        - {service.price}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Button className="button" onClick={handleShowModal}>
              {t("services.bookOnline")}
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          {!messageSent && (
            <Modal.Title>{t("services.modalTitle")}</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {messageSent ? (
            <div className="confirmation-message">
              <h4>{t("services.confirmationTitle")}</h4>
              <p>{t("services.confirmationMessage")}</p>
            </div>
          ) : (
            <Form id="servicesForm">
              <Form.Group controlId="formName">
                <Form.Label>{t("services.formName")}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("services.formNamePlaceholder")}
                  isInvalid={errors.name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {t("services.nameError")}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>{t("services.formPhone")}</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("services.formPhonePlaceholder")}
                  isInvalid={errors.phone}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {t("services.phoneError")}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>{t("services.formMessage")}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("services.formMessagePlaceholder")}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!messageSent && (
            <Button className="button" onClick={handleSend}>
              {t("services.send")}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Services;
