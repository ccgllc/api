(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/dispatch"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dispatch/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DispatchClaimListItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DispatchClaimListItem.vue */ "./resources/assets/js/dispatch/DispatchClaimListItem.vue");
/* harmony import */ var _DispatchAdjusterListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DispatchAdjusterListItem.vue */ "./resources/assets/js/dispatch/DispatchAdjusterListItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    claimListItem: _DispatchClaimListItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    adjusterListItem: _DispatchAdjusterListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
    }); // this.turnOffAxiosHeaders()
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
      home: {
        lat: 30.2702208,
        lng: -97.7453625
      },
      city: '',
      state: '',
      street: '',
      number: 0
    };
  },
  computed: {
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
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
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
            str += "".concat(field, ": ").concat(history[field], ", ");
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
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
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
      window.axios.post("/api/users/locations", {
        adjusters: this.adjusters
      }).then(function (response) {
        return console.log(response);
      })["catch"](function (error) {
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
          adjuster.distance = {
            text: '',
            value: 0
          };
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
        } //}

      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
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
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
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
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
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
          content: "\n\t\t\t          \t<h1>".concat(data.claim_number, "</h1>\n\t\t\t          \t<h3>").concat(data.insured, " &nbsp;|&nbsp; ").concat(data.type_of_loss, " &nbsp;|&nbsp; ").concat(data.date_received, "</h3>\n\t\t\t\t\t\t<p>").concat(data.description, "</p>\n\t\t\t          ")
        });
        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
        this.claimMarkers.push(marker);
        this.map.panTo(marker.position); // this.adjusters = this.adjusters.filter(adjuster => {
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
          content: "\n\t\t\t          \t<a style=\"position:relative; top:-1rem; margin-left:.5rem;\" href=\"/users/".concat(data.id, "\" target=\"_blank\"><h1>").concat(data.name, "</h1></a>\n\t\t\t          ")
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
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
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
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
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
      var idx = this.selectedClaims.indexOf(claim); // console.log(idx);

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
      var idx = this.selectedAdjusters.indexOf(adjuster); // console.log(idx);

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
      this.home = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }; // console.log(this.home);

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/Dashboard.vue?vue&type=template&id=63022151&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dispatch/Dashboard.vue?vue&type=template&id=63022151& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
                          return _vm.getDistances()
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
          return _vm.selectToggle(_vm.adjuster)
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=template&id=115ea290&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=template&id=115ea290& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
          return _vm.selectToggle(_vm.claim)
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/js/dispatch/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/dispatch/Dashboard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_63022151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=63022151& */ "./resources/assets/js/dispatch/Dashboard.vue?vue&type=template&id=63022151&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/assets/js/dispatch/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_63022151___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_63022151___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/dispatch/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/dispatch/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/dispatch/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/dispatch/Dashboard.vue?vue&type=template&id=63022151&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/dispatch/Dashboard.vue?vue&type=template&id=63022151& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_63022151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=63022151& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/Dashboard.vue?vue&type=template&id=63022151&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_63022151___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_63022151___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/dispatch/DispatchAdjusterListItem.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/dispatch/DispatchAdjusterListItem.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DispatchAdjusterListItem_vue_vue_type_template_id_ef62174c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c& */ "./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c&");
/* harmony import */ var _DispatchAdjusterListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DispatchAdjusterListItem.vue?vue&type=script&lang=js& */ "./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DispatchAdjusterListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DispatchAdjusterListItem_vue_vue_type_template_id_ef62174c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DispatchAdjusterListItem_vue_vue_type_template_id_ef62174c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/dispatch/DispatchAdjusterListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchAdjusterListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatchAdjusterListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchAdjusterListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchAdjusterListItem_vue_vue_type_template_id_ef62174c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchAdjusterListItem.vue?vue&type=template&id=ef62174c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchAdjusterListItem_vue_vue_type_template_id_ef62174c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchAdjusterListItem_vue_vue_type_template_id_ef62174c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/dispatch/DispatchClaimListItem.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/dispatch/DispatchClaimListItem.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DispatchClaimListItem_vue_vue_type_template_id_115ea290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DispatchClaimListItem.vue?vue&type=template&id=115ea290& */ "./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=template&id=115ea290&");
/* harmony import */ var _DispatchClaimListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DispatchClaimListItem.vue?vue&type=script&lang=js& */ "./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DispatchClaimListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DispatchClaimListItem_vue_vue_type_template_id_115ea290___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DispatchClaimListItem_vue_vue_type_template_id_115ea290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/dispatch/DispatchClaimListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchClaimListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatchClaimListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchClaimListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=template&id=115ea290&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=template&id=115ea290& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchClaimListItem_vue_vue_type_template_id_115ea290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatchClaimListItem.vue?vue&type=template&id=115ea290& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dispatch/DispatchClaimListItem.vue?vue&type=template&id=115ea290&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchClaimListItem_vue_vue_type_template_id_115ea290___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatchClaimListItem_vue_vue_type_template_id_115ea290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/dispatch/dispatch.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/dispatch/dispatch.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue */ "./resources/assets/js/dispatch/Dashboard.vue");


var vue = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#dashboard',
  components: {
    dashboard: _Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ 9:
/*!********************************************************!*\
  !*** multi ./resources/assets/js/dispatch/dispatch.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandon/code/ccg/api/resources/assets/js/dispatch/dispatch.js */"./resources/assets/js/dispatch/dispatch.js");


/***/ })

},[[9,"/js/manifest","/js/vendor"]]]);