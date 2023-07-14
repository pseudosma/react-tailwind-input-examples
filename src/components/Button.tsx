import React from "react";
import { Color, getButtonColorClasses } from "../utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
}

export const Button = (props: React.PropsWithChildren<Props>) => {
  const { color = "primary", className = "", disabled, ...otherProps } = props;

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={
        `button flex justify-center m-0 inline-block 
        items-center overflow-visible rounded border 
        border-solid px-3 py-2 text-center align-middle 
        text-xs font-normal normal-case leading-relaxed 
        text-white shadow-sm focus:outline-none 
        focus:ring-2 focus:ring-offset-2
       ` +
        " " +
        className +
        " " +
        getButtonColorClasses(color, disabled)
      }
      {...otherProps}
    >
      {props.children}
    </button>
  );
};
