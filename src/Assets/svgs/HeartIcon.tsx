import React from 'react';

interface SVGProps {
  fill: string;
  stroke: string
}

export const HeartIcon: React.FC<SVGProps> =  ({fill, stroke}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="24"
    viewBox="0 0 24 24"
    stroke={stroke}
    fill={fill}
  >
    <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
  </svg>
);
