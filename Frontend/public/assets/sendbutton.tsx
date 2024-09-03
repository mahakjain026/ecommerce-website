import React from "react";
type Props={
  className?:string;
  width?:string;
  height?:string;
}

const Icon: React.FC<Props> = ({ className ,width , height}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      fill="none"
      viewBox="0 0 22 20"
      className={className}
    >
      <path
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.912 10H3L1.023 2.135A.662.662 0 011 1.995c-.022-.721.772-1.221 1.46-.891L21 10 2.46 18.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 01.033-.186L2.5 13"
      ></path>
    </svg>
  );
}

export default Icon;