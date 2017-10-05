"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

var _dataSeries = require('./data-series');

var _dataSeries2 = _interopRequireDefault(_dataSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarChart = function (_Component) {
    _inherits(BarChart, _Component);

    function BarChart() {
        _classCallCheck(this, BarChart);

        var _this = _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this));

        _this.componentDidMount = function () {
            _this.setState({
                "width": window.innerWidth
            });
            window.addEventListener('resize', _this.changeWidth);
        };

        _this.componentWillUnmount = function () {
            window.removeEventListener('resize', _this.changeWidth);
        };

        _this.changeWidth = function () {
            _this.setState({
                "width": window.innerWidth
            });
        };

        _this.state = {
            "width": 900
        };
        return _this;
    }

    _createClass(BarChart, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                sort = _props.sort,
                input = _props.input,
                color = _props.color,
                alternateColor = _props.alternateColor,
                barHeight = _props.barHeight,
                axisMargin = _props.axisMargin,
                barPadding = _props.barPadding;
            var width = this.state.width;

            var calculatedWidth = width < 767 ? width * 0.88 : width < 1024 ? width * 0.75 : width * 0.60;
            var data = input;
            var height = height = data.length * (barHeight + barPadding * 2) + axisMargin * 2;

            return _react2.default.createElement(
                _chart2.default,
                { width: calculatedWidth, height: height },
                _react2.default.createElement(_dataSeries2.default, {
                    data: data,
                    width: calculatedWidth,
                    height: height,
                    barPadding: barPadding,
                    axisMargin: axisMargin,
                    barHeight: barHeight,
                    color: color,
                    alternateColor: alternateColor,
                    sort: sort })
            );
        }
    }]);

    return BarChart;
}(_react.Component);

exports.default = BarChart;