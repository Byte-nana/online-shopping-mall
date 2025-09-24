import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCartLine } from 'react-icons/ri';
import Button from '../Button/Button';

export default function Nav() {
  let [items] = useState(['Home', 'Menu', 'About Us', 'Contact']);
  let [search, setSearch] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>VeggiePop</h1>
      <nav>
        <ul className={styles.menu}>
          {items.map((item, i) => (
            <li className={styles.items} key={i}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.wrapper}>
        <div className={styles.actions}>
          {search && <input type='text' className={styles.actions__input} />}
          <FiSearch
            className={styles.actions__search}
            onClick={() => {
              setSearch((prev) => !prev);
            }}
          />
          <RiShoppingCartLine className={styles.actions__cart} />
        </div>
        <div className={styles.auth}>
          <Button variant='ghost'>Sign Up</Button>
          <Button variant='solid'>Login</Button>
        </div>
      </div>
    </header>
  );
}
