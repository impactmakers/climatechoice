import React from "react";

export default function EmailIcon({ fillColor }) {
  return (
    <svg
      height="16"
      viewBox="0 0 22 16"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.1815 9.341-10.6815-8c0-.76.581-1.341 1.341-1.341h18.6815c.76 0 1.341.581 1.341 1.341l-10.6815 8zm0 2.413 10.6815-8.0445v10.9495c0 .76-.581 1.341-1.341 1.341h-18.6815c-.76 0-1.341-.581-1.341-1.341v-10.9495l10.6815 8.0445z"
        fill={fillColor}
      />
    </svg>
  );
}
