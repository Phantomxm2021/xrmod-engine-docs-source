import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';

/**
 * @typedef {{name: string, component: string}} ComponentEntry
 */

/**
 * @param {{ item: ComponentEntry, basePath: string }}
 */
function Card({ item,basePath }) {
  return (
    <a className={styles.card}  href={item.sourcecode} target="blank" key={item.img}>
      <div className={styles.imageContainer}>
        <img src={`${basePath}/${item.img}`} alt="" className={styles.image} />
      </div>
      <div>{item.name}</div>
    </a>
  );
}

/**
 * @param {{ items: ComponentEntry[], basePath: string }}
 */
export default function UrlGrid({ items, basePath = '/' }) {
  items.sort((a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {items.map((item) => (
          <Card key={item.img} item={item} basePath={basePath} />
        ))}
      </div>
    </div>
  );
}
