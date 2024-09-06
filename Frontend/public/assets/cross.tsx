import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18" className={className}>
    <mask
      id="mask0_2213_954"
      style={{ maskType: 'alpha' }}
      width="18"
      height="18"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#D9D9D9" d="M0 0H18V18H0z"></path>
    </mask>
    <g mask="url(#mask0_2213_954)">
      <path
        fill="#000"
        d="M4.8 14.25L3.75 13.2 7.95 9l-4.2-4.2L4.8 3.75 9 7.95l4.2-4.2 1.05 1.05-4.2 4.2 4.2 4.2-1.05 1.05-4.2-4.2-4.2 4.2z"
      ></path>
    </g>
  </svg>
);

export default Icon;
