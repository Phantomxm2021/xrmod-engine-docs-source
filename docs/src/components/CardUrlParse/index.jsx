import React from "react";
import styles from "./styles.module.css";
import VideoPlayer from "@site/src/components/VideoPlayer";

export default function CardUrlParse({
  imagePath,
  videoPath,
  title,
  description,
  jumpUrl,
}) {
  return (
    <a className="homepage-card" href={jumpUrl} target="blank">
      <h4>
        <b>{title}</b>
      </h4>
      <p>{description}</p>
      {/* {imagePath && <Image img={imagePath} className={styles.image} />} */}
      {imagePath && <img src={imagePath.default} className={styles.image} />}
      {videoPath && (
        <VideoPlayer src={videoPath} className="custom-video-showcase" />
      )}
    </a>
  );
}
