import React from "react";

type Props={
  className?:string;
  width?:string;
  height?:string;
}

const Icon: React.FC<Props> = ({ className , width , height}: Props) =>  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 46 46"
      className={className}
    >
      <circle cx="23" cy="23" r="23" fill="#F5F5F5"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.5 23H31m0 0l-7-7m7 7l-7 7"
      ></path>
    </svg>
  );
}

export default Icon;
