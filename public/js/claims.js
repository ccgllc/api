webpackJsonp([12],{

/***/ 2:
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

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(709);


/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Claims_vue__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Claims_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Claims_vue__);


// import Croppa from 'vue-croppa';


// import Claim from './Claim.vue';
// import Documents from './Documents';
// import Certifications from './Certifications';
// import WorkHistory from './WorkHistory';
// import profileNavigation from './ProfileNavigation'

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
// Vue.use(Croppa, { componentName: 'avatar-cropper' });

var routes = [{ path: '/', name: "claims", component: __WEBPACK_IMPORTED_MODULE_2__Claims_vue___default.a }];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	routes: routes,
	linkActiveClass: 'is-active'
});

// router.beforeEach((to, from, next) => {

// })

var ClaimsVue = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'Claims',
	router: router,
	components: {
		// profileNavigation,
	},
	mounted: function mounted() {
		// this.user = window.userData;
		// this.user.avatar.path = '';
	},
	data: function data() {
		return {};
	},

	computed: {},
	methods: {}
}).$mount('#claims');

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(711)
/* template */
var __vue_template__ = __webpack_require__(712)
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
Component.options.__file = "resources/assets/js/claims/Claims.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78a1a8ed", Component.options)
  } else {
    hotAPI.reload("data-v-78a1a8ed", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 711:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'ClaimList',
	data: function data() {
		return {
			claims: [],
			search: ''
		};
	},
	mounted: function mounted() {
		// this.claims = claims;
		window.axios.get('/claims').then(function (response) {
			console.log(this.claims);
			return this.claims = response.data;
		}.bind(this));
	},

	methods: {}
});

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("h1", { staticClass: "title" }, [
        _vm._v("Claims (" + _vm._s(_vm.claims.length) + ")")
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table is-striped is-full-width" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.claims, function(claim) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(claim.carrier_name))]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "/claims/" + claim.id } }, [
                  _vm._v(_vm._s(claim.claim_number))
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(claim.type_of_loss || "n/a"))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(claim.insured))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(claim.date_of_loss))])
            ])
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "pageloader is-left-to-right is-info",
        class: { "is-active": !_vm.claims.length }
      },
      [_c("span", { staticClass: "title" }, [_vm._v("Loading Claims")])]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Carrier")]),
        _vm._v(" "),
        _c("th", [_vm._v("Claim #")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Insured")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date of Loss")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78a1a8ed", module.exports)
  }
}

/***/ })

},[708]);