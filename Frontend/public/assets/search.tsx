import React from "react";
type Props={
  className?:string;
  width?:string;
  height?:string;
}

const Icon: React.FC<Props> = ({ className ,width , height}: Props) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="#717288"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 20l-3.778-3.784m2.094-5.058a7.158 7.158 0 11-14.316 0 7.158 7.158 0 0114.316 0v0z"
      ></path>
    </svg>
  );
}

export default Icon;