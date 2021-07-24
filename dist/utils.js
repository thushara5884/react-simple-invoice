"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = formatDate;
exports.formatCurrency = formatCurrency;

var _moment = _interopRequireDefault(require("moment"));

var _numeral = _interopRequireDefault(require("numeral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function formatDate(date) {
  return (0, _moment["default"])(date).format('MMMM Do, YYYY');
}

function formatCurrency(amount) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$';
  var formatted = (0, _numeral["default"])(amount).format("0,0.00");
  return "".concat(currency).concat(formatted);
}