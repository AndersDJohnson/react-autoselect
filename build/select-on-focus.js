'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.Input = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.selectOnFocus = selectOnFocus;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _domInputSelect = require('dom-input-select');

var _domInputSelect2 = _interopRequireDefault(_domInputSelect);

var _domEventStopped = require('dom-event-stopped');

var _domEventStopped2 = _interopRequireDefault(_domEventStopped);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onFocus(props, e) {
  if ((0, _domEventStopped2.default)(e, props.onFocus)) return false;
  (0, _domInputSelect2.default)(e.target);
}

function selectOnFocus(WrappedComponent) {
  return function SelectOnFocus() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return _react2.default.createElement(WrappedComponent, _extends({}, props, { onFocus: onFocus.bind(null, props) }));
  };
}

var Input = exports.Input = selectOnFocus('input');
var TextArea = exports.TextArea = selectOnFocus('textarea');
