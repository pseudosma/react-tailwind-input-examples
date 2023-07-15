import { Color, getCheckboxColorClasses } from "../utils";
import React from 'react';

interface RadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "className"
  > {
  coloredBorder?: boolean;
  color: Color;
}

export const RadioButton = (props: RadioProps) => {
  const { color, coloredBorder, disabled, ...otherProps } = props;

  //input[type="radio"] is overridden in index.css
  return (
    <input
      className={
        "h-5 w-5 border-2 focus:ring-transparent " +
        getCheckboxColorClasses(color, coloredBorder, disabled)
      }
      disabled={disabled}
      type="radio"
      {...otherProps}
    />
  );
};
