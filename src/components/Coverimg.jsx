import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const CoverImage = ({
  url,
  height,
  padding = 2,
  fit = "cover",
  borderRadius = "0.5rem",
}) => (
  // <div
  //   style={{
  //     height: height,
  //     paddingBottom: padding + "rem",
  //   }}
  // >
  //   <Image
  //     img={url}
  //     style={{
  //       objectFit: fit,
  //       width: "100%",
  //       height: "100%",
  //       borderRadius: borderRadius,
  //     }}
  //   ></Image>
  // </div>

  <PhotoProvider>
    <PhotoView src={url.default}>
      <div style={{ height: height }}>
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
      </div>
    </PhotoView>
  </PhotoProvider>
);
