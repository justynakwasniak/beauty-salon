import React from "react";

const Team: React.FC = () => {
  const team = [
    { name: "Anna", role: "Stylist" },
    { name: "Maria", role: "Nail Specialist" },
    { name: "Joanna", role: "Cosmetologist" },
  ];

  return (
    <section>
      <h2>Meet Our Team</h2>
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            {member.name} - {member.role}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
