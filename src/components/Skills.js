// src/components/Skills.js

import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', icon: '/html.png' },
    { name: 'CSS', icon: '/css.png' },
    { name: 'JAVA', icon: '/java.png' },
    { name: 'PYTHON', icon: '/python.jpeg' },
    
    // Add more skills as needed
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
