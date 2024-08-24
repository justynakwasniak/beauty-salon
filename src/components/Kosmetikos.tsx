import React from "react";
import "../styles/Kosmetikos.css"; // Import pliku CSS

import beauty1 from "../assets/beauty1.jpg";
import beauty2 from "../assets/beauty2.jpg";
import beauty3 from "../assets/beauty3.jpg";
import beauty4 from "../assets/beauty4.jpg";

const Kosmetikos: React.FC = () => {
  return (
    <section className="kosmetikos-container">
      <h1>Kosmetikos po grecku to sztuka upiększania</h1>
      <div className="images-grid">
        <img src={beauty1} alt="Beauty 1" className="image-box" />
        <img src={beauty2} alt="Beauty 2" className="image-box" />
        <img src={beauty3} alt="Beauty 3" className="image-box" />
        <img src={beauty4} alt="Beauty 4" className="image-box" />
      </div>
    </section>
  );
};

export default Kosmetikos;
