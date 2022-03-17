import React from 'react';

const Section = ({ children }) => {
  return (
    <section className="h-screen flex flex-col bg-main-pattern text-center">
      {children}
    </section>
  );
};

export default Section;
