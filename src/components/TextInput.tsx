import React from "react";
import { Color, getAccentColorClasses } from "../utils";

interface Props
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "className"
  > {
  accentColor: Color;
}

export const TextInput = (props: Props) => {
  const { accentColor, ...otherProps } = props;

  return (
    <input
      type="text"
      className={
        "block p-2 w-full rounded-lg border border-gray-500 bg-gray-100 p-2.5 text-sm " +
        getAccentColorClasses(accentColor)
      }
      {...otherProps}
    />
  );
};
