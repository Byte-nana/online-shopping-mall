import { Children } from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant, className }) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={classes} type='button'>
      {children}
    </button>
  );
}
