import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/Services.css"; // Importujemy plik CSS

const servicesList = [
  { name: "Usługa 1", price: "100 PLN" },
  { name: "Usługa 2", price: "150 PLN" },
  { name: "Usługa 3", price: "200 PLN" },
  { name: "Usługa 4", price: "250 PLN" },
];

const Services: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="services-container">
      <div className="services-background">{/* Tło z rozmyciem */}</div>

      <div className="services-content">
        <div className="services-header">
          <h1>Usługi i Cennik</h1>
        </div>
        <div className="container">
          <div className="row">
            {/* Sekcja po lewej stronie */}
            <div className="col-md-6">
              <div className="services-list">
                <h2>Usługi Po Lewej</h2>
                <ul>
                  {servicesList.map((service, index) => (
                    <li key={index}>
                      {service.name} - {service.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sekcja po prawej stronie */}
            <div className="col-md-6">
              <div className="services-list">
                <h2>Usługi Po Prawej</h2>
                <ul>
                  {servicesList.map((service, index) => (
                    <li key={index}>
                      {service.name} - {service.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Przycisk rezerwacji online */}
          <div className="text-center mt-4">
            <Button variant="primary" onClick={handleShowModal}>
              Rezerwacja Online
            </Button>
          </div>
        </div>
      </div>

      {/* Modal z formularzem */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Zostaw swoje dane</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Imię</Form.Label>
              <Form.Control type="text" placeholder="Wpisz swoje imię" />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Telefon</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Wpisz swój numer telefonu"
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Wiadomość</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Wpisz swoją wiadomość"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Zamknij
          </Button>
          <Button variant="primary">Wyślij</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Services;
