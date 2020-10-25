import React from 'react';
import '../assets/styles/card.scss';
import card from '../assets/images/hotel1.jpg';
import heart from '../assets/images/corazon.png';
import bed from '../assets/images/cama.png';
import bathroom from '../assets/images/bañera.png';
import area from '../assets/images/metros.png';

const Card = ({ title }) => {
  return (
    <section className='card'>
      <img src={card} className='card__image' alt='Imagen de la Card' />
      <div className='card__body'>
        <h2 className='card__body--title'>{title}</h2>
        <img src={heart} className='card__body--heart' alt='Heart icon' />
      </div>
      <div className='card__footer'>
        <img src={bed} className='card__footer--bed' alt='beds' />
        <img src={bathroom} className='card__footer--bathroom' alt='bathroom' />
        <img src={area} className='card__footer--area' alt='area' />
      </div>
    </section>
  );
};

export default Card;