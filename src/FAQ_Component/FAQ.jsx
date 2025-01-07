import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';
import Card from '../Card_Component/Card';

export default function FAQ(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <Card>
      <div className={styles.accordion}>
        {props.faq.map((item, index) => (
          <div className={styles.accordionItem} key={index} onClick={() => toggleItem(index)}>
            <div className={styles.accordionItemHeading}>
              <div className={styles.question}>
                {item.question}
              </div>
              {openIndex === index ? <ChevronUp className={styles.arrow} /> : <ChevronDown className={styles.arrow} />}
            </div>
            {openIndex === index && <div className={styles.answer}>{item.answer}</div>}
          </div>
        ))}
      </div>
    </Card>
  );
}