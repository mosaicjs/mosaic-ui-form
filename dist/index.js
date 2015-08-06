(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libFormView = __webpack_require__(1);

	var _libFormView2 = _interopRequireDefault(_libFormView);

	exports['default'] = {
	    FormView: _libFormView2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mosaicUi = __webpack_require__(3);

	var _plexusValidate = __webpack_require__(8);

	var _plexusValidate2 = _interopRequireDefault(_plexusValidate);

	var _plexusForm = __webpack_require__(9);

	var _plexusForm2 = _interopRequireDefault(_plexusForm);

	var FormView = (function (_View) {
	    _inherits(FormView, _View);

	    function FormView() {
	        _classCallCheck(this, FormView);

	        _get(Object.getPrototypeOf(FormView.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(FormView, [{
	        key: 'renderView',
	        value: function renderView() {
	            var Layout = this.Layout;
	            return _react2['default'].createElement(Layout, {
	                key: this.options.key,
	                view: this,
	                dependencies: this.options.dependencies || [] });
	        }
	    }, {
	        key: 'schema',
	        get: function get() {
	            if (!this._schema) {
	                this._schema = this.options.schema || {};
	            }
	            return this._schema;
	        }
	    }, {
	        key: 'values',
	        get: function get() {
	            var object = this.object;
	            var result = undefined;
	            if (object) {
	                result = object.data;
	            }
	            return result || {};
	        }
	    }, {
	        key: 'buttons',
	        get: function get() {
	            return this.options.buttons || [];
	        }
	    }, {
	        key: 'validate',
	        get: function get() {
	            return this.options.validate || _plexusValidate2['default'];
	        }
	    }, {
	        key: 'Layout',
	        get: function get() {
	            return this.constructor.Layout;
	        }
	    }, {
	        key: 'FieldWrapper',
	        get: function get() {
	            return this.constructor.FieldWrapper;
	        }
	    }, {
	        key: 'SectionWrapper',
	        get: function get() {
	            return this.constructor.SectionWrapper;
	        }
	    }], [{
	        key: 'Layout',
	        get: function get() {
	            return FormLayout;
	        }
	    }, {
	        key: 'FieldWrapper',
	        get: function get() {
	            return BootstrapFieldWrapper;
	        }
	    }, {
	        key: 'SectionWrapper',
	        get: function get() {
	            return BootstrapSectionWrapper;
	        }
	    }]);

	    return FormView;
	})(_mosaicUi.View);

	exports['default'] = FormView;

	var FormLayout = (function (_DataSetLayout) {
	    _inherits(FormLayout, _DataSetLayout);

	    function FormLayout() {
	        _classCallCheck(this, FormLayout);

	        _get(Object.getPrototypeOf(FormLayout.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(FormLayout, [{
	        key: 'render',
	        value: function render() {
	            var view = this.props.view;
	            var schema = view.schema;
	            var className = view.className || 'form-horizontal';
	            var buttons = view.buttons || ['OK'];
	            return _react2['default'].createElement(_plexusForm2['default'], {
	                key: this.props.key,
	                className: className,
	                buttons: buttons,
	                onSubmit: view.options.onSubmit,
	                schema: view.schema,
	                validate: view.validate,
	                fieldWrapper: view.FieldWrapper,
	                sectionWrapper: view.SectionWrapper,
	                values: view.values
	            });
	        }
	    }]);

	    return FormLayout;
	})(_mosaicUi.DataSetLayout);

	function renderTooltip(options) {
	    var title = options.title;
	    var style = !!title ? {} : { visibility: 'hidden' };
	    return _react2['default'].createElement('span', { className: options.className, title: title, style: style });
	}

	function renderErrors(options) {
	    var title = options.title;
	    if (!title) return;
	    var style = !!title ? {} : { visibility: 'hidden' };
	    return _react2['default'].createElement(
	        'div',
	        { className: 'panel panel-warning' },
	        _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'panel-title' },
	                _react2['default'].createElement('i', { className: 'glyphicon glyphicon-warning-sign' }),
	                ' ',
	                title
	            )
	        )
	    );
	}

	function replaceClasses(cls) {
	    var regex = new RegExp('\\s*' + cls + '\\s*', 'gim');
	    return function (nodes) {
	        for (var i = 0, len = nodes.length; i < len; i++) {
	            var node = nodes[i];
	            var str = node.className || '';
	            str = str.replace(regex, '') + ' ' + cls;
	            node.className = str;
	        }
	    };
	}

	var BootstrapFieldWrapper = (function (_React$Component) {
	    _inherits(BootstrapFieldWrapper, _React$Component);

	    function BootstrapFieldWrapper() {
	        _classCallCheck(this, BootstrapFieldWrapper);

	        _get(Object.getPrototypeOf(BootstrapFieldWrapper.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(BootstrapFieldWrapper, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._updateClasess();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._updateClasess();
	        }
	    }, {
	        key: '_updateClasess',
	        value: function _updateClasess() {
	            if (!this._setStyle) {
	                this._setStyle = replaceClasses('form-control');
	            }
	            var setStyle = this._setStyle;
	            var node = _react2['default'].findDOMNode(this);
	            setStyle(node.querySelectorAll('input'));
	            setStyle(node.querySelectorAll('textarea'));
	            setStyle(node.querySelectorAll('select'));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = ['form-group'];
	            if (!!this.props.errors) {
	                classes.push('has-error');
	            }
	            var help = renderTooltip({
	                title: this.props.description,
	                className: "glyphicon glyphicon-question-sign"
	            });
	            var errors = renderErrors({
	                title: (this.props.errors || []).join('\n')
	            });
	            return _react2['default'].createElement(
	                'div',
	                { className: classes.join(' '), key: this.props.label },
	                _react2['default'].createElement(
	                    'label',
	                    { className: 'col-sm-2 control-label', htmlFor: this.props.label },
	                    help,
	                    ' ',
	                    this.props.title
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-10' },
	                    this.props.children,
	                    errors
	                )
	            );
	        }
	    }]);

	    return BootstrapFieldWrapper;
	})(_react2['default'].Component);

	var BootstrapSectionWrapper = (function (_React$Component2) {
	    _inherits(BootstrapSectionWrapper, _React$Component2);

	    function BootstrapSectionWrapper() {
	        _classCallCheck(this, BootstrapSectionWrapper);

	        _get(Object.getPrototypeOf(BootstrapSectionWrapper.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(BootstrapSectionWrapper, [{
	        key: 'render',
	        value: function render() {
	            var title = undefined;
	            var help = renderTooltip({
	                title: this.props.description,
	                className: "glyphicon glyphicon-question-sign"
	            });
	            var errors = renderErrors({
	                title: (this.props.errors || []).join('\n'),
	                className: "glyphicon glyphicon-warning-sign"
	            });
	            if (!!this.props.title || !!help || !!errors) {
	                title = _react2['default'].createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2['default'].createElement(
	                        'label',
	                        { className: 'col-sm-2 control-label', htmlFor: this.props.label },
	                        help,
	                        ' ',
	                        this.props.title
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-10', htmlFor: this.props.label },
	                        errors
	                    )
	                );
	            }
	            var classes = [];
	            if (!!this.props.errors) {
	                classes.push('has-error');
	            }
	            return _react2['default'].createElement(
	                'div',
	                { className: classes.join(' '), key: this.props.label },
	                title,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-12' },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);

	    return BootstrapSectionWrapper;
	})(_react2['default'].Component);

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libDataSetLayout = __webpack_require__(4);

	var _libDataSetLayout2 = _interopRequireDefault(_libDataSetLayout);

	var _libUtils = __webpack_require__(6);

	var _libUtils2 = _interopRequireDefault(_libUtils);

	var _libView = __webpack_require__(7);

	var _libView2 = _interopRequireDefault(_libView);

	var _libViewLayout = __webpack_require__(5);

	var _libViewLayout2 = _interopRequireDefault(_libViewLayout);

	exports['default'] = {
	    DataSetLayout: _libDataSetLayout2['default'],
	    Utils: _libUtils2['default'],
	    View: _libView2['default'],
	    ViewLayout: _libViewLayout2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ViewLayout2 = __webpack_require__(5);

	var _ViewLayout3 = _interopRequireDefault(_ViewLayout2);

	var _Utils = __webpack_require__(6);

	var _Utils2 = _interopRequireDefault(_Utils);

	var DataSetLayout = (function (_ViewLayout) {
	    _inherits(DataSetLayout, _ViewLayout);

	    function DataSetLayout() {
	        _classCallCheck(this, DataSetLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(DataSetLayout.prototype), 'constructor', this).apply(this, params);
	        this._reload = _Utils2['default'].debounce(this._reload.bind(this), 100);
	        this._onSetUpdates = this._onSetUpdates.bind(this);
	    }

	    _createClass(DataSetLayout, [{
	        key: '_triggerListeners',
	        value: function _triggerListeners(method) {
	            var dependencies = this.props.dependencies || [];
	            dependencies.forEach(function (set) {
	                if (set) {
	                    set[method]('update', this._onSetUpdates);
	                }
	            }, this);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this._triggerListeners('addListener');
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _get(Object.getPrototypeOf(DataSetLayout.prototype), 'componentWillUnmount', this).call(this);
	            this._triggerListeners('removeListener');
	        }
	    }, {
	        key: '_onSetUpdates',
	        value: function _onSetUpdates(intent) {
	            intent.then((function () {
	                this._reload();
	            }).bind(this));
	        }
	    }, {
	        key: '_reload',
	        value: function _reload() {
	            this._updateState();
	        }
	    }]);

	    return DataSetLayout;
	})(_ViewLayout3['default']);

	exports['default'] = DataSetLayout;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Utils = __webpack_require__(6);

	var _Utils2 = _interopRequireDefault(_Utils);

	var ViewLayout = (function (_React$Component) {
	    _inherits(ViewLayout, _React$Component);

	    function ViewLayout() {
	        _classCallCheck(this, ViewLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(ViewLayout.prototype), 'constructor', this).apply(this, params);
	        this.state = this._newState();
	    }

	    _createClass(ViewLayout, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._mounted = true;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._mounted = false;
	        }
	    }, {
	        key: '_newState',
	        value: function _newState() {
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	            }

	            return _Utils2['default'].extend.apply(_Utils2['default'], [{}, this.state].concat(args));
	        }
	    }, {
	        key: '_updateState',
	        value: function _updateState() {
	            if (this._mounted) {
	                this.setState(this._newState.apply(this, arguments));
	            }
	        }
	    }, {
	        key: 'mounted',
	        get: function get() {
	            return this._mounted;
	        }
	    }]);

	    return ViewLayout;
	})(_react2['default'].Component);

	exports['default'] = ViewLayout;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = (function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    _createClass(Utils, null, [{
	        key: "extend",
	        value: function extend(to) {
	            for (var _len = arguments.length, from = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                from[_key - 1] = arguments[_key];
	            }

	            from.forEach(function (param) {
	                if (!param) return;
	                for (var key in param) {
	                    if (param.hasOwnProperty(key)) {
	                        to[key] = param[key];
	                    }
	                }
	            });
	            return to;
	        }
	    }, {
	        key: "debounce",
	        value: function debounce(method, timeout) {
	            var timerId = undefined;
	            function clear() {
	                if (!timerId) return;
	                clearTimeout(timerId);
	                timerId = undefined;
	            }
	            return function () {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }

	                var that = this;
	                clear();
	                timerId = setTimeout(function () {
	                    clear();
	                    method.apply(that, args);
	                }, timeout);
	            };
	        }
	    }]);

	    return Utils;
	})();

	exports["default"] = Utils;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var View = (function () {
	    function View(options, data) {
	        _classCallCheck(this, View);

	        this.props = this.options = options;
	        this.object = data;
	    }

	    _createClass(View, [{
	        key: '_newId',
	        value: function _newId() {
	            var id = this._newId.counter = (this._newId.counter || 0) + 1;
	            return 'id-' + id;
	        }
	    }, {
	        key: 'renderView',
	        value: function renderView() {
	            throw new Error('Not implemented.');
	        }
	    }, {
	        key: 'className',
	        get: function get() {
	            return this.props.className;
	        }
	    }, {
	        key: 'style',
	        get: function get() {
	            return this.props.style;
	        }
	    }]);

	    return View;
	})();

	exports['default'] = View;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
	The MIT License (MIT)

	Copyright (c) 2014 The Australian National University

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/

	'use strict';


	var checkNumber = function(schema, instance) {
	  var errors = [];

	  if (schema.maximum !== null) {
	    if (instance > schema.maximum)
	      errors.push('may be at most ' + schema.maximum);
	    else if (schema.exclusiveMaximum && instance >= schema.maximum)
	      errors.push('must be less than ' + schema.maximum);
	  }
	  if (schema.minimum !== null) {
	    if (instance < schema.minimum)
	      errors.push('must be at least ' + schema.minimum);
	    else if (schema.exclusiveMinimum && instance <= schema.minimum)
	      errors.push('must be more than ' + schema.minimum);
	  }
	  if (schema.multipleOf != null) {
	    if ((instance / schema.multipleOf) % 1 != 0)
	      errors.push('must be a multiple of ' + schema.multipleOf);
	  }

	  return errors;
	};


	var fieldErrors = function(errors) {
	  if (errors.length > 0)
	    return [ { path: [], errors: errors } ];
	  else
	    return [];
	};


	var validator = {};


	validator.boolean = function(schema, instance) {
	  var errors = [];

	  if (typeof instance != 'boolean')
	    errors.push('must be boolean');

	  return fieldErrors(errors);
	};


	validator.enum = function(schema, instance) {
	  var errors = [];

	  if (schema.enum.indexOf(instance) < 0)
	    errors.push('value not in list');

	  return fieldErrors(errors);
	};


	validator.number = function(schema, instance) {
	  var errors = [];

	  if (typeof instance != 'number')
	    errors.push('must be a number');
	  else
	    errors = checkNumber(schema, instance);

	  return fieldErrors(errors);
	};


	validator.integer = function(schema, instance) {
	  var errors = [];

	  if (typeof instance != 'number')
	    errors.push('must be a number');
	  else {
	    errors = checkNumber(schema, instance);
	    if (instance % 1 > 0)
	      errors.unshift('must be an integer');
	  }

	  return fieldErrors(errors);
	};


	validator.string = function(schema, instance) {
	  var errors = [];

	  if (typeof instance != 'string')
	    errors.push('must be a string');
	  else {
	    if (schema.maxLength != null && instance.length > schema.maxLength)
	      errors.push('may have at most ' + schema.maxLength + ' characters');
	    if (schema.minLength != null && instance.length < schema.minLength)
	      errors.push('must have at least ' + schema.minLength + ' characters');
	    if (schema.pattern != null && !(RegExp(schema.pattern).test(instance)))
	      errors.push('must match ' + schema.pattern);
	  }

	  return fieldErrors(errors);
	};


	validator.array = function(schema, instance, context) {
	  var errors = [];
	  var result, i, j;

	  if (!Array.isArray(instance))
	    return fieldErrors(['must be an array']);
	  else {
	    if (schema.maxItems != null && instance.length > schema.maxItems)
	      errors.push('may have at most ' + schema.maxItems + ' items');
	    if (schema.minItems != null && instance.length < schema.minItems)
	      errors.push('must have at least ' + schema.minItems + ' items');
	    result = fieldErrors(errors);

	    if (schema.items != null) {
	      for (i in instance) {
	        errors = validate(schema.items, instance[i], context);
	        for (j in errors) {
	          result.push({
	            path  : [i].concat(errors[j].path),
	            errors: errors[j].errors
	          });
	        }
	      }
	    }
	  }

	  return result;
	};


	var requires = function(schema, key) {
	  var subschema;

	  if (schema.required != null && schema.required.indexOf(key) >= 0)
	    return 'must be present';
	  else {
	    subschema = schema.properties[key];
	    if (subschema.type == 'array' && subschema.minItems > 0)
	      return 'must have at least ' + subschema.minItems + ' items';
	    else
	      return null;
	  }
	};

	validator.object = function(schema, instance, context) {
	  var result = [];
	  var key, errors, i;

	  if (instance == null)
	    instance = {};

	  if (instance.constructor !== Object)
	    result.push({ path: [], errors: ['must be a plain object'] });
	  else {
	    for (key in schema.properties) {
	      if (instance.hasOwnProperty(key)) {
	        errors = validate(schema.properties[key], instance[key], context);
	        for (i = 0; i < errors.length; ++i)
	          result.push({
	            path  : [key].concat(errors[i].path),
	            errors: errors[i].errors
	          });
	      }
	      else if (requires(schema, key)) {
	        result.push({
	          path  : [key],
	          errors: [requires(schema, key)]
	        });
	      }
	    }
	  }

	  return result;
	};


	var merge = function() {
	  var args = [].slice.call(arguments);
	  var result = args.every(Array.isArray) ? [] : {};
	  var i, obj, key;
	  for (i in args) {
	    obj = args[i];
	    for (key in obj)
	      result[key] = obj[key];
	  }
	  return result;
	};


	var without = function(obj) {
	  var args = [].slice.call(arguments);
	  var result = Array.isArray(obj) ? [] : {};

	  for (var key in obj)
	    if (args.indexOf(key) < 0)
	      result[key] = obj[key];

	  return result;
	};


	var getIn = function(root, path) {
	  if (path.length == 0 || root == undefined)
	    return root;
	  else
	    return getIn(root[path[0]], path.slice(1))
	};


	var cat = function(arrayOfArrays) {
	  return [].concat.apply([], arrayOfArrays);
	};


	var resolve = function(schema, context) {
	  var reference = schema['$ref'];

	  if (reference) {
	    if (!reference.match(/^#(\/([a-zA-Z_][a-zA-Z_0-9]*|[0-9]+))*$/))
	      throw new Error('reference '+reference+' has unsupported format');

	    return {
	      allOf: [
	        without(schema, '$ref'),
	        getIn(context, reference.split('/').slice(1))
	      ]
	    };
	  } else
	    return schema;
	};


	var validate = function(schema, instance, context) {
	  var effectiveContext = context || schema;
	  var effectiveSchema  = resolve(schema, effectiveContext);

	  if (effectiveSchema.allOf) {
	    var results = [without(effectiveSchema, 'allOf')]
	      .concat(effectiveSchema.allOf)
	      .map(function(schema) {
	        return validate(schema, instance, effectiveContext);
	      });
	    return cat(results);
	  } else {
	    var type = effectiveSchema.enum ? 'enum' : effectiveSchema.type;
	    if (type)
	      return validator[type](effectiveSchema, instance, effectiveContext);
	    else
	      return [];
	  }
	};

	module.exports = validate;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["PlexusForm"] = factory(require("react"));
		else
			root["PlexusForm"] = factory(root["react"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

		/*
		The MIT License (MIT)

		Copyright (c) 2015 The Australian National University

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
		*/

		'use strict';

		module.exports = __webpack_require__(1);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);
		var $ = React.DOM;

		var ou = __webpack_require__(5);

		var fields = __webpack_require__(4);
		var normalise = __webpack_require__(3);


		module.exports = React.createClass({
		  displayName: 'Form',

		  getInitialState: function() {
		    var values = this.props.values;
		    var errors = this.validate(this.props.schema, values, context(this.props));
		    return { values: values,
		             output: values,
		             errors: errors };
		  },
		  componentWillReceiveProps: function(props) {
		    var values = props.values || this.state.values;
		    var output = props.values || this.state.output;
		    this.setState({
		      values: values,
		      output: output,
		      errors: this.validate(props.schema, output, context(props))
		    });
		  },
		  setValue: function(path, raw, parsed) {
		    var schema = this.props.schema;
		    var ctx    = context(this.props);
		    var values = normalise(ou.setIn(this.state.values, path, raw),
		                           schema, ctx);
		    var output = normalise(ou.setIn(this.state.output, path, parsed),
		                           schema, ctx);
		    var errors = this.validate(schema, output, ctx);

		    if (this.props.submitOnChange) {
		      this.props.onSubmit(output, null, errors);
		    }
		    else {
		      this.setState({
		        values: values,
		        output: output,
		        errors: errors
		      });
		    }
		  },
		  getValue: function(path) {
		    return ou.getIn(this.state.values, path);
		  },
		  getErrors: function(path) {
		    return this.state.errors[makeKey(path)];
		  },
		  validate: function(schema, values, context) {
		    return hashedErrors(this.props.validate(schema, values, context));
		  },
		  preventSubmit: function(event) {
		    event.preventDefault();
		  },
		  handleSubmit: function(event) {
		    this.props.onSubmit(this.state.output,
		                        event.target.value,
		                        this.state.errors);
		  },
		  handleKeyPress: function(event) {
		    if (event.keyCode === 13 && this.props.enterKeySubmits) {
		      this.props.onSubmit(this.state.output, this.props.enterKeySubmits);
		    }
		  },
		  renderButtons: function() {
		    var submit = this.handleSubmit;

		    if (typeof this.props.buttons === 'function') {
		      return this.props.buttons(submit);
		    }
		    else {
		      var buttons = (this.props.buttons || ['Cancel', 'Submit'])
		        .map(function(value) {
		          return $.input({ type   : 'submit',
		                           key    : value,
		                           value  : value,
		                           onClick: submit });
		        });
		      return $.p(null, buttons);
		    }
		  },
		  render: function() {
		    var renderedFields = fields.make(fields, {
		      schema        : this.props.schema,
		      context       : context(this.props),
		      fieldWrapper  : this.props.fieldWrapper,
		      sectionWrapper: this.props.sectionWrapper,
		      handlers      : this.props.handlers,
		      hints         : this.props.hints,
		      path          : [],
		      update        : this.setValue,
		      getValue      : this.getValue,
		      getErrors     : this.getErrors
		    });

		    return $.form({ onSubmit  : this.preventSubmit,
		                    onKeyPress: this.handleKeyPress,
		                    className : this.props.className
		                  },
		                  this.props.extraButtons ? this.renderButtons() : $.span(),
		                  renderedFields,
		                  this.renderButtons());
		  }
		});

		function hashedErrors(errors) {
		  var result = {};
		  var i, entry;
		  for (i = 0; i < errors.length; ++i) {
		    entry = errors[i];
		    result[makeKey(entry.path)] = entry.errors;
		  }
		  return result;
		}

		function makeKey(path) {
		  return path.join('_');
		}

		function context(props) {
		  return props.context || props.schema;
		}


	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var ou = __webpack_require__(5);

		var alternative = __webpack_require__(6);
		var resolve = __webpack_require__(7);


		module.exports = function(data, schema, context) {
		  return ou.prune(withDefaultOptions(data, schema, context));
		};

		function withDefaultOptions(data, schema, context) {
		  var result;
		  var key;
		  var effectiveSchema = resolve(schema, context);

		  if (effectiveSchema.oneOf) {
		    effectiveSchema = alternative.schema(data, effectiveSchema, context);
		  }

		  if (effectiveSchema['enum']) {
		    result = data || effectiveSchema['enum'][0];
		  } else if (effectiveSchema.type === 'object') {
		    result = ou.merge(data);
		    for (key in effectiveSchema.properties) {
		      result[key] = withDefaultOptions((data || {})[key],
		                                       effectiveSchema.properties[key],
		                                       context);
		    }
		  } else if (effectiveSchema.type === 'array') {
		    result = [];
		    for (key = 0; key < (data || []).length; ++key) {
		      result[key] = withDefaultOptions((data || [])[key],
		                                       effectiveSchema.items,
		                                       context);
		    }
		  } else {
		    result = data;
		  }
		  return result;
		}


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		module.exports = {
		    CheckBox: __webpack_require__(8),
		    FileField: __webpack_require__(9),
		    InputField: __webpack_require__(10),
		    UserDefinedField: __webpack_require__(11),
		    Selection: __webpack_require__(12),
		    make: __webpack_require__(13),
		};


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		The MIT License (MIT)

		Copyright (c) 2014 The Australian National University

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
		*/

		'use strict';

		var isNat = function(x) {
		  return typeof x == 'number' && x >= 0 && x % 1 == 0;
		};

		var object = function() {
		  var args = Array.prototype.slice.call(arguments);
		  var result = [];
		  var i;

		  for (i = 0; i+1 < args.length; i += 2)
		    if (!isNat(args[i]))
		      result = {};

		  for (i = 0; i+1 < args.length; i += 2)
		    result[args[i]] = args[i + 1];

		  return result;
		};


		var merge = function() {
		  var args = Array.prototype.slice.call(arguments);
		  var result = args.every(Array.isArray) ? [] : {};
		  var i, obj, key;
		  for (i in args) {
		    obj = args[i];
		    for (key in obj)
		      result[key] = obj[key];
		  }
		  return result;
		};


		var getIn = function(root, path) {
		  if (path.length == 0 || root == undefined)
		    return root;
		  else
		    return getIn(root[path[0]], path.slice(1))
		};


		var setIn = function(root, path, value) {
		  if (path.length == 0)
		    return value;
		  else {
		    var child = (root == null) ? null : root[path[0]];
		    var value = setIn(child || [], path.slice(1), value);
		    return merge(root, object(path[0], value));
		  }
		};


		var prune = function(root) {
		  var result, isArray, key, val

		  if (root == null || root === '')
		    result = null;
		  else if (root.constructor === Array || root.constructor === Object) {
		    isArray = Array.isArray(root); 
		    result = isArray ? [] : {};
		    for (key in root) {
		      val = prune(root[key]);
		      if (val != null) {
		        if (isArray)
		          result.push(val);
		        else
		          result[key] = val;
		      }
		    }

		    if (Object.keys(result).length == 0)
		      result = null;
		  } else
		    result = root;

		  return result;
		};


		var split = function(pred, obj) {
		  var good = {};
		  var bad = {};

		  for (key in obj) {
		    var val = obj[key];
		    if (pred(key, val))
		      good[key] = val;
		    else
		      bad[key] = val;
		  }

		  return [good, bad];
		};


		var map = function(fn, obj) {
		  var output = {};
		  var key;

		  for (key in obj)
		    output[key] = fn(obj[key]);

		  return output;
		};


		var mapKeys = function(fn, obj) {
		  var output = {};
		  var key;

		  for (key in obj)
		    output[fn(key)] = obj[key];

		  return output;
		};


		module.exports = {
		  object : object,
		  merge  : merge,
		  getIn  : getIn,
		  setIn  : setIn,
		  prune  : prune,
		  split  : split,
		  map    : map,
		  mapKeys: mapKeys
		};


	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var ou = __webpack_require__(5);
		var resolve = __webpack_require__(7);

		exports.schema = function(value, schema, context) {
		  var selector, options, selected;

		  selector = ou.getIn(schema, ['x-hints', 'form', 'selector']);
		  if (!selector) {
		    return;
		  }

		  var dereferenced = schema.oneOf.map(function(alt) {
		    return resolve(alt, context);
		  });
		    
		  options = dereferenced.map(function(alt) {
		    return ou.getIn(alt, [ 'properties', selector, 'enum', 0 ]) || "";
		  });

		  selected = (value || {})[selector] || options[0];

		  return ou.merge(ou.setIn(dereferenced[options.indexOf(selected)],
		                           [ 'properties', selector ],
		                           ou.merge(ou.getIn(schema, [ 'properties', selector]),
		                                    { enum: options })),
		                  { type: 'object' });
		};


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var ou = __webpack_require__(5);


		module.exports = function(schema, context) {
		  var reference = schema['$ref'];

		  if (reference) {
		    if (!reference.match(/^#(\/([a-zA-Z_][a-zA-Z_0-9]*|[0-9]+))*$/)) {
		      throw new Error('reference '+reference+' has unsupported format');
		    }

		    return ou.merge(
		      ou.getIn(context, reference.split('/').slice(1)),
		      without(schema, '$ref'));
		  }
		  else {
		    return schema;
		  }
		};

		function without(obj) {
		  var args = [].slice.call(arguments);
		  var result = Array.isArray(obj) ? [] : {};

		  for (var key in obj) {
		    if (args.indexOf(key) < 0) {
		      result[key] = obj[key];
		    }
		  }

		  return result;
		}


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);
		var $ = React.DOM;


		var CheckBox = React.createClass({
		  displayName: 'CheckBox',

		  handleChange: function(event) {
		    var val = event.target.checked;
		    this.props.update(this.props.path, val, val);
		  },
		  render: function() {
		    return $.input({
		      name: this.props.label,
		      type: "checkbox",
		      checked: this.props.value || false,
		      onChange: this.handleChange });
		  }
		});

		module.exports = CheckBox;



	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);
		var $ = React.DOM;

		var ou = __webpack_require__(5);

		var types = __webpack_require__(14);
		var wrapped = __webpack_require__(15);


		var FileField = React.createClass({
		  displayName: 'FileField',

		  loadFile: function(event) {
		    var reader = new FileReader();
		    var file = event.target.files[0];
		    var val = ou.merge(this.props.getValue(this.props.path), {
		      name: file.name,
		      type: file.type,
		      size: file.size
		    });

		    this.props.update(this.props.path, val, val);

		    reader.onload = function(event) {
		      val.data = event.target.result;
		      this.props.update(this.props.path, val, val);
		    }.bind(this);

		    if (file) {
		      if (this.props.mode === 'dataURL') {
		        reader.readAsDataURL(file);
		      }
		      else {
		        reader.readAsText(file);
		      }
		    }
		  },
		  render: function() {
		    var fields = this.props.fields || {};
		    var value = this.props.value || {};
		    var list = [
		      $.input({ key: "input", type: "file", onChange: this.loadFile }),
		      $.dl({ key: "fileProperties" },
		           $.dt(null, "Name"), $.dd(null, value.name || '-'),
		           $.dt(null, "Size"), $.dd(null, value.size || '-'),
		           $.dt(null, "Type"), $.dd(null, value.type || '-'))
		    ];

		    return wrapped.section(this.props, list.concat(types.object(fields, this.props)));
		  }
		});

		module.exports = FileField;



	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);
		var $ = React.DOM;

		var normalizer = __webpack_require__(16);
		var parser = __webpack_require__(17);


		var InputField = React.createClass({
		  displayName: 'InputField',

		  normalize: function(text) {
		    return normalizer[this.props.type](text);
		  },
		  parse: function(text) {
		    return parser[this.props.type](text);
		  },
		  handleChange: function(event) {
		    var text = this.normalize(event.target.value);
		    this.props.update(this.props.path, text, this.parse(text));
		  },
		  handleKeyPress: function(event) {
		    if (event.keyCode === 13) {
		      event.preventDefault();
		    }
		  },
		  render: function() {
		    return $.input({
		      type      : "text",
		      name      : this.props.label,
		      value     : this.props.value || '',
		      onKeyPress: this.handleKeyPress,
		      onChange  : this.handleChange });
		  }
		});

		module.exports = InputField;



	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);

		var normalizer = __webpack_require__(16);
		var parser = __webpack_require__(17);


		var UserDefinedField = React.createClass({
		  displayName: 'UserDefinedField',

		  normalize: function(text) {
		    var n = normalizer[this.props.type];
		    return n ? n(text) : text;
		  },
		  parse: function(text) {
		    var p = parser[this.props.type];
		    return p ? p(text) : text;
		  },
		  handleChange: function(value) {
		    var text = this.normalize(value);
		    this.props.update(this.props.path, text, this.parse(text));
		  },
		  handleKeyPress: function(event) {
		    if (event.keyCode === 13) {
		      event.preventDefault();
		    }
		  },
		  render: function() {
		    return React.createElement(this.props.component, {
		      schema    : this.props.schema,
		      value     : this.props.value || '',
		      onKeyPress: this.handleKeyPress,
		      onChange  : this.handleChange
		    });
		  }
		});

		module.exports = UserDefinedField;


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);
		var $ = React.DOM;

		var normalizer = __webpack_require__(16);
		var parser = __webpack_require__(17);


		var Selection = React.createClass({
		  displayName: 'Selection',

		  normalize: function(text) {
		    // XXXXX: assume string in case type isn't set
		    var type = this.props.type || 'string';

		    return normalizer[type](text);
		  },
		  parse: function(text) {
		    // XXXXX: assume string in case type isn't set
		    var type = this.props.type || 'string';

		    return parser[type](text);
		  },
		  handleChange: function(event) {
		    var val = this.normalize(event.target.value);
		    this.props.update(this.props.path, val, this.parse(val));
		  },
		  render: function() {
		    var names = this.props.names;

		    return $.select(
		      {
		        name    : this.props.label,
		        value   : this.props.value || this.props.values[0],
		        onChange: this.handleChange
		      },
		      this.props.values.map(function(opt, i) {
		        return $.option({ key: opt, value: opt }, names[i] || opt);
		      }));
		  }
		});

		module.exports = Selection;


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);

		var ou = __webpack_require__(5);

		var resolve = __webpack_require__(7);
		var types = __webpack_require__(14);
		var wrapped = __webpack_require__(15);


		module.exports = function(fields, props) {
		  var schema = resolve(props.schema, props.context);
		  var hints = schema['x-hints'] || {};
		  var inputComponent = ou.getIn(hints, ['form', 'inputComponent']);
		  var key = makeKey(props.path);

		  props = ou.merge(props, {
		    schema: schema,
		    key   : key,
		    label : key,
		    value : props.getValue(props.path),
		    errors: props.getErrors(props.path),
		    type  : schema.type
		  });

		  if (inputComponent) {
		    props = ou.merge(props, { component: props.handlers[inputComponent] });
		    return wrapped.field(props, React.createElement(fields.UserDefinedField, props));
		  } else if (hints.fileUpload) {
		    console.warn("DEPRECATION WARNING: built-in file upload will be removed");
		    // FileField cannot depend on fields directly (cyclic dependency)
		    props = ou.merge(props, { fields: fields });
		    return React.createElement(
		      fields.FileField, ou.merge(props, { mode: hints.fileUpload.mode }));
		  }
		  else if (schema['oneOf']) {
		    return wrapped.section(props, types.alternative(fields, props));
		  }
		  else if (schema['enum']) {
		    props = ou.merge(props, {
		        values: schema['enum'],
		        names: schema['enumNames'] || schema['enum'] });
		    return wrapped.field(props, React.createElement(fields.Selection, props));
		  }

		  switch (schema.type) {
		  case "boolean":
		    return wrapped.field(props, React.createElement(fields.CheckBox, props));
		  case "object" :
		    return wrapped.section(props, types.object(fields, props));
		  case "array"  :
		    return wrapped.section(props, types.array(fields, props));
		  case "number" :
		  case "integer":
		  case "string" :
		  default:
		    return wrapped.field(props, React.createElement(fields.InputField, props));
		  }
		};

		function makeKey(path) {
		  return path.join('_');
		}


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var ou = __webpack_require__(5);

		var alternative = __webpack_require__(6);


		var types = {
		  alternative: function(fields, props) {
		    var s = alternative.schema(props.getValue(props.path), props.schema, props.context);

		    return types.object(fields, ou.merge(props, { schema: s }));
		  },
		  array: function(fields, props) {
		    var n = (props.getValue(props.path) || []).length + 1;
		    var list = [];
		    for (var i = 0; i < n; ++i) {
		      list.push(fields.make(fields, ou.merge(props, {
		        schema: props.schema.items,
		        path  : props.path.concat(i),
		      })));
		    }

		    return list;
		  },
		  object: function(fields, props) {
		    var keys = fullOrdering(props.schema['x-ordering'], props.schema.properties);

		    return keys.map(function(key) {
		      return fields.make(fields, ou.merge(props, {
		        schema: props.schema.properties[key],
		        path  : props.path.concat(key)
		      }));
		    });
		  },
		};

		module.exports = types;

		function fullOrdering(list, obj) {
		  var keys = Object.keys(obj || {});
		  var result = [];
		  var i, k;

		  for (i in list || []) {
		    k = list[i];
		    if (keys.indexOf(k) >= 0) {
		      result.push(k);
		    }
		  }

		  for (i in keys) {
		    k = keys[i];
		    if (result.indexOf(k) < 0) {
		      result.push(k);
		    }
		  }

		  return result;
		}


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var React = __webpack_require__(2);
		var $ = React.DOM;

		var ou = __webpack_require__(5);


		var errorClass = function(errors) {
		  if(!errors || errors.length === 0) {
		    return '';
		  }

		  return 'error';
		};

		var makeTitle = function(description, errors) {
		  var parts = [];
		  if (description && description.length > 0) {
		    parts.push(description);
		  }
		  if (errors && errors.length > 0) {
		    parts.push(errors.join('\n'));
		  }
		  return parts.join('\n\n');
		};

		var FieldWrapper = React.createClass({displayName: "FieldWrapper",
		  render: function() {
		    var classes = [].concat(errorClass(this.props.errors) || [],
		                            'form-element',
		                            this.props.classes || []);

		    return $.div(
		      {
		        className: classes.join(' '),
		        key      : this.props.label,
		        title    : makeTitle(this.props.description, this.props.errors)
		      },
		      $.label(
		        {
		          htmlFor: this.props.label
		        },
		        this.props.title),
		      this.props.children);
		  }
		});

		var SectionWrapper = React.createClass({displayName: "SectionWrapper",
		  render: function() {
		    var level = this.props.path.length;
		    var classes = [].concat('form-section',
		                            (level > 0 ? 'form-subsection' : []),
		                            this.props.classes || []);
		    var legendClasses = [].concat(errorClass(this.props.errors) || [],
		                                  'form-section-title');

		    return $.fieldset(
		      {
		        className: classes.join(' '),
		        key      : this.props.label
		      },
		      $.legend(
		        {
		          className: legendClasses.join(' '),
		          title    : makeTitle(this.props.description, this.props.errors)
		        },
		        this.props.title),
		      this.props.children);
		  }
		});


		var propsForWrapper = function(props) {
		  return {
		    label      : props.label,
		    path       : props.path,
		    errors     : props.errors,
		    classes    : ou.getIn(props.schema, ['x-hints', 'form', 'classes']),
		    title      : props.schema.title,
		    type       : props.schema.type,
		    description: props.schema.description
		  };
		};

		exports.section = function(props, fields) {
		  return React.createElement(props.sectionWrapper || SectionWrapper,
		    propsForWrapper(props),
		    fields);
		};

		exports.field = function(props, field) {
		  return React.createElement(props.fieldWrapper || FieldWrapper,
		    propsForWrapper(props),
		    field);
		};


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';


		exports.string = function(text) {
		  return text
		    .replace(/\s+/g, ' ')
		    .replace(/^ /, '')
		    .replace(/\u00ad/g, '');
		};

		exports.integer = function(text) {
		  return text
		    .replace(/[^-\d]/g, '')
		    .replace(/(.)-/g, '$1');
		};

		exports.number = function(text) {
		  return text
		    .replace(/[^-\.e\d]/ig, '')
		    .replace(/(e[^e]*)e/ig, '$1')
		    .replace(/([e.][^.]*)\./ig, '$1')
		    .replace(/([^e])-/ig, '$1')
		    .replace(/(e-?\d\d\d)\d/ig, '$1');
		};


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var normalizer = __webpack_require__(16);


		exports.string = function(text) {
		  return normalizer.string(text);
		};

		exports.integer = function(text) {
		  return text ? parseInt(normalizer.integer(text)) : null;
		};

		exports.number = function(text) {
		  return text ? parseFloat(normalizer.number(text)) : null;
		};


	/***/ }
	/******/ ])
	});
	;

/***/ }
/******/ ])
});
;