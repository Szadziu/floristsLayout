import React from 'react';
import Item from './Item/Item';

const List = () => {
  return (
    <ul className="flex justify-around items-center h-full">
      <Item className="bg-nav-rose" />
      <Item className="bg-nav-gerbera" />
      <Item className="bg-nav-crocus" />
    </ul>
  );
};

export default List;
