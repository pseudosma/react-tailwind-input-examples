import React from "react";
import { CalendarIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Color, getButtonColorClasses } from "../utils";
import "react-datepicker/dist/react-datepicker.css";

interface Props
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "onChange" | "required" | "onClick" | "type"
  > {
  color?: Color;
  disabled?: boolean;
  required?: boolean;
  onChange?: (ds: string) => void;
  selectedDateString?: string /** The date selected by the picker in string format */;
}

export const DateInput = (props: Props) => {
  const {
    color = "primary",
    disabled,
    selectedDateString,
    onChange,
    required = false,
    className = "",
    ...buttonProps
  } = props;

  return (
    <DatePicker
      popperModifiers={[
        {
          name: "arrow",
          options: {
            padding: ({ popper }: any) => popper.width / 2
          }
        }
      ]}
      customInput={
        <button
          type="button"
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
          {...buttonProps}
        >
          {selectedDateString ? null : <CalendarIcon className="h-5 pr-2" />}
          {selectedDateString || "Select Date"}
        </button>
      }
      required={required}
      disabled={disabled}
      selected={moment(selectedDateString).toDate()}
      onChange={(d: Date) => {
        if (onChange) {
          onChange(moment(d).format("MM/DD/YYYY"));
        }
      }}
    />
  );
};
