import React, { forwardRef } from "react";
import SvgPowerPoint from "./PowerPoint";

export const PowerPointIcon = forwardRef<
  SVGSVGElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return <SvgPowerPoint ref={ref} {...props} />;
});
