export type Color = "primary" | "warning" | "danger" | "success";

export const getBackgroundColorClasses = (color: Color) => {
  switch (color) {
    case "primary":
      return "bg-blue-500";
    case "warning":
      return "bg-yellow-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
  }
};

export const getButtonColorClasses = (
  color: Color,
  disabled?: boolean
): string => {
  switch (color) {
    case "primary":
      return (
        getBackgroundColorClasses(color) +
        " border-blue-500 " +
        (disabled
          ? ""
          : "hover:bg-blue-600 focus:border-blue-600 hover:border-blue-600")
      );
    case "warning":
      return (
        getBackgroundColorClasses(color) +
        " border-yellow-500 " +
        (disabled
          ? ""
          : "hover:bg-yellow-600 focus:border-yellow-600 hover:border-yellow-600")
      );
    case "danger":
      return (
        getBackgroundColorClasses(color) +
        " border-red-500 " +
        (disabled ? "" : "hover:bg-red-600 focus:border-red-600 hover:border-red-600")
      );
    case "success":
      return (
        getBackgroundColorClasses(color) +
        " hover:bg-green-600 focus:border-green-600 border-green-500 hover:border-green-600"
      );
  }
};

export const getBorderColorClasses = (color: Color): string => {
  switch (color) {
    case "primary":
      return "border-blue-500 hover:border-blue-600";
    case "warning":
      return "border-yellow-500 hover:border-yellow-600";
    case "danger":
      return "border-red-500 hover:border-red-600";
    case "success":
      return "border-green-500 hover:border-green-600";
  }
};

export const getCheckboxColorClasses = (
  color: Color,
  coloredBorder: boolean = false,
  disabled: boolean = false
): string => {
  let retVal = disabled
    ? ""
    : (coloredBorder
        ? getBorderColorClasses(color)
        : "border-gray-500 hover:border-gray-600") + " cursor-pointer ";
  switch (color) {
    case "primary":
      return retVal + " radio-primary text-blue-500 hover:text-blue-600";
    case "warning":
      return retVal + " radio-warning text-yellow-500 hover:text-yellow-600";
    case "danger":
      return retVal + " radio-danger text-red-500 hover:text-red-600";
    case "success":
      return retVal + " radio-success text-green-500 hover:text-green-600";
  }
};

export const getAccentColorClasses = (color: Color) => {
  switch (color) {
    case "primary":
      return "input-accent-primary focus:border-blue-600";
    case "warning":
      return "input-accent-warning focus:border-yellow-600";
    case "danger":
      return "input-accent-danger focus:border-red-600";
    case "success":
      return "input-accent-success focus:border-green-600";
  }
};
