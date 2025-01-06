import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={`${styles.card} ${props.minWidth ? '' : styles.maxWidth } ${props.clickable ? styles.clickable : ''} ${props.flex ? styles.flex : ''}`}>
      {props.children}
    </div>
  );
}
