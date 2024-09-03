import React from "react";

type Props = {
  className?: string;
  width?:string;
  height?:string;
};

const Icon: React.FC<Props> = ({ className ,width , height}: Props) =>  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 13"
      className={className}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 11.667h15.59a.501.501 0 00.49-.402l1.8-9a.5.5 0 00-.49-.598H1"
      ></path>
    </svg>
  );
}

export default Icon;
