import React from "react";
import PropTypes from "prop-types";

export const Bars = props => (
  <svg
    width={props.width}
    height={props.height}
    fill={props.color}
    viewBox="0 0 135 140"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={props.label}
  >
    <rect y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.5s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="30" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.25s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="60" width="15" height="140" rx="6">
      <animate
        attributeName="height"
        begin="0s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="90" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.25s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="120" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.5s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

Bars.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  label: PropTypes.string
};

Bars.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
