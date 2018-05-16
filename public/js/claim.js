webpackJsonp([2],{

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
	components: {
		claim: __WEBPACK_IMPORTED_MODULE_1__Claim_vue___default.a
	}
});

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(369)
/* template */
var __vue_template__ = __webpack_require__(401)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TitleHeader_vue__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TitleHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TitleHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClaimNavigation_vue__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClaimNavigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ClaimNavigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Map_vue__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Map_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Map_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GrossLoss_vue__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GrossLoss_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__GrossLoss_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tags_vue__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tags_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Tags_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Contacts_vue__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Contacts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Contacts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Description_vue__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Description_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Description_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__claimInfo_vue__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__claimInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__claimInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Assignees_vue__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Assignees_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Assignees_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Timeline_vue__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Timeline_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Timeline_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: {
		titleHeader: __WEBPACK_IMPORTED_MODULE_1__TitleHeader_vue___default.a,
		claimNav: __WEBPACK_IMPORTED_MODULE_2__ClaimNavigation_vue___default.a,
		claimMap: __WEBPACK_IMPORTED_MODULE_3__Map_vue___default.a,
		grossLoss: __WEBPACK_IMPORTED_MODULE_4__GrossLoss_vue___default.a,
		tags: __WEBPACK_IMPORTED_MODULE_5__Tags_vue___default.a,
		contacts: __WEBPACK_IMPORTED_MODULE_6__Contacts_vue___default.a,
		description: __WEBPACK_IMPORTED_MODULE_7__Description_vue___default.a,
		claimInfo: __WEBPACK_IMPORTED_MODULE_8__claimInfo_vue___default.a,
		assignees: __WEBPACK_IMPORTED_MODULE_9__Assignees_vue___default.a,
		timeline: __WEBPACK_IMPORTED_MODULE_10__Timeline_vue___default.a
	},
	created: function created() {
		this.claim = claim;
		this.claim.gross_loss = '7,893.12';
		this.claim.claim_data = JSON.parse(this.claim.claim_data);
		this.user = user;
		this.reviewer = reviewer;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
// { name: 'In Assign Queue', value: '',  type: 'date', disabled: false },
{ name: 'Adjuster Assigned', value: '', assignee: 0, type: 'Adjuster' }, { name: 'Reviewer Assigned', value: '', assignee: 0, type: 'Reviewer' }, { name: 'Reassigned', value: '', assignee: 0, type: 'user' }, { name: 'Contacted', value: '', type: 'date' }, { name: 'Site Inspected', value: '', type: 'date' }, { name: 'Estimate Received', value: '', type: 'amount', disabled: false }, { name: 'Correction Received', value: '', type: 'amount' }, { name: 'File Closed', value: '', type: 'date' }, { name: 'File Reopened', value: '', type: 'date' }]);

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(372)
/* template */
var __vue_template__ = __webpack_require__(373)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/TitleHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c2dcfbf", Component.options)
  } else {
    hotAPI.reload("data-v-4c2dcfbf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Title',
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column is-three-quarters" }, [
    _c("span", { staticClass: "is-hidden-mobile" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("h1", { staticClass: "title is-hidden-tablet-only" }, [
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
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "is-hidden-desktop" }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "h1",
        { staticClass: "title", staticStyle: { "margin-bottom": "-.25rem" } },
        [
          _c("span", { staticClass: "claim-number" }, [
            _vm._v(_vm._s(_vm.claim.claim_number))
          ])
        ]
      ),
      _vm._v(" "),
      _c("h3", { staticStyle: { "font-size": "1.5em", margin: "0" } }, [
        _vm._v(_vm._s(_vm.claim.carrier.label) + " ")
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "dropdown",
        class: { "is-active": _vm.active },
        on: {
          click: function($event) {
            _vm.active = !_vm.active
          }
        }
      },
      [_vm._m(2), _vm._v(" "), _vm._m(3)]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "subtitle is-hidden-tablet-only" }, [
      _c("span", { staticStyle: { color: "#bbb" } }, [_vm._v("Claim#")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("span", { staticStyle: { color: "#bbb" } }, [_vm._v("Claim#")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-trigger" }, [
      _c(
        "button",
        {
          staticClass: "button is-rounded is-info",
          staticStyle: { "margin-top": ".5rem" },
          attrs: { "aria-haspopup": "true", "aria-controls": "dropdown-menu" }
        },
        [
          _c("span", [_vm._v("  I need to ...  ")]),
          _vm._v(" "),
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", {
              staticClass: "fa fa-angle-down",
              attrs: { "aria-hidden": "true" }
            })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu",
        staticStyle: { "border-radius": "56px" },
        attrs: { id: "dropdown-menu", role: "menu" }
      },
      [
        _c("div", { staticClass: "dropdown-content" }, [
          _c(
            "a",
            {
              staticClass: "is-menu-button dropdown-item",
              attrs: { href: "#" }
            },
            [
              _c("span", { staticClass: "icon has-text-info is-small" }, [
                _c("i", { staticClass: "fa fa-plus-circle" })
              ]),
              _vm._v(" Create an Invoice")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "is-menu-button dropdown-item",
              attrs: { href: "#" }
            },
            [
              _c("span", { staticClass: "icon has-text-info is-small" }, [
                _c("i", { staticClass: "fa fa-credit-card" })
              ]),
              _vm._v(" Add Adjuster Expenses")
            ]
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "is-menu-button dropdown-item",
              attrs: { href: "#" }
            },
            [
              _c("span", { staticClass: "icon has-text-info is-small" }, [
                _c("i", { staticClass: "fa fa-money" })
              ]),
              _vm._v(" Submit an Estimate")
            ]
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "is-menu-button dropdown-item",
              attrs: { href: "#" }
            },
            [
              _c("span", { staticClass: "icon has-text-info is-small" }, [
                _c("i", { staticClass: "fa fa-envelope-o" })
              ]),
              _vm._v(" Send Invoice to Carrier")
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c2dcfbf", module.exports)
  }
}

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(375)
/* template */
var __vue_template__ = __webpack_require__(376)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/ClaimNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ecd9b4ac", Component.options)
  } else {
    hotAPI.reload("data-v-ecd9b4ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Navigation',
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
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
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ecd9b4ac", module.exports)
  }
}

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(378)
/* template */
var __vue_template__ = __webpack_require__(379)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/Map.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc4d36d4", Component.options)
  } else {
    hotAPI.reload("data-v-cc4d36d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
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
  name: 'Map',
  data: function data() {
    return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
  },
  created: function created() {
    this.home.lat = parseFloat(this.claim.claim_data.client.addresses[1].latitude);
    this.home.lng = parseFloat(this.claim.claim_data.client.addresses[1].longitude);
  },
  mounted: function mounted() {
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: this.home
    });
    this.marker = new google.maps.Marker({
      position: this.home,
      map: this.map
    });
    //    this.autocomplete = new google.maps.places.Autocomplete(
    //         /* @type {!HTMLInputElement} */
    //        (document.getElementById('claim-location')),
    //        {types: ['geocode']}
    //    );
    //    // When the user selects an address from the dropdown, populate the address
    //    // fields in the form.
    // this.autocomplete.addListener('place_changed', () => { this.setHome() });
  }
});

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "map", attrs: { id: "map" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cc4d36d4", module.exports)
  }
}

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(381)
/* template */
var __vue_template__ = __webpack_require__(382)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/GrossLoss.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8e1c07e", Component.options)
  } else {
    hotAPI.reload("data-v-a8e1c07e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
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
	name: 'GrossLoss',
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column gross-loss" }, [
    _c("div", { staticClass: "card has-ribbon has-ribbon-left" }, [
      _c("div", { staticClass: "card-content" }, [
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
              color: "#64C6A3"
            }
          },
          [_vm._v("$" + _vm._s(_vm.claim.gross_loss))]
        ),
        _vm._v(" "),
        _c("hr", { staticStyle: { background: "#ddd" } }),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "is-link is-small",
            staticStyle: { "font-size": ".85em" },
            attrs: { href: "#" }
          },
          [_vm._v("Issue Correction")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "icon", staticStyle: { color: "#ccc" } }, [
          _vm._v("•")
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "is-link is-small",
            staticStyle: { "font-size": ".85em" },
            attrs: { href: "#" }
          },
          [_vm._v("Billing")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a8e1c07e", module.exports)
  }
}

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(384)
/* template */
var __vue_template__ = __webpack_require__(385)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/Tags.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ccb6bcf", Component.options)
  } else {
    hotAPI.reload("data-v-6ccb6bcf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
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
	name: 'Tags',
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "tags" }, [
          _c("span", { staticClass: "tag is-danger" }, [
            _vm._v("CAT  "),
            _c("button", { staticClass: "delete is-small" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "tag is-info" }, [
            _vm._v("Hurricane "),
            _c("button", { staticClass: "delete is-small" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "tag is-info" }, [
            _vm._v("Harvey "),
            _c("button", { staticClass: "delete is-small" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "icon" }, [
            _c("i", {
              staticClass: "fa fa-plus",
              staticStyle: { color: "#ccc", position: "relative", top: "-3px" }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ccb6bcf", module.exports)
  }
}

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(387)
/* template */
var __vue_template__ = __webpack_require__(388)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/Contacts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b32827ee", Component.options)
  } else {
    hotAPI.reload("data-v-b32827ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Contacts',
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	},

	methods: {
		ucwords: function ucwords(val) {
			// console.log(val);
			return val.toLowerCase().replace(/\b[a-z]/g, function (letter) {
				return letter.toUpperCase();
			});
		}
	}
});

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column" }, [
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
                        _vm._s(_vm.ucwords(_vm.claim.claim_data.client["name"]))
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
                          _vm.claim.claim_data.client.email || "Not Provided"
                        )
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.claim.claim_data.client.phoneNumbers, function(
                    phone
                  ) {
                    return _c("div", [
                      phone.number != null
                        ? _c("p", [
                            _c("strong", [_vm._v(_vm._s(phone.type) + " #:")]),
                            _vm._v(" "),
                            _c(
                              "a",
                              { attrs: { href: "tel:+" + phone.number } },
                              [_vm._v(_vm._s(phone.number || "000-000-0000"))]
                            )
                          ])
                        : _vm._e()
                    ])
                  })
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
                      _c("dt", [_vm._v(_vm._s(address.type) + " Address:")]),
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _vm.claim.claim_data.accessContact
                  ? _c(
                      "div",
                      [
                        _vm.claim.claim_data.accessContact.name
                          ? _c(
                              "h3",
                              {
                                staticClass: "subtitle",
                                staticStyle: {
                                  color: "#aaa",
                                  "font-size": ".8em"
                                }
                              },
                              [_vm._v("Access Contact")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.claim.claim_data.accessContact.name
                          ? _c(
                              "h2",
                              {
                                staticClass: "title",
                                staticStyle: { "font-size": "2rem" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.claim.claim_data.accessContact.name
                                  )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(
                          _vm.claim.claim_data.accessContact.phoneNumbers,
                          function(phone) {
                            return _c(
                              "p",
                              { staticStyle: { "margin-bottom": "1.5rem" } },
                              [
                                phone.number
                                  ? _c("span", [
                                      _c("strong", [
                                        _vm._v(_vm._s(phone.type))
                                      ]),
                                      _vm._v(": " + _vm._s(phone.number))
                                    ])
                                  : _vm._e()
                              ]
                            )
                          }
                        )
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.claim.claim_data.claimant
                  ? _c(
                      "div",
                      [
                        _vm.claim.claim_data.claimant.name
                          ? _c(
                              "h3",
                              {
                                staticClass: "subtitle",
                                staticStyle: {
                                  color: "#aaa",
                                  "font-size": ".8em"
                                }
                              },
                              [_vm._v("Claimant")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "h2",
                          {
                            staticClass: "title",
                            staticStyle: { "font-size": "2rem" }
                          },
                          [_vm._v(_vm._s(_vm.claim.claim_data.claimant.name))]
                        ),
                        _vm._v(" "),
                        _vm._l(
                          _vm.claim.claim_data.claimant.phoneNumbers,
                          function(phone) {
                            return _c("p", [
                              phone.number
                                ? _c("span", [
                                    _c("strong", [_vm._v(_vm._s(phone.type))]),
                                    _vm._v(": " + _vm._s(phone.number))
                                  ])
                                : _vm._e()
                            ])
                          }
                        )
                      ],
                      2
                    )
                  : _vm._e()
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b32827ee", module.exports)
  }
}

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(390)
/* template */
var __vue_template__ = __webpack_require__(391)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/Description.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e513136", Component.options)
  } else {
    hotAPI.reload("data-v-2e513136", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
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
	name: 'Description',
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e513136", module.exports)
  }
}

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(393)
/* template */
var __vue_template__ = __webpack_require__(394)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/claimInfo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3063ec38", Component.options)
  } else {
    hotAPI.reload("data-v-3063ec38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Info',
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "content" }, [
            _c(
              "dl",
              { staticClass: "dl-horizontal", staticStyle: { width: "100%" } },
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
                    _vm._s(_vm.claim.catastrophe ? _vm.claim.catastrophe : "no")
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
                  _vm._v(_vm._s(_vm.claim.date_received || "Not Provided"))
                ]),
                _vm._v(" "),
                _c("dt", [_vm._v("Transaction Id:")]),
                _vm._v(" "),
                _c("dd", [
                  _vm._v(_vm._s(_vm.claim.transaction_id || "Not Provided"))
                ]),
                _vm._v(" "),
                _c("dt", [_vm._v("Price List Area:")]),
                _vm._v(" "),
                _c("dd", [
                  _vm._v(_vm._s(_vm.claim.price_list_area || "Not Provided"))
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
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "content" }, [
            _c(
              "dl",
              { staticClass: "dl-horizontal", staticStyle: { width: "100%" } },
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
                    _vm._s(_vm.claim.claim_data.policy.overallDeductible || 0)
                  )
                ]),
                _vm._v(" "),
                _c("dt", [_vm._v("Policy Type:")]),
                _vm._v(" "),
                _c("dd", [
                  _vm._v(
                    _vm._s(
                      _vm.claim.claim_data.policy.policyType || "Not Provided"
                    )
                  )
                ]),
                _vm._v(" "),
                _c("dt", [_vm._v("Policy Start Date:")]),
                _vm._v(" "),
                _c("dd", [
                  _vm._v(
                    _vm._s(
                      _vm.claim.claim_data.policy.policyStart || "Not Provided"
                    )
                  )
                ]),
                _vm._v(" "),
                _c("dt", [_vm._v("Policy End Date:")]),
                _vm._v(" "),
                _c("dd", [
                  _vm._v(
                    _vm._s(
                      _vm.claim.claim_data.policy.policyEnd || "Not Provided"
                    )
                  )
                ]),
                _vm._v(" "),
                _c("dt", [_vm._v("Apply Deductible:")]),
                _vm._v(" "),
                _c("dd", [
                  _vm._v(_vm._s(_vm.claim.claim_data.policy.applyDeductible))
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
            _vm._m(2),
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
                              _vm._s(coverage.deductible || "not provided")
                            )
                          ]),
                          _vm._v(" "),
                          _c("dt", [_vm._v("Policy Limit:")]),
                          _vm._v(" "),
                          _c("dd", [
                            _vm._v(
                              _vm._s(coverage.policyLimit || "not provided")
                            )
                          ]),
                          _vm._v(" "),
                          _c("dt", [_vm._v("Reserve Ammount:")]),
                          _vm._v(" "),
                          _c("dd", [
                            _vm._v(
                              _vm._s(coverage.reserveAmt || "not provided")
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
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t      Loss Info\n\t\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t      Policy Info\n\t\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header is-info" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n\t\t\t\t      Coverages\n\t\t\t\t    ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3063ec38", module.exports)
  }
}

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(396)
/* template */
var __vue_template__ = __webpack_require__(397)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/Assignees.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d698d384", Component.options)
  } else {
    hotAPI.reload("data-v-d698d384", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Assignees',
	mounted: function mounted() {
		//console.log(this.user);

	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	},

	computed: {}
});

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "columns is-mobile assignments",
      staticStyle: { "text-align": "center" }
    },
    [
      _c("div", { staticClass: "column is-half assignment" }, [
        _c("a", { attrs: { href: "/profile/" + _vm.user.id + "#" } }, [
          _vm.user.avatar
            ? _c("img", {
                staticStyle: {
                  "border-radius": "356px",
                  border: "10px solid #439BD1",
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
                _c("i", { staticClass: "fa fa-11x fa-user-circle-o" })
              ])
        ]),
        _vm._v(" "),
        _c("h3", {
          staticStyle: {
            color: "#439BD1",
            overflow: "hidden",
            "font-weight": "700"
          },
          domProps: { textContent: _vm._s(_vm.user.name) }
        }),
        _vm._v(" "),
        _c(
          "h4",
          {
            staticStyle: {
              color: "#bbb",
              "font-size": "1em",
              "margin-top": "-.25em"
            }
          },
          [_vm._v("Adjuster")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-half" }, [
        _c("a", { attrs: { href: "/profile/" + _vm.reviewer.id + "#" } }, [
          _vm.reviewer.avatar
            ? _c("img", {
                staticStyle: {
                  "border-radius": "256px",
                  border: "10px solid #64C6A3",
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
                _c("i", { staticClass: "fa fa-11x fa-user-circle-o" })
              ])
        ]),
        _vm._v(" "),
        _c("h3", {
          staticStyle: {
            color: "#64C6A3",
            overflow: "hidden",
            "font-weight": "700"
          },
          domProps: { textContent: _vm._s(_vm.reviewer.name) }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              color: "#bbb",
              "font-size": "1em",
              "margin-top": "-.25em"
            }
          },
          [_vm._v("Reviewer")]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d698d384", module.exports)
  }
}

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(399)
/* template */
var __vue_template__ = __webpack_require__(400)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/claims/Timeline.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ec08e12", Component.options)
  } else {
    hotAPI.reload("data-v-9ec08e12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Timeline',
	mounted: function mounted() {
		//console.log(this.user);
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-content" }, [
      _c("div", { staticClass: "content" }, [
        _c(
          "h3",
          {
            staticClass: "is-size-3",
            staticStyle: { "font-weight": "700", color: "#343b4d" }
          },
          [_vm._v("\n\t\t\t\tClaim Timeline\n\t\t\t")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown is-down is-hoverable" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dropdown-menu",
              attrs: { id: "statuses", role: "menu" }
            },
            [
              _c(
                "div",
                { staticClass: "dropdown-content" },
                _vm._l(_vm.statusesList, function(status) {
                  return _c("a", { staticClass: "dropdown-item" }, [
                    _c("span", {
                      domProps: { textContent: _vm._s(status.name) }
                    })
                  ])
                })
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "timeline", staticStyle: { padding: "5%" } }, [
          _c("div", { staticClass: "timeline-item" }, [
            _vm.user.avatar
              ? _c(
                  "div",
                  { staticClass: "timeline-marker is-image is-32x32" },
                  [
                    _c("a", { attrs: { href: "/profile/" + _vm.user.id } }, [
                      _c("img", {
                        attrs: { src: _vm.user.avatar.path, alt: _vm.user.name }
                      })
                    ])
                  ]
                )
              : _c("div", { staticClass: "timeline-marker is-secondary" }),
            _vm._v(" "),
            _vm._m(1)
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
                      { attrs: { href: "/profile/" + _vm.reviewer.id } },
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
              : _c("div", { staticClass: "timeline-marker is-secondary" }),
            _vm._v(" "),
            _vm._m(2)
          ]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _vm.user.avatar
              ? _c(
                  "div",
                  { staticClass: "timeline-marker is-image is-32x32" },
                  [
                    _c("a", { attrs: { href: "/profile/" + _vm.user.id } }, [
                      _c("img", {
                        attrs: { src: _vm.user.avatar.path, alt: _vm.user.name }
                      })
                    ])
                  ]
                )
              : _c("div", { staticClass: "timeline-marker is-secondary" }),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-content" }, [
              _c("p", { staticClass: "heading" }, [
                _vm._v("February 01, 2018")
              ]),
              _vm._v(" "),
              _c("p", [
                _c("a", { attrs: { href: "/profile/" + _vm.user.id } }, [
                  _vm._v(_vm._s(_vm.user.name))
                ]),
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
                      { attrs: { href: "/profile/" + _vm.reviewer.id } },
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
              : _c("div", { staticClass: "timeline-marker is-secondary" }),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-content" }, [
              _c("p", { staticClass: "heading" }, [
                _vm._v("February 01, 2018")
              ]),
              _vm._v(" "),
              _c("p", [
                _c("a", { attrs: { href: "/profile/" + _vm.reviewer.id } }, [
                  _vm._v(_vm._s(_vm.reviewer.name))
                ]),
                _vm._v(" assigned as reviewer")
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _vm._m(6)
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
    return _c("div", { staticClass: "dropdown-trigger" }, [
      _c(
        "button",
        {
          staticClass: "button is-dark is-rounded",
          attrs: { "aria-haspopup": "true", "aria-controls": "statuses" }
        },
        [
          _c("span", [_vm._v("Update Status")]),
          _vm._v(" "),
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", {
              staticClass: "fa fa-angle-down",
              attrs: { "aria-hidden": "true" }
            })
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
    require("vue-hot-reload-api")      .rerender("data-v-9ec08e12", module.exports)
  }
}

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c(
      "div",
      { staticClass: "column is-9", attrs: { id: "left-side" } },
      [
        _c(
          "div",
          { staticClass: "columns" },
          [_c("title-header"), _vm._v(" "), _c("gross-loss")],
          1
        ),
        _vm._v(" "),
        _c("hr", {
          staticClass: "is-hidden-mobile",
          staticStyle: { background: "#ddd" }
        }),
        _vm._v(" "),
        _c("claim-map"),
        _vm._v(" "),
        _c("tags"),
        _vm._v(" "),
        _c("contacts"),
        _vm._v(" "),
        _c("description"),
        _vm._v(" "),
        _c("claim-info")
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "column is-3", attrs: { id: "right-side" } },
      [_c("assignees"), _vm._v(" "), _c("timeline")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fa4d6f6", module.exports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_statuses_js__ = __webpack_require__(370);

/* harmony default export */ __webpack_exports__["a"] = ({
	active: false,
	claimId: '',
	claim: {},
	user: {},
	reviewer: {},
	bounds: {},
	map: {},
	marker: {},
	home: { lat: 30.2702208, lng: -97.7453625 },
	statusesList: __WEBPACK_IMPORTED_MODULE_0__data_statuses_js__["a" /* default */]
});

/***/ })

},[366]);