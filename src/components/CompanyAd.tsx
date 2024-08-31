import React from "react";
import "../styles/CompanyAd.css"; // Importujemy plik CSS

const CompanyAd: React.FC = () => {
  return (
    <section className="company-ad-container">
      {/* Lewa strona z tekstem */}
      <div className="company-ad-text">
        <p className="p-companyad">PROFESJONALNA SZKOŁA</p>

        <h1>Dlaczego warto przyjść właśnie do nas?</h1>

        <p>
          Dostajemy same pozytywne opinie od klientów. Najlepiej przekonać się
          samemu.
        </p>
      </div>

      {/* Prawa strona z kwadratami */}
      <div className="company-ad-info">
        <div className="info-box">
          <h2>
            600<sup>+</sup>
          </h2>
          <p>Zadowolonych klientów dziennie</p>
        </div>
        <div className="info-box">
          <h2>
            50<sup>+</sup>
          </h2>
          <p>Nagród za usługi</p>
        </div>
        <div className="info-box">
          <h2>
            20<sup>+</sup>
          </h2>
          <p>Najlepszych specjalistów</p>
        </div>
        <div className="info-box">
          <h2>
            100<sup>+</sup>
          </h2>
          <p>Prezentów dla stałych klientów</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyAd;
