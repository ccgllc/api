webpackJsonp([1],{

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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(408)
/* template */
var __vue_template__ = __webpack_require__(409)
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
Component.options.__file = "resources/assets/js/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ad64d6a", Component.options)
  } else {
    hotAPI.reload("data-v-9ad64d6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(368);


/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Claim_vue__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Claim_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Claim_vue__);


var vue = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	el: '#claim',
	components: {
		claim: __WEBPACK_IMPORTED_MODULE_1__Claim_vue___default.a
	}
});

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(370)
/* template */
var __vue_template__ = __webpack_require__(414)
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

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TitleHeader_vue__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TitleHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TitleHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClaimNavigation_vue__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClaimNavigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ClaimNavigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Map_vue__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Map_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Map_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ClaimStats_vue__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ClaimStats_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ClaimStats_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tags_vue__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tags_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Tags_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Contacts_vue__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Contacts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Contacts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Description_vue__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Description_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Description_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__claimInfo_vue__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__claimInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__claimInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Assignees_vue__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Assignees_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Assignees_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Timeline_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Timeline_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Timeline_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__NewStatus_vue__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__NewStatus_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__NewStatus_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Alert_vue__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Alert_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		claimStats: __WEBPACK_IMPORTED_MODULE_4__ClaimStats_vue___default.a,
		tags: __WEBPACK_IMPORTED_MODULE_5__Tags_vue___default.a,
		contacts: __WEBPACK_IMPORTED_MODULE_6__Contacts_vue___default.a,
		description: __WEBPACK_IMPORTED_MODULE_7__Description_vue___default.a,
		claimInfo: __WEBPACK_IMPORTED_MODULE_8__claimInfo_vue___default.a,
		assignees: __WEBPACK_IMPORTED_MODULE_9__Assignees_vue___default.a,
		timeline: __WEBPACK_IMPORTED_MODULE_10__Timeline_vue___default.a,
		newStatus: __WEBPACK_IMPORTED_MODULE_11__NewStatus_vue___default.a,
		alert: __WEBPACK_IMPORTED_MODULE_12__Alert_vue___default.a
	},
	created: function created() {
		this.claim = claim;
		this.claim.gross_loss = '7,893.12';
		this.claim.claim_data = JSON.parse(this.claim.claim_data);
		this.user = user;
		this.reviewer = reviewer;
		this.hasAlert = true;
		this.alert.message = 'You have been assigned to this claim please confirm or reject this assignment';
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
// { name: 'In Assign Queue', value: '',  type: 'date', disabled: false },
{ name: 'Select a status' }, { name: 'Adjuster Assigned', value: '', assignee: 0, type: 'Adjuster' }, { name: 'Reviewer Assigned', value: '', assignee: 0, type: 'Reviewer' }, { name: 'Reassigned', value: '', assignee: 0, type: 'user' }, { name: 'Contacted', value: '', type: 'date' }, { name: 'Site Inspected', value: '', type: 'date' }, { name: 'Estimate Received', value: '', type: 'amount', disabled: false }, { name: 'Correction Received', value: '', type: 'amount' }, { name: 'File Closed', value: '', type: 'date' }, { name: 'File Reopened', value: '', type: 'date' }]);

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__ = __webpack_require__(4);

var status = new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
	type: '',
	name: 'Select a status',
	value: '',
	date: '',
	transaction_id: '',
	orig_transaction_id: '',
	claim_number: '',
	time: '',
	claim_id: ''
});
/* harmony default export */ __webpack_exports__["a"] = (status);

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(374)
/* template */
var __vue_template__ = __webpack_require__(378)
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GrossLoss_vue__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GrossLoss_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__GrossLoss_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: {
		grossLoss: __WEBPACK_IMPORTED_MODULE_1__GrossLoss_vue___default.a
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	},

	methods: {
		scrollTop: function scrollTop() {
			window.scrollTo(0, 0);
		}
	}
});

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(376)
/* template */
var __vue_template__ = __webpack_require__(377)
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

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column gross-loss" }, [
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
              staticClass: "title has-text-info",
              staticStyle: {
                "font-size": "2em",
                "font-weight": "700",
                color: "#64C6A3"
              }
            },
            [_vm._v("$" + _vm._s(_vm.claim.gross_loss))]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column gross-loss" }, [
      _c("div", { staticClass: "card has-ribbon has-ribbon-left" }, [
        _c("div", { staticClass: "card-content" }, [
          _c(
            "h3",
            {
              staticClass: "subtitle",
              staticStyle: { color: "#908F8F", "font-size": ".8em" }
            },
            [_vm._v("Days Open")]
          ),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass: "title has-text-dark",
              staticStyle: {
                "font-size": "2em",
                "font-weight": "700",
                color: "#64C6A3"
              }
            },
            [_vm._v(_vm._s("7"))]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column gross-loss" }, [
      _c("div", { staticClass: "card has-ribbon has-ribbon-left" }, [
        _c("div", { staticClass: "card-content" }, [
          _c(
            "h3",
            {
              staticClass: "subtitle",
              staticStyle: { color: "#908F8F", "font-size": ".8em" }
            },
            [_vm._v("Invoices")]
          ),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass: "title has-text-dark",
              staticStyle: {
                "font-size": "2em",
                "font-weight": "700",
                color: "#64C6A3"
              }
            },
            [_vm._v(_vm._s("1"))]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column gross-loss" }, [
      _c("div", { staticClass: "card has-ribbon has-ribbon-left" }, [
        _c("div", { staticClass: "card-content" }, [
          _c(
            "h3",
            {
              staticClass: "subtitle",
              staticStyle: { color: "#908F8F", "font-size": ".8em" }
            },
            [_vm._v("Notes")]
          ),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass: "title has-text-dark",
              staticStyle: {
                "font-size": "2em",
                "font-weight": "700",
                color: "#64C6A3"
              }
            },
            [_vm._v(_vm._s("0"))]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-a8e1c07e", module.exports)
  }
}

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column" }, [
      _c("span", { staticClass: "is-hidden-mobile" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("h1", { staticClass: "title is-hidden-tablet-only" }, [
          _c(
            "span",
            { staticClass: "claim-number", attrs: { "data-badge": "2" } },
            [
              _c("span", { staticClass: "icon is-large" }, [
                _c("i", {
                  staticClass: "fa fa-1x is-lock has-text-grey",
                  class: {
                    "fa-lock": _vm.locked,
                    "fa-unlock-alt": !_vm.locked
                  },
                  on: {
                    click: function($event) {
                      _vm.locked = !_vm.locked
                    }
                  }
                })
              ]),
              _vm._v(_vm._s(_vm.claim.claim_number) + "\n\t\t\t\t\t")
            ]
          ),
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
          on: {
            click: function($event) {
              _vm.active = !_vm.active
            }
          }
        },
        [
          _c(
            "button",
            {
              staticClass: "button is-menu is-rounded is-grey",
              class: { "is-info": !_vm.active },
              staticStyle: { "margin-top": ".5rem" },
              attrs: { "aria-haspopup": "true", "aria-controls": "menu" }
            },
            [
              !_vm.active
                ? _c("span", [_vm._m(2), _vm._v(" "), _vm._m(3)])
                : _c("span", [
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-weight": "700",
                          "font-size": ".75em",
                          position: "relative",
                          top: "-1px",
                          left: "-4px"
                        }
                      },
                      [_vm._v("\n\t      \t\t\t\tclose\n\t      \t\t\t")]
                    )
                  ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.active
        ? _c(
            "div",
            { staticClass: "main-menu", attrs: { id: "menu", role: "menu" } },
            [
              _c("div", { staticClass: "columns" }, [
                _c("div", { staticClass: "column" }, [
                  _c("h3", { staticClass: "main-menu-title" }, [
                    _vm._v("Statuses")
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "is-menu-button dropdown-item",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.newStatus.name = "Assignments"
                          _vm.creatingNewStatus = true
                        }
                      }
                    },
                    [_vm._m(6), _vm._v(" Assignments")]
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(8)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column" }, [
                  _c(
                    "h3",
                    { staticClass: "main-menu-title is-hidden-mobile" },
                    [_vm._v(" ")]
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "is-menu-button dropdown-item",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.newStatus.name = "Contacted"
                          _vm.creatingNewStatus = true
                        }
                      }
                    },
                    [_vm._m(9), _vm._v(" Customer Contacted")]
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(10),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(12)
                ]),
                _vm._v(" "),
                _vm._m(13),
                _vm._v(" "),
                _vm._m(14),
                _vm._v(" "),
                _c("div", { staticClass: "column is-hidden-desktop" }, [
                  _c("a", {
                    staticClass: "delete",
                    on: {
                      click: function($event) {
                        _vm.active = !_vm.active
                        _vm.scrollTop()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", [
                    _c(
                      "span",
                      {
                        staticStyle: { cursor: "pointer" },
                        on: {
                          click: function($event) {
                            _vm.active = !_vm.active
                            _vm.scrollTop()
                          }
                        }
                      },
                      [_vm._v("close menu")]
                    )
                  ])
                ])
              ])
            ]
          )
        : _vm._e()
    ])
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
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-bars", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", {
        staticClass: "fa fa-chevron-circle-down",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-times", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
      [
        _c("span", { staticClass: "icon has-text-info is-small" }, [
          _c("i", { staticClass: "fa fa-plus-circle" })
        ]),
        _vm._v(" In Assign Queue")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-user-plus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
      [
        _c("span", { staticClass: "icon has-text-info is-small" }, [
          _c("i", { staticClass: "fa fa-money" })
        ]),
        _vm._v(" Submit an Estimate")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
      [
        _c("span", { staticClass: "icon has-text-info is-small" }, [
          _c("i", { staticClass: "fa fa-usd" })
        ]),
        _vm._v(" Issue an Estimate Correction")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-mobile" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
      [
        _c("span", { staticClass: "icon has-text-info is-small" }, [
          _c("i", { staticClass: "fa fa-search" })
        ]),
        _vm._v(" Site Inspected")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
      [
        _c("span", { staticClass: "icon has-text-info is-small" }, [
          _c("i", { staticClass: "fa fa-folder-o" })
        ]),
        _vm._v(" Close File")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
      [
        _c("span", { staticClass: "icon has-text-info is-small" }, [
          _c("i", { staticClass: "fa fa-folder-open-o" })
        ]),
        _vm._v(" Reopen File")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column" }, [
      _c("h3", { staticClass: "main-menu-title" }, [_vm._v("Billing")]),
      _vm._v(" "),
      _c("hr", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
        [
          _c("span", { staticClass: "icon has-text-info is-small" }, [
            _c("i", { staticClass: "fa fa-plus-circle" })
          ]),
          _vm._v(" Create an Invoice")
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
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
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
        [
          _c("span", { staticClass: "icon has-text-info is-small" }, [
            _c("i", { staticClass: "fa fa-file-pdf-o" })
          ]),
          _vm._v(" Preview Invoice")
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
        [
          _c("span", { staticClass: "icon has-text-info is-small" }, [
            _c("i", { staticClass: "fa fa-paper-plane-o" })
          ]),
          _vm._v(" Send Invoice to Carrier")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column" }, [
      _c("h3", { staticClass: "main-menu-title" }, [_vm._v("Communication")]),
      _vm._v(" "),
      _c("hr", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
        [
          _c("span", { staticClass: "icon has-text-info is-small" }, [
            _c("i", { staticClass: "fa fa-comments-o" })
          ]),
          _vm._v(" Message Reviewer")
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
        [
          _c("span", { staticClass: "icon has-text-info is-small" }, [
            _c("i", { staticClass: "fa fa-comment-o" })
          ]),
          _vm._v(" Message Dispatch")
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
        [
          _c("span", { staticClass: "icon has-text-info is-small" }, [
            _c("i", { staticClass: "fa fa-user-times" })
          ]),
          _vm._v(" Request Reassignment")
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "is-menu-button dropdown-item", attrs: { href: "#" } },
        [
          _c("span", { staticClass: "icon has-text-info is-small" }, [
            _c("i", { staticClass: "fa fa-map-marker" })
          ]),
          _vm._v(" Send Location Data (sms) ")
        ]
      )
    ])
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

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(380)
/* template */
var __vue_template__ = __webpack_require__(381)
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

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 381:
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
                    staticClass: "fa fa-map-marker",
                    attrs: { "aria-hidden": "true" }
                  })
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("Claim Data")])
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", [
                _c("span", { staticClass: "icon is-small" }, [
                  _c("i", {
                    staticClass: "fa fa-calculator",
                    attrs: { "aria-hidden": "true" }
                  })
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("Billing")])
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", [
                _c("span", { staticClass: "icon is-small" }, [
                  _c("i", {
                    staticClass: "fa fa-file-text-o",
                    attrs: { "aria-hidden": "true" }
                  })
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("Notes")])
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

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(383)
/* template */
var __vue_template__ = __webpack_require__(384)
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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
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

/***/ 384:
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

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(386)
/* template */
var __vue_template__ = __webpack_require__(387)
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
Component.options.__file = "resources/assets/js/claims/ClaimStats.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13e215f9", Component.options)
  } else {
    hotAPI.reload("data-v-13e215f9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-multiline is-mobile" }, [
    _c("div", { staticClass: "column is-hidden-desktop is-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content claim-stat" }, [
          _c("h3", { staticClass: "subtitle stat-title" }, [
            _vm._v("Gross Loss Amount")
          ]),
          _vm._v(" "),
          _c("h1", { staticClass: "title stat has-text-info" }, [
            _vm._v("$" + _vm._s(_vm.claim.gross_loss))
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column is-one-third is-hidden-mobile" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content claim-stat" }, [
          _c("h3", { staticClass: "subtitle stat-title" }, [
            _vm._v("Gross Loss Amount")
          ]),
          _vm._v(" "),
          _c("h1", { staticClass: "title stat has-text-info" }, [
            _vm._v("$" + _vm._s(_vm.claim.gross_loss))
          ]),
          _vm._v(" "),
          _vm._m(1)
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _vm._m(5)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "subtitle stat-title" }, [
      _c("a", { attrs: { href: "" } }, [
        _c("span", { staticClass: "icon" }, [
          _c("i", { staticClass: "fa fa-retweet" })
        ]),
        _vm._v(" Issue Correction")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "subtitle stat-title" }, [
      _c("a", { attrs: { href: "" } }, [
        _c("span", { staticClass: "icon" }, [
          _c("i", { staticClass: "fa fa-retweet" })
        ]),
        _vm._v(" Issue Correction")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-half-mobile" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content claim-stat" }, [
          _c("h3", { staticClass: "subtitle stat-title" }, [
            _vm._v("Time Open")
          ]),
          _vm._v(" "),
          _c("h1", { staticClass: "title stat has-text-grey" }, [_vm._v("6")]),
          _vm._v(" "),
          _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-half-mobile" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content claim-stat" }, [
          _c("h3", { staticClass: "subtitle stat-title" }, [
            _vm._v("Time To Contact")
          ]),
          _vm._v(" "),
          _c("h1", { staticClass: "title stat has-text-grey" }, [_vm._v("2")]),
          _vm._v(" "),
          _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-half-mobile" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content claim-stat" }, [
          _c("h3", { staticClass: "subtitle stat-title" }, [
            _vm._v("Time To Inspection")
          ]),
          _vm._v(" "),
          _c("h1", { staticClass: "title stat has-text-grey" }, [_vm._v("4")]),
          _vm._v(" "),
          _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-half-mobile" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content claim-stat" }, [
          _c("h3", { staticClass: "subtitle stat-title" }, [
            _vm._v("Time to Estimate")
          ]),
          _vm._v(" "),
          _c("h1", { staticClass: "title stat has-text-grey" }, [_vm._v("5")]),
          _vm._v(" "),
          _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
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
    require("vue-hot-reload-api")      .rerender("data-v-13e215f9", module.exports)
  }
}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(389)
/* template */
var __vue_template__ = __webpack_require__(390)
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
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

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column" }, [
      _c("div", { staticClass: "tags" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "icon",
            on: {
              click: function($event) {
                _vm.creatingNewTag = !_vm.creatingNewTag
              }
            }
          },
          [
            _c("i", {
              staticClass: "fa fa-plus",
              staticStyle: { color: "#ccc", position: "relative", top: "-3px" }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "tag is-dark" }, [
      _vm._v("CAT  "),
      _c("button", { staticClass: "delete is-small" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "tag is-dark" }, [
      _vm._v("Hurricane "),
      _c("button", { staticClass: "delete is-small" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "tag is-dark" }, [
      _vm._v("Harvey "),
      _c("button", { staticClass: "delete is-small" })
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

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(392)
/* template */
var __vue_template__ = __webpack_require__(393)
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

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	mounted: function mounted() {
		// console.log(claim.claim_data.accessContact.name);
	},

	methods: {
		ucwords: function ucwords(val) {
			// console.log(val);
			return val.toLowerCase().replace(/\b[a-z]/g, function (letter) {
				return letter.toUpperCase();
			});
		}
	},
	computed: {
		accessContact: function accessContact() {
			return claim.claim_data.accessContact.name;
		}
	}
});

/***/ }),

/***/ 393:
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
                    "h2",
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
                        _vm.accessContact
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
                                staticStyle: { "font-size": "1.25em" }
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
                            staticStyle: { "font-size": "1.25em" }
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
                                    _vm._v(": "),
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "tel:+" + phone.number }
                                      },
                                      [_vm._v(_vm._s(phone.number))]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          }
                        )
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.claim.claim_data.deskAdjuster
                  ? _c(
                      "div",
                      [
                        _vm.claim.claim_data.deskAdjuster.name
                          ? _c(
                              "h3",
                              {
                                staticClass: "subtitle",
                                staticStyle: {
                                  color: "#aaa",
                                  "font-size": ".8em"
                                }
                              },
                              [_vm._v("Desk Adjuster")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "h2",
                          {
                            staticClass: "title",
                            staticStyle: { "font-size": "1.25em" }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.claim.claim_data.deskAdjuster.name)
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(
                          _vm.claim.claim_data.deskAdjuster.phoneNumbers,
                          function(phone) {
                            return _c("p", [
                              phone.number
                                ? _c("span", [
                                    phone.type
                                      ? _c("strong", [
                                          _vm._v(_vm._s(phone.type))
                                        ])
                                      : _vm._e(),
                                    _vm._v(": "),
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "tel:+" + phone.number }
                                      },
                                      [_vm._v(_vm._s(phone.number))]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          }
                        ),
                        _vm._v(" "),
                        _vm.claim.claim_data.deskAdjuster.email
                          ? _c("p", [
                              _c("strong", [_vm._v("Email")]),
                              _vm._v(
                                ": " +
                                  _vm._s(
                                    _vm.claim.claim_data.deskAdjuster.email
                                  )
                              )
                            ])
                          : _vm._e()
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

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(395)
/* template */
var __vue_template__ = __webpack_require__(396)
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

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
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

/***/ 396:
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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(398)
/* template */
var __vue_template__ = __webpack_require__(399)
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 399:
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

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors_js__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors_js__["a" /* default */]();
    }

    /**
       * set data for form to post.
       */


    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};
            for (var property in this.originalData) {
                data[property] = this[property];
            }
            return data;
        }

        /**
           * Reset the form fields and clear any errors.
           */

    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }
    }, {
        key: 'get',
        value: function get(field) {
            return this.errors[field][0];
        }

        /**
            * send a post request to a given url.
            */

    }, {
        key: 'post',
        value: function post(url) {
            var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.submit('post', url, reset);
        }

        /**
            * send a put request to a given url.
            */

    }, {
        key: 'put',
        value: function put(url) {
            var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.submit('put', url, reset);
        }

        /**
            * send a patch request to a given url.
            */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
            * send a put request to a given url.
            */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
            * Submit the form.
            *
            * @param {string} requestType
            * @param {string} url
            */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data, reset);
                    resolve(response.data);
                }).catch(function (error) {
                    console.error(error);
                    _this.onFail(error.response.data.errors);
                    reject(error.response.data.errors);
                });
            });
        }

        /**
           * Handle a successful form submission.
           *
           * @param {object, var} data, reset
           */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data, reset) {
            if (reset == true) {
                this.reset();
            }
            return;
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} errors
         */

    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(401)
/* template */
var __vue_template__ = __webpack_require__(402)
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

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 402:
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
          staticStyle: { color: "#aaa", overflow: "hidden" },
          domProps: { textContent: _vm._s(_vm.user.name) }
        }),
        _vm._v(" "),
        _c(
          "h4",
          {
            staticStyle: {
              color: "#439BD1",
              "font-size": "1em",
              "margin-top": "-.25em",
              "font-weight": "700"
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
          staticStyle: { color: "#aaa", overflow: "hidden" },
          domProps: { textContent: _vm._s(_vm.reviewer.name) }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              color: "#64C6A3",
              "font-size": "1em",
              "margin-top": "-.25em",
              "font-weight": "700"
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

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(404)
/* template */
var __vue_template__ = __webpack_require__(405)
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content", staticStyle: { margin: "3rem" } },
    [
      _c("div", { staticClass: "timeline" }, [
        _c("div", { staticClass: "timeline-item" }, [
          _vm.user.avatar
            ? _c("div", { staticClass: "timeline-marker is-image is-32x32" }, [
                _c("a", { attrs: { href: "/users/" + _vm.user.id } }, [
                  _c("img", {
                    attrs: { src: _vm.user.avatar.path, alt: _vm.user.name }
                  })
                ])
              ])
            : _c("div", { staticClass: "timeline-marker is-secondary" }),
          _vm._v(" "),
          _vm._m(0)
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
                  _c("a", { attrs: { href: "/users/" + _vm.reviewer.id } }, [
                    _c("img", {
                      attrs: {
                        src: _vm.reviewer.avatar.path,
                        alt: _vm.reviewer.name
                      }
                    })
                  ])
                ]
              )
            : _c("div", { staticClass: "timeline-marker is-secondary" }),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "timeline-item" }, [
          _vm.user.avatar
            ? _c("div", { staticClass: "timeline-marker is-image is-32x32" }, [
                _c("a", { attrs: { href: "/users/" + _vm.user.id } }, [
                  _c("img", {
                    attrs: { src: _vm.user.avatar.path, alt: _vm.user.name }
                  })
                ])
              ])
            : _c("div", { staticClass: "timeline-marker is-secondary" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-content" }, [
            _c("p", { staticClass: "heading" }, [_vm._v("February 01, 2018")]),
            _vm._v(" "),
            _c("p", [
              _c("a", { attrs: { href: "/users/" + _vm.user.id } }, [
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
                  _c("a", { attrs: { href: "/users/" + _vm.reviewer.id } }, [
                    _c("img", {
                      attrs: {
                        src: _vm.reviewer.avatar.path,
                        alt: _vm.reviewer.name
                      }
                    })
                  ])
                ]
              )
            : _c("div", { staticClass: "timeline-marker is-secondary" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-content" }, [
            _c("p", { staticClass: "heading" }, [_vm._v("February 01, 2018")]),
            _vm._v(" "),
            _c("p", [
              _c("a", { attrs: { href: "/users/" + _vm.reviewer.id } }, [
                _vm._v(_vm._s(_vm.reviewer.name))
              ]),
              _vm._v(" assigned as reviewer")
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm._m(5)
      ])
    ]
  )
}
var staticRenderFns = [
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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(407)
/* template */
var __vue_template__ = __webpack_require__(410)
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
Component.options.__file = "resources/assets/js/claims/NewStatus.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10bc506c", Component.options)
  } else {
    hotAPI.reload("data-v-10bc506c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__claimData_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'NewStatus',
	components: {
		modal: __WEBPACK_IMPORTED_MODULE_1__Modal_vue___default.a
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__claimData_js__["a" /* default */];
	},
	mounted: function mounted() {
		// console.log(claim.claim_data.accessContact.name);
	},

	methods: {
		//
	},
	computed: {
		accessContact: function accessContact() {
			return claim.claim_data.accessContact.name;
		}
	}
});

/***/ }),

/***/ 408:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Modal',
	props: ['show'],
	data: function data() {
		return {};
	}
});

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal", class: { "is-active": _vm.show } }, [
    _c("div", { staticClass: "modal-background" }),
    _vm._v(" "),
    _c("div", { staticClass: "modal-content" }, [
      _c("section", {}, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9ad64d6a", module.exports)
  }
}

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("modal", { attrs: { show: _vm.creatingNewStatus } }, [
    _c("button", {
      staticClass: "modal-close is-large",
      attrs: { "aria-label": "close" },
      on: {
        click: function($event) {
          _vm.creatingNewStatus = !_vm.creatingNewStatus
        }
      }
    }),
    _vm._v(" "),
    _c("h3", { staticClass: "subtitle has-text-info has-text-weight-light" }, [
      _vm._v("Claim# " + _vm._s(_vm.claim.claim_number))
    ]),
    _vm._v(" "),
    _c("h1", { staticClass: "title", staticStyle: { color: "#efefef" } }, [
      _vm._v(_vm._s(_vm.newStatus.name))
    ]),
    _vm._v(" "),
    _c("hr", { staticStyle: { background: "#485269" } }),
    _vm._v(" "),
    _vm.newStatus.name == "Select a status"
      ? _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "label", attrs: { for: "status" } }, [
            _vm._v("Status:")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c("div", { staticClass: "select" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newStatus.name,
                      expression: "newStatus.name"
                    }
                  ],
                  staticClass: "input",
                  attrs: { name: "status" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.newStatus,
                        "name",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.statusesList, function(item) {
                  return _c("option", {
                    domProps: {
                      value: item.name,
                      textContent: _vm._s(item.name)
                    }
                  })
                })
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "label", attrs: { for: "another" } }, [
            _vm._v("Date:")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control has-icons-left" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newStatus.date,
                  expression: "newStatus.date"
                }
              ],
              staticClass: "input",
              attrs: { type: "text", placeholder: "mm/dd/yyyy" },
              domProps: { value: _vm.newStatus.date },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newStatus, "date", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "icon is-small is-left" }, [
              _c("i", { staticClass: "fa fa-calendar-o" })
            ]),
            _vm._v(" "),
            _vm.newStatus.errors.has("date")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(_vm.newStatus.errors.get("date"))
                  }
                })
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "label", attrs: { for: "another" } }, [
            _vm._v("Time:")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control has-icons-left" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newStatus.time,
                  expression: "newStatus.time"
                }
              ],
              staticClass: "input",
              attrs: { type: "text", placeholder: "11:35 am" },
              domProps: { value: _vm.newStatus.time },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newStatus, "time", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "icon is-small is-left" }, [
              _c("i", { staticClass: "fa fa-clock-o" })
            ]),
            _vm._v(" "),
            _vm.newStatus.errors.has("time")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(_vm.newStatus.errors.get("time"))
                  }
                })
              : _vm._e()
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field", staticStyle: { "margin-top": "1em" } }, [
      _c("input", {
        staticClass: "switch is-small is-rounded is-info",
        attrs: {
          id: "switchRoundedInfo",
          type: "checkbox",
          name: "switchRoundedInfo",
          checked: "checked"
        }
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "switchRoundedInfo" } }, [
        _vm._v("Export to third parties")
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "has-text-right", staticStyle: { "margin-top": "1.5em" } },
      [
        _c(
          "a",
          {
            staticClass: "is-size-7 has-text-white is-light is-small is-link",
            staticStyle: { "margin-right": "1em", "margin-top": "2em" },
            on: {
              click: function($event) {
                _vm.creatingNewStatus = false
              }
            }
          },
          [_vm._v("cancel")]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "button is-info is-small" }, [
          _vm._v("Add Status")
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-10bc506c", module.exports)
  }
}

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(412)
/* template */
var __vue_template__ = __webpack_require__(413)
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
Component.options.__file = "resources/assets/js/Alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bd50f0c", Component.options)
  } else {
    hotAPI.reload("data-v-4bd50f0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__claims_claimData_js__ = __webpack_require__(6);
//
//
//
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
	name: 'Alert',
	props: ['message', 'type'],
	components: {
		modal: __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default.a
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_1__claims_claimData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "article",
    { staticClass: "message", class: _vm.type },
    [
      _c(
        "div",
        { staticClass: "message-body", staticStyle: { background: "#FEFEFE" } },
        [_c("span", {}, [_vm._v(_vm._s(_vm.message))])]
      ),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.creatingNewStatus } }, [
        _c("button", {
          staticClass: "modal-close is-large",
          attrs: { "aria-label": "close" },
          on: {
            click: function($event) {
              _vm.creatingNewStatus = !_vm.creatingNewStatus
            }
          }
        })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4bd50f0c", module.exports)
  }
}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns" },
    [
      _c(
        "div",
        { staticClass: "column is-9", attrs: { id: "left-side" } },
        [
          _vm.hasAlert
            ? _c("alert", {
                attrs: { message: _vm.alert.message, type: _vm.alert.type },
                on: {
                  click: function($event) {
                    _vm.confirmingAlert = !_vm.confirmingAlert
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("title-header"),
          _vm._v(" "),
          _c("claim-nav"),
          _vm._v(" "),
          _c("claim-map"),
          _vm._v(" "),
          _c("tags"),
          _vm._v(" "),
          _c("claim-stats"),
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
      ),
      _vm._v(" "),
      _c("new-status")
    ],
    1
  )
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

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {

    /**
       * Create a new Errors instance.
       */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
       * Determine if an errors exists for the given field.
       *
       * @param {string} field
       */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
            * Determine if we have any errors.
            */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
            * Retrieve the error message for a field.
            *
            * @param {string} field
            */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
        * Record the new errors.
        *
        * @param {object} errors
        */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }

        /**
         * Clear one or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];
                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_statuses_js__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_newStatus_js__ = __webpack_require__(372);


/* harmony default export */ __webpack_exports__["a"] = ({
	active: false,
	locked: false,
	hasAlert: false,
	alert: { type: 'is-link', message: '' },
	claimId: '',
	claim: {},
	user: {},
	reviewer: {},
	bounds: {},
	map: {},
	marker: {},
	home: { lat: 30.2702208, lng: -97.7453625 },
	statusesList: __WEBPACK_IMPORTED_MODULE_0__data_statuses_js__["a" /* default */],
	newStatus: __WEBPACK_IMPORTED_MODULE_1__data_newStatus_js__["a" /* default */],
	creatingNewStatus: false,
	newTag: {},
	creatingNewTag: false,
	newConfirmAlert: {},
	confirmingAlert: false
});

/***/ })

},[367]);