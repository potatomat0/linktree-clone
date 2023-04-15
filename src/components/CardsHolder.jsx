import React from 'react';
import Card from "./Card"
import './Cards.css';
import { faGoodreads,faImdb,faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const CardsHolder = () => {

  const handleCardClick = ({ target }) => {
    if (target.tagName === 'A') return;
    const card = target.closest('.card');
    if (!card) return;
    const isActive = card.classList.contains('card__active');
    document.querySelector('.card__active')?.classList.remove('card__active');
    if (!isActive) card.classList.add('card__active');
  };

  return (
    <div className="cards" onClick={handleCardClick}>
      <Card title="IMDB" backgroundClass="card__imdb" icon={faImdb} link="https://www.imdb.com/user/ur85082594/" />
      <Card title="Rateyourmusic" backgroundClass="card__rateyourmusic" icon={faMusic} link="https://rateyourmusic.com/~potatomat0" />
      <Card title="Good Reads" backgroundClass="card__goodreads" icon={faGoodreads} link="https://www.goodreads.com/user/show/88981685-hoang-nh-t" />
      <Card title="Instagram" backgroundClass="card__instagram" icon={faInstagram} link="https://www.instagram.com/kappa_scute/" />
    </div>
  );
};

export default CardsHolder;