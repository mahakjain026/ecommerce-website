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
      width="20"
      height="11"
      fill="none"
      viewBox="0 0 20 11"
      className={className}
    >
      <path
        fill="#EA4335"
        d="M11.24 5.25a6.52 6.52 0 014.603 1.799l3.427-3.426A11.533 11.533 0 0011.24.5 11.998 11.998 0 00.517 7.115l3.986 3.09C5.45 7.363 8.109 5.25 11.24 5.25z"
      ></path>
    </svg>
  );
}

export default Icon;
