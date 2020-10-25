import React from 'react';
import '../assets/styles/Information.scss';
import goodhands from '../assets/images/GoodHands.png';
import Button from './Button';

const Information = ({ title }) => (
  <section className='Information'>
    <img className='Information__img' src={goodhands} alt='Good hands Img' />
    <div className='Information__content'>
      <hr className='Information__content--line' />
      <h1 className='Information__content--title'>{title}</h1>
      <p className='Information__content--paragraph'>You’re In good hands It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
      <Button mode='darkred' text='Learn more' />
    </div>
  </section>
);

export default Information;
