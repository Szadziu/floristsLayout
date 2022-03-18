import React from 'react';
import arrow from '../../assets/icons/down-arrow.png';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center grow-1 text-5xl uppercase text-white">
      <img src={arrow} alt="arrow-down" className="w-14" />
    </footer>
  );
};

export default Footer;
