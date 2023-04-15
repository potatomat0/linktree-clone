import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Cards.css"

const Card = ({ title, backgroundClass, icon, link, contents }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`card ${backgroundClass} ${isActive ? 'card__active' : ''}`} onClick={handleCardClick}>
      <div className="card-content">
        <div className="card-icon">
          <p className="unclickable">{title}</p>
          <div>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <FontAwesomeIcon icon={icon} aria-hidden="true"></FontAwesomeIcon>
            </a>
          </div>
        </div>
        {isActive && (
          <div className="additional-content">
            {contents}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
