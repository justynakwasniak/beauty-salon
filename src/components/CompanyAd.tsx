import React from "react";
import "../styles/CompanyAd.css"; // Importujemy plik CSS

const CompanyAd: React.FC = () => {
  return (
    <section className="company-ad-container">
      {/* Lewa strona z tekstem */}
      <div className="company-ad-text">
        <h1>TRADYCYJNA SZKOŁA</h1>
        <p>
          <strong>Dlaczego warto przyjść właśnie do nas?</strong>
        </p>
        <p>
          Dostajemy same pozytywne opinie od klientów. Najlepiej przekonać się
          samemu.
        </p>
      </div>

      {/* Prawa strona z kwadratami */}
      <div className="company-ad-info">
        <div className="info-box">
          <h2>600+</h2>
          <p>Zadowolonych klientów dziennie</p>
        </div>
        <div className="info-box">
          <h2>50+</h2>
          <p>Nagród za usługi</p>
        </div>
        <div className="info-box">
          <h2>20+</h2>
          <p>Najlepszych barberów</p>
        </div>
        <div className="info-box">
          <h2>100+</h2>
          <p>Prezentów dla stałych klientów</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyAd;
