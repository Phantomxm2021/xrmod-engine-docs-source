import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import styles from "./styles.module.css";
import clsx from "clsx";

export const CoverImage = ({
  url,
  width,
  height,
  fit = "cover",
  borderRadius = "0.5rem",
  paddingBottom='1rem',
  label,
}) => (
  <PhotoProvider>
    <PhotoView src={url.default}>
      <div
        className={clsx(styles.imgContainer)}
        style={{
          height: height,
          width: width,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom:paddingBottom,
        }}
      >
        <img
          src={url.default}
          alt=""
          style={{
            borderRadius: borderRadius,
            objectFit: fit,
            width: "100%",
            height: "100%",
          }}
        />

        {label && <div className={clsx(styles.imgLabel)}>{label}</div>}
      </div>
    </PhotoView>
  </PhotoProvider>
);
