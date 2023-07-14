import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  position?: "top" | "bottom";
  offset?: number;
  children: React.ReactNode;
};

type AbsoluteStyle = {
  translate: string;
};

export const calculateStyle = (
  parentRect: DOMRect,
  tooltipRect: DOMRect,
  offset: number,
  position?: "top" | "bottom"
): AbsoluteStyle => {
  // the tooltip will start off even with the bottom of the parent
  // the default state is to treat it like we need to place it above the element
  let y = offset;

  if (position) {
    if (position === "top") {
      y = -(parentRect.height * 2) - offset;
    }
  } else if (tooltipRect.y < 0) {
    // no position is set, but the default position is above the element, place it below
    y = tooltipRect.height + offset;
  }

  return {
    translate: `${parentRect.width / 2 - tooltipRect.width / 2}px ${y}px`
  };
};

export const Tooltip = (props: Props) => {
  const { children, text, position = "top", offset = 8 } = props;
  const [style, setStyle] = useState<AbsoluteStyle>();

  const childRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const tooltipRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (childRef.current && tooltipRef.current) {
      setStyle(
        calculateStyle(
          childRef.current.getBoundingClientRect(),
          tooltipRef.current.getBoundingClientRect(),
          offset,
          position
        )
      );
    }
  }, [offset, position]);

  //the tooltip classes used here are defined in index.css, and would normally be replaced by group-hover classes
  return (
    <div className="inline-block cursor-default">
      <div className="tooltip-wrapper" ref={childRef}>
        {children}
      </div>
      <div
        className="tooltip absolute z-50 mb-10 -translate-y-full rounded bg-black"
        ref={tooltipRef}
        style={style}
      >
        <div className="relative max-w-xs break-words p-3 text-center text-xs text-white">
          {text}
        </div>
      </div>
    </div>
  );
};
