import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';
import Card from '../Card_Component/Card';

export default function FAQ(props) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
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
              {openItems.has(index) ? <ChevronUp className={styles.arrow} /> : <ChevronDown className={styles.arrow} />}
            </div>
            {openItems.has(index) && <div className={styles.answer}>{item.answer}</div>}
          </div>
        ))}
      </div>
    </Card>
  );
}