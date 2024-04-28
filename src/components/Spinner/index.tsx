import React, { CSSProperties, HTMLAttributes } from "react";
import "./index.css";

interface props {
  spinnerAttributes?: HTMLAttributes<HTMLDivElement>;
  spinnerStyle?: CSSProperties;
}

export const Spinner = ({ spinnerAttributes, spinnerStyle }: props) => {
  return (
    <div className="loader" style={spinnerStyle} {...spinnerAttributes}></div>
  );
};
