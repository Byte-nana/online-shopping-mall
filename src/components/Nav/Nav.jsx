import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCartLine } from 'react-icons/ri';

export default function Nav() {
  let [items] = useState(['Home', 'Menu', 'About Us', 'Contact']);
  let [search, setSearch] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>VeggiePop</h1>
      <nav>
        <ul className={styles.menu}>
          {items.map((item) => (
            <li className={styles.items}>{item}</li>
          ))}
        </ul>
      </nav>

      <div className={styles.wrapper}>
        <div className={styles.actions}>
          {search && <input type='text' className={styles.actions__input} />}
          <FiSearch
            className={styles.actions__search}
            onClick={() => {
              setSearch(true);
            }}
          />
          <RiShoppingCartLine className={styles.actions__cart} />
        </div>
        <div className={styles.auth}>
          <a className={styles.auth__sign} href='#'>
            Sign Up
          </a>
          <a className={styles.auth__login} href='#'>
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
