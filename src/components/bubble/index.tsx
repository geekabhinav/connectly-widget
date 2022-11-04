import React, { MouseEventHandler } from "react";
import clsx from "clsx";
import noop from "lodash/noop";
import "./index.scss";

export interface BubbleProps {
  size: "large" | "small" | "xs";
  isCircle: boolean;
  extraClasses: string;
  onHover: MouseEventHandler
  onLeave: MouseEventHandler
  onClick: MouseEventHandler
}

export const Bubble: React.FC<Partial<BubbleProps>> = ({
  size = "large",
  isCircle = false,
  extraClasses,
  onHover,
  onLeave,
  onClick,
  children
}) => {
  const classNames = clsx({
    "bubble": true,
    [size]: true,
    "circle": isCircle
  }, extraClasses ?? "");
  return <a className={classNames}
            onClick={(onClick || noop)}
            onMouseOver={(onHover || noop)}
            onMouseEnter={(onHover || noop)}
            onMouseLeave={(onLeave || noop)}>
    {children}
  </a>;
}
