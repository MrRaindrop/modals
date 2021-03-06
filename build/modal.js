/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var Alert = __webpack_require__(2)
	var Confirm = __webpack_require__(10)
	var Prompt = __webpack_require__(13)
	var toast = __webpack_require__(16)
	
	var modal = {
	
	  toast: function (msg, duration) {
	    toast.push(msg, duration)
	  },
	
	  alert: function (config) {
	    new Alert(config).show()
	  },
	
	  prompt: function (config) {
	    new Prompt(config).show()
	  },
	
	  confirm: function (config) {
	    new Confirm(config).show()
	  }
	
	}
	
	!window.lib && (window.lib = {})
	window.lib.modal = modal
	
	module.exports = modal

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var Modal = __webpack_require__(3)
	__webpack_require__(8)
	
	var CONTENT_CLASS = 'content'
	var MSG_CLASS = 'content-msg'
	var BUTTON_GROUP_CLASS = 'btn-group'
	var BUTTON_CLASS = 'btn'
	
	function Alert(config) {
	  this.msg = config.message || ''
	  this.callback = config.callback
	  this.okTitle = config.okTitle || 'OK'
	  Modal.call(this)
	  this.node.classList.add('amfe-alert')
	}
	
	Alert.prototype = Object.create(Modal.prototype)
	
	Alert.prototype.createNodeContent = function () {
	  var content = document.createElement('div')
	  content.classList.add(CONTENT_CLASS)
	  this.node.appendChild(content)
	
	  var msg = document.createElement('div')
	  msg.classList.add(MSG_CLASS)
	  msg.appendChild(document.createTextNode(this.msg))
	  content.appendChild(msg)
	
	  var buttonGroup = document.createElement('div')
	  buttonGroup.classList.add(BUTTON_GROUP_CLASS)
	  this.node.appendChild(buttonGroup)
	  var button = document.createElement('div')
	  button.classList.add(BUTTON_CLASS, 'alert-ok')
	  button.appendChild(document.createTextNode(this.okTitle))
	  buttonGroup.appendChild(button)
	}
	
	Alert.prototype.bindEvents = function () {
	  Modal.prototype.bindEvents.call(this)
	  var button = this.node.querySelector('.' + BUTTON_CLASS)
	  button.addEventListener('click', function () {
	    this.destroy()
	    this.callback && this.callback()
	  }.bind(this))
	}
	
	module.exports = Alert


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	__webpack_require__(4)
	
	// there will be only one instance of modal.
	var MODAL_WRAP_CLASS = 'amfe-modal-wrap'
	var MODAL_NODE_CLASS = 'amfe-modal-node'
	
	function Modal() {
	  this.wrap = document.querySelector(MODAL_WRAP_CLASS)
	  this.node = document.querySelector(MODAL_NODE_CLASS)
	  if (!this.wrap) {
	    this.createWrap()
	  }
	  if (!this.node) {
	    this.createNode()
	  }
	  this.clearNode()
	  this.createNodeContent()
	  this.bindEvents()
	}
	
	Modal.prototype = {
	
	  show: function () {
	    this.wrap.style.display = 'block'
	    this.node.classList.remove('hide')
	  },
	
	  destroy: function () {
	    document.body.removeChild(this.wrap)
	    document.body.removeChild(this.node)
	    this.wrap = null
	    this.node = null
	  },
	
	  createWrap: function () {
	    this.wrap = document.createElement('div')
	    this.wrap.className = MODAL_WRAP_CLASS
	    document.body.appendChild(this.wrap)
	  },
	
	  createNode: function () {
	    this.node = document.createElement('div')
	    this.node.classList.add(MODAL_NODE_CLASS, 'hide')
	    document.body.appendChild(this.node)
	  },
	
	  clearNode: function () {
	    this.node.innerHTML = ''
	  },
	
	  createNodeContent: function () {
	
	    // do nothing.
	    // child classes can override this method.
	  },
	
	  bindEvents: function () {
	    this.wrap.addEventListener('click', function (e) {
	      e.preventDefault()
	      e.stopPropagation()
	    })
	  }
	}
	
	module.exports = Modal


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./modal.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./modal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".amfe-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.amfe-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n.amfe-modal-node.hide {\n  display: none;\n}\n.amfe-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 1px solid #ddd;\n}\n.amfe-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n.amfe-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n}\n", ""]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./alert.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./alert.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".amfe-alert .amfe-alert-ok {\n  width: 100%;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var Modal = __webpack_require__(3)
	__webpack_require__(11)
	
	var CONTENT_CLASS = 'content'
	var MSG_CLASS = 'content-msg'
	var BUTTON_GROUP_CLASS = 'btn-group'
	var BUTTON_CLASS = 'btn'
	
	function Confirm(config) {
	  this.msg = config.message || ''
	  this.callback = config.callback
	  this.okTitle = config.okTitle || 'OK'
	  this.cancelTitle = config.cancelTitle || 'Cancel'
	  Modal.call(this)
	  this.node.classList.add('amfe-confirm')
	}
	
	Confirm.prototype = Object.create(Modal.prototype)
	
	Confirm.prototype.createNodeContent = function () {
	  var content = document.createElement('div')
	  content.classList.add(CONTENT_CLASS)
	  this.node.appendChild(content)
	
	  var msg = document.createElement('div')
	  msg.classList.add(MSG_CLASS)
	  msg.appendChild(document.createTextNode(this.msg))
	  content.appendChild(msg)
	
	  var buttonGroup = document.createElement('div')
	  buttonGroup.classList.add(BUTTON_GROUP_CLASS)
	  this.node.appendChild(buttonGroup)
	  var btnOk = document.createElement('div')
	  btnOk.appendChild(document.createTextNode(this.okTitle))
	  btnOk.classList.add('btn-ok', BUTTON_CLASS)
	  var btnCancel = document.createElement('div')
	  btnCancel.appendChild(document.createTextNode(this.cancelTitle))
	  btnCancel.classList.add('btn-cancel', BUTTON_CLASS)
	  buttonGroup.appendChild(btnOk)
	  buttonGroup.appendChild(btnCancel)
	  this.node.appendChild(buttonGroup)
	}
	
	Confirm.prototype.bindEvents = function () {
	  Modal.prototype.bindEvents.call(this)
	  var btnOk = this.node.querySelector('.' + BUTTON_CLASS + '.btn-ok')
	  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS + '.btn-cancel')
	  btnOk.addEventListener('click', function () {
	    this.destroy()
	    this.callback && this.callback(this.okTitle)
	  }.bind(this))
	  btnCancel.addEventListener('click', function () {
	    this.destroy()
	    this.callback && this.callback(this.cancelTitle)
	  }.bind(this))
	}
	
	module.exports = Confirm


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./confirm.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./confirm.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".amfe-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n.amfe-confirm .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var Modal = __webpack_require__(3)
	__webpack_require__(14)
	
	var CONTENT_CLASS = 'content'
	var MSG_CLASS = 'content-msg'
	var BUTTON_GROUP_CLASS = 'btn-group'
	var BUTTON_CLASS = 'btn'
	var INPUT_WRAP_CLASS = 'input-wrap'
	var INPUT_CLASS = 'input'
	
	function Prompt(config) {
	  this.msg = config.message || ''
	  this.defaultMsg = config.default || ''
	  this.callback = config.callback
	  this.okTitle = config.okTitle || 'OK'
	  this.cancelTitle = config.cancelTitle || 'Cancel'
	  Modal.call(this)
	  this.node.classList.add('amfe-prompt')
	}
	
	Prompt.prototype = Object.create(Modal.prototype)
	
	Prompt.prototype.createNodeContent = function () {
	
	  var content = document.createElement('div')
	  content.classList.add(CONTENT_CLASS)
	  this.node.appendChild(content)
	
	  var msg = document.createElement('div')
	  msg.classList.add(MSG_CLASS)
	  msg.appendChild(document.createTextNode(this.msg))
	  content.appendChild(msg)
	
	  var inputWrap = document.createElement('div')
	  inputWrap.classList.add(INPUT_WRAP_CLASS)
	  content.appendChild(inputWrap)
	  var input = document.createElement('input')
	  input.classList.add(INPUT_CLASS)
	  input.type = 'text'
	  input.autofocus = true
	  input.placeholder = this.defaultMsg
	  inputWrap.appendChild(input)
	
	  var buttonGroup = document.createElement('div')
	  buttonGroup.classList.add(BUTTON_GROUP_CLASS)
	  var btnOk = document.createElement('div')
	  btnOk.appendChild(document.createTextNode(this.okTitle))
	  btnOk.classList.add('btn-ok', BUTTON_CLASS)
	  var btnCancel = document.createElement('div')
	  btnCancel.appendChild(document.createTextNode(this.cancelTitle))
	  btnCancel.classList.add('btn-cancel', BUTTON_CLASS)
	  buttonGroup.appendChild(btnOk)
	  buttonGroup.appendChild(btnCancel)
	  this.node.appendChild(buttonGroup)
	}
	
	Prompt.prototype.bindEvents = function () {
	  Modal.prototype.bindEvents.call(this)
	  var btnOk = this.node.querySelector('.' + BUTTON_CLASS + '.btn-ok')
	  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS + '.btn-cancel')
	  var that = this
	  btnOk.addEventListener('click', function () {
	    var val = document.querySelector('input').value
	    this.destroy()
	    this.callback && this.callback({
	      result: that.okTitle,
	      data: val
	    })
	  }.bind(this))
	  btnCancel.addEventListener('click', function () {
	    var val = document.querySelector('input').value
	    this.destroy()
	    this.callback && this.callback({
	      result: that.cancelTitle,
	      data: val
	    })
	  }.bind(this))
	}
	
	module.exports = Prompt


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./prompt.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./prompt.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".amfe-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  // padding: 0.24rem 0.213333rem 0.213333rem;\n  height: 0.96rem;\n}\n.amfe-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.32rem;\n  border: 1px solid #999;\n}\n.amfe-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n.amfe-prompt .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	__webpack_require__(17)
	
	var queue = []
	var timer
	var isProcessing = false
	var toastWin
	var TOAST_WIN_CLASS_NAME = 'amfe-toast'
	
	var DEFAULT_DURATION = 0.8
	
	function showToastWindow(msg, callback) {
	  var handleTransitionEnd = function () {
	    toastWin.removeEventListener('transitionend', handleTransitionEnd)
	    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd)
	    callback && callback()
	  }
	  if (!toastWin) {
	    toastWin = document.createElement('div')
	    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide')
	    document.body.appendChild(toastWin)
	  }
	  toastWin.textContent = msg
	  toastWin.addEventListener('transitionend', handleTransitionEnd)
	  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd)
	  setTimeout(function () {
	    toastWin.classList.remove('hide')
	  }, 0)
	}
	
	function hideToastWindow(callback) {
	  var handleTransitionEnd = function () {
	    toastWin.removeEventListener('transitionend', handleTransitionEnd)
	    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd)
	    callback && callback()
	  }
	  if (!toastWin) {
	    return
	  }
	  toastWin.addEventListener('transitionend', handleTransitionEnd)
	  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd)
	  setTimeout(function () {
	    toastWin.classList.add('hide')
	  }, 0)
	}
	
	var toast = {
	
	  push: function (msg, duration) {
	    queue.push({
	      msg: msg,
	      duration: duration || DEFAULT_DURATION
	    })
	    this.show()
	  },
	
	  show: function () {
	    var that = this
	
	    // All messages had been toasted already, so remove the toast window,
	    if (!queue.length) {
	      toastWin && toastWin.parentNode.removeChild(toastWin)
	      toastWin = null
	      return
	    }
	
	    // the previous toast is not ended yet.
	    if (isProcessing) {
	      return
	    }
	    isProcessing = true
	
	    var toastInfo = queue.shift()
	    showToastWindow(toastInfo.msg, function () {
	      timer = setTimeout(function () {
	        timer = null
	        hideToastWindow(function () {
	          isProcessing = false
	          that.show()
	        })
	      }, toastInfo.duration * 1000)
	    })
	  }
	}
	
	module.exports = {
	  push: toast.push.bind(toast)
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./toast.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./toast.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".amfe-toast {\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 2.666667rem;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.amfe-toast.hide {\n  opacity: 0;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=modal.js.map