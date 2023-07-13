import React, { useState } from 'react';
import Card from './Card';
import './Cards.css';
import { faGoodreads, faImdb, faInstagram, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faMusic, faSquareRss, faPencil, faPen} from '@fortawesome/free-solid-svg-icons';
import ContentComponent from './ContentComponent';

const CardsHolder = ({language}) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <div className="container flex w-auto justify-center px-4 md:px-8">
      <div className="cards grid grid-cols-1 sm:grid-row-4 lg:grid-row-4 gap-7">
        <Card
          title="some goofy sketches" backgroundClass="card__other"
          icon={faPencil}
          link="https://openprocessing.org/user/310786/"
          contents={
            <ContentComponent
              additional={'i write goofy p5js sketches on open processings'}
              language={language}
            />}
          isActive={activeCard === 6}
          onCardClick={() => handleCardClick(6)}
        />
        <Card
          title="IMDB" backgroundClass="card__imdb"
          icon={faImdb}
          link="https://www.imdb.com/user/ur85082594/"
          contents={
            <ContentComponent
              userId='wingedbeast-66524'
              favorites=' Céline Sciamma - Portrait of a Lady on Fire (2020), Shinji Aoyama - Eureka (2000),  Elem Klimov - Come and See (1985)'
              language={language}
            />}
          isActive={activeCard === 0}
          onCardClick={() => handleCardClick(0)}
        />
        <Card
          title="rateyourmusic"
          backgroundClass="card__rateyourmusic"
          icon={faMusic} link="https://rateyourmusic.com/~potatomat0"
          contents={
            <ContentComponent
              userId="@potatomat0"
              favorites="Kayo Dot - Choirs of The Eyes, Opeth - Black Waterpark, Bark Psychosis - ///Codename:Dustsucker"
              language={language}
            />}
          isActive={activeCard === 1}
          onCardClick={() => handleCardClick(1)} />
        <Card
          title="goodreads"
          backgroundClass="card__goodreads"
          icon={faGoodreads}
          link="https://www.goodreads.com/user/show/88981685-hoang-nh-t"
          contents={
            <ContentComponent
              userId='@trouted'
              favorites='none'
              language={language}
            />}
          isActive={activeCard === 2}
          onCardClick={() => handleCardClick(2)} />
        <Card
          title="instagram"
          backgroundClass="card__instagram"
          icon={faInstagram} link="https://www.instagram.com/kappa_scute/"
          contents={
            <ContentComponent
              userId='@kappa_scute'
              language={language}
            />}
          isActive={activeCard === 3}
          onCardClick={() => handleCardClick(3)}
        />
        <Card
          title="personal blog"
          backgroundClass="card__other"
          icon={faSquareRss} link="https://potatomat0.github.io"
          contents={
            <ContentComponent
              additional={'i write random unhinged non-computer-science-related contents'}
              language={language}
            />}
          isActive={activeCard === 4}
          onCardClick={() => handleCardClick(4)}
        />
        <Card
          title="some random indie games idk"
          backgroundClass="card__other"
          icon={faItchIo} link="https://itch.io/c/2496079/random-games-idk"
          contents={
            <ContentComponent
              additional={'i write random unhinged non-computer-science-related contents'}
              language={language}
            />}
          isActive={activeCard === 5}
          onCardClick={() => handleCardClick(5)}
        />
      </div>
    </div>
  );
};

export default CardsHolder;