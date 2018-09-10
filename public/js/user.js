webpackJsonp([13],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	users: []
});

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(618);


/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structur_src_services_Resource_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_userData_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_states_js__ = __webpack_require__(66);




// import search from './components/Search.vue';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('search', search);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'User Administration',
	el: '#user',
	data: {
		userData: __WEBPACK_IMPORTED_MODULE_2__data_userData_js__["a" /* default */],
		states: __WEBPACK_IMPORTED_MODULE_3__data_states_js__["a" /* default */],
		certifications: [
		// { name: 'none', label: 'None' },
		{ name: 'AIC', label: 'AIC' }, { name: 'CPCU', label: 'CPCU' }, { name: 'TWIA', label: 'TWIA / TFPA' }, { name: 'NFIP', label: 'NFIP' }, { name: 'HAAG', label: 'HAAG' }, { name: 'IIRC', label: 'IIRC' }, { name: 'rope', label: 'Rope & Harness' }, { name: 'Earthquake', label: 'Earthquake' }, { name: 'Umpire', label: 'Umpire' }, { name: 'Appraiser', label: 'Appraiser' }],
		selected: [],
		allSelected: false,
		userService: new __WEBPACK_IMPORTED_MODULE_1__structur_src_services_Resource_js__["a" /* default */]({
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
		home: { lat: 30.2702208, lng: -97.7453625 },
		filename: 'FilteredUsers.csv'
	},
	computed: {
		resetUsers: function resetUsers() {
			return this.userData.users.length == 0 ? this.userData.users = window.users.data : 'Users in list';
		}
	},
	mounted: function mounted() {
		var _this = this;

		// const _home = this.home;
		// console.log(this.home);
		this.bounds = new google.maps.LatLngBounds();
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
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

		this.current_page = window.users.current_page;
		return window.users.data ? this.userData.users = window.users.data : this.userData.users = window.users;
	},

	methods: {
		geolocate: function geolocate() {
			console.log('geolocating');
		},
		setHome: function setHome() {
			var place = this.autocomplete.getPlace();
			this.home = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
			console.log(this.home);
			this.marker.setPosition(this.home);
			// this.map.fitBounds(this.bounds.extend(this.home));
			this.map.setCenter(this.home);
			this.map.setZoom(12);
		},
		toggleMenu: function toggleMenu(id) {
			var menu = document.getElementById(id);
			menu.style.display == 'none' ? menu.style.display = 'block' : menu.style.display = 'none';
		},
		getUsers: function getUsers() {
			var _this2 = this;

			this.userService.get('all').then(function (response) {
				_this2.userData.users = response;
			}).catch(function (error) {
				console.log(error);
			});
		},
		select: function select(user) {
			console.log(user.name);
		},
		selectAll: function selectAll(evt) {
			var checkboxes = document.getElementsByClassName('has-user');
			if (this.allSelected) {
				for (var checkbox in checkboxes) {
					if (typeof checkboxes[checkbox] !== 'function' && typeof checkboxes[checkbox] !== 'number') {
						checkboxes[checkbox].checked = true;
						// console.log(checkboxes[checkbox].value);
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
			var _this3 = this;

			window.axios.delete('/api/users/' + user.id).then(function (response) {
				var idx = _this3.userData.users.indexOf(user);
				return _this3.userData.users.splice(idx, 1);
			}).catch(function (error) {
				console.error(error);
			});
		},
		deleteSelected: function deleteSelected() {
			var _this4 = this;

			window.axios.post('/api/users/', { users: this.selected }).then(function (response) {
				for (var idx in _this4.selected) {
					var userIdx = _this4.userData.users.indexOf(_this4.findUser(idx));
					_this4.userData.users.splice(userIdx, 1);
				}
			});
		},
		findUser: function findUser(idx) {
			var _this5 = this;

			return this.userData.users.find(function (user) {
				return user.id == _this5.selected[idx];
			});
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
					var result = innerValue.replace(/"/g, '""');
					// result = '"' + result + '"';
					key == 'id' ? finalVal : finalVal += ',';
					finalVal += result;
				});
				// console.log(finalVal);
				return finalVal + '\n';
			};

			var csvFile = '';
			for (var i = 0; i < rows.length; i++) {
				csvFile += processRow(rows[i]);
			}

			var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ abbr: 'AL', name: 'Alabama' }, { abbr: 'AK', name: 'Alaska' }, { abbr: 'AZ', name: 'Arizona' }, { abbr: 'AR', name: 'Arkansas' }, { abbr: 'CA', name: 'California' }, { abbr: 'CO', name: 'Colorado' }, { abbr: 'CT', name: 'Connecticut' }, { abbr: 'DE', name: 'Delaware' }, { abbr: 'DC', name: 'District of Columbia' }, { abbr: 'FL', name: 'Florida' }, { abbr: 'GA', name: 'Georgia' }, { abbr: 'HI', name: 'Hawaii' }, { abbr: 'ID', name: 'Idaho' }, { abbr: 'IL', name: 'Illinois' }, { abbr: 'IN', name: 'Indiana' }, { abbr: 'IA', name: 'Iowa' }, { abbr: 'KS', name: 'Kansas' }, { abbr: 'KY', name: 'Kentucky' }, { abbr: 'LA', name: 'Louisiana' }, { abbr: 'ME', name: 'Maine' }, { abbr: 'MD', name: 'Maryland' }, { abbr: 'MA', name: 'Massachusetts' }, { abbr: 'MI', name: 'Michigan' }, { abbr: 'MN', name: 'Minnesota' }, { abbr: 'MS', name: 'Mississippi' }, { abbr: 'MO', name: 'Missouri' }, { abbr: 'MT', name: 'Montana' }, { abbr: 'NE', name: 'Nebraska' }, { abbr: 'NV', name: 'Nevada' }, { abbr: 'NH', name: 'New Hampshire' }, { abbr: 'NJ', name: 'New Jersey' }, { abbr: 'NM', name: 'New Mexico' }, { abbr: 'NY', name: 'New York' }, { abbr: 'NC', name: 'North Carolina' }, { abbr: 'ND', name: 'North Dakota' }, { abbr: 'OH', name: 'Ohio' }, { abbr: 'OK', name: 'Oklahoma' }, { abbr: 'OR', name: 'Oregon' }, { abbr: 'PA', name: 'Pennsylvania' }, { abbr: 'RI', name: 'Rhode Island' }, { abbr: 'SC', name: 'South Carolina' }, { abbr: 'SD', name: 'South Dakota' }, { abbr: 'TN', name: 'Tennessee' }, { abbr: 'TX', name: 'Texas' }, { abbr: 'UT', name: 'Utah' }, { abbr: 'VT', name: 'Vermont' }, { abbr: 'VA', name: 'Virginia' }, { abbr: 'WA', name: 'Washington' }, { abbr: 'WV', name: 'West Virginia' }, { abbr: 'WI', name: 'Wisconsin' }, { abbr: 'WY', name: 'Wyoming' }]);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Resource = function () {
	function Resource(config) {
		_classCallCheck(this, Resource);

		this.config = config;
	}

	_createClass(Resource, [{
		key: 'get',
		value: function get(endpoint) {
			return this.request('get', endpoint);
		}
	}, {
		key: 'put',
		value: function put(endpoint, data) {
			this.config.data = data;
			return this.request('put', endpoint);
		}
	}, {
		key: 'delete',
		value: function _delete(endpoint) {
			return this.request('delete', endpoint);
		}
	}, {
		key: 'getData',
		value: function getData() {
			if (this.config.data != undefined) {
				return this.config.data;
			}
		}
	}, {
		key: 'request',
		value: function request(method, endpoint) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				__WEBPACK_IMPORTED_MODULE_0_axios___default.a[method](_this.getFullUri() + endpoint, _this.getData()).then(function (response) {
					// this.onSuccess(response.data);
					resolve(response.data);
				}).catch(function (error) {
					reject(error.response.data.errors);
				});
			});
		}
	}, {
		key: 'getFullUri',
		value: function getFullUri() {
			return this.getPrefix() + this.getResource() + this.getParams();
		}
	}, {
		key: 'getPrefix',
		value: function getPrefix() {
			return this.config.uri.prefix != '' ? '/' + this.config.uri.prefix + '/' : '';
		}
	}, {
		key: 'getResource',
		value: function getResource() {
			return this.config.uri.resource != '' ? this.config.uri.resource + '/' : ''; //throw 'you must provide a resource.';
		}
	}, {
		key: 'getParams',
		value: function getParams() {
			return this.config.uri.params.length > 0 ? this.config.uri.params[0].id + '/' : '';
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			return data;
		}
	}]);

	return Resource;
}();

/* harmony default export */ __webpack_exports__["a"] = (Resource);

/***/ })

},[617]);