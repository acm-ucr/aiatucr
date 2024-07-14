import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
const Card = ({ title, description, github, linkedin }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="icons">
        <a href={github}><FaGithub size={30} /></a>
        <a href={linkedin}><FaLinkedin size={30} /></a>
      </div>
    </div>
  );
};

export default Card;