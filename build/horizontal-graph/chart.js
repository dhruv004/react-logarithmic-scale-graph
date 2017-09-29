"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chart = function chart(_ref) {
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children;

  return _react2.default.createElement(
    "svg",
    { width: width, height: height },
    children
  );
};

exports.default = chart;