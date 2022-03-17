import React from 'react';

const List = () => {
  return (
    <ul className="flex justify-around items-center h-full">
      <li>
        <a
          href="#"
          className="block rounded-full bg-cover bg-center bg-no-repeat w-20 h-20 bg-nav-rose"
        ></a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-full bg-cover bg-center bg-no-repeat w-20 h-20 bg-nav-gerbera"
        ></a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-full bg-cover bg-center bg-no-repeat w-20 h-20 bg-nav-crocus"
        ></a>
      </li>
    </ul>
  );
};

export default List;
