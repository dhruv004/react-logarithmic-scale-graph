"use strict";

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bar = function bar(_ref) {
      var width = _ref.width,
          barHeight = _ref.barHeight,
          color = _ref.color,
          ypos = _ref.ypos,
          labelWidth = _ref.labelWidth,
          point = _ref.point,
          totalWidth = _ref.totalWidth;

      return _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement(
                  "text",
                  { x: labelWidth - labelWidth * 0.1,
                        y: ypos + barHeight / 3,
                        textAnchor: "end",
                        fill: "#737373",
                        style: { "fontSize": 16 } },
                  point.text
            ),
            _react2.default.createElement(
                  "text",
                  { x: labelWidth - labelWidth * 0.1,
                        y: ypos + barHeight * 2 / 3,
                        textAnchor: "end",
                        fill: "#cbcbcb",
                        style: { "fontSize": 11 } },
                  point.alternateText
            ),
            _react2.default.createElement("rect", { fill: color,
                  width: width,
                  height: barHeight,
                  x: labelWidth,
                  y: ypos,
                  fillOpacity: 0.8 }),
            _react2.default.createElement(
                  "text",
                  { x: labelWidth + width + labelWidth * 0.1 >= totalWidth ? totalWidth - totalWidth * 0.01 : labelWidth + width + labelWidth * 0.1,
                        y: ypos + barHeight / 2,
                        textAnchor: "start",
                        fill: "#737373",
                        style: { "fontSize": 16 } },
                  point.v >= 1 ? point.v : ""
            )
      );
};

exports.default = bar;