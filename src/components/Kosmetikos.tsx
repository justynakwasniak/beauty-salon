import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer"; // Importujemy hook
import "../styles/Kosmetikos.css";

import beauty1 from "../assets/beauty1.jpg";
import beauty2 from "../assets/beauty2.jpg";
import beauty3 from "../assets/beauty3.jpg";
import beauty4 from "../assets/beauty4.jpg";

const Kosmetikos: React.FC = () => {
  const { t } = useTranslation();

  const { ref: imageRef1, inView: imageInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: imageRef2, inView: imageInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef3, inView: imageInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef4, inView: imageInView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="kosmetikos-container">
      <p>{t("kosmetikos.description")}</p>
      <div className="images-grid">
        <img
          src={beauty1}
          alt={t("kosmetikos.imageAlt1")}
          className={`image-box ${imageInView1 ? "in-view" : ""}`}
          ref={imageRef1}
        />
        <img
          src={beauty2}
          alt={t("kosmetikos.imageAlt2")}
          className={`image-box ${imageInView2 ? "in-view" : ""}`}
          ref={imageRef2}
        />
        <img
          src={beauty3}
          alt={t("kosmetikos.imageAlt3")}
          className={`image-box ${imageInView3 ? "in-view" : ""}`}
          ref={imageRef3}
        />
        <img
          src={beauty4}
          alt={t("kosmetikos.imageAlt4")}
          className={`image-box ${imageInView4 ? "in-view" : ""}`}
          ref={imageRef4}
        />
      </div>
    </section>
  );
};

export default Kosmetikos;
