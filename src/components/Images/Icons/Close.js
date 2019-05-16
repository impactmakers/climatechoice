import React from "react";
import PropTypes from "prop-types";

export default function Close({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16">
      <path
        d="M8,5.9L2.5,0.4l0,0C1.9-0.1,1-0.1,0.4,0.4l0,0c-0.6,0.6-0.6,1.5,0,2.1L5.9,8l-5.5,5.5l0,0
      c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0L8,10.1l5.5,5.5c0.6,0.6,1.5,0.6,2.1,0c0.6-0.6,0.6-1.5,0-2.1l0,0L10.1,8l5.5-5.5l0,0
      c0.6-0.6,0.6-1.5,0-2.1l0,0c-0.6-0.6-1.5-0.6-2.1,0l0,0L8,5.9z"
      />
    </svg>
  );
}

Close.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

Close.defaultProps = {
  width: 16,
  height: 16
};
