import { Star } from 'lucide-react';
import styles from './Rating.module.css'

export default function Rating(props) {
  return (
    <div className={styles.rating}>
      <p>{ props.rating.raters }</p>
      <Star className={`${styles.star} ${styles.active}`} />
      <Star className={`${styles.star} ${Math.round(props.rating.stars) > 1 ? styles.active : ''}`} />
      <Star className={`${styles.star} ${Math.round(props.rating.stars) > 2 ? styles.active : ''}`} />
      <Star className={`${styles.star} ${Math.round(props.rating.stars) > 3 ? styles.active : ''}`} />
      <Star className={`${styles.star} ${Math.round(props.rating.stars) > 4 ? styles.active : ''}`} />
    </div>
  )
}