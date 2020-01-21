"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));
    _this.state = {
      sidebarOpen: false,
      data: [{
        id: 0,
        menu: "Contato",
        icon: "fas fa-chevron-down",
        iconColor: "#666",
        redirect: "/Contato",
        submenu: [{
          id: 0,
          nome: "Link1",
          icon: "fas fa-chevron-down",
          iconColor: "#666",
          redirect: "/Financeiro"
        }, {
          id: 1,
          nome: "Link2",
          icon: "fas fa-chevron-down",
          iconColor: "#666",
          redirect: "/Financeiro"
        }]
      }, {
        id: 0,
        menu: "Faturas",
        icon: "fas fa-chevron-down",
        iconColor: "#666",
        redirect: "/Faturas",
        submenu: [{
          id: 0,
          nome: "Link1",
          icon: "fas fa-chevron-down",
          iconColor: "#666",
          redirect: "/Financeiro"
        }, {
          id: 1,
          nome: "Link2",
          icon: "fas fa-chevron-down",
          iconColor: "#666",
          redirect: "/Financeiro"
        }]
      }, {
        id: 0,
        menu: "Financeiro",
        icon: "fas fa-chevron-down",
        iconColor: "#666",
        redirect: "/Financeiro",
        submenu: [{
          id: 0,
          nome: "Link1",
          icon: "fas fa-chevron-down",
          iconColor: "#666",
          redirect: "/Financeiro"
        }, {
          id: 1,
          nome: "Link2",
          icon: "fas fa-chevron-down",
          iconColor: "#666",
          redirect: "/Financeiro"
        }]
      }, {
        id: 0,
        menu: "Perfil",
        icon: "fas fa-user",
        iconColor: "#666",
        redirect: "/Perfil",
        submenu: [{
          id: 0,
          nome: "Link1",
          icon: "fas fa-chevron-down",
          iconColor: "#666",
          redirect: "/Financeiro"
        }, {
          id: 1,
          nome: "Link2",
          icon: "fas fa-bars",
          iconColor: "#666",
          redirect: "/Financeiro"
        }]
      }],
      textMenuColor: "#666"
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return (0, _core.jsx)("aside", {
        style: {
          backgroundColor: "transparent",
          borderWidth: 10,
          borderColor: "#000"
        },
        "class": "main-sidebar sidebar-light-light "
      }, (0, _core.jsx)("div", {
        style: {
          backgroundColor: "transparent"
        }
      }, (0, _core.jsx)("a", {
        "data-widget": "pushmenu",
        "class": "brand-link"
      }, (0, _core.jsx)("img", {
        src: "dist/img/logo.png",
        alt: "AdminLTE Logo",
        "class": "brand-image ",
        style: {
          opacity: .8
        }
      }), (0, _core.jsx)("span", {
        style: {
          color: "#fff"
        },
        "class": "brand-text font-weight-light"
      }, "Central Master"))), (0, _core.jsx)("div", {
        style: {
          margin: "auto",
          width: "96%",
          backgroundColor: "#fff",
          borderWidth: 100,
          borderColor: "#000",
          borderRadius: 20
        },
        "class": "sidebar"
      }, (0, _core.jsx)("div", {
        "class": "user-panel mt-3 pb-3 mb-3 d-flex"
      }, (0, _core.jsx)("div", {
        "class": "image"
      }, (0, _core.jsx)("img", {
        src: "dist/img/user2-160x160.jpg",
        "class": "img-circle elevation-2",
        alt: "User Image"
      })), (0, _core.jsx)("div", {
        "class": "info"
      }, (0, _core.jsx)("a", {
        href: "#",
        "class": "d-block"
      }, "Ol\xE1, ", this.props.nome || "Usuário"))), (0, _core.jsx)("nav", {
        "class": "mt-2"
      }, (0, _core.jsx)("ul", {
        "class": "nav nav-pills nav-sidebar flex-column",
        "data-widget": "treeview",
        role: "menu",
        "data-accordion": "false"
      }, this.state.data.map(function (d, i) {
        return (0, _core.jsx)("li", {
          "class": "nav-item has-treeview menu-close"
        }, (0, _core.jsx)("a", {
          href: "#",
          "class": "nav-link active"
        }, (0, _core.jsx)("i", {
          "class": "nav-icon fas fa-tachometer-alt"
        }), (0, _core.jsx)("p", null, d.menu, (0, _core.jsx)("i", {
          "class": "right fas fa-angle-left"
        }))), (0, _core.jsx)("ul", {
          "class": "nav nav-treeview"
        }, d.submenu.map(function (p, i) {
          return (0, _core.jsx)("li", {
            "class": "nav-item"
          }, (0, _core.jsx)("a", {
            href: "./index2.html",
            "class": "nav-link"
          }, (0, _core.jsx)("i", {
            "class": p.icon + " nav-icon"
          }), (0, _core.jsx)("p", null, p.nome, (0, _core.jsx)("span", {
            "class": "right badge badge-danger"
          }, "New"))));
        })));
      })))));
    }
  }]);

  return Menu;
}(_react["default"].Component);

var _default = Menu;
exports["default"] = _default;