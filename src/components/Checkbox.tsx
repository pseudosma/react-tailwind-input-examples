import React from "react";
import { Color, getCheckboxColorClasses } from "../utils";

interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "className"
  > {
  color: Color;
  coloredBorder?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
  const { color, coloredBorder, disabled, ...otherProps } = props;

  //input[type="checkbox"] is overridden in index.css
  return (
    <input
      className={
        "h-4 w-4 focus:ring-transparent border-2 rounded " +
        getCheckboxColorClasses(color, coloredBorder, disabled)
      }
      type="checkbox"
      {...otherProps}
    />
  );
};
