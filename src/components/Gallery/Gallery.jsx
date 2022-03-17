import React from 'react';
import FlowerImage from './FlowerImage/FlowerImage';

const Gallery = () => {
  return (
    <section className="h-full w-full flex justify-around items-center flex-wrap">
      <FlowerImage></FlowerImage>
      <FlowerImage></FlowerImage>
      <FlowerImage></FlowerImage>
      <FlowerImage></FlowerImage>
    </section>
  );
};

export default Gallery;
