(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/claim"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Alert.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/Alert.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue */ "./resources/assets/js/Modal.vue");
/* harmony import */ var _claims_claimData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claims/claimData.js */ "./resources/assets/js/claims/claimData.js");
//
//
//
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
    modal: _Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return _claims_claimData_js__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Assignees',
  mounted: function mounted() {//console.log(this.user);
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  computed: {}
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
/* harmony import */ var _TitleHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleHeader.vue */ "./resources/assets/js/claims/TitleHeader.vue");
/* harmony import */ var _ClaimMenu_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClaimMenu.vue */ "./resources/assets/js/claims/ClaimMenu.vue");
/* harmony import */ var _ClaimNavigation_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClaimNavigation.vue */ "./resources/assets/js/claims/ClaimNavigation.vue");
/* harmony import */ var _Map_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Map.vue */ "./resources/assets/js/claims/Map.vue");
/* harmony import */ var _ClaimStats_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClaimStats.vue */ "./resources/assets/js/claims/ClaimStats.vue");
/* harmony import */ var _Tags_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tags.vue */ "./resources/assets/js/claims/Tags.vue");
/* harmony import */ var _Contacts_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contacts.vue */ "./resources/assets/js/claims/Contacts.vue");
/* harmony import */ var _Description_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Description.vue */ "./resources/assets/js/claims/Description.vue");
/* harmony import */ var _claimInfo_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./claimInfo.vue */ "./resources/assets/js/claims/claimInfo.vue");
/* harmony import */ var _Assignees_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Assignees.vue */ "./resources/assets/js/claims/Assignees.vue");
/* harmony import */ var _Timeline_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Timeline.vue */ "./resources/assets/js/claims/Timeline.vue");
/* harmony import */ var _NewStatus_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NewStatus.vue */ "./resources/assets/js/claims/NewStatus.vue");
/* harmony import */ var _Alert_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Alert.vue */ "./resources/assets/js/Alert.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    titleHeader: _TitleHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    claimMenu: _ClaimMenu_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    claimNav: _ClaimNavigation_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    claimMap: _Map_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    claimStats: _ClaimStats_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    tags: _Tags_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    contacts: _Contacts_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    description: _Description_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    claimInfo: _claimInfo_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    assignees: _Assignees_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    timeline: _Timeline_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    newStatus: _NewStatus_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    alert: _Alert_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  created: function created() {
    this.claim = claim;
    this.claim.claim_data = JSON.parse(this.claim.claim_data);
    this.user = user; // this.adjuster = this.claim.assignments.find(assignment => assignment.type = 'adjuster');
    // this.reviewer = this.claim.assignments.find(assignment => assignment.type = 'reviewer');

    this.hasAlert = true;
    this.alert.message = 'You have been assigned to this claim please confirm or reject this assignment';
  },
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GrossLoss',
  data: function data() {
    return _claimData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
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
    }); //    this.autocomplete = new google.maps.places.Autocomplete(
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
      this.newStatus.time = today.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}\S)/g, '').trim();
    } // toggleNewStatus() {
    // 	// this.getTodaysDate();
    // 	return this.creatingNewStatus = !this.creatingNewStatus;
    // },

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Alert.vue?vue&type=template&id=4bd50f0c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/Alert.vue?vue&type=template&id=4bd50f0c& ***!
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
      class: { "is-active": _vm.show, "is-solid": _vm.solid }
    },
    [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-content" }, [
        _c("section", {}, [_vm._t("default")], 2)
      ])
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
      staticStyle: { "text-align": "center" }
    },
    [
      _c("div", { staticClass: "column is-half assignment" }, [
        _c(
          "a",
          {
            on: {
              mouseup: function($event) {
                _vm.$emit("status-set", _vm.statusesList[1])
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
              : _c(
                  "span",
                  {
                    staticClass: "icon is-standard",
                    staticStyle: { padding: "3em" }
                  },
                  [_c("i", { staticClass: "fa fa-9x fa-user-circle-o" })]
                )
          ]
        ),
        _vm._v(" "),
        _c("h3", { staticStyle: { color: "#aaa", overflow: "hidden" } }, [
          _vm._v(_vm._s(_vm.adjuster.name || "Not Assigned"))
        ]),
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
                  _c("i", { staticClass: "fa fa-9x fa-user-circle-o" })
                ])
          ]
        ),
        _vm._v(" "),
        _c("h3", { staticStyle: { color: "#aaa", overflow: "hidden" } }, [
          _vm._v(_vm._s(_vm.reviewer.name || "Not Assigned"))
        ]),
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
    { staticClass: "columns" },
    [
      _c(
        "div",
        { staticClass: "column is-9", attrs: { id: "left-side" } },
        [
          _c("title-header"),
          _vm._v(" "),
          _c("claim-menu", {
            on: {
              "status-set": _vm.setStatus,
              "new-status-toggle": _vm.toggleCreatingNewStatus
            }
          }),
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
        [
          _c("assignees", {
            on: {
              "status-set": _vm.setStatus,
              "new-status-toggle": _vm.toggleCreatingNewStatus
            }
          }),
          _vm._v(" "),
          _c("timeline")
        ],
        1
      ),
      _vm._v(" "),
      _c("new-status", {
        on: {
          "new-status-toggle": function($event) {
            return _vm.toggleCreatingNewStatus()
          }
        }
      })
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
                  _vm._m(8),
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
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
            _c("h3", { staticClass: "subtitle stat-title" }, [
              _c("a", { attrs: { href: "" } }, [
                _c("span", { staticClass: "icon" }, [
                  _c("i", { staticClass: "fa fa-retweet" })
                ]),
                _vm._v(" Issue Correction")
              ])
            ])
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
            _c("h3", { staticClass: "subtitle stat-title" }, [
              _c("a", { attrs: { href: "" } }, [
                _c("span", { staticClass: "icon" }, [
                  _c("i", { staticClass: "fa fa-retweet" })
                ]),
                _vm._v(" Issue Correction")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-half-mobile" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content claim-stat" }, [
            _c("h3", { staticClass: "subtitle stat-title" }, [
              _vm._v("Time Open")
            ]),
            _vm._v(" "),
            _c("h1", { staticClass: "title stat has-text-grey" }, [
              _vm._v("--")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-half-mobile" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content claim-stat" }, [
            _c("h3", { staticClass: "subtitle stat-title" }, [
              _vm._v("Time To Contact")
            ]),
            _vm._v(" "),
            _c("h1", { staticClass: "title stat has-text-grey" }, [
              _vm._v("--")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-half-mobile" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content claim-stat" }, [
            _c("h3", { staticClass: "subtitle stat-title" }, [
              _vm._v("Time To Inspection")
            ]),
            _vm._v(" "),
            _c("h1", { staticClass: "title stat has-text-grey" }, [
              _vm._v("--")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-half-mobile" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content claim-stat" }, [
            _c("h3", { staticClass: "subtitle stat-title" }, [
              _vm._v("Time to Estimate")
            ]),
            _vm._v(" "),
            _c("h1", { staticClass: "title stat has-text-grey" }, [
              _vm._v("--")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "subtitle stat-title" }, [_vm._v("Days")])
          ])
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
        _c("button", {
          staticClass: "modal-close is-large",
          attrs: { "aria-label": "close" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.$emit("new-status-toggle")
            }
          }
        }),
        _vm._v(" "),
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
          { staticClass: "field", staticStyle: { "margin-top": "1em" } },
          [
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
              status.user
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
                        domProps: {
                          textContent: _vm._s(
                            status.user.name +
                              " (" +
                              status.user.roles[0].label +
                              ")"
                          )
                        }
                      })
                    : _c("span", {
                        domProps: { textContent: _vm._s("System") }
                      })
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
            _vm._v(_vm._s(_vm.claim.carrier.label) + " ")
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

/***/ "./resources/assets/js/Alert.vue":
/*!***************************************!*\
  !*** ./resources/assets/js/Alert.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_4bd50f0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=4bd50f0c& */ "./resources/assets/js/Alert.vue?vue&type=template&id=4bd50f0c&");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js& */ "./resources/assets/js/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_4bd50f0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_4bd50f0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/Alert.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/assets/js/Alert.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/Alert.vue?vue&type=template&id=4bd50f0c&":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/Alert.vue?vue&type=template&id=4bd50f0c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_4bd50f0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=4bd50f0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/Alert.vue?vue&type=template&id=4bd50f0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_4bd50f0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_4bd50f0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _Claim_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Claim.vue */ "./resources/assets/js/claims/Claim.vue");


var vue = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#claim',
  components: {
    claim: _Claim_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

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
  confirmingAlert: false
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

var Errors = /*#__PURE__*/function () {
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



var Form = /*#__PURE__*/function () {
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

/***/ 12:
/*!***************************************************!*\
  !*** multi ./resources/assets/js/claims/Claim.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandon/code/ccg/api/resources/assets/js/claims/Claim.js */"./resources/assets/js/claims/Claim.js");


/***/ })

},[[12,"/js/manifest","/js/vendor"]]]);