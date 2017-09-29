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

var CredentialLevelEnum = {
    "BASICALLYFAMILIAR": { "name": "Basically Familiar", "level": 1, "value": "BASICALLYFAMILIAR", "text": "A typical user can earn level 1 after one week or 40 hrs of intense study" },
    "FAMILIAR": { "name": "Familiar", "value": "FAMILIAR", "level": 2, "text": "A typical user can earn level 2 after two weeks or 80 hrs of intense study" },
    "DEEPLYFAMILIAR": { "name": "Deeply Familiar", "level": 3, "value": "DEEPLYFAMILIAR", "text": "Implies that the user has about one rigorous college class's or 150 hrs worth of experience" },
    "BASICALLYQUALIFIED": { "name": "Basically Qualified", "level": 4, "value": "BASICALLYQUALIFIED", "text": "Implies that the user has about 500 hrs of sustained experience - the equivalent of 3 college classes" },
    "QUALIFIED": { "name": "Qualified", "level": 5, "value": "QUALIFIED", "text": "Suggests a level of expertise that likely took half a year or 1000 hrs to develop when working full time at the subject, or 6 college classes" },
    "HIGHLYQUALIFIED": { "name": "Highly Qualified", "value": "HIGHLYQUALIFIED", "level": 6, "text": "Indicates a level of expertise commensurate with a full year of direct experience, 2000 hours or 12 college classes" },
    "EXPERT": { "name": "Expert", "value": "EXPERT", "level": 7, "text": "Indicates two full years worth of direct, full time experience was likely needed to build this level of expertise in the subject" }
};

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

        _this.GET_DATE_IN_MMMYYYY_FORMAT = function (dateString) {
            if (!dateString) return "";
            var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
            var dateObj = new Date(dateString);

            return m_names[dateObj.getMonth()] + ", " + dateObj.getFullYear();
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
                input = _props.input;
            var width = this.state.width;

            var calculatedWidth = width < 767 ? width * 0.88 : width < 1024 ? width * 0.75 : width * 0.60;
            var data = input;
            var height = 300,
                barHeight = 35,
                axisMargin = 40,
                barPadding = 5;

            height = data.length * (barHeight + barPadding * 2) + axisMargin * 2;

            console.log(calculatedWidth);
            console.log(height);
            return _react2.default.createElement(
                _chart2.default,
                { width: calculatedWidth, height: height },
                _react2.default.createElement(_dataSeries2.default, { data: data, width: calculatedWidth, height: height, barPadding: barPadding, axisMargin: axisMargin, barHeight: barHeight, color: '#a1e3e2', alternateColor: '#fde4bb', sort: sort })
            );
        }
    }]);

    return BarChart;
}(_react.Component);

exports.default = BarChart;