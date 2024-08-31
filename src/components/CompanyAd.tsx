import React from "react";
import { useTranslation } from "react-i18next"; // Import hooka useTranslation
import "../styles/CompanyAd.css"; // Importujemy plik CSS

const CompanyAd: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="company-ad-container">
      {/* Lewa strona z tekstem */}
      <div className="company-ad-text">
        <p className="p-companyad">{t("companyAd.school")}</p>

        <h1>{t("companyAd.title")}</h1>

        <p>{t("companyAd.positiveFeedback")}</p>
      </div>

      {/* Prawa strona z kwadratami */}
      <div className="company-ad-info">
        <div className="info-box">
          <h2>
            600<sup>+</sup>
          </h2>
          <p>{t("companyAd.clients")}</p>
        </div>
        <div className="info-box">
          <h2>
            50<sup>+</sup>
          </h2>
          <p>{t("companyAd.awards")}</p>
        </div>
        <div className="info-box">
          <h2>
            20<sup>+</sup>
          </h2>
          <p>{t("companyAd.specialists")}</p>
        </div>
        <div className="info-box">
          <h2>
            100<sup>+</sup>
          </h2>
          <p>{t("companyAd.gifts")}</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyAd;
