"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var defaultStyle = process.env.NODE_ENV === "production" ? {
  name: "16d34u-defaultStyle",
  styles: "padding:10px;background-color:#c2c2c2;border-radius:6px;border-color:#c2c2c2;border-style:solid;color:#004d58;font-size:22px;margin:10px;&:hover{background-color:#004d58;color:#c2c2c2;}&:focus{background-color:#004d58;color:#c2c2c2;};label:defaultStyle;"
} : {
  name: "16d34u-defaultStyle",
  styles: "padding:10px;background-color:#c2c2c2;border-radius:6px;border-color:#c2c2c2;border-style:solid;color:#004d58;font-size:22px;margin:10px;&:hover{background-color:#004d58;color:#c2c2c2;}&:focus{background-color:#004d58;color:#c2c2c2;};label:defaultStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJd0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcblxyXG5jb25zdCBkZWZhdWx0U3R5bGUgPSBjc3NgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2MyYzJjMjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBjb2xvcjogIzAwNGQ1ODtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDU4O1xyXG4gICAgICAgIGNvbG9yOiNjMmMyYzI7XHJcbiAgICB9XHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRkNTg7XHJcbiAgICAgICAgY29sb3I6I2MyYzJjMjtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+IFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQpPT57dGhpcy5wcm9wcy5pY29uPT11bmRlZmluZWQ/bnVsbDp0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpfX0gY3NzPXt0aGlzLnByb3BzLmNzcz09dW5kZWZpbmVkP2RlZmF1bHRTdHlsZTp0aGlzLnByb3BzLmNzc30+e3RoaXMucHJvcHMuaWNvbj09dW5kZWZpbmVkP251bGw6IDxpbWc+PC9pbWc+IH17dGhpcy5wcm9wcy5ub21lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this = this;

      return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)("button", {
        onClick: function onClick(event) {
          _this.props.icon == undefined ? null : _this.props.onClick(event);
        },
        css: this.props.css == undefined ? defaultStyle : this.props.css
      }, this.props.icon == undefined ? null : (0, _core.jsx)("img", null), this.props.nome));
    }
  }]);

  return Button;
}(_react.Component);

exports["default"] = Button;