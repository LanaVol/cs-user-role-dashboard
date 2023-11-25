import * as React from "react";

export const SvgCardElement = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={20}
    fill="none"
    {...props}
    // className={`w-full h-auto ${className}`}
  >
    <circle cx={2} cy={2} r={2} fill="#F5F5F5" fillOpacity={0.08} />
    <circle cx={2} cy={10} r={2} fill="#F5F5F5" fillOpacity={0.08} />
    <circle cx={2} cy={18} r={2} fill="#F5F5F5" fillOpacity={0.08} />
    <circle cx={10} cy={2} r={2} fill="#F5F5F5" fillOpacity={0.08} />
    <circle cx={10} cy={10} r={2} fill="#F5F5F5" fillOpacity={0.08} />
    <circle cx={10} cy={18} r={2} fill="#F5F5F5" fillOpacity={0.08} />
  </svg>
);

export const SvgAgreeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
    className={`w-full h-auto`}
  >
    <path
      fill="#6764F1"
      d="M8.333 12.988 5.59 10.244l-1.178 1.178 3.922 3.923 8.09-8.09-1.179-1.177-6.91 6.91Z"
    />
  </svg>
);
