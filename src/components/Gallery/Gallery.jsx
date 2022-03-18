import React from 'react';
import FlowerImage from './FlowerImage/FlowerImage';
import { motion } from 'framer-motion';
import './gallery.styles.css';

const Gallery = () => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, duration: 1 }}
      className="gallery h-full w-full flex justify-around items-center flex-wrap"
    >
      <FlowerImage></FlowerImage>
      <FlowerImage></FlowerImage>
      <FlowerImage></FlowerImage>
      <FlowerImage></FlowerImage>
    </motion.section>
  );
};

export default Gallery;
