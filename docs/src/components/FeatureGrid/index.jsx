import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";
import {CardVideoPlayer} from "@site/src/components/CardVideoPlayer";

/**
 * @typedef {{name: string, component: string}} ComponentEntry
 */

/**
 * @param {{ item: ComponentEntry, basePath: string }}
 */
function Card({ item, basePath }) {
  return (
    <div className={styles.card} key={item.img}>
      <div className={styles.imageContainer}>
        {item.video && <CardVideoPlayer src={`${basePath}${item.video}`} className="custom-video-card"/>}
        {item.img && <img src={`${basePath}${item.img}`} alt="" className={styles.image}/>}
      </div>
      <div>{item.name}</div>
    </div>
  );
}

/**
 * @param {{ items: ComponentEntry[], basePath: string }}
 */
export default function FeatureGrid({ items, basePath = "/" }) {
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
