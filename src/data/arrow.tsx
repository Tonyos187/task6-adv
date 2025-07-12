import React from "react";

interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  stroke?: string;
}

// Main Arrow (diagonal)
const Arrow: React.FC<ArrowProps> = ({ className = '', ...props }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M1 11L11 1M11 1H1M11 1V11"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Left Arrow
export const LeftArrow: React.FC<ArrowProps> = ({ className = '', ...props }) => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M12.8334 7.49984H1.16675M1.16675 7.49984L7.00008 13.3332M1.16675 7.49984L7.00008 1.6665"
      stroke="#667085"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Right Arrow
export const RightArrow: React.FC<ArrowProps> = ({ className = '', ...props }) => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M1.16675 7.49984H12.8334M12.8334 7.49984L7.00008 1.6665M12.8334 7.49984L7.00008 13.3332"
      stroke="#667085"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
