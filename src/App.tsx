import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import CompanyAd from "./components/CompanyAd";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <CompanyAd />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
