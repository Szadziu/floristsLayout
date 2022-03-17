import React from 'react';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <section className="h-screen flex flex-col bg-main-pattern">
      <Nav />
      <main className=" grow-3 bg-green-200">main</main>
      <footer className=" grow-1 bg-yellow-300">stopka</footer>
    </section>
  );
};

export default App;
