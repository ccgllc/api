(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/claim"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Dropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/Dropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
// import claimData from './claims/claimData.js'
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dropdown',
  props: ['items', 'eventName', 'buttonStyle', 'up', 'right', 'carrier'],
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    handle: function handle(event, data) {
      return this.$emit(event, data);
    },
    disabled: function disabled(item, carrier) {
      return item === 'MCM' && carrier !== 'TWIA' ? false : true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Modal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/Modal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Modal',
  props: ['show', 'solid'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Assignees.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Assignees.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {//console.log(this.user);
    // this.adjuster = claim.
  },
  computed: {
    hasAdjuster: function hasAdjuster() {
      return this.claim.hasOwnProperty('adjuster') ? true : false;
    }
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  methods: {
    getAssignmentStatus: function getAssignmentStatus() {
      return this.hasAdjuster ? this.statusesList[3] : this.statusesList[1];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Billing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Billing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _invoice_Invoices_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice/Invoices.vue */ "./resources/assets/js/claims/invoice/Invoices.vue");
/* harmony import */ var _NewEstimate_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewEstimate.vue */ "./resources/assets/js/claims/NewEstimate.vue");
/* harmony import */ var _invoice_NewInvoice_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice/NewInvoice.vue */ "./resources/assets/js/claims/invoice/NewInvoice.vue");
/* harmony import */ var _invoice_QuickInvoice_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/QuickInvoice.vue */ "./resources/assets/js/claims/invoice/QuickInvoice.vue");
//
//
//
//
//
//
//
//
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
  name: 'Billing',
  components: {
    newEstimate: _NewEstimate_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    newInvoice: _invoice_NewInvoice_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    quickInvoice: _invoice_QuickInvoice_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    invoices: _invoice_Invoices_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  methods: {
    addEstimate: function addEstimate(estimate) {
      this.claim.estimates.push(estimate);
      return this.creatingEstimate = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Claim.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Claim.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _Map_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue */ "./resources/assets/js/claims/Map.vue");
/* harmony import */ var _ClaimStats_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClaimStats.vue */ "./resources/assets/js/claims/ClaimStats.vue");
/* harmony import */ var _Tags_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tags.vue */ "./resources/assets/js/claims/Tags.vue");
/* harmony import */ var _Contacts_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contacts.vue */ "./resources/assets/js/claims/Contacts.vue");
/* harmony import */ var _Description_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Description.vue */ "./resources/assets/js/claims/Description.vue");
/* harmony import */ var _claimInfo_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./claimInfo.vue */ "./resources/assets/js/claims/claimInfo.vue");
//
//
//
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
    claimMap: _Map_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    claimStats: _ClaimStats_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    tags: _Tags_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    contacts: _Contacts_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    description: _Description_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    claimInfo: _claimInfo_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  created: function created() {
    this.hasAlert = true;
    this.alert.message = 'You have been assigned to this claim please confirm or reject this assignment';
  },
  mounted: function mounted() {
    if (this.claim.assignments.length > 0) {
      this.adjuster = this.claim.assignments.find(function (assignment) {
        return assignment.type = 'adjuster';
      });
    }
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/ClaimMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import grossLoss from './GrossLoss.vue';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ClaimMenu',
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  methods: {
    setStatusType: function setStatusType(data) {
      this.$emit('status-set', data);
      return this.$emit('new-status-toggle');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimNavigation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/ClaimNavigation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimStats.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/ClaimStats.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import claimData from './claimData.js';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GrossLoss',
  props: ['claimId', 'userId', 'estimates'],
  data: function data() {
    return {
      editingGrossLoss: false,
      estimate: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        gross_loss: 0,
        user_id: 0,
        claim_id: 0
      })
    };
  },
  mounted: function mounted() {
    this.estimate.user_id = this.userId;
    this.estimate.claim_id = this.claimId; // this.estimate.claim_id = this.claim.id;
  },
  computed: {
    hasEstimates: function hasEstimates() {
      return this.estimates.length > 0 ? true : false;
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.estimate.post('/api/claims/' + this.claimId + '/estimates').then(function (response) {
        console.log(response);

        _this.estimates.push(response);

        _this.estimate.gross_loss = response.gross_loss;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    toggleEditing: function toggleEditing() {
      this.editingGrossLoss = !this.editingGrossLoss;
      this.editingGrossLoss ? document.getElementById('gross-loss').focus() : null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Contacts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Contacts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  mounted: function mounted() {// console.log(claim.claim_data.accessContact.name);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Description.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Description.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
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
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/GrossLoss.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/GrossLoss.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Map.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Map.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
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
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  created: function created() {
    // this.home.lat = this.findCoords();
    // this.home.lng = parseFloat(this.claim.claim_data.client.addresses[1].longitude);
    this.findCoords();
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
    }); //    this.autocomplete = new google.maps.places.Autocomplete(
    //         /* @type {!HTMLInputElement} */
    //        (document.getElementById('claim-location')),
    //        {types: ['geocode']}
    //    );
    //    // When the user selects an address from the dropdown, populate the address
    //    // fields in the form.
    // this.autocomplete.addListener('place_changed', () => { this.setHome() });
  },
  methods: {
    findCoords: function findCoords() {
      var address = this.claim.claim_data.client.addresses.find(function (address) {
        return address.latitude != null && address.longitude != null;
      });
      this.home.lat = +address.latitude;
      this.home.lng = +address.longitude;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewEstimate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/NewEstimate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modal.vue */ "./resources/assets/js/Modal.vue");
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'NewEstimate',
  props: ['claim', 'creatingEstimate'],
  components: {
    modal: _Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    // return claimData;
    return {
      estimate: {},
      isCwop: false,
      isErroneous: false
    };
  },
  mounted: function mounted() {
    this.makeNewEstimate();
    this.getTodaysDate();
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.estimate.post('/api/claims/' + this.claim.id + '/estimates').then(function (response) {
        _this.$emit('estimate-created', response);

        return _this.makeNewEstimate();
      })["catch"](function (errors) {
        console.error(errors);
      });
    },
    makeNewEstimate: function makeNewEstimate() {
      this.isCwop = false;
      this.isErroneous = false;
      this.estimate = new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        gross_loss: 0.00.toFixed(2),
        claim_id: this.claim.id,
        user_id: window.user.id,
        date: '',
        time: ''
      });
      return this.getTodaysDate();
    },
    getTodaysDate: function getTodaysDate() {
      var today = new Date();
      this.estimate.date = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
      this.estimate.time = today.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}.{1,})/g, '').trim();
    }
  },
  computed: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewStatus.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/NewStatus.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modal.vue */ "./resources/assets/js/Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    modal: _Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  mounted: function mounted() {
    this.newStatus.claim_number = this.claim.claim_number;
    this.newStatus.claim_id = this.claim.id;
    this.newStatus.user_id = window.user.id;
    this.getTodaysDate();
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.newStatus.post('/api/claims/' + this.claim.id + '/statuses').then(function (response) {
        console.log(response);

        _this.claim.statuses.unshift(response);

        _this.$emit('new-status-toggle');
      })["catch"](function (errors) {
        console.error(errors);

        _this.$emit('new-status-toggle');
      });
    },
    getTodaysDate: function getTodaysDate() {
      var today = new Date();
      this.newStatus.date = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
      this.newStatus.time = today.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}.{1,})/g, '').trim();
    }
  },
  computed: {// accessContact() {
    // 	return claim.claim_data.accessContact.name
    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Tags.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Tags.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
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
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Timeline.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Timeline.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {//console.log(this.user);
  },
  computed: {},
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/TitleHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/TitleHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _GrossLoss_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GrossLoss.vue */ "./resources/assets/js/claims/GrossLoss.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    grossLoss: _GrossLoss_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  methods: {
    setStatusType: function setStatusType(data) {
      this.$emit('status-set', data);
      return this.$emit('new-status-toggle');
    },
    scrollTop: function scrollTop() {
      window.scrollTo(0, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/claimInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/claimInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/Invoice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _InvoiceOptions_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceOptions.vue */ "./resources/assets/js/claims/invoice/InvoiceOptions.vue");
/* harmony import */ var _Dropdown_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Dropdown.vue */ "./resources/assets/js/Dropdown.vue");
/* harmony import */ var _Invoice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Invoice.js */ "./resources/assets/js/claims/invoice/Invoice.js");
/* harmony import */ var _LineItem_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineItem.vue */ "./resources/assets/js/claims/invoice/LineItem.vue");
/* harmony import */ var _QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QuantifiableLineItem */ "./resources/assets/js/claims/invoice/QuantifiableLineItem.js");
/* harmony import */ var _ServiceFeeLineItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServiceFeeLineItem */ "./resources/assets/js/claims/invoice/ServiceFeeLineItem.js");
/* harmony import */ var _AmountLineItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AmountLineItem */ "./resources/assets/js/claims/invoice/AmountLineItem.js");
/* harmony import */ var _DifferenceInTiersLineItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DifferenceInTiersLineItem */ "./resources/assets/js/claims/invoice/DifferenceInTiersLineItem.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Invoice',
  props: ['invoice', 'carrier'],
  components: {
    lineItem: _LineItem_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    dropdown: _Dropdown_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    invoiceOptions: _InvoiceOptions_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    if (!(this.invoice instanceof _Invoice_js__WEBPACK_IMPORTED_MODULE_3__["default"])) this.buildInvoice();
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  methods: {
    toggle: function toggle() {
      this.invoice.options.show = !this.invoice.options.show;
      this.update();
    },
    caclulate: function caclulate() {
      this.invoice.calculate();
      return this.update();
    },
    addLineItem: function addLineItem(lineItem) {
      this.invoice.addLineItem(this.getlineItemType(lineItem));
      return this.update();
    },
    removeLineItem: function removeLineItem(lineItem) {
      this.invoice.removeLineItem(lineItem);
      return this.update();
    },
    update: function update() {
      window.axios.put(this.route(), this.invoice.data()).then(function (response) {
        return console.log(response.data);
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    remove: function remove() {
      var _this = this;

      window.axios["delete"](this.route()).then(function (response) {
        return _this.claim.invoices.splice(_this.claim.invoices.indexOf(_this.invoice), 1);
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    createEstimate: function createEstimate() {
      this.creatingEstimate = !this.creatingEstimate;
    },
    updateFeeSchedule: function updateFeeSchedule() {
      this.invoice.recalculateLineItems();
      return this.update();
    },
    buildInvoice: function buildInvoice() {
      var invoice = new _Invoice_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      invoice.id = this.invoice.id;
      invoice.carrier = this.carrier;
      this.sync(this.assignInvoiceProperties(invoice));
    },
    assignInvoiceProperties: function assignInvoiceProperties(invoice) {
      for (var property in this.invoice.data) {
        property == 'lineItems' ? invoice[property] = this.buildLineItems(this.invoice.data[property]) : invoice[property] = this.invoice.data[property];
      }

      return invoice;
    },
    buildLineItems: function buildLineItems(lineItems) {
      var items = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = lineItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _lineItem = _step.value;
          items.push(this.getlineItemType(_lineItem));
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

      return items;
    },
    sync: function sync(invoice) {
      return this.$emit('invoice-built', {
        invoice: invoice,
        idx: this.claim.invoices.indexOf(this.invoice)
      });
    },
    getlineItemType: function getlineItemType(lineItem) {
      switch (lineItem.type) {
        case 'ServiceFeeLineItem':
          return new _ServiceFeeLineItem__WEBPACK_IMPORTED_MODULE_6__["default"](lineItem);
          break;

        case 'QuantifiableLineItem':
          return new _QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_5__["default"](lineItem);
          break;

        case 'AmountLineItem':
          return new _AmountLineItem__WEBPACK_IMPORTED_MODULE_7__["default"](lineItem);
          break;

        case 'DifferenceInTiersLineItem':
          return new _DifferenceInTiersLineItem__WEBPACK_IMPORTED_MODULE_8__["default"](lineItem);
          break;
      }
    },
    route: function route() {
      return '/api/claims/' + this.claim.id + '/invoices/' + this.invoice.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropdown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dropdown.vue */ "./resources/assets/js/Dropdown.vue");
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _QuantifiableLineItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuantifiableLineItem.js */ "./resources/assets/js/claims/invoice/QuantifiableLineItem.js");
/* harmony import */ var _AmountLineItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AmountLineItem.js */ "./resources/assets/js/claims/invoice/AmountLineItem.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'InvoiceOptions',
  props: ['invoice'],
  components: {
    dropdown: _Dropdown_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {//
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  methods: {
    addLineItem: function addLineItem(lineItem) {
      lineItem.feeSchedule = this.invoice.feeSchedule;
      return this.$emit('new-line-item', lineItem);
    },
    toggleMcmLineItem: function toggleMcmLineItem() {
      var mcmItem = this.lineItemTypes.find(function (type) {
        return type.name == 'MCM';
      });
      mcmItem.amount = this.invoice.feeSchedule['mcm'];
      return this.invoice.options.mcm ? this.addLineItem(mcmItem) : this.$emit('remove-line-item', mcmItem);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoices.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/Invoices.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _Invoice_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue */ "./resources/assets/js/claims/invoice/Invoice.vue");
//
//
//
//
//
//
//
//
//
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
  name: 'Invoices',
  components: {
    invoice: _Invoice_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  mounted: function mounted() {// console.log(this.claim.invoices === true)
  },
  methods: {
    update: function update(data) {
      this.claim.invoices.splice(data.idx, 1, data.invoice);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dropdown.vue */ "./resources/assets/js/Dropdown.vue");
/* harmony import */ var _claimData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../claimData */ "./resources/assets/js/claims/claimData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'LineItem',
  props: ['lineItem', 'estimates', 'invoice'],
  components: {
    dropdown: _Dropdown_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return _claimData__WEBPACK_IMPORTED_MODULE_1__["default"];
  },
  methods: {
    updateTotal: function updateTotal(lineItem) {
      lineItem.calculate();
      return this.$emit('line-item-updated');
    },
    usesEstimates: function usesEstimates(lineItem) {
      return lineItem.type == 'ServiceFeeLineItem' || lineItem.type == 'DifferenceInTiersLineItem' ? true : false;
    },
    hasEstimates: function hasEstimates() {
      return this.estimates.length > 0 ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../claimData */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _Invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice */ "./resources/assets/js/claims/invoice/Invoice.js");
//
//
//
//
//
//
//
//
//

 // import Form from '../../structur/src/form/Form'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'createInvoice',
  data: function data() {
    return _claimData__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  mounted: function mounted() {//
  },
  methods: {
    createInvoice: function createInvoice() {
      this.newInvoice = new _Invoice__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.post();
    },
    setInvoiceData: function setInvoiceData(invoice) {
      this.newInvoice.total = parseFloat(this.newInvoice.total);
      this.newInvoice.subTotal = parseFloat(this.newInvoice.subTotal);
      this.newInvoice.id = invoice.id;
      this.newInvoice.carrier = this.claim.carrier;
      this.newInvoice.feeSchedule = this.claim.carrier.fee_schedules[0].data; // console.log(this.newInvoice.feeSchedule)

      this.setLineItemMinimums();
      this.setLineItemRates();
      this.makeDefaultLineItems();
    },
    makeDefaultLineItems: function makeDefaultLineItems() {
      this.newInvoice.createServiceFeeLineItem(this.defaultLineItems.grossLoss);
      this.newInvoice.createAdjusterExpenseLineItems(this.adjusterExpenses());
    },
    setLineItemRates: function setLineItemRates() {
      this.defaultLineItems.photos.rate = this.newInvoice.getPhotoRate();
      this.defaultLineItems.mileage.rate = this.newInvoice.getMileageRate();
      this.defaultLineItems.hours.rate = this.newInvoice.getHourlyRate();
    },
    setLineItemMinimums: function setLineItemMinimums() {
      this.defaultLineItems.photos.minimum = this.newInvoice.feeSchedule.photoMinimum;
      this.defaultLineItems.mileage.minimum = this.newInvoice.feeSchedule.mileageMinimum;
    },
    toggle: function toggle() {
      return this.creatingInvoice = !this.creatingInvoice;
    },
    update: function update() {
      var _this = this;

      window.axios.put(this.getRoute() + this.newInvoice.id, this.newInvoice.data()).then(function (response) {
        return _this.claim.invoices.push(response.data);
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    post: function post() {
      var _this2 = this;

      window.axios.post(this.getRoute(), this.newInvoice.data()).then(function (response) {
        _this2.setInvoiceData(response.data);

        _this2.update();
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    getRoute: function getRoute() {
      return '/api/claims/' + this.claim.id + '/invoices/';
    },
    adjusterExpenses: function adjusterExpenses() {
      return [this.defaultLineItems.photos, this.defaultLineItems.mileage, this.defaultLineItems.hours, this.defaultLineItems.reimbursable];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Modal.vue */ "./resources/assets/js/Modal.vue");
/* harmony import */ var _Invoice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Invoice.js */ "./resources/assets/js/claims/invoice/Invoice.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'QuickInvoice',
  components: {
    Modal: _Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  mounted: function mounted() {
    this.getTodaysDate();
  },
  methods: {
    submit: function submit() {
      this.setCarrierInvoiceData();
      var adjuserExpenses = [this.photos, this.mileage, this.hours, this.reimbursable];
      this.newInvoice.createServiceFeeLineItem(this.grossLoss);
      this.newInvoice.createAdjusterExpenseLineItems(adjuserExpenses);
      this.newInvoice.calculate();
      this.claim.invoices.push(this.newInvoice);
      this.creatingInvoice = false;
    },
    getTodaysDate: function getTodaysDate() {
      var today = new Date();
      this.date = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
      console.log(today.toTimeString());
      this.time = today.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}.{1,})/g, '').trim();
    },
    toggle: function toggle() {
      return this.creatingInvoice = !this.creatingInvoice;
    },
    setCarrierInvoiceData: function setCarrierInvoiceData() {
      this.newInvoice = new _Invoice_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var feeSchedule = JSON.parse(this.claim.carrier.pay_scale);
      this.newInvoice.carrier = this.claim.carrier;
      this.grossLoss.feeSchedule = feeSchedule;
      this.hours.rate = parseFloat(feeSchedule.hourly);
      this.photos.rate = feeSchedule.photoRate;
      this.photos.minimum = feeSchedule.photoMinimum;
      this.mileage.rate = feeSchedule.mileageRate;
      this.mileage.minimum = feeSchedule.mileageMinimum;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.level .select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {\n\tborder-color: #ccc;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box.is-line-item input.input {\n\tborder: none;\n\tborder-radius: 0;\n\tfont-weight: 700;\n\t/*background: #f8f7f7;*/\n\tbackground: #fff;\n\tfont-size: .95em;\n\tcolor: #343b4b;\n}\n.box.is-line-item input.input:hover {\n\tborder-bottom: 1px solid #f0f0f0;\n}\nlabel.label {\n\tcolor: #bbb;\n}\n.box .select select{\n\tborder: none;\n\t/*background: #f8f7f7;*/\n\tbackground: #fff;\n\tborder-bottom: 1px solid #f0f0f0;\n\tborder-radius: 0;\n\tfont-size: .95em;\n\theight: 2em;\n\tfont-weight: 700;\n}\n.select select:focus{\n\tborder: none;\n}\n.box.is-line-item {\n\t/*background: #;*/\n\tmargin: 0 0 .5em 0;\n\tpadding: .5em 1em .5em 1em;\n\tbackground-color: white;\n\tborder-radius: 6px;\n\tbox-shadow: 0 2px 5px rgba(10, 10, 10, 0.1), 0 0 0 0 rgba(10, 10, 10, 0.1);\n\tcolor: #343b4c;\n\tdisplay: block;\n\tmargin: 0 0 .9em 0;\n\tpadding: .5em 1em .5em 1em;\n}\n.box.is-line-item .card-content {\n\tpadding: .60rem;\n}\n.box.is-line-item .icon small {\n\tfont-size: .75em;\n}\nspan.icon.is-xsmall {\n\twidth: .75em;\n\theight: .75em;\n}\ntable thead tr th {\n\tfont-size: .6em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.select select {\n    \ttext-rendering: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceOptions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineItem.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickInvoice.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Dropdown.vue?vue&type=template&id=de1a343a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/Dropdown.vue?vue&type=template&id=de1a343a& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      staticClass: "dropdown",
      class: { "is-active": _vm.show, "is-up": _vm.up, "is-right": _vm.right },
      on: {
        mouseleave: function($event) {
          _vm.show = false
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "dropdown-trigger",
          on: {
            click: function($event) {
              _vm.show = !_vm.show
            }
          }
        },
        [
          _c(
            "button",
            {
              staticClass: "button",
              class: _vm.buttonStyle,
              attrs: {
                "aria-haspopup": "true",
                "aria-controls": "dropdown-menu"
              }
            },
            [
              _c("span", [_vm._t("default")], 2),
              _vm._v(" "),
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", {
                  staticClass: "fa",
                  class: {
                    "fa-angle-up": _vm.up,
                    "fa-angle-down": _vm.up == undefined
                  },
                  attrs: { "aria-hidden": "true" }
                })
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dropdown-menu",
          attrs: { id: "dropdown-menu", role: "menu" }
        },
        [
          _c(
            "div",
            { staticClass: "dropdown-content" },
            _vm._l(_vm.items, function(item) {
              return _vm.disabled(item.name, _vm.carrier.label)
                ? _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      on: {
                        click: function($event) {
                          return _vm.handle(_vm.eventName, item)
                        }
                      }
                    },
                    [_vm._v("\n        " + _vm._s(item.name) + " \n      ")]
                  )
                : _vm._e()
            }),
            0
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Modal.vue?vue&type=template&id=9ad64d6a&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/Modal.vue?vue&type=template&id=9ad64d6a& ***!
  \****************************************************************************************************************************************************************************************************/
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
      staticClass: "modal",
      class: { "is-active": _vm.show, "is-solid": _vm.solid },
      staticStyle: { position: "fixed" }
    },
    [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-content" }, [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Assignees.vue?vue&type=template&id=d698d384&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Assignees.vue?vue&type=template&id=d698d384& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      staticClass: "columns is-mobile assignments",
      staticStyle: { "text-align": "center", "padding-top": "3rem" }
    },
    [
      _c("div", { staticClass: "column is-half assignment" }, [
        _c(
          "a",
          {
            on: {
              mouseup: function($event) {
                _vm.$emit("status-set", _vm.getAssignmentStatus())
                _vm.$emit("new-status-toggle")
              }
            }
          },
          [
            _vm.adjuster.avatar
              ? _c("img", {
                  staticStyle: {
                    "border-radius": "356px",
                    border: "10px solid #439BD1",
                    cursor: "pointer"
                  },
                  attrs: {
                    src: _vm.adjuster.avatar.path,
                    alt: _vm.adjuster.name,
                    width: "100%",
                    height: "auto"
                  },
                  on: {
                    click: function($event) {
                      _vm.addingAvatar = true
                    }
                  }
                })
              : _c("span", { staticClass: "icon is-standard" }, [
                  _c("i", { staticClass: "fa fa-8x fa-user-circle-o" })
                ])
          ]
        ),
        _vm._v(" "),
        _c(
          "h3",
          {
            staticStyle: {
              color: "#439BD1",
              "padding-top": "1rem",
              overflow: "hidden",
              "font-size": ".8em",
              "font-weight": "700"
            }
          },
          [
            _vm.hasAdjuster
              ? _c(
                  "a",
                  { attrs: { href: "/users/" + _vm.claim.adjuster.id } },
                  [_vm._v(" " + _vm._s(_vm.claim.adjuster.name))]
                )
              : _c("span", [_vm._v("Unassignable")])
          ]
        ),
        _vm._v(" "),
        _c("h4", { staticStyle: { color: "#aaa", "margin-top": "-.25em" } }, [
          _vm._v("Adjuster")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-half assignment" }, [
        _c(
          "a",
          {
            on: {
              mouseup: function($event) {
                _vm.$emit("status-set", _vm.statusesList[2])
                _vm.$emit("new-status-toggle")
              }
            }
          },
          [
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
              : _c("span", { staticClass: "icon is-standard" }, [
                  _c("i", { staticClass: "fa fa-8x fa-user-circle-o" })
                ])
          ]
        ),
        _vm._v(" "),
        _c(
          "h3",
          {
            staticStyle: {
              color: "#64C6A3",
              "padding-top": "1rem",
              overflow: "hidden",
              "font-size": ".8em",
              "font-weight": "700"
            }
          },
          [_vm._v(_vm._s(_vm.reviewer.name || "Not Assigned"))]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              "font-size": "1em",
              color: "#aaa",
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Billing.vue?vue&type=template&id=316fcd96&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Billing.vue?vue&type=template&id=316fcd96& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "columns" }, [
    _c(
      "div",
      { staticClass: "column" },
      [
        _c("invoices"),
        _vm._v(" "),
        _c("new-invoice"),
        _vm._v(" "),
        _c("new-estimate", {
          attrs: {
            claim: _vm.claim,
            "creating-estimate": _vm.creatingEstimate
          },
          on: {
            "toggle-estimate": function($event) {
              _vm.creatingEstimate = !_vm.creatingEstimate
            },
            "estimate-created": _vm.addEstimate
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Claim.vue?vue&type=template&id=7fa4d6f6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Claim.vue?vue&type=template&id=7fa4d6f6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    [
      _c("claim-map"),
      _vm._v(" "),
      _c("tags"),
      _vm._v(" "),
      _c("claim-stats", {
        attrs: {
          "claim-id": _vm.claim.id,
          "user-id": _vm.user.id,
          estimates: _vm.claim.estimates
        }
      }),
      _vm._v(" "),
      _c("contacts"),
      _vm._v(" "),
      _c("description"),
      _vm._v(" "),
      _c("claim-info")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimMenu.vue?vue&type=template&id=2e55ac16&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/ClaimMenu.vue?vue&type=template&id=2e55ac16& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "#", staticStyle: { "margin-bottom": "1em" } },
    [
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
                ? _c("span", [_vm._m(0), _vm._v(" "), _vm._m(1)])
                : _c("span", [
                    _vm._m(2),
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
                  _c(
                    "a",
                    {
                      staticClass: "is-menu-button dropdown-item",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          return _vm.setStatusType(_vm.statusesList[1])
                        }
                      }
                    },
                    [_vm._m(3), _vm._v(" Assign Adjuster")]
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
                          return _vm.setStatusType(_vm.statusesList[2])
                        }
                      }
                    },
                    [_vm._m(4), _vm._v(" Assign Reviewer")]
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
                          return _vm.setStatusType(_vm.statusesList[3])
                        }
                      }
                    },
                    [_vm._m(5), _vm._v(" Reassign")]
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
                          return _vm.setStatusType(_vm.statusesList[4])
                        }
                      }
                    },
                    [_vm._m(6), _vm._v(" Customer Contacted")]
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
                          return _vm.setStatusType(_vm.statusesList[5])
                        }
                      }
                    },
                    [_vm._m(7), _vm._v(" Site Inspected")]
                  )
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
                          return _vm.setStatusType(_vm.statusesList[6])
                        }
                      }
                    },
                    [_vm._m(8), _vm._v(" Submit an Estimate")]
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(9),
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
                          return _vm.setStatusType({
                            type: "date",
                            name: "File Closed"
                          })
                        }
                      }
                    },
                    [_vm._m(10), _vm._v(" Close File")]
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
                          return _vm.setStatusType({
                            type: "date",
                            name: "File Reopened"
                          })
                        }
                      }
                    },
                    [_vm._m(11), _vm._v(" Reopen File")]
                  )
                ]),
                _vm._v(" "),
                _vm._m(12),
                _vm._v(" "),
                _vm._m(13),
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
    ]
  )
}
var staticRenderFns = [
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
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-plus-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-plus-circle" })
    ])
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
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-mobile" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-search" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-money" })
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
      _c("i", { staticClass: "fa fa-folder-o" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info is-small" }, [
      _c("i", { staticClass: "fa fa-folder-open-o" })
    ])
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimNavigation.vue?vue&type=template&id=ecd9b4ac&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/ClaimNavigation.vue?vue&type=template&id=ecd9b4ac& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column" }, [
      _c("div", { staticClass: "tabs is-left" }, [
        _c(
          "ul",
          [
            _c("router-link", { attrs: { to: "/", tag: "li", exact: "" } }, [
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
            _c("router-link", { attrs: { to: "/billing", tag: "li" } }, [
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
            _vm._m(0)
          ],
          1
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
    return _c("li", [
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimStats.vue?vue&type=template&id=13e215f9&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/ClaimStats.vue?vue&type=template&id=13e215f9& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "columns is-multiline is-mobile" }, [
    _c("div", { staticClass: "column is-one-third is-hidden-mobile" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          {
            staticClass: "card-content claim-stat",
            on: {
              mouseleave: function($event) {
                _vm.editingGrossLoss = false
              }
            }
          },
          [
            _c("h3", { staticClass: "subtitle stat-title" }, [
              _vm._v("Gross Loss Amount")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticStyle: { "margin-top": "-1.75em" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  },
                  keydown: function($event) {
                    return _vm.estimate.errors.clear($event.target.name)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "field",
                    staticStyle: { "margin-top": "-5px" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "control has-icons-right has-icons-left" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.estimate.gross_loss,
                              expression: "estimate.gross_loss"
                            }
                          ],
                          staticClass: "input",
                          staticStyle: {
                            border: "none",
                            background: "transparent",
                            "box-shadow": "none",
                            "font-size": "2em",
                            "font-weight": "bold",
                            color: "#4b9ae7",
                            "padding-top": "0",
                            "padding-bottom": "0",
                            height: "1.5em",
                            "text-align": "center",
                            "justify-content": "center"
                          },
                          attrs: {
                            type: "text",
                            id: "gross-loss",
                            readonly: !_vm.editingGrossLoss
                          },
                          domProps: { value: _vm.estimate.gross_loss },
                          on: {
                            keyup: [
                              function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.submit($event)
                              },
                              function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "escape",
                                    undefined,
                                    $event.key,
                                    undefined
                                  )
                                ) {
                                  return null
                                }
                                return _vm.toggleEditing($event)
                              }
                            ],
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.estimate,
                                "gross_loss",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "icon is-small is-right",
                            staticStyle: { "pointer-events": "auto" }
                          },
                          [
                            !_vm.editingGrossLoss
                              ? _c("i", {
                                  staticClass: "fa fa-pencil",
                                  staticStyle: {
                                    color: "#4b9ae7",
                                    cursor: "pointer",
                                    "margin-top": "1rem"
                                  },
                                  on: { click: _vm.toggleEditing }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.editingGrossLoss
                              ? _c("i", {
                                  staticClass: "fa fa-cloud-upload",
                                  staticStyle: {
                                    cursor: "pointer",
                                    "margin-top": "1rem"
                                  },
                                  on: { click: _vm.toggleEditing }
                                })
                              : _vm._e()
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.estimate.errors.has("gross_loss")
                      ? _c("span", {
                          staticClass: "help is-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.estimate.errors.get("gross_loss")
                            )
                          }
                        })
                      : _vm._e()
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "h3",
              {
                staticClass: "subtitle stat-title",
                on: { click: _vm.toggleEditing }
              },
              [
                _c("a", [
                  _vm.hasEstimates
                    ? _c("span", [_vm._v("Issue Correction")])
                    : _c("span", [_vm._v("Create Estimate")])
                ])
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3)
  ])
}
var staticRenderFns = [
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
          _c("h1", { staticClass: "title stat has-text-grey" }, [
            _vm._v("N/A")
          ]),
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
          _c("h1", { staticClass: "title stat has-text-grey" }, [
            _vm._v("N/A")
          ]),
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
          _c("h1", { staticClass: "title stat has-text-grey" }, [
            _vm._v("N/A")
          ]),
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
          _c("h1", { staticClass: "title stat has-text-grey" }, [
            _vm._v("N/A")
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Contacts.vue?vue&type=template&id=b32827ee&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Contacts.vue?vue&type=template&id=b32827ee& ***!
  \**************************************************************************************************************************************************************************************************************/
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
                  }),
                  0
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Description.vue?vue&type=template&id=2e513136&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Description.vue?vue&type=template&id=2e513136& ***!
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/GrossLoss.vue?vue&type=template&id=a8e1c07e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/GrossLoss.vue?vue&type=template&id=a8e1c07e& ***!
  \***************************************************************************************************************************************************************************************************************/
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Map.vue?vue&type=template&id=cc4d36d4&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Map.vue?vue&type=template&id=cc4d36d4& ***!
  \*********************************************************************************************************************************************************************************************************/
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewEstimate.vue?vue&type=template&id=13faea22&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/NewEstimate.vue?vue&type=template&id=13faea22& ***!
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
  return _c("modal", { attrs: { show: _vm.creatingEstimate, solid: true } }, [
    _c("h3", { staticClass: "subtitle has-text-info has-text-weight-light" }, [
      _vm._v("Claim# " + _vm._s(_vm.claim.claim_number))
    ]),
    _vm._v(" "),
    _c("h1", { staticClass: "title", staticStyle: { color: "#efefef" } }, [
      _vm._v("Create Estimate")
    ]),
    _vm._v(" "),
    _c("hr", { staticStyle: { background: "#485269" } }),
    _vm._v(" "),
    _c("div", { staticClass: "level" }, [
      _c("div", { staticClass: "level-left" }, [
        _c("div", { staticClass: "level-item" }, [
          _c("div", { staticClass: "field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.isErroneous,
                  expression: "isErroneous"
                }
              ],
              staticClass: "switch is-rounded is-small",
              attrs: {
                id: "is-erroneous",
                type: "checkbox",
                name: "is-erroneous",
                disabled: _vm.isCwop
              },
              domProps: {
                checked: Array.isArray(_vm.isErroneous)
                  ? _vm._i(_vm.isErroneous, null) > -1
                  : _vm.isErroneous
              },
              on: {
                change: [
                  function($event) {
                    var $$a = _vm.isErroneous,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.isErroneous = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.isErroneous = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.isErroneous = $$c
                    }
                  },
                  function($event) {
                    _vm.isErroneous
                      ? (_vm.estimate.gross_loss = "erroneous")
                      : (_vm.estimate.gross_loss = 0)
                  }
                ]
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "is-erroneous" } }, [
              _vm._v("Erroneous")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "level-item" }, [
          _c("div", { staticClass: "field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.isCwop,
                  expression: "isCwop"
                }
              ],
              staticClass: "switch is-rounded is-small",
              attrs: {
                id: "is-cwop",
                type: "checkbox",
                name: "is-cwop",
                disabled: _vm.isErroneous
              },
              domProps: {
                checked: Array.isArray(_vm.isCwop)
                  ? _vm._i(_vm.isCwop, null) > -1
                  : _vm.isCwop
              },
              on: {
                change: [
                  function($event) {
                    var $$a = _vm.isCwop,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.isCwop = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.isCwop = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.isCwop = $$c
                    }
                  },
                  function($event) {
                    _vm.isCwop
                      ? (_vm.estimate.gross_loss = "cwop")
                      : (_vm.estimate.gross_loss = 0)
                  }
                ]
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "is-cwop" } }, [_vm._v("CWOP")])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("label", { staticClass: "label", attrs: { for: "estimate" } }, [
        _vm._v("Gross Loss:")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "control" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.estimate.gross_loss,
              expression: "estimate.gross_loss"
            }
          ],
          staticClass: "input",
          attrs: { name: "estimate", disabled: _vm.isErroneous || _vm.isCwop },
          domProps: { value: _vm.estimate.gross_loss },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.estimate, "gross_loss", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("label", { staticClass: "label", attrs: { for: "date" } }, [
        _vm._v("Date:")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "control" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.estimate.date,
              expression: "estimate.date"
            }
          ],
          staticClass: "input",
          attrs: { name: "date" },
          domProps: { value: _vm.estimate.date },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.estimate, "date", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("label", { staticClass: "label", attrs: { for: "time" } }, [
        _vm._v("Time:")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "control" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.estimate.time,
              expression: "estimate.time"
            }
          ],
          staticClass: "input",
          attrs: { name: "time" },
          domProps: { value: _vm.estimate.time },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.estimate, "time", $event.target.value)
            }
          }
        })
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
                return _vm.$emit("toggle-estimate")
              }
            }
          },
          [_vm._v("cancel")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button is-info is-small",
            on: {
              click: function($event) {
                return _vm.submit()
              }
            }
          },
          [_vm._v("Create Estimate")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewStatus.vue?vue&type=template&id=10bc506c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/NewStatus.vue?vue&type=template&id=10bc506c& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("modal", { attrs: { show: _vm.creatingNewStatus, solid: true } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c(
          "h3",
          { staticClass: "subtitle has-text-info has-text-weight-light" },
          [_vm._v("Claim# " + _vm._s(_vm.claim.claim_number))]
        ),
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
                    }),
                    0
                  )
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
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
              attrs: { type: "text", placeholder: "yyyy/mm/dd/" },
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
        ]),
        _vm._v(" "),
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
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.newStatus.type == "value",
                expression: "newStatus.type == 'value'"
              }
            ],
            staticClass: "field"
          },
          [
            _c("label", { staticClass: "label", attrs: { for: "another" } }, [
              _vm._v("Value:")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "control has-icons-left" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newStatus.value,
                    expression: "newStatus.value"
                  }
                ],
                staticClass: "input",
                attrs: { type: "text", placeholder: "$1000.00" },
                domProps: { value: _vm.newStatus.value },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.newStatus, "value", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "icon is-small is-left" }, [
                _c("i", { staticClass: "fa fa-clock-o" })
              ]),
              _vm._v(" "),
              _vm.newStatus.errors.has("value")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.newStatus.errors.get("value"))
                    }
                  })
                : _vm._e()
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "field", staticStyle: { "margin-top": "1em" } },
          [
            _c("input", {
              staticClass: "switch is-small is-rounded is-info",
              attrs: {
                id: "switchRoundedInfo",
                type: "checkbox",
                name: "switchRoundedInfo",
                disabled: true
              },
              domProps: { checked: false }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "switchRoundedInfo" } }, [
              _vm._v("Export to third parties")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "has-text-right",
            staticStyle: { "margin-top": "1.5em" }
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "is-size-7 has-text-white is-light is-small is-link",
                staticStyle: { "margin-right": "1em", "margin-top": "2em" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$emit("new-status-toggle")
                  }
                }
              },
              [_vm._v("cancel")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button is-info is-small",
                attrs: { type: "submit" }
              },
              [_vm._v("Add Status")]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Tags.vue?vue&type=template&id=6ccb6bcf&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Tags.vue?vue&type=template&id=6ccb6bcf& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column" }, [
      _c(
        "div",
        { staticClass: "tags" },
        [
          _vm._l(_vm.claim.tags, function(tag) {
            return _c("span", { staticClass: "tag is-dark" }, [
              _c("a", {
                staticStyle: { color: "#fff" },
                attrs: { href: "/tags/" + tag.name + "/claims" },
                domProps: { textContent: _vm._s(tag.name) }
              })
            ])
          }),
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
                staticStyle: {
                  color: "#ccc",
                  position: "relative",
                  top: "-3px"
                }
              })
            ]
          )
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Timeline.vue?vue&type=template&id=9ec08e12&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/Timeline.vue?vue&type=template&id=9ec08e12& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content", staticStyle: { margin: "3rem" } },
    [
      _c(
        "div",
        { staticClass: "timeline" },
        [
          _vm._l(_vm.claim.statuses, function(status) {
            return _c("div", { staticClass: "timeline-item" }, [
              status.hasOwnProperty(_vm.user)
                ? _c(
                    "div",
                    { staticClass: "timeline-marker is-image is-32x32" },
                    [
                      _c("a", { attrs: { href: "/users/" + status.user.id } }, [
                        _c("img", {
                          attrs: {
                            src: status.user.avatar.path,
                            alt: status.user.name
                          }
                        })
                      ])
                    ]
                  )
                : _c("div", { staticClass: "timeline-marker is-secondary" }),
              _vm._v(" "),
              _c("div", { staticClass: "timeline-content" }, [
                _c("p", {
                  staticClass: "heading",
                  domProps: { textContent: _vm._s(status.date) }
                }),
                _vm._v(" "),
                _c("p", [
                  _c("strong", {
                    domProps: { textContent: _vm._s(status.name) }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  status.user
                    ? _c("span", {
                        domProps: { textContent: _vm._s(status.user.name) }
                      })
                    : _c("span", {
                        domProps: { textContent: _vm._s("System") }
                      }),
                  _vm._v(" "),
                  status.value
                    ? _c("span", [
                        _c("br"),
                        _c("span", {
                          domProps: { textContent: _vm._s(status.value) }
                        })
                      ])
                    : _vm._e()
                ])
              ])
            ])
          }),
          _vm._v(" "),
          _vm._m(0)
        ],
        2
      )
    ]
  )
}
var staticRenderFns = [
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/TitleHeader.vue?vue&type=template&id=4c2dcfbf&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/TitleHeader.vue?vue&type=template&id=4c2dcfbf& ***!
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
  return _c(
    "div",
    { staticClass: "columns", staticStyle: { "margin-bottom": "0" } },
    [
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
              _vm._v(" " + _vm._s(_vm.claim.carrier.name))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "is-hidden-desktop" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass: "title",
              staticStyle: { "margin-bottom": "-.25rem" }
            },
            [
              _c("span", { staticClass: "claim-number" }, [
                _vm._v(_vm._s(_vm.claim.claim_number))
              ])
            ]
          ),
          _vm._v(" "),
          _c("h3", { staticStyle: { "font-size": "1.5em", margin: "0" } }, [
            _vm._v(_vm._s(_vm.claim.carrier.name) + " ")
          ])
        ])
      ])
    ]
  )
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/claimInfo.vue?vue&type=template&id=3063ec38&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/claimInfo.vue?vue&type=template&id=3063ec38& ***!
  \***************************************************************************************************************************************************************************************************************/
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
                  }),
                  0
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoice.vue?vue&type=template&id=5790f305&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/Invoice.vue?vue&type=template&id=5790f305& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm.invoice.options !== undefined
    ? _c(
        "div",
        { staticClass: "card", staticStyle: { "margin-bottom": "1em" } },
        [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "level" }, [
              _c("div", { staticClass: "level-left" }, [
                _c("div", { staticClass: "level-item" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button is-dark is-rounded is-small",
                      class: { "is-dark": _vm.invoice.options.show },
                      on: {
                        click: function($event) {
                          return _vm.toggle()
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "icon is-small" }, [
                        _c("i", {
                          staticClass: "fa",
                          class: {
                            "fa-caret-down": !_vm.invoice.options.show,
                            "fa-times": _vm.invoice.options.show
                          }
                        })
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-right" }, [
                _c("div", { staticClass: "level-item" }, [
                  _c("strong", [
                    _vm._v("Total: "),
                    _c("span", {
                      domProps: { textContent: _vm._s("$" + _vm.invoice.total) }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.invoice.options.show
              ? _c(
                  "div",
                  { attrs: { id: "invoice" } },
                  [
                    _c("invoice-options", {
                      attrs: {
                        invoice: _vm.invoice,
                        lineItemTypes: _vm.lineItemTypes
                      },
                      on: {
                        "new-line-item": _vm.addLineItem,
                        "remove-line-item": _vm.removeLineItem,
                        "invoice-deleted": _vm.remove,
                        "toggle-estimate": _vm.createEstimate,
                        "fee-schedule-changed": _vm.updateFeeSchedule
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.invoice.lineItems, function(lineItem) {
                      return _c("line-item", {
                        key: lineItem.id,
                        attrs: {
                          invoice: _vm.invoice,
                          lineItem: lineItem,
                          estimates: _vm.claim.estimates
                        },
                        on: {
                          "line-item-removed": _vm.removeLineItem,
                          "line-item-updated": _vm.caclulate,
                          "toggle-estimate": _vm.createEstimate
                        }
                      })
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "level",
                        staticStyle: { padding: "1em", "border-radius": ".5em" }
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("div", { staticClass: "level-right" }, [
                          _c(
                            "span",
                            { staticStyle: { "padding-right": "2em" } },
                            [
                              _vm._v("Sub Total: "),
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(_vm.invoice.subTotal)
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("strong", [
                            _vm._v("Total: "),
                            _c("span", {
                              domProps: {
                                textContent: _vm._s("$" + _vm.invoice.total)
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ],
                  2
                )
              : _vm._e()
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "level-left" }, [
      _c("div", { staticClass: "level-item" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=template&id=00643d09&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=template&id=00643d09& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      staticClass: "level",
      staticStyle: {
        padding: "1em",
        background: "#e9e9e9",
        "border-radius": ".5em"
      }
    },
    [
      _c("div", { staticClass: "level-left" }, [
        _c(
          "div",
          { staticClass: "level-item" },
          [
            _c(
              "dropdown",
              {
                attrs: {
                  items: _vm.lineItemTypes,
                  carrier: _vm.invoice.carrier,
                  "event-name": "new-line-item",
                  buttonStyle: "is-rounded is-small"
                },
                on: { "new-line-item": _vm.addLineItem }
              },
              [_vm._v("Add Line Item")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.invoice.carrier.label == "TWIA"
          ? _c("div", { staticClass: "level-item" }, [
              _c(
                "div",
                { staticClass: "field", staticStyle: { margin: "0 1em 0 0" } },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.invoice.options.mcm,
                        expression: "invoice.options.mcm"
                      }
                    ],
                    staticClass: "switch is-rounded is-small is-info",
                    attrs: { id: "isMcm", type: "checkbox", name: "isMcm" },
                    domProps: {
                      checked: Array.isArray(_vm.invoice.options.mcm)
                        ? _vm._i(_vm.invoice.options.mcm, null) > -1
                        : _vm.invoice.options.mcm
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.invoice.options.mcm,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.invoice.options,
                                  "mcm",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.invoice.options,
                                  "mcm",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.invoice.options, "mcm", $$c)
                          }
                        },
                        _vm.toggleMcmLineItem
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "isMcm" } }, [
                    _vm._v("MCM Invoice")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.invoice.options.taxable,
                      expression: "invoice.options.taxable"
                    }
                  ],
                  staticClass: "switch is-rounded is-small is-info",
                  attrs: { id: "Taxable", type: "checkbox", name: "Taxable" },
                  domProps: {
                    checked: Array.isArray(_vm.invoice.options.taxable)
                      ? _vm._i(_vm.invoice.options.taxable, null) > -1
                      : _vm.invoice.options.taxable
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.invoice.options.taxable,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.invoice.options,
                              "taxable",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.invoice.options,
                              "taxable",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.invoice.options, "taxable", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "Taxable" } }, [_vm._v("Taxable")])
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c("div", { staticClass: "level-item" }, [
          _c("div", { staticClass: "field" }, [
            _c("div", { staticClass: "control" }, [
              _c("div", { staticClass: "select is-small is-rounded" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.invoice.feeSchedule,
                        expression: "invoice.feeSchedule"
                      }
                    ],
                    staticStyle: { "font-size": "1em" },
                    attrs: { id: "feeSchedule" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.invoice,
                            "feeSchedule",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          return _vm.$emit("fee-schedule-changed")
                        }
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "", disabled: "" } }, [
                      _vm._v("Select Fee Schedule")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.invoice.carrier.fee_schedules, function(
                      feeSchedule
                    ) {
                      return _c("option", {
                        key: feeSchedule.id,
                        domProps: {
                          value: feeSchedule.data,
                          textContent: _vm._s(
                            feeSchedule.label + " Fee Schedule"
                          )
                        }
                      })
                    })
                  ],
                  2
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "level-item" }, [
          _c(
            "button",
            {
              staticClass: "button is-rounded is-small",
              on: {
                click: function($event) {
                  return _vm.$emit("toggle-estimate")
                }
              }
            },
            [_vm._m(0), _vm._v(" "), _c("span", [_vm._v("New Estimate")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "level-item" }, [
          _c(
            "a",
            {
              staticClass: "button is-rounded is-small",
              attrs: { href: "/invoices/" + _vm.invoice.id }
            },
            [_vm._m(1), _vm._v(" "), _c("span", [_vm._v("Preview")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "level-item" }, [
          _c(
            "button",
            {
              staticClass: "button is-danger is-rounded is-small",
              on: {
                click: function($event) {
                  return _vm.$emit("invoice-deleted")
                }
              }
            },
            [_vm._m(2)]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-file-text-o" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-file-pdf-o" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-trash-o" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoices.vue?vue&type=template&id=c38de284&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/Invoices.vue?vue&type=template&id=c38de284& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c("h1", { staticClass: "title has-text-weight-bold" }, [
        _vm._v("Invoices")
      ]),
      _vm._v(" "),
      _vm.claim.invoices.length === 0
        ? _c("p", { staticStyle: { "margin-bottom": "1em" } }, [
            _vm._v(
              "No invoices have been created for claim #" +
                _vm._s(_vm.claim.claim_number) +
                "."
            )
          ])
        : _vm._l(_vm.claim.invoices, function(invoice) {
            return _c("invoice", {
              key: invoice.id,
              attrs: {
                invoice: invoice,
                estimates: _vm.claim.estimates,
                carrier: _vm.claim.carrier
              },
              on: { "invoice-built": _vm.update }
            })
          })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=template&id=32a32f02&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=template&id=32a32f02& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      staticClass: "box is-line-item",
      staticStyle: { "border-color": "#fff" }
    },
    [
      _c(
        "div",
        { staticClass: "level", staticStyle: { "margin-bottom": "0" } },
        [
          _c(
            "div",
            { staticClass: "level-left", staticStyle: { width: "80%" } },
            [
              _c("div", { staticClass: "level-item" }, [
                _c("div", { staticClass: "field" }, [
                  _c("div", { staticClass: "control" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.lineItem.description,
                          expression: "lineItem.description"
                        }
                      ],
                      staticClass: "input is-fullwidth",
                      attrs: { type: "text" },
                      domProps: { value: _vm.lineItem.description },
                      on: {
                        change: function($event) {
                          return _vm.updateTotal(_vm.lineItem)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.lineItem,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.lineItem.has("quantity")
                ? _c("div", { staticClass: "level-item" }, [
                    _c("div", { staticClass: "field" }, [
                      _c(
                        "div",
                        {
                          staticClass: "control has-icons-left has-icons-right"
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.lineItem.quantity,
                                expression: "lineItem.quantity"
                              }
                            ],
                            staticClass: "input",
                            attrs: { type: "text" },
                            domProps: { value: _vm.lineItem.quantity },
                            on: {
                              change: function($event) {
                                return _vm.updateTotal(_vm.lineItem)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.lineItem,
                                  "quantity",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(0)
                        ]
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.lineItem.has("amount")
                ? _c("div", { staticClass: "level-item" }, [
                    _c("div", { staticClass: "field" }, [
                      _c("div", { staticClass: "control has-icons-left" }, [
                        _vm.usesEstimates(_vm.lineItem) && _vm.hasEstimates()
                          ? _c("div", { staticClass: "select is-fullwidth" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.lineItem.amount,
                                      expression: "lineItem.amount"
                                    }
                                  ],
                                  staticStyle: { "font-size": "1em" },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.lineItem,
                                          "amount",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.updateTotal(_vm.lineItem)
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "0", disabled: "" } },
                                    [_vm._v("Select Estimate")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.estimates, function(estimate) {
                                    return _c("option", {
                                      domProps: {
                                        value: estimate.gross_loss,
                                        textContent: _vm._s(estimate.gross_loss)
                                      }
                                    })
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm._m(1)
                            ])
                          : _vm.usesEstimates(_vm.lineItem) &&
                            !_vm.hasEstimates()
                          ? _c(
                              "button",
                              {
                                staticClass: "button is-small is-info",
                                on: {
                                  click: function($event) {
                                    return _vm.$emit("toggle-estimate")
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t  \t\t\t\t\t\tCreate Estimate\n\t\t  \t\t\t\t\t"
                                )
                              ]
                            )
                          : _c(
                              "div",
                              { staticClass: "control has-icons-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.lineItem.amount,
                                      expression: "lineItem.amount"
                                    }
                                  ],
                                  staticClass: "input",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.lineItem.amount },
                                  on: {
                                    change: function($event) {
                                      return _vm.updateTotal(_vm.lineItem)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.lineItem,
                                        "amount",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(2)
                              ]
                            )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.usesEstimates(_vm.lineItem) && _vm.lineItem.has("newAmount")
                ? _c("div", { staticClass: "level-item" }, [
                    _c("div", { staticClass: "field" }, [
                      _c("div", { staticClass: "control has-icons-left" }, [
                        _vm.hasEstimates()
                          ? _c("div", { staticClass: "select is-fullwidth" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.lineItem.newAmount,
                                      expression: "lineItem.newAmount"
                                    }
                                  ],
                                  staticStyle: { "font-size": "1em" },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.lineItem,
                                          "newAmount",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.updateTotal(_vm.lineItem)
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "0", disabled: "" } },
                                    [_vm._v("Select Estimate")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.estimates, function(estimate) {
                                    return _c("option", {
                                      domProps: {
                                        value: estimate.gross_loss,
                                        textContent: _vm._s(estimate.gross_loss)
                                      }
                                    })
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm._m(3)
                            ])
                          : _vm.usesEstimates(_vm.lineItem) &&
                            _vm.lineItem.newAmount &&
                            !_vm.hasEstimates()
                          ? _c(
                              "button",
                              {
                                staticClass: "button is-small is-info",
                                on: {
                                  click: function($event) {
                                    return _vm.$emit("toggle-estimate")
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t  \t\t\t\t\t\tCreate Estimate\n\t\t  \t\t\t\t\t"
                                )
                              ]
                            )
                          : _c(
                              "div",
                              { staticClass: "control has-icons-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.lineItem.amount,
                                      expression: "lineItem.amount"
                                    }
                                  ],
                                  staticClass: "input",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.lineItem.amount },
                                  on: {
                                    change: function($event) {
                                      return _vm.updateTotal(_vm.lineItem)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.lineItem,
                                        "amount",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(4)
                              ]
                            )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.lineItem.has("rate")
                ? _c("div", { staticClass: "level-item" }, [
                    _c("div", { staticClass: "field" }, [
                      _c("div", { staticClass: "control has-icons-left" }, [
                        _vm.invoice.hasMultipleHourlyRates() &&
                        _vm.lineItem.description == "Time & Expense Hours"
                          ? _c("div", { staticClass: "select" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.lineItem.rate,
                                      expression: "lineItem.rate"
                                    }
                                  ],
                                  staticStyle: { "font-size": "1em" },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.lineItem,
                                          "rate",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.updateTotal(_vm.lineItem)
                                      }
                                    ]
                                  }
                                },
                                _vm._l(_vm.invoice.feeSchedule.hourly, function(
                                  rate
                                ) {
                                  return _c("option", {
                                    domProps: {
                                      value: rate.amount,
                                      textContent: _vm._s(
                                        rate.label + " @ " + rate.amount
                                      )
                                    }
                                  })
                                }),
                                0
                              )
                            ])
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.lineItem.rate,
                                  expression: "lineItem.rate"
                                }
                              ],
                              staticClass: "input is-static",
                              attrs: {
                                placeholder: "rate",
                                type: "text",
                                disabled:
                                  _vm.lineItem.type == "amount" ||
                                  !_vm.lineItem.has("name"),
                                readonly: !_vm.lineItem.has("name")
                              },
                              domProps: { value: _vm.lineItem.rate },
                              on: {
                                change: function($event) {
                                  return _vm.updateTotal(_vm.lineItem)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.lineItem,
                                    "rate",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                        _vm._v(" "),
                        _vm._m(5)
                      ])
                    ])
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "level-right" }, [
            _c(
              "div",
              {
                staticClass: "level-item has-text-centered",
                staticStyle: { "padding-right": ".75em" }
              },
              [
                _c("div", { staticClass: "field" }, [
                  _c("div", { staticClass: "control" }, [
                    _c("span", {
                      staticStyle: {
                        "font-size": "1em",
                        "font-weight": "700",
                        color: "#45aaf0"
                      },
                      domProps: {
                        textContent: _vm._s("$" + _vm.lineItem.total)
                      }
                    })
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "level-item" }, [
              _c("button", {
                staticClass: "delete is-small",
                on: {
                  click: function($event) {
                    return _vm.$emit("line-item-removed", _vm.lineItem)
                  }
                }
              })
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left has-text-bold" }, [
      _c("small", [_vm._v("qty")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left has-text-bold" }, [
      _c("small", [_vm._v("gla")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left has-text-bold" }, [
      _c("small", [_vm._v("amt")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left has-text-bold" }, [
      _c("small", [_vm._v("gla")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left has-text-bold" }, [
      _c("small", [_vm._v("amt")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left has-text-bold" }, [
      _c("small", [_vm._v("rate")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=template&id=065b5dc5&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=template&id=065b5dc5& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "a",
      { staticClass: "button is-info", on: { click: _vm.createInvoice } },
      [_vm._m(0), _vm._v(" "), _c("span", [_vm._v("Create Invoice")])]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-plus" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=template&id=5a050f58&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=template&id=5a050f58& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "a",
        { staticClass: "button is-secondary", on: { click: _vm.toggle } },
        [_vm._m(0), _vm._v(" "), _c("span", [_vm._v("Quick Invoice")])]
      ),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.creatingInvoice, solid: true } }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c(
              "h3",
              { staticClass: "subtitle has-text-info has-text-weight-light" },
              [_vm._v("Claim# " + _vm._s(_vm.claim.claim_number))]
            ),
            _vm._v(" "),
            _c(
              "h1",
              { staticClass: "title", staticStyle: { color: "#efefef" } },
              [_vm._v("Create " + _vm._s(_vm.claim.carrier.name) + " Invoice")]
            ),
            _vm._v(" "),
            _c("hr", { staticStyle: { background: "#485269" } }),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _vm.claim.estimates.length > 0
                ? _c("div", { staticClass: "column" }, [
                    _c("div", { staticClass: "field" }, [
                      _c(
                        "label",
                        { staticClass: "label", attrs: { for: "estimate" } },
                        [_vm._v("Choose Estimate:")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "select" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.grossLoss.amount,
                                expression: "grossLoss.amount"
                              }
                            ],
                            attrs: { name: "estimate" },
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
                                  _vm.grossLoss,
                                  "amount",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Select an estimate")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.claim.estimates, function(estimate) {
                              return _c("option", {
                                domProps: {
                                  value: estimate.gross_loss,
                                  textContent: _vm._s(estimate.gross_loss)
                                }
                              })
                            })
                          ],
                          2
                        )
                      ])
                    ])
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "field" }, [
                  _c(
                    "label",
                    { staticClass: "label", attrs: { for: "photos" } },
                    [_vm._v("Photos:")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "control" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.photos.quantity,
                          expression: "photos.quantity"
                        }
                      ],
                      staticClass: "input",
                      attrs: { name: "photos" },
                      domProps: { value: _vm.photos.quantity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.photos, "quantity", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "field" }, [
                  _c(
                    "label",
                    { staticClass: "label", attrs: { for: "hours" } },
                    [_vm._v("T&E Hours:")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "control" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.hours.quantity,
                          expression: "hours.quantity"
                        }
                      ],
                      staticClass: "input",
                      attrs: { name: "hours" },
                      domProps: { value: _vm.hours.quantity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.hours, "quantity", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "field" }, [
                  _c(
                    "label",
                    { staticClass: "label", attrs: { for: "mileage" } },
                    [_vm._v("Mileage:")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "control" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.mileage.quantity,
                          expression: "mileage.quantity"
                        }
                      ],
                      staticClass: "input",
                      attrs: { name: "mileage" },
                      domProps: { value: _vm.mileage.quantity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.mileage, "quantity", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "field" }, [
                  _c(
                    "label",
                    { staticClass: "label", attrs: { for: "reimbursable" } },
                    [_vm._v("Reimbursable:")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "control" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reimbursable.amount,
                          expression: "reimbursable.amount"
                        }
                      ],
                      staticClass: "input",
                      attrs: { name: "reimbursable" },
                      domProps: { value: _vm.reimbursable.amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.reimbursable,
                            "amount",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticStyle: { background: "#485269" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "has-text-right",
                staticStyle: { "margin-top": "1.5em" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "is-size-7 has-text-white is-light is-small is-link",
                    staticStyle: { "margin-right": "1em", "margin-top": "2em" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.toggle($event)
                      }
                    }
                  },
                  [_vm._v("cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "button is-info is-small",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Create Invoice")]
                )
              ]
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-plus" })
    ])
  }
]
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

/***/ "./resources/assets/js/Dropdown.vue":
/*!******************************************!*\
  !*** ./resources/assets/js/Dropdown.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_de1a343a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=de1a343a& */ "./resources/assets/js/Dropdown.vue?vue&type=template&id=de1a343a&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/assets/js/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_de1a343a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_de1a343a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/Dropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/Dropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/Dropdown.vue?vue&type=template&id=de1a343a&":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/Dropdown.vue?vue&type=template&id=de1a343a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_de1a343a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=de1a343a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Dropdown.vue?vue&type=template&id=de1a343a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_de1a343a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_de1a343a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/Modal.vue":
/*!***************************************!*\
  !*** ./resources/assets/js/Modal.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_9ad64d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=9ad64d6a& */ "./resources/assets/js/Modal.vue?vue&type=template&id=9ad64d6a&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/assets/js/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_9ad64d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_9ad64d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/assets/js/Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/Modal.vue?vue&type=template&id=9ad64d6a&":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/Modal.vue?vue&type=template&id=9ad64d6a& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_9ad64d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=9ad64d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Modal.vue?vue&type=template&id=9ad64d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_9ad64d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_9ad64d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Assignees.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/claims/Assignees.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Assignees_vue_vue_type_template_id_d698d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assignees.vue?vue&type=template&id=d698d384& */ "./resources/assets/js/claims/Assignees.vue?vue&type=template&id=d698d384&");
/* harmony import */ var _Assignees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assignees.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Assignees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Assignees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Assignees_vue_vue_type_template_id_d698d384___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Assignees_vue_vue_type_template_id_d698d384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Assignees.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Assignees.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/claims/Assignees.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assignees.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Assignees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Assignees.vue?vue&type=template&id=d698d384&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/claims/Assignees.vue?vue&type=template&id=d698d384& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignees_vue_vue_type_template_id_d698d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assignees.vue?vue&type=template&id=d698d384& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Assignees.vue?vue&type=template&id=d698d384&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignees_vue_vue_type_template_id_d698d384___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignees_vue_vue_type_template_id_d698d384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Billing.vue":
/*!************************************************!*\
  !*** ./resources/assets/js/claims/Billing.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Billing_vue_vue_type_template_id_316fcd96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Billing.vue?vue&type=template&id=316fcd96& */ "./resources/assets/js/claims/Billing.vue?vue&type=template&id=316fcd96&");
/* harmony import */ var _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Billing.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Billing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Billing_vue_vue_type_template_id_316fcd96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Billing_vue_vue_type_template_id_316fcd96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Billing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Billing.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/claims/Billing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Billing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Billing.vue?vue&type=template&id=316fcd96&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/claims/Billing.vue?vue&type=template&id=316fcd96& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_316fcd96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=template&id=316fcd96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Billing.vue?vue&type=template&id=316fcd96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_316fcd96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_316fcd96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Claim.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/claims/Claim.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _claimData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./claimData.js */ "./resources/assets/js/claims/claimData.js");
/* harmony import */ var _Claim_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Claim.vue */ "./resources/assets/js/claims/Claim.vue");
/* harmony import */ var _Billing_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Billing.vue */ "./resources/assets/js/claims/Billing.vue");
/* harmony import */ var _TitleHeader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TitleHeader.vue */ "./resources/assets/js/claims/TitleHeader.vue");
/* harmony import */ var _ClaimMenu_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClaimMenu.vue */ "./resources/assets/js/claims/ClaimMenu.vue");
/* harmony import */ var _ClaimNavigation_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClaimNavigation.vue */ "./resources/assets/js/claims/ClaimNavigation.vue");
/* harmony import */ var _Assignees_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Assignees.vue */ "./resources/assets/js/claims/Assignees.vue");
/* harmony import */ var _Timeline_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Timeline.vue */ "./resources/assets/js/claims/Timeline.vue");
/* harmony import */ var _NewStatus_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NewStatus.vue */ "./resources/assets/js/claims/NewStatus.vue");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);








 // import alert from '../Alert.vue';

var routes = [{
  path: '/',
  name: "home",
  component: _Claim_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/billing',
  name: "billing",
  component: _Billing_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: routes,
  linkActiveClass: 'is-active'
});
var ClaimView = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  name: 'Claim',
  router: router,
  components: {
    titleHeader: _TitleHeader_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    claimMenu: _ClaimMenu_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    claimNav: _ClaimNavigation_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    assignees: _Assignees_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    timeline: _Timeline_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    newStatus: _NewStatus_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  created: function created() {
    this.claim = claim;
    this.claim.claim_data = JSON.parse(this.claim.claim_data);
    this.user = user;
    this.hasAlert = true;
    this.alert.message = 'You have been assigned to this claim please confirm or reject this assignment';
  },
  mounted: function mounted() {
    if (this.claim.assignments.length > 0) {
      this.adjuster = this.claim.assignments.find(function (assignment) {
        return assignment.type = 'adjuster';
      });
    }
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  methods: {
    setStatus: function setStatus(data) {
      console.log(data);
      this.newStatus.name = data.name;
      return this.newStatus.type = data.type;
    },
    toggleCreatingNewStatus: function toggleCreatingNewStatus() {
      console.log('toggled');
      return this.creatingNewStatus = !this.creatingNewStatus;
    }
  }
}).$mount('#claim');

/***/ }),

/***/ "./resources/assets/js/claims/Claim.vue":
/*!**********************************************!*\
  !*** ./resources/assets/js/claims/Claim.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Claim_vue_vue_type_template_id_7fa4d6f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Claim.vue?vue&type=template&id=7fa4d6f6& */ "./resources/assets/js/claims/Claim.vue?vue&type=template&id=7fa4d6f6&");
/* harmony import */ var _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Claim.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Claim_vue_vue_type_template_id_7fa4d6f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Claim_vue_vue_type_template_id_7fa4d6f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Claim.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Claim.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/claims/Claim.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Claim.vue?vue&type=template&id=7fa4d6f6&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/claims/Claim.vue?vue&type=template&id=7fa4d6f6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_7fa4d6f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=template&id=7fa4d6f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Claim.vue?vue&type=template&id=7fa4d6f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_7fa4d6f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_7fa4d6f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/ClaimMenu.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/claims/ClaimMenu.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClaimMenu_vue_vue_type_template_id_2e55ac16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClaimMenu.vue?vue&type=template&id=2e55ac16& */ "./resources/assets/js/claims/ClaimMenu.vue?vue&type=template&id=2e55ac16&");
/* harmony import */ var _ClaimMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClaimMenu.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/ClaimMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClaimMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClaimMenu_vue_vue_type_template_id_2e55ac16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClaimMenu_vue_vue_type_template_id_2e55ac16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/ClaimMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/ClaimMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/claims/ClaimMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClaimMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/ClaimMenu.vue?vue&type=template&id=2e55ac16&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/claims/ClaimMenu.vue?vue&type=template&id=2e55ac16& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimMenu_vue_vue_type_template_id_2e55ac16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClaimMenu.vue?vue&type=template&id=2e55ac16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimMenu.vue?vue&type=template&id=2e55ac16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimMenu_vue_vue_type_template_id_2e55ac16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimMenu_vue_vue_type_template_id_2e55ac16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/ClaimNavigation.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/claims/ClaimNavigation.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClaimNavigation_vue_vue_type_template_id_ecd9b4ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClaimNavigation.vue?vue&type=template&id=ecd9b4ac& */ "./resources/assets/js/claims/ClaimNavigation.vue?vue&type=template&id=ecd9b4ac&");
/* harmony import */ var _ClaimNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClaimNavigation.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/ClaimNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClaimNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClaimNavigation_vue_vue_type_template_id_ecd9b4ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClaimNavigation_vue_vue_type_template_id_ecd9b4ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/ClaimNavigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/ClaimNavigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/claims/ClaimNavigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClaimNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/ClaimNavigation.vue?vue&type=template&id=ecd9b4ac&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/claims/ClaimNavigation.vue?vue&type=template&id=ecd9b4ac& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimNavigation_vue_vue_type_template_id_ecd9b4ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClaimNavigation.vue?vue&type=template&id=ecd9b4ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimNavigation.vue?vue&type=template&id=ecd9b4ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimNavigation_vue_vue_type_template_id_ecd9b4ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimNavigation_vue_vue_type_template_id_ecd9b4ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/ClaimStats.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/claims/ClaimStats.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClaimStats_vue_vue_type_template_id_13e215f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClaimStats.vue?vue&type=template&id=13e215f9& */ "./resources/assets/js/claims/ClaimStats.vue?vue&type=template&id=13e215f9&");
/* harmony import */ var _ClaimStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClaimStats.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/ClaimStats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClaimStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClaimStats_vue_vue_type_template_id_13e215f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClaimStats_vue_vue_type_template_id_13e215f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/ClaimStats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/ClaimStats.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/claims/ClaimStats.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClaimStats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimStats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/ClaimStats.vue?vue&type=template&id=13e215f9&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/claims/ClaimStats.vue?vue&type=template&id=13e215f9& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimStats_vue_vue_type_template_id_13e215f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClaimStats.vue?vue&type=template&id=13e215f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/ClaimStats.vue?vue&type=template&id=13e215f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimStats_vue_vue_type_template_id_13e215f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClaimStats_vue_vue_type_template_id_13e215f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Contacts.vue":
/*!*************************************************!*\
  !*** ./resources/assets/js/claims/Contacts.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contacts_vue_vue_type_template_id_b32827ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts.vue?vue&type=template&id=b32827ee& */ "./resources/assets/js/claims/Contacts.vue?vue&type=template&id=b32827ee&");
/* harmony import */ var _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contacts.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contacts_vue_vue_type_template_id_b32827ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contacts_vue_vue_type_template_id_b32827ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Contacts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Contacts.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/claims/Contacts.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Contacts.vue?vue&type=template&id=b32827ee&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/claims/Contacts.vue?vue&type=template&id=b32827ee& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_b32827ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contacts.vue?vue&type=template&id=b32827ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Contacts.vue?vue&type=template&id=b32827ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_b32827ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_b32827ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Description.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/claims/Description.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Description_vue_vue_type_template_id_2e513136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Description.vue?vue&type=template&id=2e513136& */ "./resources/assets/js/claims/Description.vue?vue&type=template&id=2e513136&");
/* harmony import */ var _Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Description.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Description_vue_vue_type_template_id_2e513136___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Description_vue_vue_type_template_id_2e513136___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Description.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Description.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/claims/Description.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Description.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Description.vue?vue&type=template&id=2e513136&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/claims/Description.vue?vue&type=template&id=2e513136& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_template_id_2e513136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Description.vue?vue&type=template&id=2e513136& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Description.vue?vue&type=template&id=2e513136&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_template_id_2e513136___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_template_id_2e513136___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/GrossLoss.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/claims/GrossLoss.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GrossLoss_vue_vue_type_template_id_a8e1c07e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GrossLoss.vue?vue&type=template&id=a8e1c07e& */ "./resources/assets/js/claims/GrossLoss.vue?vue&type=template&id=a8e1c07e&");
/* harmony import */ var _GrossLoss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GrossLoss.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/GrossLoss.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GrossLoss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GrossLoss_vue_vue_type_template_id_a8e1c07e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GrossLoss_vue_vue_type_template_id_a8e1c07e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/GrossLoss.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/GrossLoss.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/claims/GrossLoss.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrossLoss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GrossLoss.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/GrossLoss.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrossLoss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/GrossLoss.vue?vue&type=template&id=a8e1c07e&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/claims/GrossLoss.vue?vue&type=template&id=a8e1c07e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GrossLoss_vue_vue_type_template_id_a8e1c07e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GrossLoss.vue?vue&type=template&id=a8e1c07e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/GrossLoss.vue?vue&type=template&id=a8e1c07e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GrossLoss_vue_vue_type_template_id_a8e1c07e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GrossLoss_vue_vue_type_template_id_a8e1c07e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Map.vue":
/*!********************************************!*\
  !*** ./resources/assets/js/claims/Map.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map_vue_vue_type_template_id_cc4d36d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.vue?vue&type=template&id=cc4d36d4& */ "./resources/assets/js/claims/Map.vue?vue&type=template&id=cc4d36d4&");
/* harmony import */ var _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Map_vue_vue_type_template_id_cc4d36d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Map_vue_vue_type_template_id_cc4d36d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Map.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/claims/Map.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Map.vue?vue&type=template&id=cc4d36d4&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/claims/Map.vue?vue&type=template&id=cc4d36d4& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_cc4d36d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=template&id=cc4d36d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Map.vue?vue&type=template&id=cc4d36d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_cc4d36d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_cc4d36d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/NewEstimate.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/claims/NewEstimate.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewEstimate_vue_vue_type_template_id_13faea22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewEstimate.vue?vue&type=template&id=13faea22& */ "./resources/assets/js/claims/NewEstimate.vue?vue&type=template&id=13faea22&");
/* harmony import */ var _NewEstimate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewEstimate.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/NewEstimate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewEstimate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewEstimate_vue_vue_type_template_id_13faea22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewEstimate_vue_vue_type_template_id_13faea22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/NewEstimate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/NewEstimate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/claims/NewEstimate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewEstimate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewEstimate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewEstimate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewEstimate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/NewEstimate.vue?vue&type=template&id=13faea22&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/claims/NewEstimate.vue?vue&type=template&id=13faea22& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewEstimate_vue_vue_type_template_id_13faea22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewEstimate.vue?vue&type=template&id=13faea22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewEstimate.vue?vue&type=template&id=13faea22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewEstimate_vue_vue_type_template_id_13faea22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewEstimate_vue_vue_type_template_id_13faea22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/NewStatus.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/claims/NewStatus.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewStatus_vue_vue_type_template_id_10bc506c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewStatus.vue?vue&type=template&id=10bc506c& */ "./resources/assets/js/claims/NewStatus.vue?vue&type=template&id=10bc506c&");
/* harmony import */ var _NewStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewStatus.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/NewStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewStatus_vue_vue_type_template_id_10bc506c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewStatus_vue_vue_type_template_id_10bc506c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/NewStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/NewStatus.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/claims/NewStatus.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/NewStatus.vue?vue&type=template&id=10bc506c&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/claims/NewStatus.vue?vue&type=template&id=10bc506c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStatus_vue_vue_type_template_id_10bc506c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewStatus.vue?vue&type=template&id=10bc506c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/NewStatus.vue?vue&type=template&id=10bc506c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStatus_vue_vue_type_template_id_10bc506c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStatus_vue_vue_type_template_id_10bc506c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Tags.vue":
/*!*********************************************!*\
  !*** ./resources/assets/js/claims/Tags.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tags_vue_vue_type_template_id_6ccb6bcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags.vue?vue&type=template&id=6ccb6bcf& */ "./resources/assets/js/claims/Tags.vue?vue&type=template&id=6ccb6bcf&");
/* harmony import */ var _Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Tags.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tags_vue_vue_type_template_id_6ccb6bcf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tags_vue_vue_type_template_id_6ccb6bcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Tags.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Tags.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/claims/Tags.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tags.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Tags.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Tags.vue?vue&type=template&id=6ccb6bcf&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/claims/Tags.vue?vue&type=template&id=6ccb6bcf& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_6ccb6bcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tags.vue?vue&type=template&id=6ccb6bcf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Tags.vue?vue&type=template&id=6ccb6bcf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_6ccb6bcf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_6ccb6bcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/Timeline.vue":
/*!*************************************************!*\
  !*** ./resources/assets/js/claims/Timeline.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline_vue_vue_type_template_id_9ec08e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=9ec08e12& */ "./resources/assets/js/claims/Timeline.vue?vue&type=template&id=9ec08e12&");
/* harmony import */ var _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timeline_vue_vue_type_template_id_9ec08e12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Timeline_vue_vue_type_template_id_9ec08e12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/Timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/Timeline.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/claims/Timeline.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/Timeline.vue?vue&type=template&id=9ec08e12&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/claims/Timeline.vue?vue&type=template&id=9ec08e12& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_9ec08e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=template&id=9ec08e12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/Timeline.vue?vue&type=template&id=9ec08e12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_9ec08e12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_9ec08e12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/TitleHeader.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/claims/TitleHeader.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TitleHeader_vue_vue_type_template_id_4c2dcfbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleHeader.vue?vue&type=template&id=4c2dcfbf& */ "./resources/assets/js/claims/TitleHeader.vue?vue&type=template&id=4c2dcfbf&");
/* harmony import */ var _TitleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleHeader.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/TitleHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TitleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TitleHeader_vue_vue_type_template_id_4c2dcfbf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TitleHeader_vue_vue_type_template_id_4c2dcfbf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/TitleHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/TitleHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/claims/TitleHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TitleHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/TitleHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/TitleHeader.vue?vue&type=template&id=4c2dcfbf&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/claims/TitleHeader.vue?vue&type=template&id=4c2dcfbf& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleHeader_vue_vue_type_template_id_4c2dcfbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TitleHeader.vue?vue&type=template&id=4c2dcfbf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/TitleHeader.vue?vue&type=template&id=4c2dcfbf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleHeader_vue_vue_type_template_id_4c2dcfbf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleHeader_vue_vue_type_template_id_4c2dcfbf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/claimData.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/claims/claimData.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_statuses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/statuses.js */ "./resources/assets/js/claims/data/statuses.js");
/* harmony import */ var _data_newStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/newStatus.js */ "./resources/assets/js/claims/data/newStatus.js");
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
/* harmony import */ var _invoice_Invoice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice/Invoice.js */ "./resources/assets/js/claims/invoice/Invoice.js");
/* harmony import */ var _invoice_defaultLineItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/defaultLineItems.js */ "./resources/assets/js/claims/invoice/defaultLineItems.js");
/* harmony import */ var _invoice_lineItemTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice/lineItemTypes.js */ "./resources/assets/js/claims/invoice/lineItemTypes.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  active: false,
  locked: false,
  hasAlert: false,
  alert: {
    type: 'is-link',
    message: ''
  },
  claimId: '',
  claim: {},
  user: {},
  adjuster: {},
  reviewer: {},
  bounds: {},
  map: {},
  marker: {},
  home: {
    lat: 30.2702208,
    lng: -97.7453625
  },
  statusesList: _data_statuses_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  newStatus: _data_newStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  creatingNewStatus: false,
  newTag: {},
  creatingNewTag: false,
  newConfirmAlert: {},
  confirmingAlert: false,
  editingGrossLoss: false,
  creatingEstimate: false,
  date: '',
  time: '',
  estimate: {},
  defaultLineItems: _invoice_defaultLineItems_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  creatingInvoice: false,
  newInvoice: {},
  // invoiceForm: new Form(),
  lineItemTypes: _invoice_lineItemTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./resources/assets/js/claims/claimInfo.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/claims/claimInfo.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimInfo_vue_vue_type_template_id_3063ec38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimInfo.vue?vue&type=template&id=3063ec38& */ "./resources/assets/js/claims/claimInfo.vue?vue&type=template&id=3063ec38&");
/* harmony import */ var _claimInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimInfo.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/claimInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _claimInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _claimInfo_vue_vue_type_template_id_3063ec38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _claimInfo_vue_vue_type_template_id_3063ec38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/claimInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/claimInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/claims/claimInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./claimInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/claimInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/claimInfo.vue?vue&type=template&id=3063ec38&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/claims/claimInfo.vue?vue&type=template&id=3063ec38& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_claimInfo_vue_vue_type_template_id_3063ec38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./claimInfo.vue?vue&type=template&id=3063ec38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/claimInfo.vue?vue&type=template&id=3063ec38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_claimInfo_vue_vue_type_template_id_3063ec38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_claimInfo_vue_vue_type_template_id_3063ec38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/data/newStatus.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/claims/data/newStatus.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");

var status = new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  type: '',
  name: 'Select a status',
  value: '',
  date: '',
  claim_number: '',
  time: '',
  claim_id: '',
  user_id: ''
});
/* harmony default export */ __webpack_exports__["default"] = (status);

/***/ }),

/***/ "./resources/assets/js/claims/data/statuses.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/claims/data/statuses.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([// { name: 'In Assign Queue', value: '',  type: 'date', disabled: false },
{
  name: 'Select a status'
}, {
  name: 'Adjuster Assigned',
  value: '',
  type: 'assignment'
}, {
  name: 'Reviewer Assigned',
  value: '',
  type: 'assignment'
}, {
  name: 'Reassigned',
  value: '',
  type: 'reassignment'
}, {
  name: 'Contacted',
  value: '',
  type: 'date'
}, {
  name: 'Site Inspected',
  value: '',
  type: 'date'
}, {
  name: 'Estimate Received',
  value: '',
  type: 'value',
  disabled: false
}, {
  name: 'Correction Received',
  value: '',
  type: 'value'
}, {
  name: 'File Closed',
  value: '',
  type: 'date'
}, {
  name: 'File Reopened',
  value: '',
  type: 'date'
}]);

/***/ }),

/***/ "./resources/assets/js/claims/invoice/AmountLineItem.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/AmountLineItem.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AmountLineItem; });
/* harmony import */ var _LineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineItem */ "./resources/assets/js/claims/invoice/LineItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AmountLineItem =
/*#__PURE__*/
function (_LineItem) {
  _inherits(AmountLineItem, _LineItem);

  function AmountLineItem(data) {
    var _this;

    _classCallCheck(this, AmountLineItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmountLineItem).call(this, data));

    _this.calculate();

    return _this;
  }

  _createClass(AmountLineItem, [{
    key: "calculate",
    value: function calculate() {
      return this.total = parseFloat(this.amount).toFixed(2);
    }
  }]);

  return AmountLineItem;
}(_LineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/assets/js/claims/invoice/DifferenceInTiersLineItem.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/DifferenceInTiersLineItem.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DifferenceInTiersLineItem; });
/* harmony import */ var _ServiceFeeLineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceFeeLineItem */ "./resources/assets/js/claims/invoice/ServiceFeeLineItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DifferenceInTiersLineItem =
/*#__PURE__*/
function (_ServiceFeeLineItem) {
  _inherits(DifferenceInTiersLineItem, _ServiceFeeLineItem);

  function DifferenceInTiersLineItem(data) {
    var _this;

    _classCallCheck(this, DifferenceInTiersLineItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DifferenceInTiersLineItem).call(this, data));

    _this.calculate();

    return _this;
  }

  _createClass(DifferenceInTiersLineItem, [{
    key: "calculate",
    value: function calculate() {
      this.total = 0;
      return this.total = this.calculateDifference();
    }
  }, {
    key: "calculateDifference",
    value: function calculateDifference() {
      var diff = 0;
      var minuend = this.getFeeScheduleTier(this.amounts().amount);
      var subtrahend = this.getFeeScheduleTier(this.amounts().newAmount); // console.log(this.getFeeScheduleTier(this.amounts().amount) + ' - ' +  this.getFeeScheduleTier(this.amounts().newAmount))

      minuend !== 0 && subtrahend !== 0 ? diff = minuend - subtrahend : diff = 0;
      return diff < 0 ? Math.abs(diff).toFixed(2) : (-Math.abs(diff)).toFixed(2);
    }
  }, {
    key: "amounts",
    value: function amounts() {
      var amounts = {}; // if numeric, normalize an amount value as parseFloat will interpret
      // comas (,) as decimals causing issues during calculation
      // otherwise just return value becuase its not numeric

      this.isNumeric(this.amount) ? amounts.amount = parseFloat(String(this.amount).replace(/,/g, '')) : amounts.amount = this.amount;
      this.isNumeric(this.newAmount) ? amounts.newAmount = parseFloat(String(this.newAmount).replace(/,/g, '')) : amounts.newAmount = this.newAmount;
      return amounts;
    }
  }]);

  return DifferenceInTiersLineItem;
}(_ServiceFeeLineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/assets/js/claims/invoice/Invoice.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/claims/invoice/Invoice.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Invoice; });
/* harmony import */ var _ServiceFeeLineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceFeeLineItem */ "./resources/assets/js/claims/invoice/ServiceFeeLineItem.js");
/* harmony import */ var _QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuantifiableLineItem */ "./resources/assets/js/claims/invoice/QuantifiableLineItem.js");
/* harmony import */ var _AmountLineItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AmountLineItem */ "./resources/assets/js/claims/invoice/AmountLineItem.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // import Form from '../../structur/src/form/Form.js';

var Invoice =
/*#__PURE__*/
function () {
  function Invoice(data) {
    _classCallCheck(this, Invoice);

    this.lineItems = [];
    this.userId = window.user.id;
    this.subTotal = 0;
    this.tax = 0;
    this.total = 0;
    this.carrier = {};
    this.options = {
      mcm: false,
      cwop: false,
      show: true
    };
    this.feeSchedule = {};
  }
  /**
   * Method gathering data to save invoice.
   * @return {Object}.
   */


  _createClass(Invoice, [{
    key: "data",
    value: function data() {
      var data = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.getInvoiceProperties()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var property = _step.value;
          data[property] = this[property];
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

      return data;
    }
    /**
     * Calculates total from each {lineItem.total} + any applicable tax.
     * @return {float}.
     */

  }, {
    key: "calculate",
    value: function calculate() {
      var _this = this;

      this.subTotal = 0;
      this.total = 0;
      this.lineItems.forEach(function (lineItem) {
        _this.subTotal = parseFloat(_this.subTotal) + parseFloat(lineItem.total);
      });
      return this.total = (this.subTotal + this.tax).toFixed(2);
    }
    /**
     * Method for creating instance of {ServiceFeeLineItem}, and adding it to {this.lineItems}.
     * @param {grossLoss} found in /resources/assets/js/claims/claimData.js 
     * @return void.
     */

  }, {
    key: "createServiceFeeLineItem",
    value: function createServiceFeeLineItem(grossLoss) {
      grossLoss.feeSchedule = this.feeSchedule;
      this.addLineItem(new _ServiceFeeLineItem__WEBPACK_IMPORTED_MODULE_0__["default"](grossLoss));
    }
    /**
     * Method for creating instances of {QuantifiableLineItem} (adjuster expenses)
     * and adding them to {this.lineItems} for calculation.
     * @param Array [photos, mileage, reimbursable, hours] found in /resources/assets/js/claims/claimData.js 
     * @return void.
     */

  }, {
    key: "createAdjusterExpenseLineItems",
    value: function createAdjusterExpenseLineItems(expenses) {
      var _this2 = this;

      expenses.forEach(function (expense) {
        return expense.type === "AmountLineItem" ? _this2.addLineItem(new _AmountLineItem__WEBPACK_IMPORTED_MODULE_2__["default"](expense)) : _this2.addLineItem(new _QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_1__["default"](expense));
      });
    }
    /**
     * Method for adding a line item to this.lineItems[]
     * @param LineItem 
     * @return void.
     */

  }, {
    key: "addLineItem",
    value: function addLineItem(lineItem) {
      lineItem.id = this.generateId();
      this.lineItems.push(lineItem);
      return this.calculate();
    }
    /**
     * Method for removing a line item from this.lineItems[]
     * @param LineItem 
     * @return void.
     */

  }, {
    key: "removeLineItem",
    value: function removeLineItem(lineItem) {
      this.lineItems.splice(this.lineItems.indexOf(lineItem), 1);
      return this.calculate();
    }
  }, {
    key: "generateId",
    value: function generateId() {
      var ids = [];
      this.lineItems.forEach(function (item) {
        return ids.push(item.id);
      });
      return ids.length > 0 ? Math.max.apply(Math, ids) + 1 : 1;
    }
    /**
     * Method for recalculating all line items
     * example: when the fee schedule is changed,
     * all line items will need to be recalculated.
     * @param LineItem 
     * @return void.
     */

  }, {
    key: "recalculateLineItems",
    value: function recalculateLineItems() {
      var _this3 = this;

      this.lineItems.forEach(function (lineItem) {
        // this.setFeeSchedule()
        lineItem.feeSchedule = _this3.feeSchedule;
        lineItem.calculate();
      });
      return this.calculate();
    }
    /**
     * Method for determining hourly rate in feeSchedule
     * example: if multilple hourly rates set the lowest avail.
     * @return Int.
     */

  }, {
    key: "getHourlyRate",
    value: function getHourlyRate() {
      return this.hasMultipleHourlyRates() ? this.getSortedHourlyRate() : this.feeSchedule.hourly;
    }
  }, {
    key: "getSortedHourlyRate",
    value: function getSortedHourlyRate() {
      //sort with comparison function to order by hourly rate amount 
      //small to large
      this.feeSchedule.hourly.sort(function (a, b) {
        return a.amount - b.amount;
      }); //return the lowest (first) hourly rate avail after sorting.

      return this.feeSchedule.hourly[0].amount;
    }
  }, {
    key: "hasMultipleHourlyRates",
    value: function hasMultipleHourlyRates() {
      //check if our hourly prop is an array
      return Array.isArray(this.feeSchedule.hourly) ? true : false;
    }
    /**
     * Method for getting mileage rate from current feeSchedule.
     * @return String.
     */

  }, {
    key: "getMileageRate",
    value: function getMileageRate() {
      return this.feeSchedule.mileageRate;
    }
    /**
     * Method for getting photo rate from current feeSchedule.
     * @return String.
     */

  }, {
    key: "getPhotoRate",
    value: function getPhotoRate() {
      return this.feeSchedule.photoRate;
    }
    /**
     * Method for setting default feeSchedule.
     * @return Object.
     */
    // setFeeSchedule() {
    // 	console.log(this.feeSchedule)
    // 	return this.feeSchedule = this.carrier.fee_schedules[this.feeSchedule].data;
    // }

  }, {
    key: "getInvoiceProperties",
    value: function getInvoiceProperties() {
      return ['total', 'subTotal', 'feeSchedule', 'options', 'tax', 'lineItems', 'userId'];
    } // Getters & Setters...//

  }, {
    key: "subTotal",
    set: function set(data) {
      this._subTotal = data;
    },
    get: function get() {
      return this._subTotal;
    }
  }, {
    key: "total",
    set: function set(data) {
      this._total = data;
    },
    get: function get() {
      return this._total;
    }
  }, {
    key: "carrier",
    set: function set(data) {
      this._carrier = data;
    },
    get: function get() {
      return this._carrier;
    }
  }, {
    key: "feeSchedule",
    set: function set(data) {
      this._feeSchedule = data;
    },
    get: function get() {
      return this._feeSchedule;
    }
  }, {
    key: "show",
    set: function set(data) {
      this._show = data;
    },
    get: function get() {
      return this._show;
    }
  }]);

  return Invoice;
}();



/***/ }),

/***/ "./resources/assets/js/claims/invoice/Invoice.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/claims/invoice/Invoice.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoice_vue_vue_type_template_id_5790f305___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=5790f305& */ "./resources/assets/js/claims/invoice/Invoice.vue?vue&type=template&id=5790f305&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/invoice/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoice_vue_vue_type_template_id_5790f305___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Invoice_vue_vue_type_template_id_5790f305___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/invoice/Invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/invoice/Invoice.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/Invoice.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/Invoice.vue?vue&type=template&id=5790f305&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/Invoice.vue?vue&type=template&id=5790f305& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_5790f305___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=template&id=5790f305& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoice.vue?vue&type=template&id=5790f305&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_5790f305___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_5790f305___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/invoice/InvoiceOptions.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/InvoiceOptions.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceOptions_vue_vue_type_template_id_00643d09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceOptions.vue?vue&type=template&id=00643d09& */ "./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=template&id=00643d09&");
/* harmony import */ var _InvoiceOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceOptions.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvoiceOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoiceOptions.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InvoiceOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceOptions_vue_vue_type_template_id_00643d09___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceOptions_vue_vue_type_template_id_00643d09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/invoice/InvoiceOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceOptions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=template&id=00643d09&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=template&id=00643d09& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_template_id_00643d09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceOptions.vue?vue&type=template&id=00643d09& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/InvoiceOptions.vue?vue&type=template&id=00643d09&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_template_id_00643d09___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOptions_vue_vue_type_template_id_00643d09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/invoice/Invoices.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/claims/invoice/Invoices.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoices_vue_vue_type_template_id_c38de284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoices.vue?vue&type=template&id=c38de284& */ "./resources/assets/js/claims/invoice/Invoices.vue?vue&type=template&id=c38de284&");
/* harmony import */ var _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoices.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/invoice/Invoices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoices_vue_vue_type_template_id_c38de284___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Invoices_vue_vue_type_template_id_c38de284___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/invoice/Invoices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/invoice/Invoices.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/Invoices.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/Invoices.vue?vue&type=template&id=c38de284&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/Invoices.vue?vue&type=template&id=c38de284& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_c38de284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=template&id=c38de284& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/Invoices.vue?vue&type=template&id=c38de284&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_c38de284___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_c38de284___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/invoice/LineItem.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/claims/invoice/LineItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineItem; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LineItem =
/*#__PURE__*/
function () {
  function LineItem(data) {
    _classCallCheck(this, LineItem);

    // this.originalData = data
    for (var field in data) {
      this[field] = data[field];
    }
  }

  _createClass(LineItem, [{
    key: "has",
    value: function has(property) {
      return this.hasOwnProperty(property) ? true : false;
    }
  }, {
    key: "feeSchedule",
    set: function set(data) {
      return this._feeSchedule = data;
    },
    get: function get() {
      return this._feeSchedule;
    }
  }]);

  return LineItem;
}();



/***/ }),

/***/ "./resources/assets/js/claims/invoice/LineItem.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/claims/invoice/LineItem.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineItem_vue_vue_type_template_id_32a32f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineItem.vue?vue&type=template&id=32a32f02& */ "./resources/assets/js/claims/invoice/LineItem.vue?vue&type=template&id=32a32f02&");
/* harmony import */ var _LineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineItem.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/invoice/LineItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LineItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineItem.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LineItem_vue_vue_type_template_id_32a32f02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LineItem_vue_vue_type_template_id_32a32f02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/invoice/LineItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/invoice/LineItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/LineItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineItem.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/LineItem.vue?vue&type=template&id=32a32f02&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/LineItem.vue?vue&type=template&id=32a32f02& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_template_id_32a32f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineItem.vue?vue&type=template&id=32a32f02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/LineItem.vue?vue&type=template&id=32a32f02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_template_id_32a32f02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineItem_vue_vue_type_template_id_32a32f02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/invoice/NewInvoice.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/claims/invoice/NewInvoice.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewInvoice_vue_vue_type_template_id_065b5dc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewInvoice.vue?vue&type=template&id=065b5dc5& */ "./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=template&id=065b5dc5&");
/* harmony import */ var _NewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewInvoice.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewInvoice_vue_vue_type_template_id_065b5dc5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewInvoice_vue_vue_type_template_id_065b5dc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/invoice/NewInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=template&id=065b5dc5&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=template&id=065b5dc5& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewInvoice_vue_vue_type_template_id_065b5dc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewInvoice.vue?vue&type=template&id=065b5dc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/NewInvoice.vue?vue&type=template&id=065b5dc5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewInvoice_vue_vue_type_template_id_065b5dc5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewInvoice_vue_vue_type_template_id_065b5dc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/invoice/QuantifiableLineItem.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/QuantifiableLineItem.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuantifiableLineItem; });
/* harmony import */ var _LineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineItem */ "./resources/assets/js/claims/invoice/LineItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var QuantifiableLineItem =
/*#__PURE__*/
function (_LineItem) {
  _inherits(QuantifiableLineItem, _LineItem);

  function QuantifiableLineItem(data) {
    var _this;

    _classCallCheck(this, QuantifiableLineItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuantifiableLineItem).call(this, data));

    _this.calculate();

    return _this;
  }

  _createClass(QuantifiableLineItem, [{
    key: "calculate",
    value: function calculate() {
      // console.log( parseFloat(this.rate) + ' * ' + parseFloat(this.billableQuantity) + ' = ' + (parseFloat(this.rate) * parseFloat(this.billableQuantity)))
      return this.total = (parseFloat(this.rate) * parseFloat(this.getBillableQuantity())).toFixed(2);
    }
  }, {
    key: "getBillableQuantity",
    value: function getBillableQuantity() {
      if (Number.isNaN(parseFloat(this.quantity))) {
        this.quantity = 0;
        return 0;
      } else if (this.hasMoreThanMinimum()) {
        return parseFloat(this.quantity) - parseFloat(this.minimum);
      } else if (this.hasLessThanMinimum()) {
        return 0;
      } else {
        return parseFloat(this.quantity);
      }
    }
  }, {
    key: "hasMoreThanMinimum",
    value: function hasMoreThanMinimum() {
      return this.has('minimum') && this.quantity > this.minimum ? true : false;
    }
  }, {
    key: "hasLessThanMinimum",
    value: function hasLessThanMinimum() {
      return this.has('minimum') && this.quantity <= this.minimum ? true : false;
    }
  }]);

  return QuantifiableLineItem;
}(_LineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/assets/js/claims/invoice/QuickInvoice.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/QuickInvoice.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickInvoice_vue_vue_type_template_id_5a050f58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickInvoice.vue?vue&type=template&id=5a050f58& */ "./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=template&id=5a050f58&");
/* harmony import */ var _QuickInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickInvoice.vue?vue&type=script&lang=js& */ "./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuickInvoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickInvoice.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuickInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickInvoice_vue_vue_type_template_id_5a050f58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickInvoice_vue_vue_type_template_id_5a050f58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/claims/invoice/QuickInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickInvoice.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=template&id=5a050f58&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=template&id=5a050f58& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_template_id_5a050f58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickInvoice.vue?vue&type=template&id=5a050f58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/claims/invoice/QuickInvoice.vue?vue&type=template&id=5a050f58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_template_id_5a050f58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickInvoice_vue_vue_type_template_id_5a050f58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/claims/invoice/ServiceFeeLineItem.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/ServiceFeeLineItem.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceFeeLineItem; });
/* harmony import */ var _LineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineItem */ "./resources/assets/js/claims/invoice/LineItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ServiceFeeLineItem =
/*#__PURE__*/
function (_LineItem) {
  _inherits(ServiceFeeLineItem, _LineItem);

  function ServiceFeeLineItem(data) {
    var _this;

    _classCallCheck(this, ServiceFeeLineItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ServiceFeeLineItem).call(this, data));

    _this.calculate();

    return _this;
  }

  _createClass(ServiceFeeLineItem, [{
    key: "calculate",
    value: function calculate() {
      //reset the total each time so the total isn't ammended each time called..
      this.total = 0;
      return this.total = this.getFeeScheduleTier(this.amount);
    }
  }, {
    key: "getFeeScheduleTier",
    value: function getFeeScheduleTier(amount) {
      // Numeric or Non Numeric (1,234.34 or "erroneous" respectively)
      // console.log(`${amount} has numeric amount ${this.isNumeric(amount)}`)
      return this.isNumeric(amount) ? this.getNumericTier(amount) : this.getNonNumericTier(amount);
    }
  }, {
    key: "calculateNumericTier",
    value: function calculateNumericTier() {
      return this.getNumericTier(amount);
    }
  }, {
    key: "getNumericTier",
    value: function getNumericTier(amount) {
      //normalize an amount value as parseFloat will interpret
      //comas (,) as decimals causing issues during calculation.
      amount = parseFloat(String(amount).replace(/,/g, '')); // loop through tiers to calulate service fee.

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.getNumericTiers()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tier = _step.value;

          if (tier >= amount) {
            return amount > 0 ? parseFloat(+this.feeSchedule[tier]).toFixed(2) : 0 .toFixed(2); // if the amount is greater than the highest tier, 
            // service fee is 0.00 -- bill @ T&E rate
          } else if (this.highestTier() < amount) {
            return 0 .toFixed(2);
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
    }
  }, {
    key: "getNonNumericTier",
    value: function getNonNumericTier(amount) {
      // return values for non numeric tiers 
      // if feeSchedule has key [amount] return its value
      // otherwise just return 0
      return this.feeSchedule[amount] ? parseFloat(+this.feeSchedule[amount]).toFixed(2) : 0 .toFixed(2);
    }
  }, {
    key: "getNumericTiers",
    value: function getNumericTiers() {
      var _this2 = this;

      var tiers = Object.keys(this.feeSchedule);
      tiers = tiers.filter(function (tier) {
        return _this2.isNumeric(tier);
      });
      return tiers.map(function (tier) {
        return parseFloat(tier);
      });
    }
  }, {
    key: "highestTier",
    value: function highestTier() {
      return Math.max.apply(Math, _toConsumableArray(this.getNumericTiers()));
    }
  }, {
    key: "isNumeric",
    value: function isNumeric(amount) {
      //check for non numeric tiers ("erroneous, cwop")
      return Number.isNaN(parseFloat(amount)) ? false : true;
    }
  }]);

  return ServiceFeeLineItem;
}(_LineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/assets/js/claims/invoice/defaultLineItems.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/defaultLineItems.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  grossLoss: {
    type: 'ServiceFeeLineItem',
    description: 'Service Fee',
    amount: 0,
    total: 0,
    taxable: true,
    fullyReimbursable: false,
    feeSchedule: {},
    id: 1
  },
  photos: {
    type: 'QuantifiableLineItem',
    description: 'Claim Photos',
    quantity: 0,
    rate: 0,
    minimum: 0,
    taxable: false,
    fullyReimbursable: false,
    total: 0
  },
  hours: {
    type: 'QuantifiableLineItem',
    description: 'Time & Expense Hours',
    quantity: 0,
    rate: 0,
    total: 0,
    taxable: false,
    fullyReimbursable: false
  },
  mileage: {
    type: 'QuantifiableLineItem',
    description: 'Mileage',
    quantity: 0,
    rate: 0,
    minimum: 0,
    total: 0,
    taxable: false,
    fullyReimbursable: true
  },
  reimbursable: {
    type: 'AmountLineItem',
    description: 'Reimbursable Expenses',
    amount: 0,
    total: 0,
    taxable: false,
    fullyReimbursable: true
  }
});

/***/ }),

/***/ "./resources/assets/js/claims/invoice/lineItemTypes.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/lineItemTypes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'Service Fee',
  type: 'ServiceFeeLineItem',
  description: 'Service Fee',
  amount: 0,
  total: 0,
  taxable: true,
  fullyReimbursable: false,
  feeSchedule: {}
}, {
  name: 'Quantity',
  type: 'QuantifiableLineItem',
  quantity: 1,
  rate: 0,
  description: 'Description Here'
}, {
  name: 'Amount',
  type: 'AmountLineItem',
  amount: 0,
  description: 'Description Here'
}, {
  name: 'Difference In Tiers',
  type: 'DifferenceInTiersLineItem',
  amount: 0,
  newAmount: 0,
  description: 'Difference In Tiers',
  taxable: true,
  fullyReimbursable: false
}, //{name: 'Less Previous Invoice', type: 'AmountLineItem', amount: 0, description: 'Less Previous Invoice Total'},
{
  name: 'MCM',
  type: 'AmountLineItem',
  description: 'Managed Claim Model Fee',
  amount: 0,
  total: 0,
  taxable: true,
  fullyReimbursable: false
}]);

/***/ }),

/***/ "./resources/assets/js/structur/src/form/Errors.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/structur/src/form/Errors.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
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



/***/ }),

/***/ "./resources/assets/js/structur/src/form/Form.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/structur/src/form/Form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors.js */ "./resources/assets/js/structur/src/form/Errors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Form =
/*#__PURE__*/
function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;

    for (var field in data) {
      this[field] = data[field];
    }

    this.errors = new _Errors_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  /**
     * set data for form to post.
     */


  _createClass(Form, [{
    key: "data",
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
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = '';
      }

      this.errors.clear();
    }
  }, {
    key: "get",
    value: function get(field) {
      return this.errors[field][0];
    }
    /**
        * send a post request to a given url.
        */

  }, {
    key: "post",
    value: function post(url) {
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this.submit('post', url, reset);
    }
    /**
        * send a put request to a given url.
        */

  }, {
    key: "put",
    value: function put(url) {
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this.submit('put', url, reset);
    }
    /**
        * send a patch request to a given url.
        */

  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }
    /**
        * send a put request to a given url.
        */

  }, {
    key: "delete",
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
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;

      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess(response.data, reset);

          resolve(response.data);
        })["catch"](function (error) {
          console.error(error);

          _this.onFail(error.response.data.errors); // return window.axios.post('/api/admin/client-error', error);


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
    key: "onSuccess",
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
    key: "onFail",
    value: function onFail(errors) {
      this.errors.record(errors);
    }
  }]);

  return Form;
}();



/***/ }),

/***/ 13:
/*!***************************************************!*\
  !*** multi ./resources/assets/js/claims/Claim.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandon/code/ccg/api/resources/assets/js/claims/Claim.js */"./resources/assets/js/claims/Claim.js");


/***/ })

},[[13,"/js/manifest","/js/vendor"]]]);