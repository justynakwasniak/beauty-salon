import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
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
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="services-container">
      <div className="services-background">{/* Tło z rozmyciem */}</div>

      <div className="services-content">
        <div className="services-header">
          <p className="p-services">
            SPĘDŹ CZAS W TOWARZYSTWIE NAJLEPSZYCH PROFESJONALISTÓW{" "}
          </p>
          <h2>Usługi i Cennik</h2>
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
                        {service.name} - {service.price}
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
                        {service.name} - {service.price}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Przycisk rezerwacji online */}
          <div className="text-center mt-4">
            <Button className="button" onClick={handleShowModal}>
              REZERWACJA ONLINE
            </Button>
          </div>
        </div>
      </div>

      {/* Modal z formularzem */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Zostaw swoje dane, oddzwonimy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Imię*" />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label></Form.Label>
              <Form.Control type="tel" placeholder="Telefon*" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Wiadomość" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={handleCloseModal}>
            ZAMKNIJ
          </Button>
          <Button className="button">WYŚLIJ</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Services;
