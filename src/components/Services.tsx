import React from "react";

const Services: React.FC = () => {
  const services = [
    { name: "Manicure", price: "100 PLN" },
    { name: "Pedicure", price: "120 PLN" },
    { name: "Facial", price: "150 PLN" },
    { name: "Haircut", price: "200 PLN" },
  ];

  return (
    <section>
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            {service.name} - {service.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
