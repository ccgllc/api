webpackJsonp([4],{

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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VueCharts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_index_js__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseCharts__ = __webpack_require__(355);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["a"]; });
/* unused harmony reexport HorizontalBar */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["c"]; });
/* unused harmony reexport Line */
/* unused harmony reexport Pie */
/* unused harmony reexport PolarArea */
/* unused harmony reexport Radar */
/* unused harmony reexport Bubble */
/* unused harmony reexport Scatter */
/* unused harmony reexport mixins */
/* unused harmony reexport generateChart */


var VueCharts = {
  Bar: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["a" /* Bar */],
  HorizontalBar: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["d" /* HorizontalBar */],
  Doughnut: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["c" /* Doughnut */],
  Line: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["e" /* Line */],
  Pie: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["f" /* Pie */],
  PolarArea: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["g" /* PolarArea */],
  Radar: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["h" /* Radar */],
  Bubble: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["b" /* Bubble */],
  Scatter: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["i" /* Scatter */],
  mixins: __WEBPACK_IMPORTED_MODULE_0__mixins_index_js__["a" /* default */],
  generateChart: __WEBPACK_IMPORTED_MODULE_1__BaseCharts__["j" /* generateChart */]
};
/* unused harmony default export */ var _unused_webpack_default_export = (VueCharts);


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counts_js__ = __webpack_require__(349);

/* harmony default export */ __webpack_exports__["a"] = ({
	counts: __WEBPACK_IMPORTED_MODULE_0__counts_js__["a" /* default */],
	newHireCount: 0,
	newHires: [],
	candidateCount: 0,
	candidates: [],
	applicantCount: 0,
	applicants: []
});

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home_vue__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var routes = [{ path: '/', name: "home", component: __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default.a }];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	routes: routes,
	linkActiveClass: 'is-active'
});

var Dashboard = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'Dashboard',
	router: router,
	components: {
		//root vue components here.
	},
	data: function data() {
		return {
			//Dashboard Data.
		};
	}
}).$mount('#dashboard');

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(348)
/* template */
var __vue_template__ = __webpack_require__(369)
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
Component.options.__file = "resources/assets/js/hrDashboard/components/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d39f031", Component.options)
  } else {
    hotAPI.reload("data-v-1d39f031", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserRolesChart_js__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserStatusesChart_js__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserCounts_vue__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserCounts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__UserCounts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NewHires_vue__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NewHires_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__NewHires_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Candidates_vue__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Candidates_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Candidates_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Applicants_vue__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Applicants_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Applicants_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Home',
	components: {
		dashboardNavigation: __WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue___default.a,
		userRolesChart: __WEBPACK_IMPORTED_MODULE_2__UserRolesChart_js__["a" /* default */],
		userStatusesChart: __WEBPACK_IMPORTED_MODULE_3__UserStatusesChart_js__["a" /* default */],
		userCounts: __WEBPACK_IMPORTED_MODULE_4__UserCounts_vue___default.a,
		newHires: __WEBPACK_IMPORTED_MODULE_5__NewHires_vue___default.a,
		candidates: __WEBPACK_IMPORTED_MODULE_6__Candidates_vue___default.a,
		applicants: __WEBPACK_IMPORTED_MODULE_7__Applicants_vue___default.a
	},
	mounted: function mounted() {
		this.newHires = window.dashboardData.newHires;
		this.newHireCount = window.dashboardData.newHireCount;
		this.candidates = window.dashboardData.candidates;
		this.candidateCount = window.dashboardData.candidateCount;
		this.applicants = window.dashboardData.applicants;
		this.applicantCount = window.dashboardData.applicantCount;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	},

	methods: {
		//
	}
});

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	applicants: 0,
	active: 0,
	inActive: 0,
	noHire: 0,
	total: 0
});

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(351)
/* template */
var __vue_template__ = __webpack_require__(352)
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
Component.options.__file = "resources/assets/js/hrDashboard/components/DashboardNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea50aa34", Component.options)
  } else {
    hotAPI.reload("data-v-ea50aa34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 351:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "DasboardNavigation",
	data: function data() {
		return {};
	}
});

/***/ }),

/***/ 352:
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
    return _c(
      "div",
      { staticClass: "tabs", staticStyle: { "margin-bottom": "5rem" } },
      [
        _c("ul", [
          _c("li", { staticClass: "is-active" }, [
            _c("a", { attrs: { href: "/dashboard" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-tachometer" })
              ]),
              _vm._v("Overview")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "/users" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-user-circle-o" })
              ]),
              _vm._v("Manage Users")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "/roles" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-users" })
              ]),
              _vm._v("Mange Roles")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-envelope" })
              ]),
              _vm._v("Engagement")
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-ea50aa34", module.exports)
  }
}

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(160);

/* harmony default export */ __webpack_exports__["a"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* Bar */],
    mounted: function mounted() {
        this.chartData.labels = window.dashboardData.userRolesChart.labels;
        this.chartData.datasets[0].data = window.dashboardData.userRolesChart.datasets[0].data;
        this.renderChart(this.chartData, this.options);
    },
    data: function data() {
        return {
            chartData: {
                labels: [],
                datasets: [{
                    backgroundColor: ['#439BD1'],
                    data: []
                }]
            },
            options: {
                title: { display: true, text: 'System Users By Role' },
                legend: { display: false },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        categoryPercentage: 0.5,
                        barPercentage: 0.2
                    }]
                }
            }
        };
    }
});

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reactiveData */
/* unused harmony export reactiveProp */
function dataHandler(newData, oldData) {
  if (oldData) {
    var chart = this.$data._chart;
    var newDatasetLabels = newData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldDatasetLabels = oldData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldLabels = JSON.stringify(oldDatasetLabels);
    var newLabels = JSON.stringify(newDatasetLabels);

    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
      newData.datasets.forEach(function (dataset, i) {
        var oldDatasetKeys = Object.keys(oldData.datasets[i]);
        var newDatasetKeys = Object.keys(dataset);
        var deletionKeys = oldDatasetKeys.filter(function (key) {
          return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
        });
        deletionKeys.forEach(function (deletionKey) {
          delete chart.data.datasets[i][deletionKey];
        });

        for (var attribute in dataset) {
          if (dataset.hasOwnProperty(attribute)) {
            chart.data.datasets[i][attribute] = dataset[attribute];
          }
        }
      });

      if (newData.hasOwnProperty('labels')) {
        chart.data.labels = newData.labels;
      }

      if (newData.hasOwnProperty('xLabels')) {
        chart.data.xLabels = newData.xLabels;
      }

      if (newData.hasOwnProperty('yLabels')) {
        chart.data.yLabels = newData.yLabels;
      }

      chart.update();
    } else {
      if (chart) {
        chart.destroy();
      }

      this.renderChart(this.chartData, this.options);
    }
  } else {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }

    this.renderChart(this.chartData, this.options);
  }
}

var reactiveData = {
  data: function data() {
    return {
      chartData: null
    };
  },
  watch: {
    'chartData': dataHandler
  }
};
var reactiveProp = {
  props: {
    chartData: {
      required: true
    }
  },
  watch: {
    'chartData': dataHandler
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  reactiveData: reactiveData,
  reactiveProp: reactiveProp
});

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["j"] = generateChart;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HorizontalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PolarArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Radar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Scatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

function generateChart(chartId, chartType) {
  return {
    render: function render(createElement) {
      return createElement('div', {
        style: this.styles,
        class: this.cssClasses
      }, [createElement('canvas', {
        attrs: {
          id: this.chartId,
          width: this.width,
          height: this.height
        },
        ref: 'canvas'
      })]);
    },
    props: {
      chartId: {
        default: chartId,
        type: String
      },
      width: {
        default: 400,
        type: Number
      },
      height: {
        default: 400,
        type: Number
      },
      cssClasses: {
        type: String,
        default: ''
      },
      styles: {
        type: Object
      },
      plugins: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        _chart: null,
        _plugins: this.plugins
      };
    },
    methods: {
      addPlugin: function addPlugin(plugin) {
        this.$data._plugins.push(plugin);
      },
      renderChart: function renderChart(data, options) {
        if (this.$data._chart) this.$data._chart.destroy();
        this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
          type: chartType,
          data: data,
          options: options,
          plugins: this.$data._plugins
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
    }
  };
}
var Bar = generateChart('bar-chart', 'bar');
var HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar');
var Doughnut = generateChart('doughnut-chart', 'doughnut');
var Line = generateChart('line-chart', 'line');
var Pie = generateChart('pie-chart', 'pie');
var PolarArea = generateChart('polar-chart', 'polarArea');
var Radar = generateChart('radar-chart', 'radar');
var Bubble = generateChart('bubble-chart', 'bubble');
var Scatter = generateChart('scatter-chart', 'scatter');
/* unused harmony default export */ var _unused_webpack_default_export = ({
  Bar: Bar,
  HorizontalBar: HorizontalBar,
  Doughnut: Doughnut,
  Line: Line,
  Pie: Pie,
  PolarArea: PolarArea,
  Radar: Radar,
  Bubble: Bubble,
  Scatter: Scatter
});

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(160);

/* harmony default export */ __webpack_exports__["a"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["b" /* Doughnut */],
    mounted: function mounted() {
        this.chartData.datasets[0].data.push(window.dashboardData.applicantCount);
        // this.chartData.datasets[0].data.push(window.chartData.totalUsers);
        this.chartData.datasets[0].data.push(window.dashboardData.activeCount);
        this.chartData.datasets[0].data.push(window.dashboardData.candidateCount);
        this.chartData.datasets[0].data.push(window.dashboardData.newHireCount);
        this.chartData.datasets[0].data.push(window.dashboardData.noHireCount);
        this.renderChart(this.chartData, this.options);
        var chart = this.$data._chart;
        this.$refs.canvas.onclick = function (evt) {
            var metric = chart.getElementsAtEvent(evt);
            if (metric[0]) {
                var chartData = metric[0]['_chart'].config.data;
                var idx = metric[0]['_index'];

                var label = chartData.labels[idx];
                var value = chartData.datasets[0].data[idx];

                var url = "/users/" + label;
                // console.log(url);
                // alert(url);
                window.location = url;
            }
        };
    },
    data: function data() {
        return {
            chartData: {
                labels: ['applicant', 'active', 'candidate', 'new-Hire', 'no-hire'],
                datasets: [{
                    backgroundColor: ['#439BD1', '#30A987', '#343b4d', '#FEDD62', '#FC3C63'],
                    data: []
                }]
            },
            options: {
                title: { display: true, text: 'Total Users' },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxWidth: 12
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        };
    }
});

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(358)
/* template */
var __vue_template__ = __webpack_require__(359)
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
Component.options.__file = "resources/assets/js/hrDashboard/components/UserCounts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a1d9767e", Component.options)
  } else {
    hotAPI.reload("data-v-a1d9767e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'UserCounts',
	mounted: function mounted() {
		this.data.applicants = window.dashboardData.applicantCount;
		this.data.active = window.dashboardData.activeCount;
		this.data.inActive = window.dashboardData.inActiveCount;
		this.data.noHire = window.dashboardData.noHireCount;
		this.data.total = +window.dashboardData.candidateCount + +window.dashboardData.newHireCount + +this.data.applicants + +this.data.active + +this.data.inActive + +this.data.noHire;
	},
	data: function data() {
		return {
			data: __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */].counts
		};
	},

	methods: {
		view: function view(status) {
			return window.location = '/users' + status;
		}
	}
});

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns", staticStyle: { margin: "3rem 0 3rem 0" } },
    [
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("?page=1")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-total" }, [
                _vm._v(_vm._s(_vm.data.total))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("Total")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/applicant")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-applicants" }, [
                _vm._v(_vm._s(_vm.data.applicants))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("Applicants")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/active")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-active" }, [
                _vm._v(_vm._s(_vm.data.active))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("Active")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/in-active")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-inactive" }, [
                _vm._v(_vm._s(_vm.data.inActive))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("In-Active")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/no-hire")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-no-hires" }, [
                _vm._v(_vm._s(_vm.data.noHire))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("No Hire")])
            ])
          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-a1d9767e", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(361)
/* template */
var __vue_template__ = __webpack_require__(362)
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
Component.options.__file = "resources/assets/js/hrDashboard/components/NewHires.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30a80891", Component.options)
  } else {
    hotAPI.reload("data-v-30a80891", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: "NewHire",
	mounted: function mounted() {
		this.newHireCount = window.dashboardData.newHireCount;
		this.newHires = window.dashboardData.newHires;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header is-warning" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _c("span", { staticClass: "tag is-dark" }, [
            _vm._v(_vm._s(_vm.newHireCount))
          ]),
          _vm._v(" New Hires\n\t\t    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          _vm._l(_vm.newHires, function(newHire) {
            return _c("div", { staticClass: "card is-stacked" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "span",
                    { staticClass: "tag is-rounded is-small is-pulled-right" },
                    [_vm._v("Incomplete")]
                  ),
                  _vm._v(" "),
                  _c("h3", [
                    _c("a", { attrs: { href: "/profile/" + newHire.id } }, [
                      _vm._v(_vm._s(newHire.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "progress",
                    {
                      staticClass: "progress is-success is-small",
                      attrs: { value: "0", max: "100" }
                    },
                    [_vm._v("0%")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "card-footer" }, [
                _c("span", { staticClass: "card-footer-item" }, [
                  _c("i", { staticClass: "fa fa-clock-o" }),
                  _vm._v(" " + _vm._s(newHire.created_at))
                ]),
                _vm._v(" "),
                _vm._m(0, true)
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("a", { staticClass: "button" }, [_vm._v("All New Hires")])
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
      "div",
      { staticClass: "card-footer-item dropdown is-hoverable" },
      [
        _c("div", { staticClass: "dropdown-trigger" }, [
          _c(
            "a",
            {
              attrs: {
                "aria-haspopup": "true",
                "aria-controls": "dropdown-menu"
              }
            },
            [
              _c("span", [_vm._v("Action")]),
              _vm._v(" "),
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", {
                  staticClass: "fa fa-angle-down",
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
            attrs: { id: "dropdown-menu", role: "menu" }
          },
          [
            _c("div", { staticClass: "dropdown-content" }, [
              _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
                _vm._v("\n\t\t\t\t\t\t        Notify\n\t\t\t\t\t\t      ")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "dropdown-item" }, [
                _vm._v("\n\t\t\t\t\t\t        Review\n\t\t\t\t\t\t      ")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "dropdown-item" }, [
                _vm._v("\n\t\t\t\t\t\t        Revoke offer\n\t\t\t\t\t\t      ")
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
                _vm._v(
                  "\n\t\t\t\t\t\t        Complete onboarding\n\t\t\t\t\t\t      "
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30a80891", module.exports)
  }
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(364)
/* template */
var __vue_template__ = __webpack_require__(365)
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
Component.options.__file = "resources/assets/js/hrDashboard/components/Candidates.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-132ce2a2", Component.options)
  } else {
    hotAPI.reload("data-v-132ce2a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Candidates',
	mounted: function mounted() {
		this.candidateCount = window.dashboardData.candidateCount;
		this.candidates = window.dashboardData.candidates;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	},

	methods: {
		removeCandidate: function removeCandidate(user) {
			var _this = this;

			window.axios.patch('/api/user/' + user.id + '/status/', { status: 'applicant' }).then(function (response) {
				var idx = _this.candidates.indexOf(user);
				_this.candidates.splice(idx, 1);
				_this.applicants.unshift(response.data);
			});
		}
	}
});

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header is-dark" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _c("span", { staticClass: "tag is-secondary" }, [
            _vm._v(_vm._s(_vm.candidateCount))
          ]),
          _vm._v(" Candidates\n\t\t    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          _vm._l(_vm.candidates, function(candidate) {
            return _c("div", { staticClass: "card is-stacked" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "is-pulled-right is-tooltip-warning tooltip is-tooltip-left",
                      attrs: { "data-tooltip": "Remove from candidates" },
                      on: {
                        click: function($event) {
                          _vm.removeCandidate(candidate)
                        }
                      }
                    },
                    [_c("a", { staticClass: "delete is-small" })]
                  ),
                  _vm._v(" "),
                  _c("h3", [
                    _c("a", { attrs: { href: "/profile/" + candidate.id } }, [
                      _vm._v(_vm._s(candidate.name))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "card-footer" }, [
                _c("span", { staticClass: "card-footer-item" }, [
                  _c("i", { staticClass: "fa fa-clock-o" }),
                  _vm._v(" " + _vm._s(candidate.created_at))
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "card-footer-item" }, [_vm._v("Hire")])
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("a", { staticClass: "button" }, [_vm._v("All Candidates")])
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
    require("vue-hot-reload-api")      .rerender("data-v-132ce2a2", module.exports)
  }
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(367)
/* template */
var __vue_template__ = __webpack_require__(368)
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
Component.options.__file = "resources/assets/js/hrDashboard/components/Applicants.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47967083", Component.options)
  } else {
    hotAPI.reload("data-v-47967083", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Applicants',
	mounted: function mounted() {
		this.applicants = window.dashboardData.applicants;
		this.applicantCount = window.dashboardData.applicantCount;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	},

	methods: {
		makeCandidate: function makeCandidate(user) {
			var _this = this;

			window.axios.patch('/api/user/' + user.id + '/status/', { status: 'candidate' }).then(function (response) {
				console.log('setting as candidate');
				var idx = _this.applicants.indexOf(user);
				_this.applicants.splice(idx, 1);
				_this.candidates.unshift(response.data);
			});
		}
	}
});

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header is-info" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _c("span", { staticClass: "tag is-dark" }, [
            _vm._v(_vm._s(_vm.applicantCount))
          ]),
          _vm._v(" Recent Applicants \n\t\t    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          _vm._l(_vm.applicants, function(applicant) {
            return _c("div", { staticClass: "card is-stacked" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c("h3", [
                    _c("a", { attrs: { href: "/profile/" + applicant.id } }, [
                      _vm._v(_vm._s(applicant.name))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "card-footer" }, [
                _c("span", { staticClass: "card-footer-item" }, [
                  _c("i", { staticClass: "fa fa-clock-o" }),
                  _vm._v(_vm._s(applicant.created_at))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-footer-item dropdown is-hoverable" },
                  [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "dropdown-menu",
                        attrs: { id: "dropdown-menu", role: "menu" }
                      },
                      [
                        _c("div", { staticClass: "dropdown-content" }, [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              on: {
                                click: function($event) {
                                  _vm.makeCandidate(applicant)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t        Make candidate\n\t\t\t\t\t\t      "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("a", { staticClass: "dropdown-item" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t        View applicant details\n\t\t\t\t\t\t      "
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("a", { staticClass: "button" }, [_vm._v("All Applicants")])
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
        "a",
        {
          attrs: { "aria-haspopup": "true", "aria-controls": "dropdown-menu" }
        },
        [
          _c("span", [_vm._v("Action")]),
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
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47967083", module.exports)
  }
}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-gapless" }, [
    _c("div", { staticClass: "column is-1" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "column is-10" },
      [
        _c("h1", { staticClass: "title hr-title" }, [_vm._v("HR Dashboard")]),
        _vm._v(" "),
        _c("dashboard-navigation"),
        _vm._v(" "),
        _c("div", { staticClass: "columns" }, [
          _c(
            "div",
            { staticClass: "column is-4" },
            [_c("user-statuses-chart")],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "column is-8" }, [_c("user-roles-chart")], 1)
        ]),
        _vm._v(" "),
        _c("user-counts"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "columns" },
          [
            _c("new-hires"),
            _vm._v(" "),
            _c("candidates"),
            _vm._v(" "),
            _c("applicants")
          ],
          1
        )
      ],
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
    require("vue-hot-reload-api")      .rerender("data-v-1d39f031", module.exports)
  }
}

/***/ })

},[345]);