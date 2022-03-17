import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ className: passedClasses, ...props }) => {
  return (
    <li>
      <Link
        to="/roses"
        className={`block rounded-full bg-cover bg-center bg-no-repeat w-20 h-20 ${passedClasses}`}
      ></Link>
    </li>
  );
};

export default Item;
