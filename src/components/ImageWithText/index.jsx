import React from "react";
import styles from "./styles.module.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function ImageWithText({ children, imagePath}) {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
          <PhotoProvider>
            <PhotoView src={imagePath.default}>
              <img
                src={imagePath.default}
                alt=""
                style={{
                  borderRadius: "1rem",
                  objectFit: "fill",
                }}
              />
            </PhotoView>
          </PhotoProvider>
      </div>
      <div>{children}</div>
    </div>
  );
}
