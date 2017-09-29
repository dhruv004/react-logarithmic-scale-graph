"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Scale = require('d3-scale');

var _d3Array = require('d3-array');

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _bar = require('./bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dataSeries = function (_Component) {
    _inherits(dataSeries, _Component);

    function dataSeries() {
        _classCallCheck(this, dataSeries);

        return _possibleConstructorReturn(this, (dataSeries.__proto__ || Object.getPrototypeOf(dataSeries)).apply(this, arguments));
    }

    _createClass(dataSeries, [{
        key: 'render',
        value: function render() {
            var self = this;
            var _props = this.props,
                sort = _props.sort,
                data = _props.data,
                height = _props.height,
                width = _props.width,
                color = _props.color,
                alternateColor = _props.alternateColor,
                barHeight = _props.barHeight,
                axisMargin = _props.axisMargin,
                barPadding = _props.barPadding;


            if (sort === 'ascending') data.sort(function (p, q) {
                return p.v - q.v;
            });
            if (sort === 'descending') data.sort(function (p, q) {
                return q.v - p.v;
            });

            var ypos = axisMargin + barPadding,
                labelWidth = width * 0.25,
                margin = 20,
                availableWidth = width - labelWidth - margin;

            var xScale = d3.scaleLinear().domain([0, 1, 2, 3, 4, 5, 6, 7]).range([0, availableWidth / 30, availableWidth / 14, availableWidth / 8, availableWidth / 5, availableWidth / 3, availableWidth / 1.6, availableWidth]);

            var yScale = d3.scaleBand().domain(d3.range(data.length)).range([0, height - axisMargin]);

            var xAxis = d3.axisTop().scale(xScale).tickValues([1, 2, 3, 4, 5, 6, 7]).tickFormat(d3.format(",.0f")).tickSize(height - axisMargin);

            var bars = _underscore2.default.map(data, function (point, i) {
                if (i != 0) {
                    ypos = ypos + yScale.bandwidth();
                }
                return _react2.default.createElement(_bar2.default, { width: xScale(point.v),
                    point: point,
                    labelWidth: labelWidth,
                    totalWidth: width,
                    barHeight: barHeight,
                    ypos: ypos,
                    color: i % 2 == 0 ? color : alternateColor, key: i });
            });

            d3.select(self.refs['Xaxis']).attr("transform", "translate(" + labelWidth + "," + height + ")").call(xAxis);

            return _react2.default.createElement(
                'g',
                { className: 'chart' },
                _react2.default.createElement('line', { x1: labelWidth, y1: axisMargin + 1, x2: width, y2: axisMargin + 1, style: { "stroke": "#ddd" } }),
                _react2.default.createElement('line', { x1: labelWidth, y1: axisMargin + 1, x2: labelWidth, y2: height, style: { "stroke": "#ddd" } }),
                _react2.default.createElement('g', { ref: 'Xaxis', className: 'axisHorizontal' }),
                bars
            );
        }
    }]);

    return dataSeries;
}(_react.Component);

exports.default = dataSeries;