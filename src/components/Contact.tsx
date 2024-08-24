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
        <h1>Rezerwacja Online</h1>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Imię</Form.Label>
            <Form.Control type="text" placeholder="Wpisz swoje imię" />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Telefon</Form.Label>
            <Form.Control type="tel" placeholder="Wpisz swój numer telefonu" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Wiadomość</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Wpisz swoją wiadomość"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleShowModal}>
            Wyślij
          </Button>
        </Form>
      </div>

      <div className="contact-right">
        <h2>Kontakt</h2>
        <p>
          <strong>Adres:</strong> Twoja Ulica 123, Miasto
        </p>
        <p>
          <strong>Telefon:</strong> +48 123 456 789
        </p>
        <p>
          <strong>Email:</strong> kontakt@twojadomena.pl
        </p>
        <p>
          <strong>Godziny otwarcia:</strong> Pon - Pt: 9:00 - 18:00
        </p>
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;
