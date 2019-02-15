(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/user"],{

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


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

/***/ "./resources/assets/js/data/certifications.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/data/certifications.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([// { name: 'none', label: 'None' },
{
  name: 'AIC',
  label: 'AIC',
  expiration: false
}, {
  name: 'CPCU',
  label: 'CPCU',
  expiration: false
}, {
  name: 'TWIA/TFPA',
  label: 'TWIA / TFPA',
  expiration: 1
}, {
  name: 'NFIP',
  label: 'NFIP',
  expiration: 1
}, {
  name: 'HAAG',
  label: 'HAAG',
  expiration: false
}, {
  name: 'IIRC',
  label: 'IIRC',
  expiration: false
}, {
  name: 'rope/harness',
  label: 'Rope & Harness',
  expiration: false
}, {
  name: 'Earthquake',
  label: 'Earthquake',
  expiration: 1
}, {
  name: 'Umpire',
  label: 'Umpire',
  expiration: false
}, {
  name: 'Appraiser',
  label: 'Appraiser',
  expiration: false
}]);

/***/ }),

/***/ "./resources/assets/js/data/software.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/data/software.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'xactimate',
  label: 'Xactimate'
}, {
  name: 'symbility',
  label: 'Symbility'
}, {
  name: 'simsol',
  label: 'Simsol'
}, {
  name: 'guidewire',
  label: 'Guidewire'
}, {
  name: 'VCA',
  label: 'VCA (Virtual Claim Adjuster)'
}, {
  name: 'MSB/Integra Claim',
  label: 'MSB/Integra Claim'
}]);

/***/ }),

/***/ "./resources/assets/js/data/states.js":
/*!********************************************!*\
  !*** ./resources/assets/js/data/states.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  abbr: 'AL',
  name: 'Alabama'
}, {
  abbr: 'AK',
  name: 'Alaska'
}, {
  abbr: 'AZ',
  name: 'Arizona'
}, {
  abbr: 'AR',
  name: 'Arkansas'
}, {
  abbr: 'CA',
  name: 'California'
}, {
  abbr: 'CO',
  name: 'Colorado'
}, {
  abbr: 'CT',
  name: 'Connecticut'
}, {
  abbr: 'DE',
  name: 'Delaware'
}, {
  abbr: 'DC',
  name: 'District of Columbia'
}, {
  abbr: 'FL',
  name: 'Florida'
}, {
  abbr: 'GA',
  name: 'Georgia'
}, {
  abbr: 'HI',
  name: 'Hawaii'
}, {
  abbr: 'ID',
  name: 'Idaho'
}, {
  abbr: 'IL',
  name: 'Illinois'
}, {
  abbr: 'IN',
  name: 'Indiana'
}, {
  abbr: 'IA',
  name: 'Iowa'
}, {
  abbr: 'KS',
  name: 'Kansas'
}, {
  abbr: 'KY',
  name: 'Kentucky'
}, {
  abbr: 'LA',
  name: 'Louisiana'
}, {
  abbr: 'ME',
  name: 'Maine'
}, {
  abbr: 'MD',
  name: 'Maryland'
}, {
  abbr: 'MA',
  name: 'Massachusetts'
}, {
  abbr: 'MI',
  name: 'Michigan'
}, {
  abbr: 'MN',
  name: 'Minnesota'
}, {
  abbr: 'MS',
  name: 'Mississippi'
}, {
  abbr: 'MO',
  name: 'Missouri'
}, {
  abbr: 'MT',
  name: 'Montana'
}, {
  abbr: 'NE',
  name: 'Nebraska'
}, {
  abbr: 'NV',
  name: 'Nevada'
}, {
  abbr: 'NH',
  name: 'New Hampshire'
}, {
  abbr: 'NJ',
  name: 'New Jersey'
}, {
  abbr: 'NM',
  name: 'New Mexico'
}, {
  abbr: 'NY',
  name: 'New York'
}, {
  abbr: 'NC',
  name: 'North Carolina'
}, {
  abbr: 'ND',
  name: 'North Dakota'
}, {
  abbr: 'OH',
  name: 'Ohio'
}, {
  abbr: 'OK',
  name: 'Oklahoma'
}, {
  abbr: 'OR',
  name: 'Oregon'
}, {
  abbr: 'PA',
  name: 'Pennsylvania'
}, {
  abbr: 'RI',
  name: 'Rhode Island'
}, {
  abbr: 'SC',
  name: 'South Carolina'
}, {
  abbr: 'SD',
  name: 'South Dakota'
}, {
  abbr: 'TN',
  name: 'Tennessee'
}, {
  abbr: 'TX',
  name: 'Texas'
}, {
  abbr: 'UT',
  name: 'Utah'
}, {
  abbr: 'VT',
  name: 'Vermont'
}, {
  abbr: 'VA',
  name: 'Virginia'
}, {
  abbr: 'WA',
  name: 'Washington'
}, {
  abbr: 'WV',
  name: 'West Virginia'
}, {
  abbr: 'WI',
  name: 'Wisconsin'
}, {
  abbr: 'WY',
  name: 'Wyoming'
}]);

/***/ }),

/***/ "./resources/assets/js/data/userData.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/data/userData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  users: []
});

/***/ }),

/***/ "./resources/assets/js/structur/src/services/Resource.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/structur/src/services/Resource.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resource; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Resource =
/*#__PURE__*/
function () {
  function Resource(config) {
    _classCallCheck(this, Resource);

    this.config = config;
  }

  _createClass(Resource, [{
    key: "get",
    value: function get(endpoint) {
      return this.request('get', endpoint);
    }
  }, {
    key: "put",
    value: function put(endpoint, data) {
      this.config.data = data;
      return this.request('put', endpoint);
    }
  }, {
    key: "delete",
    value: function _delete(endpoint) {
      return this.request('delete', endpoint);
    }
  }, {
    key: "getData",
    value: function getData() {
      if (this.config.data != undefined) {
        return this.config.data;
      }
    }
  }, {
    key: "request",
    value: function request(method, endpoint) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a[method](_this.getFullUri() + endpoint, _this.getData()).then(function (response) {
          // this.onSuccess(response.data);
          resolve(response.data);
        }).catch(function (error) {
          reject(error.response.data.errors);
        });
      });
    }
  }, {
    key: "getFullUri",
    value: function getFullUri() {
      return this.getPrefix() + this.getResource() + this.getParams();
    }
  }, {
    key: "getPrefix",
    value: function getPrefix() {
      return this.config.uri.prefix != '' ? '/' + this.config.uri.prefix + '/' : '';
    }
  }, {
    key: "getResource",
    value: function getResource() {
      return this.config.uri.resource != '' ? this.config.uri.resource + '/' : ''; //throw 'you must provide a resource.';
    }
  }, {
    key: "getParams",
    value: function getParams() {
      return this.config.uri.params.length > 0 ? this.config.uri.params[0].id + '/' : '';
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      return data;
    }
  }]);

  return Resource;
}();



/***/ }),

/***/ "./resources/assets/js/user.js":
/*!*************************************!*\
  !*** ./resources/assets/js/user.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _structur_src_services_Resource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structur/src/services/Resource.js */ "./resources/assets/js/structur/src/services/Resource.js");
/* harmony import */ var _data_userData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/userData.js */ "./resources/assets/js/data/userData.js");
/* harmony import */ var _data_states_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/states.js */ "./resources/assets/js/data/states.js");
/* harmony import */ var _data_certifications_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/certifications.js */ "./resources/assets/js/data/certifications.js");
/* harmony import */ var _data_software_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/software.js */ "./resources/assets/js/data/software.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('search', search);
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  name: 'User Administration',
  el: '#user',
  data: {
    userData: _data_userData_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    states: _data_states_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    certifications: _data_certifications_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    software: _data_software_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    showColumns: false,
    filteredStates: _data_states_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    selectedState: 0,
    showFilters: true,
    selected: [],
    allSelected: false,
    filters: {
      certification: 0,
      state: 0,
      license: 0,
      software: 0
    },
    selectedColumn: 0,
    availableColumns: [{
      label: 'Relative Date',
      property: 'created_at',
      model: 'user',
      removable: true
    }, {
      label: 'Email',
      property: 'email',
      model: 'user',
      removable: true
    }, {
      label: 'Xactnet Address',
      property: 'xactnet_address',
      model: 'profile',
      removable: true
    }, {
      label: 'Address',
      property: 'formatted_address',
      model: 'profile',
      removable: true
    }, {
      label: 'Street',
      property: 'street',
      model: 'profile',
      removable: true
    }, {
      label: 'City',
      property: 'city',
      model: 'profile',
      removable: true
    }, {
      label: 'State',
      property: 'state',
      model: 'profile',
      removable: true
    }, {
      label: 'zip',
      property: 'zip',
      model: 'profile',
      removable: true
    }, {
      label: 'Phone',
      property: 'phone',
      model: 'profile',
      removable: true
    }, {
      label: 'Software',
      property: 'type',
      model: 'software_experiences',
      removable: true
    }, {
      label: 'Res. Exp (mo)',
      property: 'residential_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Res. Claims',
      property: 'residential_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Com. Exp (mo)',
      property: 'commercial_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Com. Claims',
      property: 'commercial_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Auto Exp (mo)',
      property: 'auto_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Auto Claims',
      property: 'auto_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Inland Marine Exp',
      property: 'inland_marine_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Inland Marine Claims',
      property: 'inland_marine_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Casulty Exp',
      property: 'casualty_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Casulty Claims',
      property: 'casualty_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Large Loss Exp',
      property: 'large_loss_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Large Loss Claims',
      property: 'large_loss_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Environmental Exp',
      property: 'environmental_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Environmental Claims',
      property: 'environmental_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Flood Exp',
      property: 'flood_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Flood Claims',
      property: 'flood_claims',
      model: 'work_history',
      removable: true
    }, {
      label: 'Earthquake Exp',
      property: 'earthquake_experience',
      model: 'work_history',
      removable: true
    }, {
      label: 'Earthquake Claims',
      property: 'earthquake_claims',
      model: 'work_history',
      removable: true
    }],
    activeColumns: [{
      label: 'Name',
      property: 'name',
      model: 'user',
      removable: false
    }, {
      label: 'Licenses',
      property: 'license_state',
      model: 'adjuster_licenses',
      removable: true
    }, {
      label: 'Certifications',
      property: 'type',
      model: 'certifications',
      removable: true
    }, {
      label: 'Sign Up Date',
      property: 'date_string',
      model: 'user',
      removable: true
    }],
    userService: new _structur_src_services_Resource_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      uri: {
        prefix: 'api',
        resource: 'users'
      },
      current_page: 0
    }),
    autocomplete: {},
    bounds: {},
    map: {},
    marker: {},
    home: {
      lat: 30.2702208,
      lng: -97.7453625
    },
    filename: 'FilteredUsers.csv'
  },
  computed: {
    resetUsers: function resetUsers() {
      return this.userData.users.length == 0 ? this.userData.users = window.users.data : 'Users in list';
    }
  },
  mounted: function mounted() {
    // const _home = this.home;
    // console.log(this.home);
    // this.bounds = new google.maps.LatLngBounds();
    // this.map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 12,
    //         center: this.home,
    //       });
    //       this.marker = new google.maps.Marker({
    //         position: this.home,
    //         map: this.map
    //       });
    //       this.autocomplete = new google.maps.places.Autocomplete(
    //            /* @type {!HTMLInputElement} */
    //           (document.getElementById('claim-location')),
    //           {types: ['geocode']}
    //       );
    //       // When the user selects an address from the dropdown, populate the address
    //       // fields in the form.
    //   	this.autocomplete.addListener('place_changed', () => { this.setHome() });
    this.current_page = window.users.current_page;
    return window.users.data ? this.userData.users = window.users.data : this.userData.users = window.users;
  },
  methods: {
    geolocate: function geolocate() {
      console.log('geolocating');
    },
    setHome: function setHome() {
      var place = this.autocomplete.getPlace();
      this.home = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      console.log(this.home);
      this.marker.setPosition(this.home); // this.map.fitBounds(this.bounds.extend(this.home));

      this.map.setCenter(this.home);
      this.map.setZoom(12);
    },
    toggleMenu: function toggleMenu(id) {
      var menu = document.getElementById(id);
      menu.style.display == 'none' ? menu.style.display = 'block' : menu.style.display = 'none';
    },
    getUsers: function getUsers() {
      var _this = this;

      this.userService.get('all').then(function (response) {
        _this.userData.users = response;
      }).catch(function (error) {
        console.log(error);
      });
    },
    getXp: function getXp(history) {
      // console.log(history);
      var xp = 0;

      if (_typeof(history) == 'object') {
        for (var h in history) {
          if (h !== 'user_id' && h !== 'id' && h !== 'created_at' && h !== 'updated_at') {
            xp += history[h];
          }
        }
      }

      return xp;
    },
    parseColumnData: function parseColumnData(user, column) {
      if (column.model == '') return;

      if (column.model == 'user') {
        return user[column.property];
      }

      if (column.model == "profile" && user[column.model] !== null) {
        return user[column.model][column.property];
      }

      if (column.model == 'work_history' && user[column.model] !== null) {
        return user[column.model][column.property];
      }

      var str = '';

      for (var property in user[column.model]) {
        str += user[column.model][property][column.property] + ', ';
      }

      return str;
    },
    removeColumn: function removeColumn(column) {
      var idx = this.activeColumns.indexOf(column);
      this.availableColumns.push(column);
      return this.activeColumns.splice(idx, 1);
    },
    addColumn: function addColumn() {
      var idx = this.availableColumns.indexOf(this.selectedColumn);
      this.availableColumns.splice(idx, 1);
      this.activeColumns.push(this.selectedColumn);
      return this.selectedColumn = 0;
    },
    select: function select(user) {
      console.log(user.name);
    },
    selectAll: function selectAll(evt) {
      var checkboxes = document.getElementsByClassName('has-user');

      if (this.allSelected) {
        for (var checkbox in checkboxes) {
          if (typeof checkboxes[checkbox] !== 'function' && typeof checkboxes[checkbox] !== 'number') {
            checkboxes[checkbox].checked = true; // console.log(checkboxes[checkbox].value);

            this.selected.push(checkboxes[checkbox].value);
          }
        }
      } else {
        for (var _checkbox in checkboxes) {
          if (typeof checkboxes[_checkbox] !== 'function' && typeof checkboxes[_checkbox] !== 'number') {
            checkboxes[_checkbox].checked = false;
            this.selected = [];
          }
        }
      }
    },
    deleteUser: function deleteUser(user) {
      var _this2 = this;

      window.axios.delete('/api/users/' + user.id).then(function (response) {
        var idx = _this2.userData.users.indexOf(user);

        return _this2.userData.users.splice(idx, 1);
      }).catch(function (error) {
        console.error(error);
      });
    },
    deleteSelected: function deleteSelected() {
      var _this3 = this;

      window.axios.post('/api/users/', {
        users: this.selected
      }).then(function (response) {
        for (var idx in _this3.selected) {
          var userIdx = _this3.userData.users.indexOf(_this3.findUser(idx));

          _this3.userData.users.splice(userIdx, 1);
        }
      });
    },
    findUser: function findUser(idx) {
      var _this4 = this;

      return this.userData.users.find(function (user) {
        return user.id == _this4.selected[idx];
      });
    },
    capitalize: function capitalize(string) {
      string = string.toLowerCase();
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    exportToCsv: function exportToCsv(filename, rows) {
      var processRow = function processRow(row) {
        // console.log(row);
        var finalVal = '';
        Object.keys(row).forEach(function (key) {
          if (rows.indexOf(row) == 0) {
            // console.log(key);
            key === 'distance' ? finalVal += '"' + key + '"' + '\n' : finalVal += '"' + key + '"' + ',';
          }
        });
        Object.keys(row).forEach(function (key) {
          var innerValue = row[key] === null ? 'n/a' : row[key].toString();
          var result = innerValue.replace(/"/g, '""'); // result = '"' + result + '"';

          key == 'id' ? finalVal : finalVal += ',';
          finalVal += result;
        }); // console.log(finalVal);

        return finalVal + '\n';
      };

      var csvFile = '';

      for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
      }

      var blob = new Blob([csvFile], {
        type: 'text/csv;charset=utf-8;'
      });

      if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, filename);
      } else {
        var link = document.createElement("a");

        if (link.download !== undefined) {
          // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", filename);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    }
  }
});

/***/ }),

/***/ 5:
/*!*******************************************!*\
  !*** multi ./resources/assets/js/user.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandon/code/ccg/api/resources/assets/js/user.js */"./resources/assets/js/user.js");


/***/ })

},[[5,"/js/manifest","/js/vendor"]]]);