import React from 'react';
import List from './List/List';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav
      transition={{ type: 'spring', stiffness: 100, duration: 1, damping: 10 }}
      className=" grow-1"
    >
      <List />
    </motion.nav>
  );
};

export default Nav;
