import React from "react";
import { Color, getAccentColorClasses } from "../utils";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "className"> {
  accentColor: Color;
}

export const TextArea = (props: Props) => {
  const { accentColor, ...otherProps } = props;

  return (
    <textarea
      className={
        "block p-2 w-full rounded-lg border border-gray-500 bg-gray-100 p-2.5 text-sm " +
        getAccentColorClasses(accentColor)
      }
      {...otherProps}
    />
  );
};
