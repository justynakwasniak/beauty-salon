import React from "react";
import "../styles/Team.css";
import kosmetyczka1 from "../assets/kosmetyczka1.jpg";
import kosmetyczka2 from "../assets/kosmetyczka2.jpg";
import kosmetyczka3 from "../assets/kosmetyczka3.jpg";
import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="team-container">
      <div>
        <p className="p-team">{t("team.spendingTimeInPleasantAtmosphere")}</p>
        <h2 className="h2-team">{t("team.ourTeam")}</h2>
      </div>

      <div className="team-members">
        <div className="team-member">
          <img src={kosmetyczka1} alt={t("team.member1.alt")} />
          <h2>{t("team.member1.name")}</h2>
          <p className="p-cosmetology">{t("team.member1.role")}</p>
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
          <img src={kosmetyczka2} alt={t("team.member2.alt")} />
          <h2>{t("team.member2.name")}</h2>
          <p>{t("team.member2.role")}</p>
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
          <img src={kosmetyczka3} alt={t("team.member3.alt")} />
          <h2>{t("team.member3.name")}</h2>
          <p>{t("team.member3.role")}</p>
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
