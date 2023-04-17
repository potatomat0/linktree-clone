
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Cards.css';
import 'tailwindcss/tailwind.css';


const Card = ({
  title,
  backgroundClass,
  icon,
  link,
  contents,
  isActive,
  onCardClick,
}) => {
  return (
    <div
      className={`card ${backgroundClass} ${isActive ? 'card__active' : ''
        }`}
      onClick={onCardClick}
    >
      <div className="card-content">
        <div className="card-icon flex items-center justify-between">
          <FontAwesomeIcon icon={faAngleDown} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="text-lg font-semibold"
          >
            {title}
          </a>
          <div>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <FontAwesomeIcon
                icon={icon}
                aria-hidden="true"
                className="text-xl"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        {isActive && (
          <div className="additional-content mt-4 text-md">
            {contents}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;