import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/CompanyAd.css";
import { Container, Row, Col } from "react-bootstrap";

const CompanyAd: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="company-ad-container">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="company-ad-text">
          <p className="p-companyad">{t("companyAd.school")}</p>
          <h1>{t("companyAd.title")}</h1>
          <p>{t("companyAd.positiveFeedback")}</p>
        </Col>

        <Col xs={12} md={6} className="company-ad-info">
          <Row className="g-3">
            {" "}
            <Col xs={6} className="info-box">
              <h2>
                600<sup>+</sup>
              </h2>
              <p>{t("companyAd.clients")}</p>
            </Col>
            <Col xs={6} className="info-box">
              <h2>
                50<sup>+</sup>
              </h2>
              <p>{t("companyAd.awards")}</p>
            </Col>
            <Col xs={6} className="info-box">
              <h2>
                20<sup>+</sup>
              </h2>
              <p>{t("companyAd.specialists")}</p>
            </Col>
            <Col xs={6} className="info-box">
              <h2>
                100<sup>+</sup>
              </h2>
              <p>{t("companyAd.gifts")}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyAd;
