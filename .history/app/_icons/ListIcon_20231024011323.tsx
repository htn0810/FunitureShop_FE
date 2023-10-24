import React from "react";

const ListIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="list"
      {...props}
    >
      <g data-name="Layer 2">
        <g data-name="list">
          <circle cx="4" cy="7" r="1"></circle>
          <circle cx="4" cy="12" r="1"></circle>
          <circle cx="4" cy="17" r="1"></circle>
          <rect width="14" height="2" x="7" y="11" rx=".94" ry=".94"></rect>
          <rect width="14" height="2" x="7" y="16" rx=".94" ry=".94"></rect>
          <rect width="14" height="2" x="7" y="6" rx=".94" ry=".94"></rect>
        </g>
      </g>
    </svg>
  );
};

export default ListIcon;
