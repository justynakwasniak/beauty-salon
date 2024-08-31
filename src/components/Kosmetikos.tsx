import React from "react";
import { useTranslation } from "react-i18next"; // Importujemy hook do tłumaczeń
import "../styles/Kosmetikos.css"; // Import pliku CSS

import beauty1 from "../assets/beauty1.jpg";
import beauty2 from "../assets/beauty2.jpg";
import beauty3 from "../assets/beauty3.jpg";
import beauty4 from "../assets/beauty4.jpg";

const Kosmetikos: React.FC = () => {
  const { t } = useTranslation(); // Destrukturyzacja hooka do tłumaczeń

  return (
    <section className="kosmetikos-container">
      <p>{t("kosmetikos.description")}</p> {/* Tekst dynamiczny */}
      <div className="images-grid">
        <img
          src={beauty1}
          alt={t("kosmetikos.imageAlt1")}
          className="image-box"
        />
        <img
          src={beauty2}
          alt={t("kosmetikos.imageAlt2")}
          className="image-box"
        />
        <img
          src={beauty3}
          alt={t("kosmetikos.imageAlt3")}
          className="image-box"
        />
        <img
          src={beauty4}
          alt={t("kosmetikos.imageAlt4")}
          className="image-box"
        />
      </div>
    </section>
  );
};

export default Kosmetikos;
