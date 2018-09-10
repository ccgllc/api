webpackJsonp([7],{

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

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(673);


/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dashboard_vue__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dashboard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Dashboard_vue__);


var vue = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	el: '#dashboard',
	components: {
		dashboard: __WEBPACK_IMPORTED_MODULE_1__Dashboard_vue___default.a
	}
});

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(675)
/* template */
var __vue_template__ = __webpack_require__(682)
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
Component.options.__file = "resources/assets/js/dispatch/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63022151", Component.options)
  } else {
    hotAPI.reload("data-v-63022151", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DispatchClaimListItem_vue__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DispatchClaimListItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DispatchClaimListItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DispatchAdjusterListItem_vue__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DispatchAdjusterListItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DispatchAdjusterListItem_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'DispatchDashboard',
	components: {
		claimListItem: __WEBPACK_IMPORTED_MODULE_0__DispatchClaimListItem_vue___default.a, adjusterListItem: __WEBPACK_IMPORTED_MODULE_1__DispatchAdjusterListItem_vue___default.a
	},
	created: function created() {
		// parse claim_data json column for each claim.
		return this.claims.forEach(function (claim) {
			claim.claim_data = JSON.parse(claim.claim_data);
		});
	},
	mounted: function mounted() {
		this.bounds = new google.maps.LatLngBounds();
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: this.home
		});

		// this.turnOffAxiosHeaders()
		// this.addMarker('claim', this.claims[0])
		// this.selectedClaims.push(this.claims[0]);
		// for (let claim of this.claims) {
		// 	this.addMarker('claim', claim);
		// }

		// for (let adjuster of this.adjusters) {
		// 	 this.number = adjuster.profile.street.match(/([\d])\w+/g);
		// 	 this.street = adjuster.profile.street.match(/([\D])/g);
		// 	 this.street = this.street.join('').trim();
		// 	 this.street = this.street.replace(/[\s]/g, '+');
		// 	 this.city = adjuster.profile.city;
		// 	 this.state = adjuster.profile.state;

		// 	window.axios.get(this.address)
		// 				.then(response => {
		// 					adjuster.profile.lat = response.data.results[0].geometry.location.lat;
		// 					adjuster.profile.lng = response.data.results[0].geometry.location.lng;
		// 					adjuster.profile.place_id = response.data.results[0].place_id;
		// 					adjuster.profile.formatted_address = response.data.results[0].formatted_address;
		// 				})
		// 				.catch(error => error);
		// }
	},
	data: function data() {
		return {
			distances: [],
			destinationUri: 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=',
			hideUnselectedClaims: false,
			addFilteredAdjustersToMap: false,
			search: '',
			allSelected: false,
			selectedClaims: [],
			selectedAdjusters: [],
			claims: dispatch.claims,
			adjusters: dispatch.adjusters,
			autocomplete: {},
			bounds: {},
			map: {},
			claimMarkers: [],
			adjusterMarkers: [],
			home: { lat: 30.2702208, lng: -97.7453625 },
			city: '',
			state: '',
			street: '',
			number: 0
		};
	},

	computed: {
		// address() {
		// 	return `https://maps.googleapis.com/maps/api/geocode/json?address=${this.number}+${this.street}+${this.city}+${this.state}&key=AIzaSyAJ2-Na1yIv_0zOlDuTbrizwya-5HcL1C0`;
		// },
		origin: function origin() {
			if (this.selectedClaims.length) {
				var loc = this.selectedClaims[0].claim_data.client.addresses[1];
				return new google.maps.LatLng(loc.latitude, loc.longitude);
			} else {
				return 'No Origin';
			}
		},
		destinations: function destinations() {
			var destinations = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.filteredAdjusters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var adjuster = _step.value;

					if (typeof adjuster.profile.lat == 'number' && typeof adjuster.profile.lng == 'number') {
						var dest = new google.maps.LatLng(adjuster.profile.lat, adjuster.profile.lng);
						destinations.push(dest);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return destinations;
		},
		workHistory: function workHistory() {
			var str = "";
			if (this.selectedAdjusters.length) {
				var history = this.selectedAdjusters[0].work_history;
				console.log(history);
				for (var field in history) {
					// console.log(field);
					if (typeof history[field] == 'number' && history[field] && field != "id" && field != "user_id") {
						str += field + ': ' + history[field] + ', ';
					}
				}
			}
			return str;
		},

		orderedAdjusters: function orderedAdjusters() {
			return window._.orderBy(this.filteredAdjusters, ['distance.value', 'xp'], ['asc', 'desc']);
		},
		filteredAdjusters: function filteredAdjusters() {
			var self = this;
			var results = [];
			self.adjusters.filter(function (adjuster) {
				if (results.length <= 24) {
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = adjuster.adjuster_licenses[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var license = _step2.value;

							if (license.license_state === self.selectedClaims[0].claim_data.client.addresses[1].state) {
								results.push(adjuster);
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			});
			return results;
		},
		actionable: function actionable() {
			return this.selectedClaims.length && this.selectedAdjusters.length ? true : false;
		}
	},
	methods: {
		saveLocations: function saveLocations() {
			window.axios.post('/api/users/locations', { adjusters: this.adjusters }).then(function (response) {
				return console.log(response);
			}).catch(function (error) {
				return error;
			});
		},
		getDistances: function getDistances() {
			var self = this;
			var service = new google.maps.DistanceMatrixService();
			return service.getDistanceMatrix({
				origins: [self.origin],
				destinations: self.destinations,
				travelMode: 'DRIVING',
				unitSystem: google.maps.UnitSystem.IMPERIAL
			}, self.filterDistances);
		},
		filterDistances: function filterDistances(response, status) {
			var self = this;
			console.log(status);
			return self.filteredAdjusters.forEach(function (adjuster) {
				var idx = self.filteredAdjusters.indexOf(adjuster);
				console.log(response);
				if (response.rows[0].elements[idx]) {
					adjuster.distance = { text: '', value: 0 };
					adjuster.distance.text = response.rows[0].elements[idx].distance.text; ///string eg.12.3 mi
					adjuster.distance.value = response.rows[0].elements[idx].distance.value; ///string eg.12.3 mi
				}
			});
		},
		addAdjusters: function addAdjusters() {
			//if (this.markers.length == 0) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this.adjusters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var a = _step3.value;

					this.addMarker('adjuster', a);
				}
				//}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		},
		toggleFilteredAdjusters: function toggleFilteredAdjusters() {
			if (this.addFilteredAdjustersToMap) {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = this.filteredAdjusters[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var a = _step4.value;

						this.addMarker('adjuster', a);
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			} else {
				this.adjusterMarkers = [];
			}
		},
		addClaims: function addClaims() {
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = this.claims[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var c = _step5.value;

					this.addMarker('claim', c);
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}
		},
		addMarker: function addMarker(type, data) {
			if (type == 'claim') {
				var position = {
					lat: +data.claim_data.client.addresses[1].latitude,
					lng: +data.claim_data.client.addresses[1].longitude
				};

				var marker = new google.maps.Marker({
					position: position,
					map: this.map
				});

				var infowindow = new google.maps.InfoWindow({
					content: '\n\t\t\t          \t<h1>' + data.claim_number + '</h1>\n\t\t\t          \t<h3>' + data.insured + ' &nbsp;|&nbsp; ' + data.type_of_loss + ' &nbsp;|&nbsp; ' + data.date_received + '</h3>\n\t\t\t\t\t\t<p>' + data.description + '</p>\n\t\t\t          '
				});

				marker.addListener('click', function () {
					infowindow.open(map, marker);
				});

				this.claimMarkers.push(marker);
				this.map.panTo(marker.position);

				// this.adjusters = this.adjusters.filter(adjuster => {
				// 	adjuster.adjuster_licenses.filter(license => license.license_state == data.claim_data.client.addresses[1].state)
				// });
			}
			if (type == 'adjuster') {
				var _marker = new google.maps.Marker({
					position: {
						lat: +data.profile.lat,
						lng: +data.profile.lng
					},
					icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					title: data.name,
					// icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					map: this.map
				});

				var _infowindow = new google.maps.InfoWindow({
					content: '\n\t\t\t          \t<h1>' + data.name + '</h1>\n\t\t\t          '
				});

				_marker.addListener('click', function () {
					_infowindow.open(map, _marker);
				});

				this.adjusterMarkers.push(_marker);
				this.map.panTo(_marker.position);
			}
		},
		clearAdjusterMarker: function clearAdjusterMarker(marker) {
			// console.log(marker);
			marker.setMap(null);
			return this.adjusterMarkers.splice(this.adjusterMarkers.indexOf(marker), 1);
		},
		clearClaimMarker: function clearClaimMarker(marker) {
			// console.log(marker);
			marker.setMap(null);
			return this.claimMarkers.splice(this.claimMarkers.indexOf(marker), 1);
		},
		clearAllMarkers: function clearAllMarkers() {
			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = this.claimMarkers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var marker = _step6.value;

					marker.setMap(null);
				}
			} catch (err) {
				_didIteratorError6 = true;
				_iteratorError6 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}
				} finally {
					if (_didIteratorError6) {
						throw _iteratorError6;
					}
				}
			}

			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = this.adjusterMarkers[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var _marker2 = _step7.value;

					_marker2.setMap(null);
				}
			} catch (err) {
				_didIteratorError7 = true;
				_iteratorError7 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}
				} finally {
					if (_didIteratorError7) {
						throw _iteratorError7;
					}
				}
			}

			this.claimMarkers, this.adjusterMarkers = [];
		},
		selectClaimToggle: function selectClaimToggle(claim) {
			var idx = this.selectedClaims.indexOf(claim);
			// console.log(idx);
			if (idx < 0) {
				claim.isSelected = true;
				this.selectedClaims.push(claim);
				this.addMarker('claim', claim);
			} else {
				claim.isSelected = false;
				this.clearClaimMarker(this.claimMarkers[idx]);
				return this.selectedClaims.splice(idx, 1);
			}
		},
		selectAdjusterToggle: function selectAdjusterToggle(adjuster) {
			var idx = this.selectedAdjusters.indexOf(adjuster);
			// console.log(idx);
			if (idx < 0) {
				adjuster.isSelected = true;
				this.selectedAdjusters.push(adjuster);
				this.addMarker('adjuster', adjuster);
			} else {
				adjuster.isSelected = false;
				this.clearAdjusterMarker(this.adjusterMarkers[idx]);
				return this.selectedAdjusters.splice(idx, 1);
			}
		},
		setHome: function setHome() {
			var place = this.autocomplete.getPlace();
			this.home = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
			// console.log(this.home);
			this.marker.setPosition(this.home);
			this.map.fitBounds(this.bounds.extend(this.home));
			this.map.setCenter(this.home);
			this.map.setZoom(12);
		},
		turnOffAxiosHeaders: function turnOffAxiosHeaders() {
			delete window.axios.defaults.headers.common['X-Requested-With'];
			delete window.axios.defaults.headers.common['Authorization'];
			delete window.axios.defaults.headers.common['X-CSRF-TOKEN'];
		}
	}
});

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(677)
/* template */
var __vue_template__ = __webpack_require__(678)
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
Component.options.__file = "resources/assets/js/dispatch/DispatchClaimListItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-115ea290", Component.options)
  } else {
    hotAPI.reload("data-v-115ea290", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 677:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'ClaimListItem',
	props: ['claim', 'selectedClaims'],
	data: function data() {
		return {
			isSelected: false
		};
	},

	computed: {
		selected: function selected() {
			console.log(this.selectedClaims.indexOf(this.claim));
			return this.selectedClaims.indexOf(this.claim) < 0 ? this.isSelected = false : this.isSelected = true;
		}
	},
	methods: {
		selectToggle: function selectToggle(claim) {
			this.isSelected = !this.isSelected;

			return this.isSelected == true ? this.$emit('claim-selected', claim) : this.$emit('claim-removed', claim);
		}
	}
});

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card is-dispatch-claim",
      class: { "is-active": _vm.isSelected },
      staticStyle: { "margin-bottom": "1em" },
      on: {
        click: function($event) {
          _vm.selectToggle(_vm.claim)
        }
      }
    },
    [
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-1 is-icon" }, [
            _vm.isSelected
              ? _c(
                  "span",
                  {
                    staticClass: "icon is-large",
                    staticStyle: { "padding-right": "1em" }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-lg",
                      class: [
                        { "has-text-danger": _vm.isSelected },
                        { "fa-check": _vm.isSelected }
                      ]
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isSelected
              ? _c(
                  "span",
                  {
                    staticClass: "icon is-large",
                    staticStyle: { "padding-right": "1em" }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-lg",
                      class: [
                        { "has-text-dark": !_vm.isSelected },
                        { "fa-map-marker": !_vm.isSelected }
                      ]
                    })
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("h4", { staticClass: "subtitle" }, [
              _c("span", { staticStyle: { "font-weight": "700" } }, [
                _vm._v(_vm._s(_vm.claim.carrier.name))
              ]),
              _vm._v(" Claim #")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "title" }, [
              _c("a", {
                attrs: { href: "/claims/" + _vm.claim.id },
                domProps: { textContent: _vm._s(_vm.claim.claim_number) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("h4", { staticClass: "subtitle" }, [_vm._v("Type Of Loss")]),
            _vm._v(" "),
            _c("h3", { staticClass: "title is-grey-lighter" }, [
              _c("a", {
                domProps: { textContent: _vm._s(_vm.claim.type_of_loss) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("h4", { staticClass: "subtitle" }, [_vm._v("Date Received")]),
            _vm._v(" "),
            _c("h3", { staticClass: "title is-grey-lighter" }, [
              _c("a", {
                domProps: { textContent: _vm._s(_vm.claim.date_received) }
              })
            ])
          ])
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-115ea290", module.exports)
  }
}

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(680)
/* template */
var __vue_template__ = __webpack_require__(681)
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
Component.options.__file = "resources/assets/js/dispatch/DispatchAdjusterListItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef62174c", Component.options)
  } else {
    hotAPI.reload("data-v-ef62174c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 680:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'AdjusterListItem',
	props: ['adjuster'],
	data: function data() {
		return {
			isSelected: false
		};
	},

	methods: {
		selectToggle: function selectToggle(adjuster) {
			this.isSelected = !this.isSelected;
			return this.isSelected == true ? this.$emit('adjuster-selected', adjuster) : this.$emit('adjuster-removed', adjuster);
		},
		totalXp: function totalXp(adjuster) {
			var xp = 0;
			if (adjuster.work_history) {
				Object.values(adjuster.work_history).filter(function (workHistory) {
					if (typeof workHistory === 'number') xp += workHistory;
				});
			}
			adjuster.xp = xp;
			return adjuster.xp;
		}
	}
});

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card is-dispatch-adjuster",
      class: { "is-active": _vm.isSelected },
      staticStyle: { "margin-bottom": "1em" },
      on: {
        click: function($event) {
          _vm.selectToggle(_vm.adjuster)
        }
      }
    },
    [
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-2 is-icon" }, [
            _c("a", { attrs: { href: "/users/" + _vm.adjuster.id } }, [
              _vm.adjuster.avatar
                ? _c("img", {
                    staticStyle: {
                      "border-radius": "512px",
                      border: "3px solid #343b4d",
                      "margin-top": ".5rem"
                    },
                    attrs: {
                      src: _vm.adjuster.avatar.path,
                      alt: _vm.adjuster.name,
                      width: "50%",
                      height: "auto"
                    }
                  })
                : _c(
                    "span",
                    {
                      staticClass: "icon is-large",
                      staticStyle: { "padding-right": "1em" }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-user-circle-o fa-2x has-text-dark"
                      })
                    ]
                  )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("h4", { staticClass: "subtitle" }, [_vm._v("Adjuster")]),
            _vm._v(" "),
            _c("h3", { staticClass: "title" }, [
              _c("a", { domProps: { textContent: _vm._s(_vm.adjuster.name) } })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column is-3 has-text-centered" }, [
            _c("h4", { staticClass: "subtitle" }, [_vm._v("XP")]),
            _vm._v(" "),
            _c("h3", { staticClass: "title is-grey-lighter" }, [
              _c("a", {
                domProps: { textContent: _vm._s(_vm.totalXp(_vm.adjuster)) }
              })
            ])
          ]),
          _vm._v(" "),
          _vm.adjuster.distance.text
            ? _c("div", { staticClass: "column" }, [
                _c("h4", { staticClass: "subtitle" }, [_vm._v("Distance")]),
                _vm._v(" "),
                _c("h3", { staticClass: "title is-grey-lighter" }, [
                  _c("a", {
                    domProps: {
                      textContent: _vm._s(_vm.adjuster.distance.text)
                    }
                  })
                ])
              ])
            : _vm._e()
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-ef62174c", module.exports)
  }
}

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _c("div", {
      staticStyle: { width: "100%", height: "600px", position: "fixed" },
      attrs: { id: "map" }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "columns section is-main" }, [
      _c("div", { staticClass: "column is-2" }, [
        _c(
          "h1",
          { staticClass: "title", staticStyle: { "font-weight": "700" } },
          [_vm._v("Options")]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("hr", { staticStyle: { background: "#ccc" } }),
        _vm._v(" "),
        _c("nav", { staticClass: "panel" }, [
          _c("div", { staticClass: "panel-block" }, [
            _c("p", { staticClass: "control has-icons-left" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "input",
                attrs: { type: "text", placeholder: "search" },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "panel-block", on: { click: _vm.clearAllMarkers } },
            [_vm._v("Clear All Markers")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "panel-block", on: { click: _vm.addAdjusters } },
            [_vm._v("Add Adjusters to Map")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "panel-block", on: { click: _vm.addClaims } },
            [_vm._v("Add Claims to Map")]
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2)
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "column" },
        [
          _c(
            "h1",
            { staticClass: "title", staticStyle: { "font-weight": "700" } },
            [_vm._v("Assign Queue")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.hideUnselectedClaims,
                      expression: "hideUnselectedClaims"
                    }
                  ],
                  staticClass: "switch is-rounded is-small",
                  attrs: {
                    id: "hideUnselectedClaim",
                    type: "checkbox",
                    name: "hideUnselectedClaim"
                  },
                  domProps: {
                    checked: Array.isArray(_vm.hideUnselectedClaims)
                      ? _vm._i(_vm.hideUnselectedClaims, null) > -1
                      : _vm.hideUnselectedClaims
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.hideUnselectedClaims,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            (_vm.hideUnselectedClaims = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.hideUnselectedClaims = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.hideUnselectedClaims = $$c
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "hideUnselectedClaim" } }, [
                  _vm._v("Hide Unselected")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("hr", { staticStyle: { background: "#ccc" } }),
          _vm._v(" "),
          _vm._l(_vm.claims, function(claim) {
            return _c("claim-list-item", {
              key: claim.id,
              attrs: { claim: claim, "selected-claims": _vm.selectedClaims },
              on: {
                "claim-selected": _vm.selectClaimToggle,
                "claim-removed": _vm.selectClaimToggle
              }
            })
          }),
          _vm._v(" "),
          _vm._m(3)
        ],
        2
      ),
      _vm._v(" "),
      _vm.selectedClaims.length
        ? _c(
            "div",
            { staticClass: "column is-one-third" },
            [
              _c(
                "h1",
                { staticClass: "title", staticStyle: { "font-weight": "700" } },
                [_vm._v("Adjusters")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c("div", { staticClass: "column" }, [
                  _c("div", { staticClass: "field" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.addFilteredAdjustersToMap,
                          expression: "addFilteredAdjustersToMap"
                        }
                      ],
                      staticClass: "switch is-rounded is-small",
                      attrs: {
                        id: "addFilteredAdjusters",
                        type: "checkbox",
                        name: "addFilteredAdjusters"
                      },
                      domProps: {
                        checked: Array.isArray(_vm.addFilteredAdjustersToMap)
                          ? _vm._i(_vm.addFilteredAdjustersToMap, null) > -1
                          : _vm.addFilteredAdjustersToMap
                      },
                      on: {
                        change: [
                          function($event) {
                            var $$a = _vm.addFilteredAdjustersToMap,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  (_vm.addFilteredAdjustersToMap = $$a.concat([
                                    $$v
                                  ]))
                              } else {
                                $$i > -1 &&
                                  (_vm.addFilteredAdjustersToMap = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.addFilteredAdjustersToMap = $$c
                            }
                          },
                          _vm.toggleFilteredAdjusters
                        ]
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "addFilteredAdjusters" } }, [
                      _vm._v("Add All")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column" }, [
                  _c("div", { staticClass: "field" }, [
                    _c("input", {
                      staticClass: "switch is-rounded is-small",
                      attrs: {
                        id: "getDistanceFromClaim",
                        type: "checkbox",
                        name: "getDistanceFromClaim"
                      },
                      on: {
                        change: function($event) {
                          _vm.getDistances()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "getDistanceFromClaim" } }, [
                      _vm._v("Get Distance")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr", { staticStyle: { background: "#ccc" } }),
              _vm._v(" "),
              _vm._l(_vm.orderedAdjusters, function(adjuster) {
                return _c("adjuster-list-item", {
                  key: adjuster.id,
                  attrs: { adjuster: adjuster },
                  on: {
                    "adjuster-selected": _vm.selectAdjusterToggle,
                    "adjuster-removed": _vm.selectAdjusterToggle
                  }
                })
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.actionable
        ? _c("div", { staticClass: "column is-2" }, [
            _c(
              "h1",
              { staticClass: "title", staticStyle: { "font-weight": "700" } },
              [_vm._v("Info")]
            ),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("hr", { staticStyle: { background: "#ccc" } }),
            _vm._v(" "),
            _c("h3", { staticClass: "title" }, [_vm._v("Work History")]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.workHistory))]),
            _vm._v(" "),
            _vm._m(5)
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "field" }, [
          _c("input", {
            staticClass: "switch is-rounded is-small",
            attrs: { id: "hide", type: "checkbox", name: "hide" }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "hide" } }, [_vm._v("Hide")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "panel-block" }, [
      _c("input", { attrs: { type: "checkbox" } }),
      _vm._v("\n\t\t\t    Toggle\n\t\t\t  ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-block" }, [
      _c("button", { staticClass: "button is-link is-outlined is-fullwidth" }, [
        _vm._v("\n\t\t\t      reset all filters\n\t\t\t    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass: "pagination",
        attrs: { role: "navigation", "aria-label": "pagination" }
      },
      [
        _c("a", { staticClass: "pagination-previous" }, [_vm._v("Previous")]),
        _vm._v(" "),
        _c("a", { staticClass: "pagination-next" }, [_vm._v("Next page")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "field" }, [
          _c("input", {
            staticClass: "switch is-rounded is-small",
            attrs: { id: "hideHistory", type: "checkbox", name: "hideHistory" }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "hideHistory" } }, [
            _vm._v("Hide HIsstory")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card is-dispatch-action" }, [
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-2 is-icon" }, [
            _c(
              "span",
              {
                staticClass: "icon is-large",
                staticStyle: { "padding-right": "1em" }
              },
              [
                _c("i", {
                  staticClass: "fa fa-paper-plane-o fa-lg has-text-dark"
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("h3", { staticClass: "title" }, [_vm._v("Send Work Assignment")])
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
    require("vue-hot-reload-api")      .rerender("data-v-63022151", module.exports)
  }
}

/***/ })

},[672]);