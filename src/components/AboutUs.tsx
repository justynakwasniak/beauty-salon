import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/AboutUs.css";

import aboutus1 from "../assets/aboutus1.jpg";
import aboutus2 from "../assets/aboutus2.jpg";

const AboutUs: React.FC = () => {
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
                alt="Image 1"
                className="img-fluid image-style"
              />
              <img
                src={aboutus2}
                alt="Image 2"
                className="img-fluid image-style"
              />
            </div>
          </div>

          {/* Prawa strona z tekstem i przyciskiem */}
          <div className="col-md-6 ">
            <p className="about-us">O nas</p>
            <h2>Najlepszy salon w Twoim mieście</h2>
            <h4>
              Jeśli chcesz do Twojego wizerunki dodać więcej pewności siebie- to
              dobrze trafiłeś.
            </h4>
            <p>
              Jesteśmy profesjonalnym salonem urody, który od lat dba o piękno
              naszych klientów. Nasz zespół składa się z doświadczonych
              specjalistów, którzy z pasją podchodzą do każdej metamorfozy.
              Zarezerwuj wizytę już dziś i pozwól nam zadbać o Ciebie.
            </p>
            <Button className="button" onClick={handleShowModal}>
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
          <Button className="button" onClick={handleCloseModal}>
            Zamknij
          </Button>
          <Button className="button">Wyślij</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default AboutUs;
