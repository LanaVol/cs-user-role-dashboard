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
export const SvgDeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
    className={`w-full h-auto`}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 15v-3M14 15v-3M3 7h18v0c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C18 8.602 18 9.068 18 10v6c0 1.886 0 2.828-.586 3.414C16.828 20 15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586C6 18.828 6 17.886 6 16v-6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C4.398 7 3.932 7 3 7v0ZM10.068 3.37c.114-.106.365-.2.715-.267A6.68 6.68 0 0 1 12 3c.44 0 .868.036 1.217.103.35.067.6.161.715.268"
    />
  </svg>
);
