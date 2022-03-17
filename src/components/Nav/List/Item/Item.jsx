import React from 'react';

const Item = ({ className: passedClasses, ...props }) => {
  // const className = classNames

  return (
    <li>
      <a
        href={props.link}
        className="block rounded-full bg-cover bg-center bg-no-repeat w-20 h-20"
      ></a>
    </li>
  );
};

export default Item;
