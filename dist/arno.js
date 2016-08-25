(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactCSSTransitionGroup"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactCSSTransitionGroup"], factory);
	else if(typeof exports === 'object')
		exports["Arno"] = factory(require("react"), require("react/lib/ReactCSSTransitionGroup"));
	else
		root["Arno"] = factory(root["react"], root["react/lib/ReactCSSTransitionGroup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Drop = __webpack_require__(6);

	var _Drop2 = _interopRequireDefault(_Drop);

	var _Carousel = __webpack_require__(3);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    Drop: _Drop2.default,
	    Carousel: _Carousel2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactCSSTransitionGroup = __webpack_require__(8);

	var Dots = function (_React$Component) {
	    _inherits(Dots, _React$Component);

	    function Dots(props) {
	        _classCallCheck(this, Dots);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dots).call(this, props));
	    }

	    _createClass(Dots, [{
	        key: 'dotsClick',
	        value: function dotsClick(i) {
	            this.props.onClick(i);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var children = [];
	            for (var i = 0; i < this.props.letngth; i++) {
	                if (this.props.active == i) {
	                    children.push(_react2.default.createElement('span', { className: 'carousel-dot carousel-dot-selected', onClick: this.dotsClick.bind(this, i), key: i }));
	                } else {
	                    children.push(_react2.default.createElement('span', { className: 'carousel-dot', onClick: this.dotsClick.bind(this, i), key: i }));
	                }
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'arno-carousel-dots' },
	                children
	            );
	        }
	    }]);

	    return Dots;
	}(_react2.default.Component);

	var Arrows = function (_React$Component2) {
	    _inherits(Arrows, _React$Component2);

	    function Arrows(props) {
	        _classCallCheck(this, Arrows);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Arrows).call(this, props));
	    }

	    _createClass(Arrows, [{
	        key: 'arrowsClick',
	        value: function arrowsClick(i) {
	            this.props.onClick(this.props.active + i);
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'arno-carousel-arrows carousel-arrow-right', onClick: this.arrowsClick.bind(this, -1) },
	                    _react2.default.createElement('i', { className: 'arnoicon arnoicon-left' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'arno-carousel-arrows carousel-arrow-left', onClick: this.arrowsClick.bind(this, 1) },
	                    _react2.default.createElement('i', { className: 'arnoicon arnoicon-right' })
	                )
	            );
	        }
	    }]);

	    return Arrows;
	}(_react2.default.Component);

	var Carousel = function (_React$Component3) {
	    _inherits(Carousel, _React$Component3);

	    function Carousel(props) {
	        _classCallCheck(this, Carousel);

	        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));

	        _this4.state = {
	            delay: 5,
	            pause: true,
	            autoPlay: true,
	            dots: true,
	            arrows: true,
	            active: 0
	        };
	        _this4.stopPlay = _this4.stopPlay.bind(_this4);
	        _this4.autoPlay = _this4.autoPlay.bind(_this4);
	        _this4.type = 'carouselright';
	        return _this4;
	    }

	    _createClass(Carousel, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {

	            var delay = this.state.delay,
	                pause = this.state.pause,
	                autoPlay = this.state.autoPlay,
	                dots = this.state.dots,
	                arrows = this.state.arrows;

	            if (this.props.delay) {
	                delay = this.props.delay;
	            }
	            if (this.props.pause == false) {
	                pause = this.props.pause;
	            }
	            if (this.props.autoPlay == false) {
	                autoPlay = this.props.autoPlay;
	            }
	            if (this.props.dots == false) {
	                dots = this.props.dots;
	            }
	            if (this.props.arrows == false) {
	                arrows = this.props.arrows;
	            }
	            this.setState({
	                delay: delay, pause: pause, autoPlay: autoPlay, dots: dots, arrows: arrows
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.state.autoPlay) {
	                this.autoPlay();
	            }
	        }
	    }, {
	        key: 'autoPlay',
	        value: function autoPlay() {
	            var _this5 = this;

	            if (this.state.pause && this.state.autoPlay) {
	                (function () {
	                    var _this = _this5;
	                    clearInterval(_this5.t);
	                    _this5.t = setInterval(function () {
	                        if (_this.state.active >= _this.props.children.length) {
	                            return;
	                        }
	                        _this.onClick(_this.state.active + 1);
	                    }, _this5.state.delay * 1000);
	                })();
	            }
	        }
	    }, {
	        key: 'stopPlay',
	        value: function stopPlay() {
	            if (this.state.pause) {
	                clearInterval(this.t);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {}
	    }, {
	        key: 'onClick',
	        value: function onClick(value) {
	            if (value < this.state.active) {
	                this.type = 'carouselright';
	            } else {
	                this.type = 'carouselleft';
	            }
	            if (value < 0) {
	                value = this.props.children.length - 1;
	            } else if (value >= this.props.children.length) {
	                value = 0;
	            }
	            this.setState({
	                active: value
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var children = this.props.children.map(function (d, i) {
	                return _react2.default.createElement(
	                    'span',
	                    { className: 'arno-carousel-itme', key: i },
	                    d
	                );
	            });
	            var dotsNode = _react2.default.createElement(Dots, { letngth: this.props.children.length, active: this.state.active, onClick: this.onClick.bind(this) });
	            var arrowsNode = _react2.default.createElement(Arrows, { active: this.state.active, onClick: this.onClick.bind(this) });
	            return _react2.default.createElement(
	                'div',
	                { className: 'arno-carousel', onMouseOver: this.stopPlay, onMouseOut: this.autoPlay, ref: 'carousel' },
	                _react2.default.createElement(
	                    ReactCSSTransitionGroup,
	                    { transitionName: this.type, className: 'carousel',
	                        transitionLeaveTimeout: 300, transitionEnterTimeout: 300 },
	                    children[this.state.active]
	                ),
	                this.state.arrows ? arrowsNode : null,
	                this.state.dots ? dotsNode : null
	            );
	        }
	    }]);

	    return Carousel;
	}(_react2.default.Component);

	exports.default = Carousel;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//'use strict';

	var _Carousel = __webpack_require__(2);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports["default"] = _Carousel2["default"];
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Drop = function (_React$Component) {
	    _inherits(Drop, _React$Component);

	    function Drop(props) {
	        _classCallCheck(this, Drop);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Drop).call(this, props));

	        _this.onDragStart = _this.onDragStart.bind(_this);
	        _this.onDragEnter = _this.onDragEnter.bind(_this);
	        _this.onDragLeave = _this.onDragLeave.bind(_this);
	        _this.onDragOver = _this.onDragOver.bind(_this);
	        _this.onDrop = _this.onDrop.bind(_this);
	        return _this;
	    }

	    _createClass(Drop, [{
	        key: 'onDragStart',
	        value: function onDragStart(e) {
	            e.dataTransfer.setData('arnoId', e.target.getAttribute('data-arnoid'));
	        }
	    }, {
	        key: 'onDragEnter',
	        value: function onDragEnter(e) {}
	    }, {
	        key: 'onDragLeave',
	        value: function onDragLeave(e) {}
	    }, {
	        key: 'onDragOver',
	        value: function onDragOver(e) {
	            e.preventDefault();
	        }
	    }, {
	        key: 'onDrop',
	        value: function onDrop(e) {
	            e.preventDefault();
	            var data = this.props.data;
	            var arnoId = e.dataTransfer.getData('arnoId');
	            var Drag = data[arnoId];
	            var dropId = getDropId(e.target);

	            function getDropId(elm) {
	                var id = elm.getAttribute('data-arnoid');
	                if (id == 0 || id) {
	                    return id;
	                } else {
	                    return getDropId(elm.parentNode);
	                }
	            }

	            var outData = [];
	            data.forEach(function (d, index) {
	                if (dropId < arnoId) {
	                    if (index == dropId) {
	                        outData.push(Drag);
	                    }
	                    if (index != arnoId) {
	                        outData.push(d);
	                    }
	                } else {

	                    if (index != arnoId) {
	                        outData.push(d);
	                    }
	                    if (index == dropId) {
	                        outData.push(Drag);
	                    }
	                }
	            });
	            this.props.onDrop(outData);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            // mode   String: vertical  horizontal 支持垂直、水平   默认：vertical
	            var className = this.props.childrenClass + ' arno-drop-vertical';
	            if (this.props.mode == 'horizontal') {
	                className = this.props.childrenClass + ' arno-drop-horizontal';
	            }
	            var children = this.props.data.map(function (d, index) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: className, key: index, 'data-arnoid': index, draggable: 'true',
	                        onDrop: _this2.onDrop, onDragOver: _this2.onDragOver,
	                        onDragStart: _this2.onDragStart },
	                    d
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: this.props.className + ' arno-drop' },
	                children
	            );
	        }
	    }]);

	    return Drop;
	}(_react2.default.Component);

	exports.default = Drop;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dustbin = function (_React$Component) {
	    _inherits(Dustbin, _React$Component);

	    function Dustbin(props) {
	        _classCallCheck(this, Dustbin);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dustbin).call(this, props));

	        _this.onDragStart = _this.onDragStart.bind(_this);
	        _this.onDragEnter = _this.onDragEnter.bind(_this);
	        _this.onDragLeave = _this.onDragLeave.bind(_this);
	        _this.onDragOver = _this.onDragOver.bind(_this);
	        _this.onDrop = _this.onDrop.bind(_this);
	        return _this;
	    }

	    _createClass(Dustbin, [{
	        key: 'onDragStart',
	        value: function onDragStart(e) {
	            e.dataTransfer.setData('arnoId', e.target.getAttribute('data-arnoid'));
	        }
	    }, {
	        key: 'onDragEnter',
	        value: function onDragEnter(e) {}
	    }, {
	        key: 'onDragLeave',
	        value: function onDragLeave(e) {}
	    }, {
	        key: 'onDragOver',
	        value: function onDragOver(e) {
	            e.preventDefault();
	        }
	    }, {
	        key: 'onDrop',
	        value: function onDrop(e) {
	            e.preventDefault();
	            var arnoId = e.dataTransfer.getData('arnoId');
	            this.props.onDrop(arnoId);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            // mode   String: vertical  horizontal 支持垂直、水平   默认：vertical
	            var className = this.props.childrenClass + ' arno-drop-vertical';
	            if (this.props.mode == 'horizontal') {
	                className = this.props.childrenClass + ' arno-drop-horizontal';
	            }
	            var children = this.props.data.map(function (d, index) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: className, key: index, 'data-arnoid': index, draggable: 'true',
	                        onDragStart: _this2.onDragStart },
	                    d
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'arno-drop ' + this.props.className, onDrop: this.onDrop, onDragOver: this.onDragOver },
	                children
	            );
	        }
	    }]);

	    return Dustbin;
	}(_react2.default.Component);

	exports.default = Dustbin;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//'use strict';

	var _Drop = __webpack_require__(4);

	var _Drop2 = _interopRequireDefault(_Drop);

	var _Dustbin = __webpack_require__(5);

	var _Dustbin2 = _interopRequireDefault(_Dustbin);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	_Drop2["default"].Dustbin = _Dustbin2["default"];
	exports["default"] = _Drop2["default"];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }
/******/ ])
});
;