import React from 'react';
import styles from './Products.module.css';
import Button from '../Button/Button';

export default function Products({
  image,
  name,
  price,
  description,
  allergen,
}) {
  return (
    <article className={styles.card}>
      <img className={styles.card__img} src={image} alt={name} />
      <div className={styles.wrapper}>
        <h3 className={styles.card__title}>{name}</h3>
        <p className={styles.card__price}>{price}</p>
        <p>{description}</p>
        <p className={styles.card__allergen}>{allergen}</p>
        <Button variant={'solid'} className={styles.card__btn}>
          BUY
        </Button>
      </div>
    </article>
  );
}
