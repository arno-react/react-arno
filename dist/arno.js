(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Arno"] = factory(require("react"), require("react-dom"));
	else
		root["Arno"] = factory(root["react"], root["react-dom"]);
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

	var _reactDom = __webpack_require__(8);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var findDOMNode = _reactDom2.default.findDOMNode;
	console.log(_react2.default);

	var Dots = function (_React$Component) {
	    _inherits(Dots, _React$Component);

	    function Dots(props) {
	        _classCallCheck(this, Dots);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dots).call(this, props));
	    }

	    _createClass(Dots, [{
	        key: 'dotsClick',
	        value: function dotsClick(i) {
	            this.props.onClick(i + 1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var children = this.props.items.map(function (d, i) {
	                if (_this3.props.active == i + 1) {
	                    return _react2.default.createElement('span', { className: 'carousel-dot carousel-dot-selected', onClick: _this3.dotsClick.bind(_this3, i), key: i });
	                } else {
	                    return _react2.default.createElement('span', { className: 'carousel-dot', onClick: _this3.dotsClick.bind(_this3, i), key: i });
	                }
	            });
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

	var Itme = function (_React$Component3) {
	    _inherits(Itme, _React$Component3);

	    function Itme(props) {
	        _classCallCheck(this, Itme);

	        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Itme).call(this, props));

	        _this5.state = {
	            count: 0
	        };
	        return _this5;
	    }

	    _createClass(Itme, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var count = findDOMNode(this.refs['carousel']).getElementsByTagName("li").length;
	            this.setState({
	                count: count
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'li',
	                { className: 'arno-carousel-itme', style: { width: 100 / this.state.count + '%' } },
	                this.props.children
	            );
	        }
	    }]);

	    return Itme;
	}(_react2.default.Component);

	var Carousel = function (_React$Component4) {
	    _inherits(Carousel, _React$Component4);

	    function Carousel(props) {
	        _classCallCheck(this, Carousel);

	        var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));

	        _this6.state = {
	            items: [],
	            delay: 10, // 是在需要自动轮播的时候，每张图片停留的时间，一个 number 值；
	            pause: true, // 是在需要自动轮播的时候，鼠标停留在图片上，是否暂停轮播，是一个布尔值；
	            autoPlay: true, //是配置是否需要自动轮播，是一个布尔值；
	            dots: true, // 是配置是否需要轮播下面的小点 是一个布尔值；
	            arrows: true, //是配置是否需要轮播的前后箭头 是一个布尔值；
	            active: 1
	        };
	        _this6.stopPlay = _this6.stopPlay.bind(_this6);
	        _this6.autoPlay = _this6.autoPlay.bind(_this6);

	        return _this6;
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
	            this.width = findDOMNode(this.refs['carousel']).offsetWidth / (this.props.items.length + 2);
	            findDOMNode(this.refs['carousel']).setAttribute('style', 'left: -' + this.width * this.state.active + 'px;width:' + (this.props.items.length + 2) * 100 + '%');
	            if (this.state.autoPlay) {
	                this.autoPlay();
	            }
	        }
	    }, {
	        key: 'autoPlay',
	        value: function autoPlay() {
	            var _this7 = this;

	            if (this.state.pause && this.state.autoPlay) {
	                (function () {
	                    var _this = _this7;
	                    clearInterval(_this7.t);
	                    _this7.t = setInterval(function () {
	                        if (_this.state.active >= _this.props.items.length + 2) {
	                            return;
	                        }
	                        _this.onClick(_this.state.active + 1);
	                    }, _this7.state.delay * 1000 + _this7.width);
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
	        value: function componentDidUpdate() {

	            clearInterval(this.s);
	            var _this = this;
	            var width = findDOMNode(this.refs['carousel']).offsetWidth / (this.props.items.length + 2);
	            var left = findDOMNode(this.refs['carousel']).offsetLeft;

	            var speed = 1;
	            var oldSpeed = 1;

	            if (-width * this.state.active < left) {
	                speed = -1;
	                oldSpeed = -1;
	            }
	            var sum = 0;
	            if (-width * this.state.active != left) {
	                this.s = setInterval(function () {

	                    var width = findDOMNode(_this.refs['carousel']).offsetWidth / (_this.props.items.length + 2);
	                    var left = findDOMNode(_this.refs['carousel']).offsetLeft;
	                    sum += speed;
	                    if (sum == 100) {
	                        speed = speed * 30;
	                    } else if (sum + 100 > width) {
	                        speed = oldSpeed;
	                    }
	                    findDOMNode(_this.refs['carousel']).setAttribute('style', 'left:' + (left + speed) + 'px;width:' + (_this.props.items.length + 2) * 100 + '%');
	                    if (-width * _this.state.active == left) {
	                        clearInterval(_this.s);
	                        if (_this.state.active == 0) {
	                            findDOMNode(_this.refs['carousel']).setAttribute('style', 'left:-' + width * _this.props.items.length + 'px;width:' + (_this.props.items.length + 2) * 100 + '%');
	                            _this.setState({
	                                active: _this.props.items.length
	                            });
	                        } else if (_this.state.active == _this.props.items.length + 1) {
	                            findDOMNode(_this.refs['carousel']).setAttribute('style', 'left:-' + width * 1 + 'px;width:' + (_this.props.items.length + 2) * 100 + '%');
	                            _this.setState({
	                                active: 1
	                            });
	                        }
	                    }
	                }, 1);
	            }
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(value) {
	            this.setState({
	                active: value
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var count = this.props.items.length ? this.props.items.length + 2 : 0;
	            var children = this.props.items.map(function (d, i) {
	                if (d.href) {
	                    return _react2.default.createElement(
	                        'li',
	                        { className: 'arno-carousel-itme', style: { width: 100 / count + '%' }, key: i },
	                        _react2.default.createElement(
	                            'a',
	                            { href: d.href },
	                            _react2.default.createElement('img', { src: d.src, alt: d.alt })
	                        )
	                    );
	                } else {
	                    return _react2.default.createElement(
	                        'li',
	                        { className: 'arno-carousel-itme', style: { width: 100 / count + '%' }, key: i },
	                        _react2.default.createElement('img', { src: d.src, alt: d.alt })
	                    );
	                }
	            });
	            children.push(_react2.default.createElement(
	                'li',
	                { className: 'arno-carousel-itme', style: { width: 100 / count + '%' }, key: this.props.items.length,
	                    onMouseOver: this.stopPlay, onMouseOut: this.autoPlay },
	                _react2.default.createElement('img', { src: this.props.items[0].src, alt: this.props.items[0].alt })
	            ));
	            children.unshift(_react2.default.createElement(
	                'li',
	                { className: 'arno-carousel-itme', style: { width: 100 / count + '%' }, key: -1,
	                    onMouseOver: this.stopPlay, onMouseOut: this.autoPlay },
	                _react2.default.createElement('img', { src: this.props.items[this.props.items.length - 1].src,
	                    alt: this.props.items[this.props.items.length - 1].alt })
	            ));
	            var dotsNode = _react2.default.createElement(Dots, { items: this.props.items, active: this.state.active, onClick: this.onClick.bind(this) });
	            var arrowsNode = _react2.default.createElement(Arrows, { active: this.state.active, onClick: this.onClick.bind(this) });

	            var ulStyle = {
	                width: count * 100 + "%"
	            };
	            if (this.width) {
	                ulStyle = {
	                    width: count * 100 + "%"
	                };
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'arno-carousel', onMouseOver: this.stopPlay, onMouseOut: this.autoPlay },
	                _react2.default.createElement(
	                    'ul',
	                    { style: ulStyle, ref: 'carousel' },
	                    children
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