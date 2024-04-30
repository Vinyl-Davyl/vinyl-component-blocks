import { ICheckboxProps } from "@/utils/types";
import React, { FC } from "react";

interface props extends ICheckboxProps {}

export const Checkbox: FC<props> = ({ color, ...props }) => {
  return (
    <div>
      <input
        type={"checkbox"}
        style={{
          accentColor: color,
          marginRight: "10px",
          ...props.inputStyle,
        }}
        {...props.inputAttributes}
        {...props}
      />
      <label htmlFor={props.id}>{props.name}</label>
      <br />
    </div>
  );
};
