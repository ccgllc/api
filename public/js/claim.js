webpackJsonp([6],{

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 235:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(367);


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Claim_vue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Claim_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Claim_vue__);



var vue = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	el: '#claim',
	data: function data() {
		return {};
	},

	components: {
		claim: __WEBPACK_IMPORTED_MODULE_1__Claim_vue___default.a
	}
});

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(369)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(373)
/* template */
var __vue_template__ = __webpack_require__(374)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/claims/Claim.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fa4d6f6", Component.options)
  } else {
    hotAPI.reload("data-v-7fa4d6f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(371)("6a043bdc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fa4d6f6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Claim.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fa4d6f6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Claim.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(235)(false);
// imports


// module
exports.push([module.i, "\na.is-menu-button{\n\tcolor: #343b4d;\n\tmargin-top: 1em !important;\n\tmargin-bottom: 1em !important;\n}\na.is-menu-button:hover{\n\tcolor: #439BD1;\n};\n.tag .is-delete{\n\tpadding-right: 5px !important;\n}\n.timeline-marker .is-32x32{\n\tbackground: #497da9;\n}\n.is-32x32 span.icon{\n\tposition: relative;\n\ttop: 2px;\n\tleft: 2px;\n}\n.dl-horizontal dt, .dl-horizontal div dt{\n\tfont-weight: 700;\n\twidth: 100%;\n}\n.dl-horizontal dd {\n\tfont-weight: 300;\n\t/*float: left;*/\n\twidth: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(372)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 372:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Claim',
	created: function created() {
		this.claim = claim;
		this.claim.gross_loss = '7,893.12';
		this.claim.claim_data = JSON.parse(this.claim.claim_data);
		this.user = user;
		this.reviewer = reviewer;
		this.home.lat = parseFloat(this.claim.claim_data.client.addresses[1].latitude);
		this.home.lng = parseFloat(this.claim.claim_data.client.addresses[1].longitude);
	},
	mounted: function mounted() {
		var _this = this;

		this.bounds = new google.maps.LatLngBounds();
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: this.home
		});
		this.marker = new google.maps.Marker({
			position: this.home,
			map: this.map
		});
		this.autocomplete = new google.maps.places.Autocomplete(
		/* @type {!HTMLInputElement} */
		document.getElementById('claim-location'), { types: ['geocode'] });
		// When the user selects an address from the dropdown, populate the address
		// fields in the form.
		this.autocomplete.addListener('place_changed', function () {
			_this.setHome();
		});
	},
	data: function data() {
		return {
			claimId: '',
			claim: {},
			user: {},
			bounds: {},
			map: {},
			marker: {},
			home: { lat: 30.2702208, lng: -97.7453625 }
		};
	},

	filters: {
		ucwords: function ucwords(val) {
			if (val) {
				var str = val.toLowerCase().replace(/\b[a-z]/g, function (letter) {
					return letter.toUpperCase();
				});
				return str;
			}
			return;
		}
	}
});

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column is-9", attrs: { id: "left-side" } }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-three-fifths" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "h1",
              { staticClass: "title is-hidden-mobile is-hidden-tablet-only" },
              [
                _c("span", { staticClass: "claim-number" }, [
                  _vm._v(_vm._s(_vm.claim.claim_number))
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "divider", staticStyle: { color: "#439BD1" } },
                  [_vm._v("|")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "carrier" }, [
                  _vm._v(" " + _vm._s(_vm.claim.carrier.label))
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("h1", { staticClass: "title is-hidden-desktop" }, [
              _c("span", { staticClass: "claim-number" }, [
                _vm._v(_vm._s(_vm.claim.claim_number))
              ])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "is-hidden-desktop" }, [
              _vm._v(_vm._s(_vm.claim.carrier.label) + " ")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "is-hidden-desktop" }, [
              _vm._v("Estimate Submitted - $7893.12")
            ]),
            _vm._v(" "),
            _vm._m(2)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c(
              "div",
              {
                staticClass: "columns is-hidden-mobile",
                staticStyle: { "margin-top": "1.75em" }
              },
              [
                _c("div", { staticClass: "column has-text-right" }, [
                  _c(
                    "h4",
                    {
                      staticStyle: {
                        color: "#bbb",
                        "font-size": ".75em",
                        "margin-top": ".5em"
                      }
                    },
                    [_vm._v("Adjuster")]
                  ),
                  _vm._v(" "),
                  _c("h3", {
                    staticStyle: {
                      color: "#439BD1",
                      overflow: "hidden",
                      "font-weight": "700"
                    },
                    domProps: { textContent: _vm._s(_vm.user.name) }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column is-2" }, [
                  _c(
                    "a",
                    { attrs: { href: "/profile/" + _vm.user.id + "#" } },
                    [
                      _vm.user.avatar
                        ? _c("img", {
                            staticStyle: {
                              "border-radius": "356px",
                              border: "5px solid #439BD1",
                              cursor: "pointer"
                            },
                            attrs: {
                              src: _vm.user.avatar.path,
                              alt: _vm.user.name,
                              width: "100%",
                              height: "auto"
                            },
                            on: {
                              click: function($event) {
                                _vm.addingAvatar = true
                              }
                            }
                          })
                        : _c("span", { staticClass: "icon is-medium" }, [
                            _c("i", {
                              staticClass: "fa fa-11x fa-user-circle-o"
                            })
                          ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column is-2" }, [
                  _c(
                    "a",
                    { attrs: { href: "/profile/" + _vm.reviewer.id + "#" } },
                    [
                      _vm.reviewer.avatar
                        ? _c("img", {
                            staticStyle: {
                              "border-radius": "256px",
                              border: "5px solid #64C6A3",
                              cursor: "pointer"
                            },
                            attrs: {
                              src: _vm.reviewer.avatar.path,
                              alt: _vm.reviewer.name,
                              width: "100%",
                              height: "auto"
                            }
                          })
                        : _c("span", { staticClass: "icon is-medium" }, [
                            _c("i", {
                              staticClass: "fa fa-11x fa-user-circle-o"
                            })
                          ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column" }, [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        color: "#bbb",
                        "font-size": ".75em",
                        "margin-top": ".5em"
                      }
                    },
                    [_vm._v("Reviewer")]
                  ),
                  _vm._v(" "),
                  _c("h3", {
                    staticStyle: {
                      color: "#64C6A3",
                      overflow: "hidden",
                      "font-weight": "700"
                    },
                    domProps: { textContent: _vm._s(_vm.reviewer.name) }
                  })
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-three-quarters" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column" },
                      [
                        _c(
                          "h3",
                          {
                            staticClass: "subtitle",
                            staticStyle: { color: "#bbb", "font-size": ".8em" }
                          },
                          [_vm._v("Insured")]
                        ),
                        _vm._v(" "),
                        _c(
                          "h1",
                          {
                            staticClass: "title",
                            staticStyle: {
                              "font-size": "2em",
                              "font-weight": "700",
                              color: "#499BE8"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("ucwords")(
                                  _vm.claim.claim_data.client["name"]
                                )
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [
                          _c("strong", [_vm._v("Claim# ")]),
                          _vm._v(" " + _vm._s(_vm.claim.claim_number))
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("strong", [_vm._v("Email: ")]),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.claim.claim_data.client.email ||
                                  "Not Provided"
                              )
                          )
                        ]),
                        _vm._v(" "),
                        _vm._l(
                          _vm.claim.claim_data.client.phoneNumbers,
                          function(phone) {
                            return _c("div", [
                              phone.number != null
                                ? _c("p", [
                                    _c("strong", [
                                      _vm._v(_vm._s(phone.type) + " #:")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "tel:+" + phone.number }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(phone.number || "000-000-0000")
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          }
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "column" }, [
                      _c(
                        "dl",
                        { staticClass: "dl-horizontal" },
                        _vm._l(_vm.claim.claim_data.client.addresses, function(
                          address
                        ) {
                          return _c("div", [
                            _c("dt", [
                              _vm._v(_vm._s(address.type) + " Address:")
                            ]),
                            _vm._v(" "),
                            _c("dd", [
                              _vm._v(_vm._s(address.street) + " "),
                              _c("br"),
                              _vm._v(
                                " " +
                                  _vm._s(address.city) +
                                  " " +
                                  _vm._s(address.state) +
                                  ", " +
                                  _vm._s(address.zip) +
                                  " "
                              ),
                              _c("br"),
                              _vm._v(" " + _vm._s(address.latitude) + " "),
                              _c("br"),
                              _vm._v(" " + _vm._s(address.longitude))
                            ])
                          ])
                        })
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column", staticStyle: { margin: "1.1em" } },
            [
              _c(
                "h3",
                {
                  staticClass: "subtitle",
                  staticStyle: { color: "#908F8F", "font-size": ".8em" }
                },
                [_vm._v("Gross Loss Amount")]
              ),
              _vm._v(" "),
              _c(
                "h1",
                {
                  staticClass: "title",
                  staticStyle: {
                    "font-size": "2em",
                    "font-weight": "700",
                    color: "#343b4d"
                  }
                },
                [_vm._v("$" + _vm._s(_vm.claim.gross_loss))]
              ),
              _vm._v(" "),
              _vm._m(5),
              _c("br"),
              _vm._v(" "),
              _vm._m(6),
              _c("br"),
              _vm._v(" "),
              _vm._m(7),
              _c("br"),
              _vm._v(" "),
              _vm._m(8),
              _c("br"),
              _vm._v(" "),
              _vm._m(9),
              _c("br")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c("p", {
                    domProps: { textContent: _vm._s(_vm.claim.description) }
                  })
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(10),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "dl",
                    {
                      staticClass: "dl-horizontal",
                      staticStyle: { width: "100%" }
                    },
                    [
                      _c("dt", [_vm._v("Type Of Loss:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(_vm._s(_vm.claim.type_of_loss || "Not Provided"))
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Catastrophe:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(
                            _vm.claim.catastrophe ? _vm.claim.catastrophe : "no"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Commercial:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(_vm._s(_vm.claim.is_commercial ? "yes" : "no"))
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Date Of Loss:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(_vm._s(_vm.claim.date_of_loss || "Not Provided"))
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Date Received:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(_vm.claim.date_received || "Not Provided")
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Transaction Id:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(_vm.claim.transaction_id || "Not Provided")
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Price List Area:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(_vm.claim.price_list_area || "Not Provided")
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(11),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "dl",
                    {
                      staticClass: "dl-horizontal",
                      staticStyle: { width: "100%" }
                    },
                    [
                      _c("dt", [_vm._v("Policy #:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(_vm._s(_vm.claim.claim_data.policy.policyNumber))
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Overall Deductible:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(
                            _vm.claim.claim_data.policy.overallDeductible || 0
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Policy Type:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(
                            _vm.claim.claim_data.policy.policyType ||
                              "Not Provided"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Policy Start Date:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(
                            _vm.claim.claim_data.policy.policyStart ||
                              "Not Provided"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Policy End Date:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(
                            _vm.claim.claim_data.policy.policyEnd ||
                              "Not Provided"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", [_vm._v("Apply Deductible:")]),
                      _vm._v(" "),
                      _c("dd", [
                        _vm._v(
                          _vm._s(_vm.claim.claim_data.policy.applyDeductible)
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.claim.claim_data.policy.coverages.length
            ? _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "card is-warning" }, [
                  _vm._m(12),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "content" }, [
                      _c(
                        "dl",
                        {
                          staticClass: "dl-horizontal",
                          staticStyle: { width: "100%" }
                        },
                        _vm._l(_vm.claim.claim_data.policy.coverages, function(
                          coverage
                        ) {
                          return _c("div", [
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c("dl", { staticClass: "dl-horizontal" }, [
                                _c("dt", [_vm._v("Coverage Name:")]),
                                _vm._v(" "),
                                _c("dd", [_vm._v(_vm._s(coverage.covName))]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Deductible:")]),
                                _vm._v(" "),
                                _c("dd", [
                                  _vm._v(
                                    _vm._s(
                                      coverage.deductible || "not provided"
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Policy Limit:")]),
                                _vm._v(" "),
                                _c("dd", [
                                  _vm._v(
                                    _vm._s(
                                      coverage.policyLimit || "not provided"
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("dt", [_vm._v("Reserve Ammount:")]),
                                _vm._v(" "),
                                _c("dd", [
                                  _vm._v(
                                    _vm._s(
                                      coverage.reserveAmt || "not provided"
                                    )
                                  )
                                ]),
                                _c("hr")
                              ])
                            ])
                          ])
                        })
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.claim.claim_data.accessContact
            ? _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(13),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "content" }, [
                      _c(
                        "dl",
                        {
                          staticClass: "dl-horizontal",
                          staticStyle: { width: "100%" }
                        },
                        [
                          _c("dt", [_vm._v("Name:")]),
                          _vm._v(" "),
                          _c("dd", [
                            _vm._v(
                              _vm._s(_vm.claim.claim_data.accessContact.name)
                            )
                          ]),
                          _vm._v(" "),
                          _vm._l(
                            _vm.claim.claim_data.accessContact.phoneNumbers,
                            function(phone) {
                              return _c("div", [
                                _c("dt", [_vm._v(_vm._s(phone.type))]),
                                _vm._v(" "),
                                _c("dd", [_vm._v(_vm._s(phone.number))])
                              ])
                            }
                          )
                        ],
                        2
                      )
                    ])
                  ])
                ]),
                _c("br"),
                _vm._v(" "),
                _vm.claim.claim_data.claimant
                  ? _c("div", { staticClass: "card" }, [
                      _vm._m(14),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-content" }, [
                        _c("div", { staticClass: "content" }, [
                          _c(
                            "dl",
                            {
                              staticClass: "dl-horizontal",
                              staticStyle: { width: "100%" }
                            },
                            [
                              _c("dt", [_vm._v("Name:")]),
                              _vm._v(" "),
                              _c("dd", [
                                _vm._v(
                                  _vm._s(_vm.claim.claim_data.claimant.name)
                                )
                              ]),
                              _vm._v(" "),
                              _vm._l(
                                _vm.claim.claim_data.accessContact.phoneNumbers,
                                function(phone) {
                                  return _c("div", [
                                    _c("dt", [_vm._v(_vm._s(phone.type))]),
                                    _vm._v(" "),
                                    _c("dd", [_vm._v(_vm._s(phone.number))])
                                  ])
                                }
                              )
                            ],
                            2
                          )
                        ])
                      ])
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-3", attrs: { id: "right-side" } }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c(
                "h3",
                { staticClass: "title", staticStyle: { "font-weight": "700" } },
                [
                  _vm._v(
                    "\n    \t\t\t\t\t\t\t\t\tClaim Timeline\n    \t\t\t\t\t\t\t\t"
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(15),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "timeline", staticStyle: { padding: "5%" } },
                [
                  _c("div", { staticClass: "timeline-item" }, [
                    _vm.user.avatar
                      ? _c(
                          "div",
                          { staticClass: "timeline-marker is-image is-32x32" },
                          [
                            _c(
                              "a",
                              { attrs: { href: "/profile/" + _vm.user.id } },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.user.avatar.path,
                                    alt: _vm.user.name
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      : _c("div", {
                          staticClass: "timeline-marker is-secondary"
                        }),
                    _vm._v(" "),
                    _vm._m(16)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "timeline-item" }, [
                    _vm.reviewer.avatar
                      ? _c(
                          "div",
                          {
                            staticClass: "timeline-marker is-image is-32x32",
                            staticStyle: { "border-color": "#439BD1" }
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: { href: "/profile/" + _vm.reviewer.id }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.reviewer.avatar.path,
                                    alt: _vm.reviewer.name
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      : _c("div", {
                          staticClass: "timeline-marker is-secondary"
                        }),
                    _vm._v(" "),
                    _vm._m(17)
                  ]),
                  _vm._v(" "),
                  _vm._m(18),
                  _vm._v(" "),
                  _vm._m(19),
                  _vm._v(" "),
                  _c("div", { staticClass: "timeline-item" }, [
                    _vm.user.avatar
                      ? _c(
                          "div",
                          { staticClass: "timeline-marker is-image is-32x32" },
                          [
                            _c(
                              "a",
                              { attrs: { href: "/profile/" + _vm.user.id } },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.user.avatar.path,
                                    alt: _vm.user.name
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      : _c("div", {
                          staticClass: "timeline-marker is-secondary"
                        }),
                    _vm._v(" "),
                    _c("div", { staticClass: "timeline-content" }, [
                      _c("p", { staticClass: "heading" }, [
                        _vm._v("February 01, 2018")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c(
                          "a",
                          { attrs: { href: "/profile/" + _vm.user.id } },
                          [_vm._v(_vm._s(_vm.user.name))]
                        ),
                        _vm._v(" assigned as adjuster")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "timeline-item" }, [
                    _vm.reviewer.avatar
                      ? _c(
                          "div",
                          {
                            staticClass: "timeline-marker is-image is-32x32",
                            staticStyle: { "border-color": "#439BD1" }
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: { href: "/profile/" + _vm.reviewer.id }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.reviewer.avatar.path,
                                    alt: _vm.reviewer.name
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      : _c("div", {
                          staticClass: "timeline-marker is-secondary"
                        }),
                    _vm._v(" "),
                    _c("div", { staticClass: "timeline-content" }, [
                      _c("p", { staticClass: "heading" }, [
                        _vm._v("February 01, 2018")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c(
                          "a",
                          { attrs: { href: "/profile/" + _vm.reviewer.id } },
                          [_vm._v(_vm._s(_vm.reviewer.name))]
                        ),
                        _vm._v(" assigned as reviewer")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(20),
                  _vm._v(" "),
                  _vm._m(21)
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "subtitle is-hidden-mobile is-hidden-tablet-only" },
      [_c("span", { staticStyle: { color: "#bbb" } }, [_vm._v("Claim#")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "is-hidden-desktop" }, [
      _c("span", { staticStyle: { color: "#bbb" } }, [_vm._v("Claim#")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "tags", staticStyle: { "margin-top": ".5em" } },
      [
        _c("span", { staticClass: "tag is-danger" }, [
          _vm._v("CAT  "),
          _c("button", { staticClass: "delete is-small" })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "tag is-info" }, [
          _vm._v("Harvey "),
          _c("button", { staticClass: "delete is-small" })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "tag is-info" }, [
          _vm._v("Hurricane "),
          _c("button", { staticClass: "delete is-small" })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "icon" }, [
          _c("i", {
            staticClass: "fa fa-plus",
            staticStyle: { color: "#ccc", position: "relative", top: "-3px" }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "tabs is-left" }, [
          _c("ul", [
            _c("li", { staticClass: "is-active" }, [
              _c("a", [
                _c("span", { staticClass: "icon is-small" }, [
                  _c("i", {
                    staticClass: "fa fa-home",
                    attrs: { "aria-hidden": "true" }
                  })
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("Claim Information")])
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", [
                _c("span", { staticClass: "icon is-small" }, [
                  _c("i", {
                    staticClass: "fa fa-list",
                    attrs: { "aria-hidden": "true" }
                  })
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("Billing")])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "map", attrs: { id: "map" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "is-menu-button", attrs: { href: "#" } }, [
      _c("span", { staticClass: "icon has-text-info is-small" }, [
        _c("i", { staticClass: "fa fa-plus-circle" })
      ]),
      _vm._v(" Add Invoice")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "is-menu-button", attrs: { href: "#" } }, [
      _c("span", { staticClass: "icon has-text-info is-small" }, [
        _c("i", { staticClass: "fa fa-usd" })
      ]),
      _vm._v(" Set Estimate Amount")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "is-menu-button", attrs: { href: "#" } }, [
      _c("span", { staticClass: "icon has-text-info is-small" }, [
        _c("i", { staticClass: "fa fa-usd" })
      ]),
      _vm._v(" Submit Correction")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "is-menu-button", attrs: { href: "#" } }, [
      _c("span", { staticClass: "icon has-text-info is-small" }, [
        _c("i", { staticClass: "fa fa-credit-card" })
      ]),
      _vm._v(" Add Adjuster Expenses")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "is-menu-button", attrs: { href: "#" } }, [
      _c("span", { staticClass: "icon has-text-info is-small" }, [
        _c("i", { staticClass: "fa fa-envelope-o" })
      ]),
      _vm._v(" Send Invoice to Carrier")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t\t\t\t      Loss Info\n\t\t\t\t\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t\t\t\t      Policy Info\n\t\t\t\t\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t\t\t\t      Coverages\n\t\t\t\t\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t\t\t\t      Access Contact\n\t\t\t\t\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t\t\t\t      Claimant\n\t\t\t\t\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown is-up is-hoverable" }, [
      _c("div", { staticClass: "dropdown-trigger" }, [
        _c(
          "button",
          {
            staticClass: "button",
            attrs: { "aria-haspopup": "true", "aria-controls": "statuses" }
          },
          [
            _c("span", [_vm._v("Update Status")]),
            _vm._v(" "),
            _c("span", { staticClass: "icon is-small" }, [
              _c("i", {
                staticClass: "fa fa-angle-up",
                attrs: { "aria-hidden": "true" }
              })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dropdown-menu",
          attrs: { id: "statuses", role: "menu" }
        },
        [
          _c("div", { staticClass: "dropdown-content" }, [
            _c("div", { staticClass: "dropdown-item" }, [
              _c("p", [
                _vm._v("You can add the "),
                _c("code", [_vm._v("is-up")]),
                _vm._v(
                  " modifier to have a dropdown menu that appears above the dropdown button."
                )
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-content" }, [
      _c("p", { staticClass: "heading" }, [_vm._v("February 05, 2018")]),
      _vm._v(" "),
      _c("p", [_vm._v("Estimate Submitted - $7893.12")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-content" }, [
      _c("p", { staticClass: "heading" }, [_vm._v("February 05, 2018")]),
      _vm._v(" "),
      _c("p", [_vm._v("Estimate Requested")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-item" }, [
      _c("div", { staticClass: "timeline-marker is-secondary" }),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("February 03, 2018")]),
        _vm._v(" "),
        _c("p", [_vm._v("Site Inspected")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-item" }, [
      _c("div", { staticClass: "timeline-marker is-secondary" }),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("February 01, 2018")]),
        _vm._v(" "),
        _c("p", [_vm._v("Customer Contacted")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-item" }, [
      _c("div", { staticClass: "timeline-marker is-secondary" }),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("January 31, 2018")]),
        _vm._v(" "),
        _c("p", [_vm._v("In Assignment Queue")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-header" }, [
      _c("span", { staticClass: "tag is-medium is-secondary" }, [
        _vm._v("FNOL")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fa4d6f6", module.exports)
  }
}

/***/ })

},[366]);