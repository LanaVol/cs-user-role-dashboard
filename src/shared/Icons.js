import * as React from "react";

export const SvgCardElement = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={20}
    fill="none"
    {...props}
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

export const SvgSaveIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
    className={`w-full h-auto`}
  >
    <path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeWidth={2}
      d="m2 14 3.233 2.425a1 1 0 0 0 1.374-.167L15 6"
    />
    <path
      fill="#F5F5F5"
      fillRule="evenodd"
      d="m9.874 15.78 1.729 1.383a2 2 0 0 0 2.797-.295l8.374-10.235a1 1 0 1 0-1.548-1.266L12.852 15.6l-1.711-1.369-1.267 1.548Z"
      clipRule="evenodd"
    />
  </svg>
);

export const SvgCloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
    className={`w-full h-auto`}
  >
    <path
      stroke="#F5F5F5"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18M6 6l12 12"
    />
  </svg>
);
