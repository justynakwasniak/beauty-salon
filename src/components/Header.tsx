import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

// Import images for the slider
import bs1 from "../assets/bs1.webp";
import bs2 from "../assets/bs2.webp";
import bs3 from "../assets/bs3.webp";

const images = [bs1, bs2, bs3];

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [messageSent, setMessageSent] = useState(false); // Stan do śledzenia wysłanej wiadomości
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });
  const { t } = useTranslation(); // Hook do tłumaczenia

  // Slider autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manual slider controls
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

  // Funkcja obsługująca płynne przewijanie
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Funkcje do zarządzania modalem
  const handleShowModal = () => {
    setShowModal(true);
    setMessageSent(false); // Resetuj stan wysłanej wiadomości przy otwieraniu modalu
  };
  const handleCloseModal = () => setShowModal(false);

  // Funkcja do obsługi kliknięcia przycisku "Send"
  const handleSend = () => {
    // Walidacja formularza
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
    };

    if (newErrors.name || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    setMessageSent(true); // Ustaw stan na wysłaną wiadomość
    // Możesz dodać dodatkową logikę tutaj, np. wysyłanie formularza
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <header className="header-container">
      {/* NavBar */}
      <nav className="navbar d-flex justify-content-between">
        <ul className="nav">
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("home")}>
              {t("header.home")}
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("about")}>
              {t("header.about")}
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("services")}>
              {t("header.services")}
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("team")}>
              {t("header.team")}
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("contact")}>
              {t("header.contact")}
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <a className="phone-number">Tel: +48 123 456 789</a>
          <button className="reserve-btn" onClick={handleShowModal}>
            {t("header.reserve")}
          </button>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Main content with two sections */}
      <div className="main-content">
        {/* Left section with social links and text */}
        <div className="left-section">
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              {t("header.insta")}
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              {t("header.youtube")}
            </a>
          </div>
          <div className="text-container">
            <p className="sub-title">{t("header.subtitle")}</p>
            <h1>{t("header.heading")}</h1>
            <p className="slogan">{t("header.slogan")}</p>
          </div>
        </div>

        {/* Right section with image slider */}
        <div className="right-section">
          <div className="slider">
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
              }}
            ></div>
            <div className="slider-nav">
              <button className="prev-btn" onClick={handlePrevClick}>
                {t("header.prev")}
              </button>
              <div className="dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      currentImageIndex === index ? "active" : ""
                    }`}
                  ></span>
                ))}
              </div>
              <button className="next-btn" onClick={handleNextClick}>
                {t("header.next")}
              </button>
            </div>
          </div>
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
