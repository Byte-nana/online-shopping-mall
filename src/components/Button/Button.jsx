import { Children } from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant }) {
  const classes = [styles.button, styles[variant]].filter(Boolean).join(' ');
  return (
    <button className={classes} type='button'>
      {children}
    </button>
  );
}
