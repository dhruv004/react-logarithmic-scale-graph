'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _barChart = require('./horizontal-graph/bar-chart');

var _barChart2 = _interopRequireDefault(_barChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalClass = function (_Component) {
    _inherits(HorizontalClass, _Component);

    function HorizontalClass() {
        _classCallCheck(this, HorizontalClass);

        return _possibleConstructorReturn(this, (HorizontalClass.__proto__ || Object.getPrototypeOf(HorizontalClass)).apply(this, arguments));
    }

    _createClass(HorizontalClass, [{
        key: 'render',
        value: function render() {
            var input = [{
                text: 'one',
                alternateText: '1',
                level: 1,
                v: 1
            }, {
                text: 'two',
                alternateText: '2',
                level: 2,
                v: 2
            }, {
                text: 'three',
                alternateText: '3',
                level: 3,
                v: 3
            }, {
                text: 'four',
                alternateText: '4',
                level: 4,
                v: 4
            }, {
                text: 'five',
                alternateText: '5',
                level: 5,
                v: 5
            }, {
                text: 'six',
                alternateText: '6',
                level: 6,
                v: 6
            }, {
                text: 'seven',
                alternateText: '7',
                level: 7,
                v: 7
            }];
            return _react2.default.createElement(
                'h1',
                null,
                _react2.default.createElement(_barChart2.default, { input: input })
            );
        }
    }]);

    return HorizontalClass;
}(_react.Component);

exports.default = HorizontalClass;