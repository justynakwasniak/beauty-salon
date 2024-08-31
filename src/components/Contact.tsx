import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/Contact.css"; // Import pliku CSS

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="contact-container">
      <div className="contact-left">
        <h2>Rezerwacja Online</h2>
        <Form>
          <div className="form-row">
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Imię *" />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control type="tel" placeholder="Telefon *" />
            </Form.Group>
          </div>

          <Form.Group controlId="formMessage">
            <Form.Control as="textarea" rows={3} placeholder="Wiadomość" />
          </Form.Group>

          <Button className="button" onClick={handleShowModal}>
            WYŚLIJ
          </Button>
        </Form>
      </div>

      <div className="contact-right">
        <h2>Kontakt</h2>

        {/* Adres */}
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <a
            href="https://www.google.pl/maps/place/Rynek+G%C5%82%C3%B3wny+1,+31-042+Krak%C3%B3w/@50.0614748,19.9339349,17z/data=!3m1!4b1!4m6!3m5!1s0x47165b0de6c9cfcd:0x1f9a5e46a7c08a33!8m2!3d50.0614714!4d19.9365098!16s%2Fg%2F11csknb2n4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rynek Główny 1, Kraków
          </a>
        </div>

        {/* Telefon */}
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+48123456789">+48 123 456 789</a>
        </div>

        {/* Email */}
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:kontakt@twojadomena.pl">beautysalon@gmail.com</a>
        </div>

        {/* Godziny otwarcia */}
        <p className="p-hours">
          GODZINY OTWARCIA <br />
        </p>
        <p className="p-hours2">Pon - Pt: 9:00 - 18:00</p>
      </div>

      {/* Modal dla formularza */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Potwierdzenie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Twoja wiadomość została wysłana!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="button"
            variant="secondary"
            onClick={handleCloseModal}
          >
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;
