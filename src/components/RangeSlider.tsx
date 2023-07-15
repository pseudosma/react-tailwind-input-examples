import React from "react";
import { Color, getBackgroundColorClasses } from "../utils";

interface RangeProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "className" | "size"
  > {
  trackColor?: Color;
}

export const RangeSlider = (props: RangeProps) => {
  const { trackColor, ...otherProps } = props;

  // there are browser specific styles that need to be overridden to make this component
  // consistent across browsers, so the 'primary-slider' class is used in index.css.

  return (
    <input
      type="range"
      className={
        (trackColor ? getBackgroundColorClasses(trackColor) : "bg-gray-400") +
        " " +
        "primary-slider h-1 cursor-pointer rounded-lg input-accent-primary appearance-none" // just in case the css overrides don't work, we include the correct accent color
      }
      {...otherProps}
    />
  );
};
