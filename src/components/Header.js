import React from 'react';
import Search from './Search';
import Likes from './Likes';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Search />
      <Likes />
    </header>
  );
};

export default Header;
