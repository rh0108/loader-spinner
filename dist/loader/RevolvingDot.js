(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.RevolvingDot = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RevolvingDot = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var RevolvingDot = exports.RevolvingDot = function RevolvingDot(svg) {
    return _react2.default.createElement(
      "svg",
      {
        version: "1.1",
        width: svg.width,
        height: svg.height,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        "aria-label": svg.label
      },
      _react2.default.createElement("circle", {
        fill: "none",
        stroke: svg.color,
        strokeWidth: "4",
        cx: "50",
        cy: "50",
        r: "44",
        style: { opacity: 0.5 }
      }),
      _react2.default.createElement(
        "circle",
        { fill: svg.color, stroke: svg.color, strokeWidth: "3", cx: "8", cy: "54", r: "6" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0 50 48",
          to: "360 50 52",
          repeatCount: "indefinite"
        })
      )
    );
  };
});