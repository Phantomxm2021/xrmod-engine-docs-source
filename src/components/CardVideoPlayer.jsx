import React from "react";
import clsx from "clsx";

export const CardVideoPlayer = ({ src, mobile, className, ...rest }) => (
  <video
    className={clsx(className, mobile && "mobile")}
    src={src}
    autoPlay
    loop
    controls={false}
    muted
    {...rest}
  />
);
