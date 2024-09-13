import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/logo.webp";

// Import images for the slider
import bs1 from "../assets/bs1.webp";
import bs2 from "../assets/bs2.webp";
import bs3 from "../assets/bs3.webp";

const images = [bs1, bs2, bs3];

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

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

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <header className="header-container">
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Linki nawigacyjne po lewej */}
            <Nav className="me-auto navbar">
              <Nav.Link href="#home" className="d-flex align-items-center">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "70px",
                    marginRight: "10px",
                    borderRadius: "50%",
                  }} // Dostosuj wymiary logo
                />
                {t("header.home")}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#about">
                {t("header.about")}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#services">
                {t("header.services")}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#team">
                {t("header.team")}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#contact">
                {t("header.contact")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Sekcja z telefonem i buttonami na prawo */}
          <div className="navbar-right-section">
            <Nav.Link href="tel:+48123456789" className="phone-link">
              {t("header.phone")}: +48 123 456 789
            </Nav.Link>
            <Button className="btn-book" onClick={handleShowModal}>
              {t("header.reserve")}
            </Button>
            <LanguageSwitcher />
          </div>
        </Container>
      </Navbar>

      {/* Header Text */}
      <Container className="header-text">
        <div className="text-content">
          <p className="sub-title">{t("header.subtitle")}</p>
          <h1>{t("header.heading")}</h1>
          <p className="slogan">{t("header.slogan")}</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram "></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube "></i>
            </a>
          </div>
        </div>
      </Container>

      {/* Slider */}
      <div className="slider-container">
        <div
          className="slider"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
        <div className="slider-nav">
          <Button variant="link" className="prev-btn" onClick={handlePrevClick}>
            {t("header.prev")}
          </Button>
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentImageIndex === index ? "active" : ""}`}
              ></span>
            ))}
          </div>
          <Button variant="link" className="next-btn" onClick={handleNextClick}>
            {t("header.next")}
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          {messageSent ? null : (
            <Modal.Title>{t("header.modalTitle")}</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {messageSent ? (
            <div className="confirmation-message">
              <h4>{t("header.confirmation")}</h4>
              <p>{t("header.message2")}</p>
            </div>
          ) : (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>{t("header.name")}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("header.name") + "*"}
                  isInvalid={errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {t("header.nameError")}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>{t("header.phone")}</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("header.phonePlaceholder")}
                  isInvalid={errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {t("header.phoneError")}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>{t("header.message")}</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("header.message")}
                />
              </Form.Group>
              <Button className="button" onClick={handleSend}>
                {t("header.send")}
              </Button>
            </Form>
          )}
        </Modal.Body>
        {!messageSent && <Modal.Footer></Modal.Footer>}
      </Modal>
    </header>
  );
};

export default Header;
