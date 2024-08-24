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
      <AboutUs />
      <Services />
      <CompanyAd />
      <Team />
      <Kosmetikos />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
