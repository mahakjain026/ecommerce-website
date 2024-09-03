import React from "react";
type Props={
  className?:string;
  width?:string;
  height?:string;
}

const Icon: React.FC<Props> = ({ className , width ="8" , height="13"}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="13"
      fill="none"
      viewBox="0 0 8 13"
      className={className}
    >
      <path
        fill="#000"
        d="M4.95 6.636L0 1.686 1.414.272l6.364 6.364L1.414 13 0 11.586l4.95-4.95z"
      ></path>
    </svg>
  );
}

export default Icon;
