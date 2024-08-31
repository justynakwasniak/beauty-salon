import React from "react";
import "../styles/Team.css"; // Import stylów CSS
import kosmetyczka1 from "../assets/kosmetyczka1.jpg";
import kosmetyczka2 from "../assets/kosmetyczka2.jpg";
import kosmetyczka3 from "../assets/kosmetyczka3.jpg";
const Team: React.FC = () => {
  return (
    <section className="team-container">
      {/* Nagłówek */}
      <div>
        <p className="p-team">
          DLA TYCH, KTÓRZY LUBIĄ SPĘDZAĆ CZAS W MIŁEJ ATMOSFERZE
        </p>
        <h2 className="h2-team">Nasz zespół</h2>
      </div>

      {/* Sekcja zespołu */}
      <div className="team-members">
        <div className="team-member">
          <img src={kosmetyczka1} alt="Kosmetyczka 1" />
          <h2>Anna Kowalska</h2>
          <p className="p-cosmetology">Kosmetolog</p>
          <div className="team-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={kosmetyczka2} alt="Kosmetyczka 2" />
          <h2>Monika Nowak</h2>
          <p>Kosmetolog</p>
          <div className="team-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={kosmetyczka3} alt="Kosmetyczka 3" />
          <h2>Katarzyna Wiśniewska</h2>
          <p>Kosmetolog</p>
          <div className="team-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
