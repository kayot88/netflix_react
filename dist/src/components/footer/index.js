"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = _interopRequireDefault(require("react"));

var _footer = require("./styles/footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Footer(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_footer.Container, restProps, children);
}

Footer.Row = function FooterRow(_ref2) {
  var children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_footer.Row, restProps, children);
};

Footer.Column = function FooterColumn(_ref3) {
  var children = _ref3.children,
      restProps = _objectWithoutProperties(_ref3, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_footer.Column, restProps, children);
};

Footer.Link = function FooterLink(_ref4) {
  var children = _ref4.children,
      restProps = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_footer.Link, restProps, children);
};

Footer.Title = function FooterTitle(_ref5) {
  var children = _ref5.children,
      restProps = _objectWithoutProperties(_ref5, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_footer.Title, restProps, children);
};

Footer.Text = function FooterText(_ref6) {
  var children = _ref6.children,
      restProps = _objectWithoutProperties(_ref6, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_footer.Text, restProps, children);
};

Footer.Break = function FooterBreak(_ref7) {
  var restProps = _extends({}, _ref7);

  return /*#__PURE__*/_react.default.createElement(_footer.Break, restProps);
};

//# sourceMappingURL=index.js.map