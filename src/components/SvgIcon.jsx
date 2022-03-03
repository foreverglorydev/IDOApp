import React from "react";

// interface SvgIconProps {
//   width: string;
//   height: string
//   viewBox: string;
//   fill: string;
//   children: any;
// };

const SvgIcon = ({ width, height, viewBox, fill, children }: SvgIconProps) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill}>
      {children}
    </svg>
  );
};

export default SvgIcon;
