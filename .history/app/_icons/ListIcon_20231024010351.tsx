import React from "react";

const ListIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 29"
      id="list"
      {...props}
    >
      <circle cx={5} cy="5.5" r="2.5" />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12.5 6h14"
      />
      <circle cx={5} cy="14.5" r="2.5" />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12.5 15h14"
      />
      <circle cx={5} cy="23.5" r="2.5" />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12.5 24h14"
      />
    </svg>
  );
};

export default ListIcon;
