// src/components/SocialMediaLinks.js

import React from 'react';

function SocialMediaLinks() {
  const socialMedia = [
    { name: 'GitHub', icon: '/github.png', link: 'https://github.com/Durgaprasanth9492' },
    { name: 'LinkedIn', icon: '/linkedin.png', link: 'www.linkedin.com/in/durga-prasanth-kampana-a0aa4a235' },
 
  ];

  return (
    <div className="social-media-links">
      {socialMedia.map((platform, index) => (
        <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
          <img src={platform.icon} alt={platform.name} />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
