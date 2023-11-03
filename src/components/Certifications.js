import React from 'react';

function Certifications() {
  const certifications = [
    {
      name: 'Certified AWS Solutions Architect - Associate',
      organization: 'Amazon Web Services (AWS)',
      date: 'Jan 2023 - May 2023',
    },
    {
      name: 'Google Cloud Professional Data Engineer',
      organization: 'Google Cloud',
      date: 'Jun 2022 - Dec 2022',
    },
    // Add more certifications as needed
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>
            <h3>{certification.name}</h3>
            <p>{certification.organization}</p>
            <p>{`Date of Completion: ${certification.date}`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;