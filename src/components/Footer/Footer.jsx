import React from 'react';
import arrow from '../../assets/icons/down-arrow.png';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center grow-1 text-5xl uppercase text-white">
      <motion.img
        whileHover={{ scale: 1.1, cursor: 'pointer' }}
        whileTap={{ scale: 0.9 }}
        src={arrow}
        alt="arrow-down"
        className="w-14"
      />
    </footer>
  );
};

export default Footer;
