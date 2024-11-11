import React from "react";

import Header from "./components/Header";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import CompanyAd from "./components/CompanyAd";
import Kosmetikos from "./components/Kosmetikos";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="company-ad">
        <CompanyAd />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="kosmetikos">
        <Kosmetikos />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
