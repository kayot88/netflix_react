"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Break = exports.Text = exports.Title = exports.Link = exports.Column = exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex-basis: 100%;\n  height: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.8125rem;\n  color: #757575;\n  margin-bottom: 40px;\n  margin-left: 72px;\n  margin-right: 72px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  color: #757575;\n  margin-bottom: 40px;\n  margin-left: 70px;\n  margin-right: 70px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #757575;\n  margin-bottom: 20px;\n  font-size: 13px;\n  text-decoration: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 70px 45px;\n  margin: auto;\n  max-width: 1000px;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var Row = _styledComponents.default.div(_templateObject2());

exports.Row = Row;

var Column = _styledComponents.default.div(_templateObject3());

exports.Column = Column;

var Link = _styledComponents.default.a(_templateObject4());

exports.Link = Link;

var Title = _styledComponents.default.p(_templateObject5());

exports.Title = Title;

var Text = _styledComponents.default.p(_templateObject6());

exports.Text = Text;

var Break = _styledComponents.default.div(_templateObject7());

exports.Break = Break;

//# sourceMappingURL=footer.js.map