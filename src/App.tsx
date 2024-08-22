import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Services />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
