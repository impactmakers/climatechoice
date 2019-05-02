import React from "react";

export default function Email({ fillColor }) {
  return (
    <svg height="18" viewBox="0 0 24 18" width="24">
      <path
        fill={fillColor}
        d="M23.993 2.787l.007.213v12c0 1.657-1.343 3-3 3h-18c-1.657 0-3-1.343-3-3v-12c0-.256.032-.504.092-.742l11.837 6.834c.18.104.378.147.571.136.193.011.391-.033.571-.136zm-.849-1.885l-10.644 6.145-11.241-6.49c.491-.35 1.092-.557 1.741-.557h18c.84 0 1.599.345 2.144.901z"
      />
    </svg>
  );
}
