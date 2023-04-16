import React, { useState } from 'react';
import Card from './Card';
import './Cards.css';
import { faGoodreads, faImdb, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import ContentComponent from './ContentComponent';

const CardsHolder = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="cards grid grid-cols-1 sm:grid-row-4 lg:grid-row-4 gap-7">
        <Card
          title="IMDB" backgroundClass="card__imdb"
          icon={faImdb}
          link="https://www.imdb.com/user/ur85082594/"
          contents={<ContentComponent userId='wingedbeast-66524' favorites=' Céline Sciamma - Portrait of a Lady on Fire (2020), Shinji Aoyama - Eureka (2000),  Elem Klimov - Come and See (1985)' />}
          isActive={activeCard === 0}
          onCardClick={() => handleCardClick(0)}
        />
        <Card
          title="Rateyourmusic"
          backgroundClass="card__rateyourmusic"
          icon={faMusic} link="https://rateyourmusic.com/~potatomat0"
          contents={<ContentComponent userId="@potatomat0" favorites="Kayo Dot - Choirs of The Eyes, Opeth - Black Waterpark, Bark Psychosis - ///Codename:Dustsucker" />}
          isActive={activeCard === 1}
          onCardClick={() => handleCardClick(1)} />
        <Card
          title="Good Reads"
          backgroundClass="card__goodreads"
          icon={faGoodreads}
          link="https://www.goodreads.com/user/show/88981685-hoang-nh-t"
          contents={<ContentComponent userId='@trouted' favorites='i hate books' />}
          isActive={activeCard === 2}
          onCardClick={() => handleCardClick(2)} />
        <Card
          title="Instagram"
          backgroundClass="card__instagram"
          icon={faInstagram} link="https://www.instagram.com/kappa_scute/"
          contents={<ContentComponent userId='@kappa_scute' />}
          isActive={activeCard === 3}
          onCardClick={() => handleCardClick(3)}
        />
      </div>
    </div>
  );
};

export default CardsHolder;