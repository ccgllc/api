(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Expiration.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Expiration.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_appData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/appData.js */ "./resources/assets/js/data/appData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Expiration',
  props: ['certification'],
  mounted: function mounted() {
    var today = new Date();
    this.currentYear = today.getFullYear(); // console.log(certification);
  },
  data: function data() {
    return {
      appData: _data_appData_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      year: '',
      month: '',
      currentYear: ''
    };
  },
  computed: {
    valid: function valid() {
      return this.month != '' && this.year != '' ? true : false;
    },
    formatted: function formatted() {
      return {
        name: this.certification.name,
        month: this.month,
        year: this.year.toString()
      };
    }
  },
  methods: {
    updateDate: function updateDate() {
      if (this.valid) return this.$emit('date-changed', this.formatted);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Certifications.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Certifications.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
/* harmony import */ var _components_Expiration_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Expiration.vue */ "./resources/assets/js/components/Expiration.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Certifications',
  components: {
    expiration: _components_Expiration_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.certifications = window.userData.certifications;
    this.softwareExperiences = window.userData.software_experiences;
    this.userId = window.userData.id;
  },
  data: function data() {
    return {
      type: '',
      form: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        type: {}
      }),
      userId: '',
      creatingNew: false,
      certifications: [],
      softwareExperiences: [],
      certificationTypes: [{
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
      }],
      experienceTypes: [{
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
      }]
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/user/' + this.userId + '/' + this.type).then(function (response) {
        console.log(response);
        _this.type == 'certifications' ? _this.certifications.push(response) : _this.softwareExperiences.push(response);
        return _this.creatingNew = false;
      }).catch(function (error) {
        console.error(error);
        return window.axios.post('/api/admin/client-error', error);
      });
    },
    remove: function remove(obj, uri) {
      var _this2 = this;

      window.axios.delete('/api/user/' + uri + '/' + obj.id).then(function (response) {
        console.log(response);

        if (uri == 'software-experiences') {
          var index = _this2.softwareExperiences.indexOf(obj);

          return _this2.softwareExperiences.splice(index, 1);
        } else {
          var _index = _this2.certifications.indexOf(obj);

          return _this2.certifications.splice(_index, 1);
        }
      }).catch(function (error) {
        console.error(error);
      });
    },
    updateExpiration: function updateExpiration(cert) {
      console.log(cert); // let certifications = this.form.type.filter(c => c.name == cert.name);
      // let idx = this.certifications.indexOf(certifications[0]);
      // if (this.certificationIsSelected(cert))

      return this.form.type.expiration = cert.month + '/' + cert.year; // let match = this.certs.certifications.filter(certification => certification == cert.name);
    },
    clearForm: function clearForm() {
      return this.form.type = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Documents.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Documents.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_FormWithFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structur/src/form/FormWithFiles */ "./resources/assets/js/structur/src/form/FormWithFiles.js");
/* harmony import */ var _components_File_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/File.vue */ "./resources/assets/js/profile/components/File.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Documents',
  components: {
    file: _components_File_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.userId = window.userData.id;
    this.name = window.userData.name;
    this.documents = window.userData.documents;
  },
  data: function data() {
    return {
      name: '',
      userId: '',
      toggleDelete: false,
      documents: [],
      types: ['resume'],
      filename: '',
      creatingNewFile: false,
      newFile: new _structur_src_form_FormWithFiles__WEBPACK_IMPORTED_MODULE_0__["default"]({
        type: '',
        filename: '',
        file: {}
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.newFile.post('/api/user/' + this.userId + '/documents/').then(function (response) {
        console.log(response);

        _this.documents.push(response);

        _this.creatingNewFile = false;
      }).catch(function (error) {
        console.error(error);
      });
    },
    remove: function remove(file) {
      console.log('deleting');
      var index = this.documents.indexOf(file);
      return this.documents.splice(index, 1);
    },
    processFile: function processFile(files) {
      if (files.length > 0) {
        this.filename = files[0].name;
        this.newFile.file = files[0];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Licenses.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Licenses.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_license_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/license.vue */ "./resources/assets/js/profile/components/license.vue");
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
/* harmony import */ var _data_states_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/states.js */ "./resources/assets/js/data/states.js");
/* harmony import */ var _data_months_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/months.js */ "./resources/assets/js/data/months.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Licenses',
  components: {
    license: _components_license_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.adjusterLicenses = window.userData.adjuster_licenses;
    this.userId = window.userData.id;
    var today = new Date();
    this.currentYear = today.getFullYear();
  },
  computed: {
    buttonText: function buttonText() {
      return this.creatingNewLicense ? 'cancel' : 'Add License';
    }
  },
  data: function data() {
    return {
      creatingNewLicense: false,
      adjusterLicenses: [],
      userId: '',
      newLicense: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        license_number: '',
        license_state: '',
        expiration_month: '',
        expiration_year: ''
      }),
      currentYear: '',
      states: _data_states_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      months: _data_months_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.newLicense.post('/api/user/' + this.userId + '/license/').then(function (response) {
        console.log(response);

        _this.adjusterLicenses.push(response);

        return _this.creatingNewLicense = false;
      }).catch(function (error) {
        console.error(error);
        return window.axios.post('/api/admin/client-error', error);
      });
    },
    remove: function remove(license) {
      var _this2 = this;

      if (confirm('Are you sure? This action cannot be undone..')) {
        window.axios.delete('/api/user/' + this.userId + '/license/' + license.id).then(function (response) {
          console.log(response);

          var index = _this2.adjusterLicenses.indexOf(license);

          return _this2.adjusterLicenses.splice(index, 1);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/PersonalInformation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/PersonalInformation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_XactnetAddress_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/XactnetAddress.vue */ "./resources/assets/js/profile/components/XactnetAddress.vue");
/* harmony import */ var _components_PhoneNumber_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PhoneNumber.vue */ "./resources/assets/js/profile/components/PhoneNumber.vue");
/* harmony import */ var _components_EmailAddress_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EmailAddress.vue */ "./resources/assets/js/profile/components/EmailAddress.vue");
/* harmony import */ var _components_Address_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Address.vue */ "./resources/assets/js/profile/components/Address.vue");
//
//
//
//
//
//
//
//
//
//



 // import EditableText from './EditableText.vue';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PersonalInformation',
  components: {
    xactnetAddress: _components_XactnetAddress_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    phoneNumber: _components_PhoneNumber_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    emailAddress: _components_EmailAddress_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    mailingAddress: _components_Address_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {//
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/ProfileNavigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/ProfileNavigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProfileNavigation',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/WorkHistory.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/WorkHistory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'WorkHistory',
  mounted: function mounted() {
    // console.log(window.userData.work_history);
    this.workHistory = this.setup(window.userData.work_history);
  },
  data: function data() {
    return {
      workHistory: {},
      showForm: false,
      editing: false,
      years: 0,
      months: 0,
      newWorkHistory: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        type: '',
        value: 0
      }),
      types: ['desk_experience', 'residential_experience', 'residential_claims', 'residential_cat_experience', 'residential_cat_claims', 'commercial_experience', 'commercial_claims', 'commercial_cat_experience', 'commercial_cat_claims', 'large_loss_experience', 'large_loss_claims', 'large_loss_cat_experience', 'large_loss_cat_claims', 'auto_experience', 'auto_claims', 'inland_marine_experience', 'inland_marine_claims', 'casualty_experience', 'casualty_claims', 'environmental_experience', 'environmental_claims', 'flood_experience', 'flood_claims', 'earthquake_experience', 'earthquake_claims']
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      // console.error('newError');
      var endpoint = '/api/user/' + window.userData.id + '/work-history';
      this.newWorkHistory.post(endpoint, false).then(function (response) {
        console.log(response);

        var type = _this.newWorkHistory.type.replace(/(_)/g, " ");

        if (_this.newWorkHistory.type.includes('experience')) {
          var value = _this.newWorkHistory.value;
          _this.workHistory[type] = _this.getYears(value) + ' years ' + _this.getMonths(value) + "  months";
        } else {
          _this.workHistory[type] = _this.newWorkHistory.value;
        }

        return _this.cancel();
      }).catch(function (error) {
        console.error(error);
        return window.axios.post('/api/admin/client-error', error);
      });
    },
    setup: function setup(data) {
      var workHistory = {};

      for (var prop in data) {
        var newProp = prop.replace(/(_)/g, " ");
        workHistory[newProp] = data[prop];

        if (newProp == 'id' || newProp == 'created at' || newProp == 'updated at' || newProp == 'user id') {
          delete workHistory[newProp];
        }

        if (newProp.includes('experience') && workHistory[newProp] != 0) {
          var value = workHistory[newProp];
          workHistory[newProp] = this.getYears(value) + ' years ' + this.getMonths(value) + "  months";
        }
      }

      return workHistory;
    },
    getMonths: function getMonths(value) {
      return +Math.floor(+value % 12);
    },
    getYears: function getYears(value) {
      return +Math.floor(+value / 12);
    },
    calculateMonths: function calculateMonths() {
      if (this.years < 0) {
        this.years = 0;
      }

      if (this.months > 11) {
        return this.months = 11;
      }

      ;
      return this.newWorkHistory.value = +(this.years * 12 + +this.months);
    },
    edit: function edit(value, key) {
      this.editing = true;
      this.showForm = true;

      if (key.includes('experience')) {
        var v = value.match(/([0-9])+(?!=\s){1,2}/g);
        var sum = v.reduce(function (a, b) {
          return parseInt(a) * 12 + parseInt(b);
        });
        this.months = this.getMonths(+sum);
        this.years = this.getYears(+sum);
        this.newWorkHistory.value = this.years + this.months;
      } else {
        this.newWorkHistory.value = value;
      }

      return this.newWorkHistory.type = key.replace(/(\s)/g, "_");
    },
    cancel: function cancel() {
      this.newWorkHistory.type = '';
      this.newWorkHistory.value = 0;
      this.months = 0;
      this.years = 0;
      this.editing = false;
      this.newWorkHistory.errors.any() ? this.newWorkHistory.errors.clear() : null;
      return this.showForm = !this.showForm;
    }
  },
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    format: function format(key) {
      return key.replace(/(_)/g, " ");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/Address.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/Address.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Address',
  mounted: function mounted() {
    // this.input = document.getElementById('street-input');
    this.location.street = window.userData.profile.street;
    this.location.city = window.userData.profile.city;
    this.location.state = window.userData.profile.state;
    this.location.zip = window.userData.profile.zip; // this.location.api_token = window.userData.api_token;

    this.userId = window.userData.id;
    this.location.place_id = window.userData.place_id;
    this.location.lat = window.userData.lat;
    this.location.lng = window.userData.lng;
    this.location.formatted_address = window.userData.formatted_address; // console.log(window.google);

    this.geocoder = new window.google.maps.Geocoder();
    this.autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('location'), {
      types: ['geocode']
    });
    this.autocomplete.addListener('place_changed', this.setAddressFields);
  },
  data: function data() {
    return {
      editing: false,
      showEdit: false,
      copyText: 'copy',
      geocoder: {},
      input: {},
      currentValue: '',
      userId: '',
      location: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        street: '',
        city: '',
        state: '',
        zip: '',
        place_id: '',
        lat: '',
        lng: '',
        formatted_address: ''
      }),
      autocomplete: {},
      componentForm: {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      }
    };
  },
  computed: {
    submitable: function submitable() {
      return this.location.street === "" || this.location.city === '' || this.location.state === '' || this.location.zip === '' ? false : true;
    }
  },
  methods: {
    // submit newly edited 
    submit: function submit() {
      var _this = this;

      if (this.submitable) {
        this.location.put('/api/user/' + this.userId + '/address', false).then(function (response) {
          console.log(response);
          _this.location.street = response['street'];
          _this.location.city = response['city'];
          _this.location.state = response['state'];
          _this.location.zip = response['zip'];
          _this.location.place_id = response['place_id'];
          _this.location.lat = response['lat'];
          _this.location.lng = response['lng'];
          _this.location.formatted_address = response['formatted_address']; // this.location.api_token = window.userData.api_token;
        }).catch(function (error) {
          console.log(error);
          return window.axios.post('/api/admin/client-error', error);
        });
      } else {
        this.edit = false;
        this.location.street = window.userData.profile.street;
        this.location.city = window.userData.profile.city;
        this.location.state = window.userData.profile.state;
        this.location.zip = window.userData.profile.zip;
      }
    },
    close: function close() {
      console.log('close');
    },
    toggleEditing: function toggleEditing() {
      this.editing = !this.editing;
      return this.editing === false ? this.submit() : null; // this.input.focus();
    },
    setAddressFields: function setAddressFields() {
      var place = this.autocomplete.getPlace();
      console.log(place);

      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];

        if (this.componentForm[addressType]) {
          switch (addressType) {
            case 'street_number':
              this.location.street = place.address_components[i][this.componentForm[addressType]];
              break;

            case 'route':
              this.location.street += ' ' + place.address_components[i][this.componentForm[addressType]];
              break;

            case 'locality':
              this.location.city = place.address_components[i][this.componentForm[addressType]];
              break;

            case 'administrative_area_level_1':
              this.location.state = place.address_components[i][this.componentForm[addressType]];
              break;

            case 'postal_code':
              this.location.zip = place.address_components[i][this.componentForm[addressType]];
          }
        }
      }

      this.location.lat = place.geometry.location.lat();
      this.location.lng = place.geometry.location.lng();
      this.location.formatted_address = place.formatted_address;
      this.location.place_id = place.place_id;
      this.submit(); // this.toggleEditing();
    },
    copyToClipboard: function copyToClipboard() {
      this.createEmptyTextArea();
      var successful = document.execCommand('copy');
      return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
    },
    createEmptyTextArea: function createEmptyTextArea() {
      var textArea = document.createElement("textarea");
      textArea.style.position = 'fixed';
      textArea.style.top = -1000;
      textArea.style.left = -1000;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = this.location.street + " " + this.location.city + " " + this.location.state + ", " + this.location.zip;
      document.body.appendChild(textArea);
      textArea.select();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EmailAddress.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/EmailAddress.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EmailAddress',
  mounted: function mounted() {
    this.input = document.getElementById('phone-input');
    this.form.email = window.userData.email;
    this.userId = window.userData.id;
  },
  data: function data() {
    return {
      editing: false,
      showEdit: false,
      copyText: 'copy',
      input: {},
      userId: '',
      currentValue: '',
      form: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        email: ''
      })
    };
  },
  computed: {
    submitable: function submitable() {
      return this.form.email === '' ? false : true;
    }
  },
  methods: {
    // submit newly edited 
    submit: function submit() {
      var _this = this;

      if (this.submitable) {
        this.form.put('/api/user/' + this.userId + '/email', false).then(function (response) {
          console.log(response);
          _this.form.email = response; // this.emailAddress.api_token = window.userData.api_token;
        }).catch(function (error) {
          console.error(error);
          return window.axios.post('/api/admin/client-error', error);
        });
      } else {
        this.edit = false;
        return this.form.email = window.userData.profile.email;
      }
    },
    close: function close() {
      console.log('close');
    },
    toggleEditing: function toggleEditing() {
      this.editing = !this.editing;
      this.input.focus();
    },
    copyToClipboard: function copyToClipboard() {
      this.createEmptyTextArea();
      var successful = document.execCommand('copy');
      return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
    },
    createEmptyTextArea: function createEmptyTextArea() {
      var textArea = document.createElement("textarea");
      textArea.style.position = 'fixed';
      textArea.style.top = -1000;
      textArea.style.left = -1000;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = this.form.email;
      document.body.appendChild(textArea);
      textArea.select();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/File.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/File.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'File',
  props: ['userId', 'file'],
  data: function data() {
    return {
      showDelete: false
    };
  },
  methods: {
    remove: function remove(file) {
      var _this = this;

      if (confirm("Are you sure? This cannot be undone.")) {
        window.axios.delete('/api/user/documents/' + file.id).then(function (response) {
          console.log(response);

          _this.$emit('file-deleted', file);
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PhoneNumber',
  mounted: function mounted() {
    this.input = document.getElementById('phone-input');
    this.form.phone = window.userData.profile.phone;
    this.userId = window.userData.id;
  },
  data: function data() {
    return {
      editing: false,
      showEdit: false,
      copyText: 'copy',
      input: {},
      currentValue: '',
      userId: '',
      form: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        phone: ''
      })
    };
  },
  computed: {
    submitable: function submitable() {
      return this.form.phone === '' ? false : true;
    }
  },
  methods: {
    // submit newly edited 
    submit: function submit() {
      var _this = this;

      if (this.submitable) {
        this.form.put('/api/user/' + this.userId + '/phone', false).then(function (response) {
          console.log(response);
          _this.form.phone = response; // this.phoneNumber.api_token = window.userData.api_token;
        }).catch(function (error) {
          console.error(error);
          return window.axios.post('/api/admin/client-error', error);
        });
      } else {
        this.edit = false;
        return this.form.phone = window.userData.profile.phone;
      }
    },
    toggleEditing: function toggleEditing() {
      this.editing = !this.editing;
      this.input.focus();
    },
    copyToClipboard: function copyToClipboard() {
      this.createEmptyTextArea();
      var successful = document.execCommand('copy');
      return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
    },
    createEmptyTextArea: function createEmptyTextArea() {
      var textArea = document.createElement("textarea");
      textArea.style.position = 'fixed';
      textArea.style.top = -1000;
      textArea.style.left = -1000;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = this.form.phone;
      document.body.appendChild(textArea);
      textArea.select();
    }
  },
  filters: {
    phoneNumber: function phoneNumber(value) {
      if (!value) return '';
      value = value.toString(); // return value.charAt(0).toUpperCase() + value.slice(1)

      return value.replace(/\b(\d{3})([-.\s]?)+(\d{3})([-.\s]?)+(\d{4})\b/g, '($1) $3-$5');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'XactnetAddress',
  mounted: function mounted() {
    //find our input field
    this.input = document.getElementById('xactnet-address-input');
    this.form.xactnet_address = window.userData.profile.xactnet_address;
    this.userId = window.userData.id;
  },
  data: function data() {
    return {
      userId: '',
      form: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        xactnet_address: ''
      }),
      editing: false,
      showEdit: false,
      copyText: 'copy',
      input: {}
    };
  },
  computed: {
    submitable: function submitable() {
      return this.form.xactnet_address === '' ? false : true;
    }
  },
  methods: {
    // submit newly edited 
    submit: function submit() {
      var _this = this;

      if (this.submitable) {
        this.form.put('/api/user/' + this.userId + '/xactnet_address', false).then(function (response) {
          console.log(response);
          _this.form.xactnet_address = response;
        }).catch(function (error) {
          console.log(error);
          return window.axios.post('/api/admin/client-error', error);
        });
      } else {
        this.edit = false;
        return this.xactnet_address.value = window.userData.profile.xactnet_address;
      }
    },
    toggleEditing: function toggleEditing() {
      this.editing = !this.editing;
      this.input.focus();
    },
    copyToClipboard: function copyToClipboard() {
      this.createEmptyTextArea();
      var successful = document.execCommand('copy');
      return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
    },
    createEmptyTextArea: function createEmptyTextArea() {
      var textArea = document.createElement("textarea");
      textArea.style.position = 'fixed';
      textArea.style.top = -1000;
      textArea.style.left = -1000;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = this.xactnet_address.value;
      document.body.appendChild(textArea);
      textArea.select();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/license.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/license.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'License',
  mounted: function mounted() {}
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Expiration.vue?vue&type=template&id=9950aeb4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Expiration.vue?vue&type=template&id=9950aeb4& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { width: "100%", "padding-bottom": "10%" } },
    [
      _c(
        "div",
        {
          staticStyle: {
            width: "100%",
            "margin-top": "5%",
            "margin-bottom": "5%"
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "columns is-mobile" }, [
        _c("div", { staticClass: "column is-4" }, [
          _c("div", { staticClass: "field" }, [
            _c("div", { staticClass: "select is-small" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.month,
                      expression: "month"
                    }
                  ],
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
                        _vm.month = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.updateDate
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [_vm._v("mo.")]),
                  _vm._v(" "),
                  _vm._l(_vm.appData.months, function(month) {
                    return _c("option", { domProps: { value: month.abbr } }, [
                      _vm._v(_vm._s(month.abbr))
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              !_vm.month
                ? _c("span", { staticClass: "help is-danger" }, [
                    _vm._v("required")
                  ])
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column is-6" }, [
          _c("div", { staticClass: "field" }, [
            _c("div", { staticClass: "select is-small" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.year,
                      expression: "year"
                    }
                  ],
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
                        _vm.year = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.updateDate
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [_vm._v("yr.")]),
                  _vm._v(" "),
                  _vm._l(10, function(n) {
                    return _c(
                      "option",
                      { domProps: { value: _vm.currentYear + n - 1 } },
                      [_vm._v(_vm._s(_vm.currentYear + n - 1))]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              !_vm.year
                ? _c("span", { staticClass: "help is-danger" }, [
                    _vm._v("required")
                  ])
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _c("br")
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Certifications.vue?vue&type=template&id=6520dd1e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Certifications.vue?vue&type=template&id=6520dd1e& ***!
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
  return _c("div", { attrs: { id: "certifications" } }, [
    _c("h1", { staticClass: "profile-title" }, [_vm._v("My Certifications")]),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns is-multiline", attrs: { id: "certifications" } },
      _vm._l(_vm.certifications, function(cert) {
        return _c("div", { staticClass: "certification column is-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _vm._m(0, true),
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(cert.type) + " "),
                cert.expiration
                  ? _c(
                      "small",
                      {
                        staticStyle: {
                          "font-weight": "700",
                          "font-size": ".75em"
                        }
                      },
                      [_vm._v(" (exp " + _vm._s(cert.expiration) + ")")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "is-pulled-right is-tooltip-danger tooltip is-tooltip-left",
                    attrs: { "data-tooltip": "Delete " + cert.type }
                  },
                  [
                    _c("a", {
                      staticClass: "delete is-small is-danger",
                      on: {
                        click: function($event) {
                          return _vm.remove(cert, "certifications")
                        }
                      }
                    })
                  ]
                )
              ])
            ])
          ])
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("h1", { staticClass: "profile-title" }, [_vm._v("Software Experience")]),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns is-multiline", attrs: { id: "certifications" } },
      _vm._l(_vm.softwareExperiences, function(exp) {
        return _c("div", { staticClass: "certification column is-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _vm._m(1, true),
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(exp.type) + "\n\t\t\t\t\t\t"),
                _c(
                  "span",
                  {
                    staticClass:
                      "is-pulled-right is-tooltip-danger tooltip is-tooltip-left",
                    attrs: { "data-tooltip": "Delete " + exp.type }
                  },
                  [
                    _c("a", {
                      staticClass: "delete is-small is-danger",
                      on: {
                        click: function($event) {
                          return _vm.remove(exp, "software-experiences")
                        }
                      }
                    })
                  ]
                )
              ])
            ])
          ])
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("br"),
    _c(
      "button",
      {
        staticClass: "button is-info",
        on: {
          click: function($event) {
            _vm.creatingNew = !_vm.creatingNew
          }
        }
      },
      [_vm._v("Add new")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal", class: { "is-active": _vm.creatingNew } },
      [
        _c("div", { staticClass: "modal-background" }),
        _vm._v(" "),
        _c("div", { staticClass: "modal-card" }, [
          _c("header", { staticClass: "modal-card-head" }, [
            _c("p", { staticClass: "modal-card-title" }, [
              _vm._v("New certification or software experience")
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "delete",
              attrs: { "aria-label": "close" },
              on: {
                click: function($event) {
                  _vm.creatingNew = false
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "section",
            {
              staticClass: "modal-card-body",
              staticStyle: { background: "#fff" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    },
                    keydown: function($event) {
                      return _vm.form.errors.clear($event.target.name)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "columns is-multiline" }, [
                    _c("div", { staticClass: "column is-12" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Type:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select is-fullwidth" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.type,
                                  expression: "type"
                                }
                              ],
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.type = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  _vm.clearForm
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "software-experiences" } },
                                [_vm._v("Software Experience")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "certifications" } },
                                [_vm._v("Certification")]
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.type == "software-experiences"
                      ? _c("div", { staticClass: "column is-12" }, [
                          _c("div", { staticClass: "field" }, [
                            _c("label", { staticClass: "label" }, [
                              _vm._v("Software Experience:")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "select is-fullwidth" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.type,
                                      expression: "form.type"
                                    }
                                  ],
                                  on: {
                                    change: function($event) {
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
                                        _vm.form,
                                        "type",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("Select")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.experienceTypes, function(exp) {
                                    return _c(
                                      "option",
                                      { domProps: { value: exp.name } },
                                      [_vm._v(_vm._s(exp.label))]
                                    )
                                  })
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _vm.form.errors.has("type")
                              ? _c("span", {
                                  staticClass: "help is-danger",
                                  domProps: {
                                    textContent: _vm._s(
                                      _vm.form.errors.get("type")
                                    )
                                  }
                                })
                              : _vm._e()
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.type == "certifications"
                      ? _c("div", { staticClass: "column is-12" }, [
                          _c(
                            "div",
                            { staticClass: "field" },
                            [
                              _c("label", { staticClass: "label" }, [
                                _vm._v("Certification:")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "select is-fullwidth" },
                                [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.type,
                                          expression: "form.type"
                                        }
                                      ],
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "type",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v("Select")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.certificationTypes, function(
                                        cert
                                      ) {
                                        return _c(
                                          "option",
                                          { domProps: { value: cert } },
                                          [_vm._v(_vm._s(cert.label))]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "expiration",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        _vm.form.type &&
                                        _vm.form.type.expiration !== false,
                                      expression:
                                        "form.type && form.type.expiration !== false"
                                    }
                                  ],
                                  attrs: { certification: _vm.form.type },
                                  on: { "date-changed": _vm.updateExpiration }
                                },
                                [
                                  _c("small", [
                                    _vm._v(
                                      "Provide date of " +
                                        _vm._s(_vm.form.type.name) +
                                        " expiration "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm.form.errors.has("type.name")
                                ? _c("span", {
                                    staticClass: "help is-danger",
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.form.errors.get("type.name")
                                      )
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("footer", { staticClass: "modal-card-foot" }, [
            _c(
              "button",
              {
                staticClass: "button is-primary",
                attrs: { disabled: !_vm.form.type },
                on: { click: _vm.submit }
              },
              [_vm._v("Save")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.creatingNew = false
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info" }, [
      _c("i", { staticClass: "fa fa-certificate" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info" }, [
      _c("i", { staticClass: "fa fa-laptop" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Documents.vue?vue&type=template&id=26052620&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Documents.vue?vue&type=template&id=26052620& ***!
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
  return _c(
    "div",
    { attrs: { id: "documents" } },
    [
      _c("h1", { staticClass: "profile-title" }, [_vm._v("My Documents")]),
      _c("br"),
      _vm._v(" "),
      _vm._l(_vm.documents, function(doc) {
        return _c("file", {
          key: doc.id,
          attrs: { "user-id": _vm.userId, file: doc },
          on: { "file-deleted": _vm.remove }
        })
      }),
      _vm._v(" "),
      _c("br"),
      _c(
        "button",
        {
          staticClass: "button is-info",
          on: {
            click: function($event) {
              _vm.creatingNewFile = !_vm.creatingNewFile
            }
          }
        },
        [_vm._v("Upload File")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal", class: { "is-active": _vm.creatingNewFile } },
        [
          _c("div", { staticClass: "modal-background" }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-card" }, [
            _c("header", { staticClass: "modal-card-head" }, [
              _c("p", { staticClass: "modal-card-title" }, [
                _vm._v("Add a new file")
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "delete",
                attrs: { "aria-label": "close" },
                on: {
                  click: function($event) {
                    _vm.creatingNewFile = false
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass: "modal-card-body",
                staticStyle: { background: "#fff" }
              },
              [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit($event)
                      },
                      keydown: function($event) {
                        return _vm.newFile.errors.clear($event.target.name)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "columns is-multiline" }, [
                      _c("div", { staticClass: "column is-3" }, [
                        _c("div", { staticClass: "field" }, [
                          _c("label", { staticClass: "label" }, [
                            _vm._v("Type:")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "select is-fullwidth" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newFile.type,
                                    expression: "newFile.type"
                                  }
                                ],
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.newFile,
                                      "type",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("select")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.types, function(type) {
                                  return _c(
                                    "option",
                                    { domProps: { value: type } },
                                    [_vm._v(_vm._s(type))]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _vm.newFile.errors.has("type")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.newFile.errors.get("type")
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "column is-9" }, [
                        _c("div", { staticClass: "field" }, [
                          _c("label", { staticClass: "label" }, [
                            _vm._v("Filename:")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newFile.filename,
                                expression: "newFile.filename"
                              }
                            ],
                            staticClass: "input",
                            attrs: { type: "text", placeholder: "My File" },
                            domProps: { value: _vm.newFile.filename },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newFile,
                                  "filename",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.newFile.errors.has("filename")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.newFile.errors.get("filename")
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "column" }, [
                        _c("div", { staticClass: "field" }, [
                          _c(
                            "div",
                            { staticClass: "file has-name is-primary" },
                            [
                              _c("label", { staticClass: "file-label" }, [
                                _c("input", {
                                  staticClass: "file-input",
                                  attrs: { type: "file", name: "resume" },
                                  on: {
                                    change: function($event) {
                                      return _vm.processFile(
                                        $event.target.files
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm._m(0),
                                _vm._v(" "),
                                _vm.filename != ""
                                  ? _c("span", {
                                      staticClass: "file-name",
                                      domProps: {
                                        textContent: _vm._s(_vm.filename)
                                      }
                                    })
                                  : _vm._e()
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("footer", { staticClass: "modal-card-foot" }, [
              _c(
                "button",
                { staticClass: "button is-primary", on: { click: _vm.submit } },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button",
                  on: {
                    click: function($event) {
                      _vm.creatingNewFile = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ])
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "file-cta" }, [
      _c("span", { staticClass: "file-icon" }, [
        _c("i", { staticClass: "fa fa-cloud-upload" })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "file-label" }, [
        _vm._v("\n\t\t\t\t\t\t\t        Upload a file…\n\t\t\t\t\t\t\t      ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Licenses.vue?vue&type=template&id=3cf0736c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Licenses.vue?vue&type=template&id=3cf0736c& ***!
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
  return _c("div", { attrs: { id: "Licenses" } }, [
    _c(
      "div",
      { staticClass: "columns is-multiline" },
      _vm._l(_vm.adjusterLicenses, function(license) {
        return _c("div", { key: license.id, staticClass: "column is-half" }, [
          _c("div", { staticClass: "card" }, [
            _c("header", { staticClass: "card-header" }, [
              _c("p", { staticClass: "card-header-title" }, [
                _vm._v(
                  "\n\t\t     " +
                    _vm._s(license.license_state) +
                    " Adjusting License\n\t\t    "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "card-header-icon is-danger",
                  attrs: { "aria-label": "Delete" },
                  on: {
                    click: function($event) {
                      return _vm.remove(license)
                    }
                  }
                },
                [_vm._m(0, true)]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _c("div", { staticClass: "columns" }, [
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-3" }, [
                    _c("p", [_vm._v(_vm._s(license.license_number))])
                  ]),
                  _vm._v(" "),
                  _vm._m(2, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-3" }, [
                    _c("p", [
                      _vm._v(
                        _vm._s(license.expiration_month) +
                          " / " +
                          _vm._s(license.expiration_year)
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "button is-info",
        on: {
          click: function($event) {
            _vm.creatingNewLicense = !_vm.creatingNewLicense
          }
        }
      },
      [_vm._v(_vm._s(_vm.buttonText))]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal", class: { "is-active": _vm.creatingNewLicense } },
      [
        _c("div", { staticClass: "modal-background" }),
        _vm._v(" "),
        _c("div", { staticClass: "modal-card" }, [
          _c("header", { staticClass: "modal-card-head" }, [
            _c("p", { staticClass: "modal-card-title" }, [
              _vm._v("Add a new Adjuster License")
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "delete",
              attrs: { "aria-label": "close" },
              on: {
                click: function($event) {
                  _vm.creatingNewLicense = false
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "section",
            {
              staticClass: "modal-card-body",
              staticStyle: { background: "#fff" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    },
                    keydown: function($event) {
                      return _vm.newLicense.errors.clear($event.target.name)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column is-2" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("State:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.license_state,
                                  expression: "newLicense.license_state"
                                }
                              ],
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.newLicense,
                                    "license_state",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }),
                              _vm._v(" "),
                              _vm._l(_vm.states, function(state) {
                                return _c(
                                  "option",
                                  { domProps: { value: state.abbr } },
                                  [_vm._v(_vm._s(state.abbr))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm.newLicense.errors.has("license_state")
                          ? _c("span", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.newLicense.errors.get("license_state")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-4" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("License #:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "control control has-icons-left" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.license_number,
                                  expression: "newLicense.license_number"
                                }
                              ],
                              staticClass: "input",
                              attrs: { type: "text" },
                              domProps: {
                                value: _vm.newLicense.license_number
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newLicense,
                                    "license_number",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _vm.newLicense.errors.has("license_number")
                              ? _c("span", {
                                  staticClass: "help is-danger",
                                  domProps: {
                                    textContent: _vm._s(
                                      _vm.newLicense.errors.get(
                                        "license_number"
                                      )
                                    )
                                  }
                                })
                              : _vm._e()
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-2" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Exp. Mo:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.expiration_month,
                                  expression: "newLicense.expiration_month"
                                }
                              ],
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.newLicense,
                                    "expiration_month",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("mo.")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.months, function(month) {
                                return _c(
                                  "option",
                                  { domProps: { value: month.abbr } },
                                  [_vm._v(_vm._s(month.abbr))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.newLicense.errors.has("expiration_month")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.newLicense.errors.get(
                                      "expiration_month"
                                    )
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-4" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Exp. Year:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.expiration_year,
                                  expression: "newLicense.expiration_year"
                                }
                              ],
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.newLicense,
                                    "expiration_year",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("yr.")
                              ]),
                              _vm._v(" "),
                              _vm._l(10, function(n) {
                                return _c(
                                  "option",
                                  {
                                    domProps: { value: _vm.currentYear + n - 1 }
                                  },
                                  [_vm._v(_vm._s(_vm.currentYear + n - 1))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.newLicense.errors.has("expiration_year")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.newLicense.errors.get("expiration_year")
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("footer", { staticClass: "modal-card-foot" }, [
            _c(
              "button",
              { staticClass: "button is-primary", on: { click: _vm.submit } },
              [_vm._v("Save")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.creatingNewLicense = false
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-close", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("p", [_c("strong", [_vm._v("License #")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("p", [_c("strong", [_vm._v("Expiration")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-hashtag" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/PersonalInformation.vue?vue&type=template&id=188f7704&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/PersonalInformation.vue?vue&type=template&id=188f7704& ***!
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
    { attrs: { id: "personal-information" } },
    [
      _c("h1", { staticClass: "profile-title" }, [
        _vm._v("Personal Information")
      ]),
      _vm._v(" "),
      _c("xactnet-address"),
      _vm._v(" "),
      _c("phone-number"),
      _vm._v(" "),
      _c("email-address"),
      _vm._v(" "),
      _c("mailing-address")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/ProfileNavigation.vue?vue&type=template&id=557f9f56&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/ProfileNavigation.vue?vue&type=template&id=557f9f56& ***!
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
  return _c("div", { staticClass: "tabs" }, [
    _c(
      "ul",
      [
        _c(
          "router-link",
          { attrs: { to: { name: "home" }, tag: "li", exact: "" } },
          [
            _c("a", [
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", { staticClass: "fa fa-user-circle-o" })
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("Personal Info")])
            ])
          ]
        ),
        _vm._v(" "),
        _c("router-link", { attrs: { to: { name: "licenses" }, tag: "li" } }, [
          _c("a", [
            _c("span", { staticClass: "icon is-small" }, [
              _c("i", { staticClass: "fa fa-address-card-o" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Licenses")])
          ])
        ]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: { name: "documents" }, tag: "li" } }, [
          _c("a", [
            _c("span", { staticClass: "icon is-small" }, [
              _c("i", { staticClass: "fa fa-file-text-o" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Documents")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: { name: "certifications" }, tag: "li" } },
          [
            _c("a", [
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", { staticClass: "fa fa-certificate" })
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("Certifications")])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: { name: "workHistory" }, tag: "li" } },
          [
            _c("a", [
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", { staticClass: "fa fa-briefcase" })
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("Work History")])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/WorkHistory.vue?vue&type=template&id=6576760a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/WorkHistory.vue?vue&type=template&id=6576760a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "workHistory" } }, [
    _c("h1", { staticClass: "profile-title" }, [_vm._v("My Work History")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns is-multiline" },
      _vm._l(_vm.workHistory, function(value, key) {
        return value != 0
          ? _c("div", { staticClass: "column is-3" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "header",
                  {
                    staticClass: "card-header",
                    class: {
                      "is-dark": key.includes("claims"),
                      "is-info": key.includes("experience")
                    }
                  },
                  [
                    _c(
                      "p",
                      { staticClass: "card-header-title is-pulled-left" },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm._f("capitalize")(key)) +
                            "\n\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "card-header-icon",
                        attrs: { "aria-label": "more options" }
                      },
                      [
                        _c("span", { staticClass: "icon" }, [
                          _c("i", {
                            staticClass: "fa fa-edit",
                            staticStyle: { color: "#fff" },
                            attrs: { "aria-hidden": "true" },
                            on: {
                              click: function($event) {
                                return _vm.edit(value, key)
                              }
                            }
                          })
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c("div", { staticClass: "content" }, [
                    _c("p", [_vm._v(_vm._s(value))])
                  ])
                ])
              ])
            ])
          : _vm._e()
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "button is-info",
        on: {
          click: function($event) {
            _vm.showForm = !_vm.showForm
          }
        }
      },
      [_vm._v("Add Work History")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal", class: { "is-active": _vm.showForm } }, [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-card" }, [
        _c("header", { staticClass: "modal-card-head" }, [
          _c("p", { staticClass: "modal-card-title" }, [
            _vm._v("Add Work History")
          ]),
          _vm._v(" "),
          _c("button", {
            staticClass: "delete",
            attrs: { "aria-label": "close" },
            on: { mouseup: _vm.cancel }
          })
        ]),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass: "modal-card-body",
            staticStyle: { background: "#fff" }
          },
          [
            _c(
              "div",
              {
                staticClass: "columns",
                on: {
                  keydown: function($event) {
                    return _vm.newWorkHistory.errors.clear($event.target.name)
                  }
                }
              },
              [
                _c("div", { staticClass: "column is-6" }, [
                  _c(
                    "label",
                    { staticClass: "label", attrs: { for: "types" } },
                    [_vm._v("Type:")]
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
                            value: _vm.newWorkHistory.type,
                            expression: "newWorkHistory.type"
                          }
                        ],
                        attrs: {
                          name: "types",
                          id: "types",
                          disabled: this.editing
                        },
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
                              _vm.newWorkHistory,
                              "type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.types, function(type) {
                          return _c("option", { domProps: { value: type } }, [
                            _vm._v(
                              _vm._s(
                                _vm._f("capitalize")(_vm._f("format")(type))
                              )
                            )
                          ])
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.newWorkHistory.errors.has("type")
                      ? _c("span", {
                          staticClass: "help is-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.newWorkHistory.errors.get("type")
                            )
                          }
                        })
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column is-6" }, [
                  _vm.newWorkHistory.type.includes("claims")
                    ? _c("div", { staticClass: "field" }, [
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "value" } },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("capitalize")(
                                  _vm._f("format")(_vm.newWorkHistory.type)
                                )
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newWorkHistory.value,
                              expression: "newWorkHistory.value"
                            }
                          ],
                          staticClass: "input",
                          attrs: {
                            type: "number",
                            maxlength: "6",
                            min: "0",
                            max: "65535",
                            placeholder: "0",
                            number: ""
                          },
                          domProps: { value: _vm.newWorkHistory.value },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.newWorkHistory,
                                "value",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.newWorkHistory.errors.has("value")
                          ? _c("span", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.newWorkHistory.errors.get("value")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.newWorkHistory.type.includes("experience")
                    ? _c("div", { staticClass: "field" }, [
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "value" } },
                          [_vm._v("Years")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.years,
                              expression: "years"
                            }
                          ],
                          staticClass: "input",
                          attrs: {
                            type: "number",
                            maxlength: "2",
                            min: "0",
                            max: "99",
                            placeholder: "0",
                            number: ""
                          },
                          domProps: { value: _vm.years },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.years = $event.target.value
                              },
                              _vm.calculateMonths
                            ]
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.newWorkHistory.type.includes("experience")
                    ? _c("div", { staticClass: "field" }, [
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "value" } },
                          [_vm._v("Months")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.months,
                              expression: "months"
                            }
                          ],
                          staticClass: "input",
                          attrs: {
                            type: "number",
                            maxlength: "2",
                            min: "0",
                            max: "11",
                            placeholder: "0",
                            number: ""
                          },
                          domProps: { value: _vm.months },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.months = $event.target.value
                              },
                              _vm.calculateMonths
                            ]
                          }
                        })
                      ])
                    : _vm._e()
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("footer", { staticClass: "modal-card-foot" }, [
          _c("div", { staticClass: "field is-grouped" }, [
            _c("div", { staticClass: "control" }, [
              _c(
                "button",
                {
                  staticClass: "button is-success",
                  attrs: { disabled: !_vm.newWorkHistory.type },
                  on: { mouseup: _vm.save }
                },
                [_vm._v("Submit")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "control" }, [
              _c(
                "button",
                { staticClass: "button is-text", on: { mouseup: _vm.cancel } },
                [_vm._v("Cancel")]
              )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/Address.vue?vue&type=template&id=962ea19a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/Address.vue?vue&type=template&id=962ea19a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              },
              keydown: function($event) {
                return _vm.location.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("span", { staticClass: "icon is-small is-left" }, [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.close }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: {
                      type: "text",
                      id: "location",
                      autocomplete: "off"
                    },
                    on: {
                      keyup: function($event) {
                        if (
                          "keyCode" in $event &&
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
                        return _vm.toggleEditing($event)
                      }
                    }
                  })
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    return _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v("\n\t\t\t" + _vm._s(_vm.location.street) + " "),
                _c("br"),
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.location.city) +
                    " " +
                    _vm._s(_vm.location.state) +
                    ", " +
                    _vm._s(_vm.location.zip) +
                    "\n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Address")]), _vm._v(":")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EmailAddress.vue?vue&type=template&id=01b68d09&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/EmailAddress.vue?vue&type=template&id=01b68d09& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("span", { staticClass: "icon is-small is-left" }, [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.close }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "email-input", type: "text" },
                    domProps: { value: _vm.form.email },
                    on: {
                      keyup: function($event) {
                        if (
                          "keyCode" in $event &&
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
                        return _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.form.errors.has("email")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("email"))
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    return _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v(
                  "\n\t\t\t" + _vm._s(_vm.form.email) + "\n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Email")]), _vm._v(":")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/File.vue?vue&type=template&id=89b52e66&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/File.vue?vue&type=template&id=89b52e66& ***!
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
  return _c("div", [
    _c(
      "p",
      {
        staticStyle: {
          "text-transform": "uppercase",
          color: "#8f8f8f",
          "font-size": ".75rem"
        }
      },
      [_c("small", [_vm._v(_vm._s(_vm.file.type))])]
    ),
    _vm._v(" "),
    _c(
      "p",
      {
        on: {
          mouseover: function($event) {
            _vm.showDelete = true
          },
          mouseleave: function($event) {
            _vm.showDelete = false
          }
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: {
              href: "/users/" + _vm.userId + "/documents/" + _vm.file.id
            }
          },
          [_vm._v(_vm._s(_vm.file.name))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showDelete,
                expression: "showDelete"
              }
            ]
          },
          [
            _c("span", {
              staticClass: "delete is-small",
              staticStyle: { "margin-top": "5px" },
              on: {
                click: function($event) {
                  return _vm.remove(_vm.file)
                }
              }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-file-o" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=template&id=80638ed4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=template&id=80638ed4& ***!
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
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.phone,
                        expression: "form.phone"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "phone-input", type: "text" },
                    domProps: { value: _vm.form.phone },
                    on: {
                      keyup: function($event) {
                        if (
                          "keyCode" in $event &&
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
                        return _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "phone", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.form.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    return _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm._f("phoneNumber")(_vm.form.phone)) +
                    "\n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Phone Number")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "icon is-small is-left",
        staticStyle: { cursor: "pointer" }
      },
      [_c("i", { staticClass: "fa fa-times" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=template&id=f930cc7c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=template&id=f930cc7c& ***!
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
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.xactnet_address,
                        expression: "form.xactnet_address"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "xactnet-address-input", type: "text" },
                    domProps: { value: _vm.form.xactnet_address },
                    on: {
                      keyup: function($event) {
                        if (
                          "keyCode" in $event &&
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
                        return _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "xactnet_address",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.form.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing && _vm.form.xactnet_address === null
          ? _c(
              "span",
              {
                staticClass: "button is-text",
                staticStyle: { cursor: "pointer" },
                on: { click: _vm.toggleEditing }
              },
              [_vm._v("add")]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    return _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.form.xactnet_address) +
                    " \n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Xactnet Address")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "icon is-small is-left",
        staticStyle: { cursor: "pointer" }
      },
      [_c("i", { staticClass: "fa fa-times" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/license.vue?vue&type=template&id=7d610120&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/license.vue?vue&type=template&id=7d610120& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/assets/js/components/Expiration.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/Expiration.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expiration_vue_vue_type_template_id_9950aeb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expiration.vue?vue&type=template&id=9950aeb4& */ "./resources/assets/js/components/Expiration.vue?vue&type=template&id=9950aeb4&");
/* harmony import */ var _Expiration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expiration.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Expiration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expiration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expiration_vue_vue_type_template_id_9950aeb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Expiration_vue_vue_type_template_id_9950aeb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Expiration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Expiration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/Expiration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expiration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Expiration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Expiration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expiration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Expiration.vue?vue&type=template&id=9950aeb4&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/Expiration.vue?vue&type=template&id=9950aeb4& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expiration_vue_vue_type_template_id_9950aeb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Expiration.vue?vue&type=template&id=9950aeb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Expiration.vue?vue&type=template&id=9950aeb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expiration_vue_vue_type_template_id_9950aeb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expiration_vue_vue_type_template_id_9950aeb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/data/appData.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/data/appData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
/* harmony import */ var _structur_src_form_FormWithFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structur/src/form/FormWithFiles */ "./resources/assets/js/structur/src/form/FormWithFiles.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states */ "./resources/assets/js/data/states.js");
/* harmony import */ var _months__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./months */ "./resources/assets/js/data/months.js");
/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience */ "./resources/assets/js/data/experience.js");

 // import personalData from './personalInfo';
// import workHistoryData from './workHistory';




/* harmony default export */ __webpack_exports__["default"] = ({
  text: {
    title: "",
    subtitle: ""
  },
  personalInfo: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    lat: 0,
    lng: 0,
    place_id: '',
    formatted_address: '',
    license_state: '',
    license_number: '',
    expiration_month: '',
    expiration_year: '',
    xactnet_address: ''
  }),
  workHistory: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
    desk_experience: 0,
    residential_experience: 0,
    residential_claims: 0,
    residential_cat_experience: 0,
    residential_cat_claims: 0,
    commercial_experience: 0,
    commercial_claims: 0,
    commercial_cat_experience: 0,
    commercial_cat_claims: 0,
    large_loss_experience: 0,
    large_loss_claims: 0,
    large_loss_cat_experience: 0,
    large_loss_cat_claims: 0,
    auto_experience: 0,
    auto_claims: 0,
    inland_marine_experience: 0,
    inland_marine_claims: 0,
    casualty_experience: 0,
    casualty_claims: 0,
    environmental_experience: 0,
    environmental_claims: 0,
    flood_experience: 0,
    flood_claims: 0,
    earthquake_experience: 0,
    earthquake_claims: 0
  }),
  certifications: new _structur_src_form_FormWithFiles__WEBPACK_IMPORTED_MODULE_1__["default"]({
    certifications: [],
    expirations: [],
    software: [],
    resume: {}
  }),
  // resume: new FormData(),
  experience: _experience__WEBPACK_IMPORTED_MODULE_4__["default"].years,
  claims: _experience__WEBPACK_IMPORTED_MODULE_4__["default"].claims,
  progress: 0,
  states: _states__WEBPACK_IMPORTED_MODULE_2__["default"],
  months: _months__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/assets/js/data/experience.js":
/*!************************************************!*\
  !*** ./resources/assets/js/data/experience.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  years: [{
    label: 'None',
    value: 'none'
  }, {
    label: 'A year or less',
    value: '0-1'
  }, {
    label: '2 - 5 years',
    value: '2-5'
  }, {
    label: '6 - 9 years',
    value: '6-9'
  }, {
    label: '10 - 14 years',
    value: '10-14'
  }, {
    label: '20 - 24 years',
    value: '20-24'
  }, {
    label: '25 - 30 years',
    value: '25-30'
  }, {
    label: '30+ years',
    value: '30+'
  }],
  claims: [{
    label: 'None',
    value: 'none'
  }, {
    label: '1-50',
    value: '1-50'
  }, {
    label: '51-100',
    value: '51-100'
  }, {
    label: '101-200',
    value: '101-200'
  }, {
    label: '201-500',
    value: '201-500'
  }, {
    label: '501-1,000',
    value: '501-1000'
  }, {
    label: '1,001-2,500',
    value: '1001-2500'
  }, {
    label: '2,501-5,000',
    value: '2501-5000'
  }, {
    label: '5,001-10,000',
    value: '5001-10000'
  }, {
    label: '10,000+',
    value: '10000+'
  }]
});

/***/ }),

/***/ "./resources/assets/js/data/months.js":
/*!********************************************!*\
  !*** ./resources/assets/js/data/months.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'January',
  abbr: '01'
}, {
  name: 'February',
  abbr: '02'
}, {
  name: 'March',
  abbr: '03'
}, {
  name: 'April',
  abbr: '04'
}, {
  name: 'May',
  abbr: '05'
}, {
  name: 'June',
  abbr: '06'
}, {
  name: 'July',
  abbr: '07'
}, {
  name: 'August',
  abbr: '08'
}, {
  name: 'September',
  abbr: '09'
}, {
  name: 'October',
  abbr: '10'
}, {
  name: 'November',
  abbr: '11'
}, {
  name: 'December',
  abbr: '12'
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

/***/ "./resources/assets/js/profile/Certifications.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/profile/Certifications.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Certifications_vue_vue_type_template_id_6520dd1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Certifications.vue?vue&type=template&id=6520dd1e& */ "./resources/assets/js/profile/Certifications.vue?vue&type=template&id=6520dd1e&");
/* harmony import */ var _Certifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Certifications.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/Certifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Certifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Certifications_vue_vue_type_template_id_6520dd1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Certifications_vue_vue_type_template_id_6520dd1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/Certifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/Certifications.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/profile/Certifications.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Certifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Certifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/Certifications.vue?vue&type=template&id=6520dd1e&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/profile/Certifications.vue?vue&type=template&id=6520dd1e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Certifications_vue_vue_type_template_id_6520dd1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Certifications.vue?vue&type=template&id=6520dd1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Certifications.vue?vue&type=template&id=6520dd1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Certifications_vue_vue_type_template_id_6520dd1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Certifications_vue_vue_type_template_id_6520dd1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/Documents.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/profile/Documents.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_26052620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=26052620& */ "./resources/assets/js/profile/Documents.vue?vue&type=template&id=26052620&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_26052620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_26052620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/Documents.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/profile/Documents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/Documents.vue?vue&type=template&id=26052620&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/profile/Documents.vue?vue&type=template&id=26052620& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_26052620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=26052620& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Documents.vue?vue&type=template&id=26052620&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_26052620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_26052620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/Licenses.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/profile/Licenses.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Licenses_vue_vue_type_template_id_3cf0736c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Licenses.vue?vue&type=template&id=3cf0736c& */ "./resources/assets/js/profile/Licenses.vue?vue&type=template&id=3cf0736c&");
/* harmony import */ var _Licenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Licenses.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/Licenses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Licenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Licenses_vue_vue_type_template_id_3cf0736c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Licenses_vue_vue_type_template_id_3cf0736c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/Licenses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/Licenses.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/profile/Licenses.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Licenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Licenses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Licenses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Licenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/Licenses.vue?vue&type=template&id=3cf0736c&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/profile/Licenses.vue?vue&type=template&id=3cf0736c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Licenses_vue_vue_type_template_id_3cf0736c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Licenses.vue?vue&type=template&id=3cf0736c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Licenses.vue?vue&type=template&id=3cf0736c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Licenses_vue_vue_type_template_id_3cf0736c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Licenses_vue_vue_type_template_id_3cf0736c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/PersonalInformation.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/profile/PersonalInformation.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonalInformation_vue_vue_type_template_id_188f7704___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalInformation.vue?vue&type=template&id=188f7704& */ "./resources/assets/js/profile/PersonalInformation.vue?vue&type=template&id=188f7704&");
/* harmony import */ var _PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalInformation.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/PersonalInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalInformation_vue_vue_type_template_id_188f7704___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonalInformation_vue_vue_type_template_id_188f7704___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/PersonalInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/PersonalInformation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/profile/PersonalInformation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/PersonalInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/PersonalInformation.vue?vue&type=template&id=188f7704&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/profile/PersonalInformation.vue?vue&type=template&id=188f7704& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_template_id_188f7704___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalInformation.vue?vue&type=template&id=188f7704& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/PersonalInformation.vue?vue&type=template&id=188f7704&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_template_id_188f7704___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_template_id_188f7704___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/ProfileNavigation.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/profile/ProfileNavigation.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileNavigation_vue_vue_type_template_id_557f9f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileNavigation.vue?vue&type=template&id=557f9f56& */ "./resources/assets/js/profile/ProfileNavigation.vue?vue&type=template&id=557f9f56&");
/* harmony import */ var _ProfileNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileNavigation.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/ProfileNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileNavigation_vue_vue_type_template_id_557f9f56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileNavigation_vue_vue_type_template_id_557f9f56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/ProfileNavigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/ProfileNavigation.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/profile/ProfileNavigation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/ProfileNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/ProfileNavigation.vue?vue&type=template&id=557f9f56&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/profile/ProfileNavigation.vue?vue&type=template&id=557f9f56& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavigation_vue_vue_type_template_id_557f9f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileNavigation.vue?vue&type=template&id=557f9f56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/ProfileNavigation.vue?vue&type=template&id=557f9f56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavigation_vue_vue_type_template_id_557f9f56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavigation_vue_vue_type_template_id_557f9f56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/WorkHistory.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/profile/WorkHistory.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkHistory_vue_vue_type_template_id_6576760a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkHistory.vue?vue&type=template&id=6576760a& */ "./resources/assets/js/profile/WorkHistory.vue?vue&type=template&id=6576760a&");
/* harmony import */ var _WorkHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkHistory.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/WorkHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkHistory_vue_vue_type_template_id_6576760a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkHistory_vue_vue_type_template_id_6576760a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/WorkHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/WorkHistory.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/profile/WorkHistory.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/WorkHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/WorkHistory.vue?vue&type=template&id=6576760a&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/profile/WorkHistory.vue?vue&type=template&id=6576760a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkHistory_vue_vue_type_template_id_6576760a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkHistory.vue?vue&type=template&id=6576760a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/WorkHistory.vue?vue&type=template&id=6576760a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkHistory_vue_vue_type_template_id_6576760a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkHistory_vue_vue_type_template_id_6576760a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/components/Address.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/profile/components/Address.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_vue_vue_type_template_id_962ea19a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.vue?vue&type=template&id=962ea19a& */ "./resources/assets/js/profile/components/Address.vue?vue&type=template&id=962ea19a&");
/* harmony import */ var _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Address_vue_vue_type_template_id_962ea19a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Address_vue_vue_type_template_id_962ea19a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/Address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/Address.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/Address.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/Address.vue?vue&type=template&id=962ea19a&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/Address.vue?vue&type=template&id=962ea19a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_962ea19a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=template&id=962ea19a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/Address.vue?vue&type=template&id=962ea19a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_962ea19a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_962ea19a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/components/EmailAddress.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/profile/components/EmailAddress.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailAddress_vue_vue_type_template_id_01b68d09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailAddress.vue?vue&type=template&id=01b68d09& */ "./resources/assets/js/profile/components/EmailAddress.vue?vue&type=template&id=01b68d09&");
/* harmony import */ var _EmailAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailAddress.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/EmailAddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailAddress_vue_vue_type_template_id_01b68d09___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailAddress_vue_vue_type_template_id_01b68d09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/EmailAddress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/EmailAddress.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/EmailAddress.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAddress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EmailAddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/EmailAddress.vue?vue&type=template&id=01b68d09&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/EmailAddress.vue?vue&type=template&id=01b68d09& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAddress_vue_vue_type_template_id_01b68d09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAddress.vue?vue&type=template&id=01b68d09& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EmailAddress.vue?vue&type=template&id=01b68d09&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAddress_vue_vue_type_template_id_01b68d09___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAddress_vue_vue_type_template_id_01b68d09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/components/File.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/profile/components/File.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File_vue_vue_type_template_id_89b52e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=89b52e66& */ "./resources/assets/js/profile/components/File.vue?vue&type=template&id=89b52e66&");
/* harmony import */ var _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _File_vue_vue_type_template_id_89b52e66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _File_vue_vue_type_template_id_89b52e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/File.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/File.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/profile/components/File.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/File.vue?vue&type=template&id=89b52e66&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/File.vue?vue&type=template&id=89b52e66& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_89b52e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=template&id=89b52e66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/File.vue?vue&type=template&id=89b52e66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_89b52e66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_89b52e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/components/PhoneNumber.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/profile/components/PhoneNumber.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhoneNumber_vue_vue_type_template_id_80638ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneNumber.vue?vue&type=template&id=80638ed4& */ "./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=template&id=80638ed4&");
/* harmony import */ var _PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneNumber.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneNumber_vue_vue_type_template_id_80638ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhoneNumber_vue_vue_type_template_id_80638ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/PhoneNumber.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhoneNumber.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=template&id=80638ed4&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=template&id=80638ed4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneNumber_vue_vue_type_template_id_80638ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhoneNumber.vue?vue&type=template&id=80638ed4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/PhoneNumber.vue?vue&type=template&id=80638ed4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneNumber_vue_vue_type_template_id_80638ed4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneNumber_vue_vue_type_template_id_80638ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/components/XactnetAddress.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/profile/components/XactnetAddress.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _XactnetAddress_vue_vue_type_template_id_f930cc7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XactnetAddress.vue?vue&type=template&id=f930cc7c& */ "./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=template&id=f930cc7c&");
/* harmony import */ var _XactnetAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XactnetAddress.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _XactnetAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _XactnetAddress_vue_vue_type_template_id_f930cc7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _XactnetAddress_vue_vue_type_template_id_f930cc7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/XactnetAddress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./XactnetAddress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=template&id=f930cc7c&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=template&id=f930cc7c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddress_vue_vue_type_template_id_f930cc7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./XactnetAddress.vue?vue&type=template&id=f930cc7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddress.vue?vue&type=template&id=f930cc7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddress_vue_vue_type_template_id_f930cc7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddress_vue_vue_type_template_id_f930cc7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/components/license.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/profile/components/license.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _license_vue_vue_type_template_id_7d610120___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license.vue?vue&type=template&id=7d610120& */ "./resources/assets/js/profile/components/license.vue?vue&type=template&id=7d610120&");
/* harmony import */ var _license_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./license.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/license.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _license_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _license_vue_vue_type_template_id_7d610120___WEBPACK_IMPORTED_MODULE_0__["render"],
  _license_vue_vue_type_template_id_7d610120___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/license.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/license.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/license.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_license_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./license.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/license.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_license_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/license.vue?vue&type=template&id=7d610120&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/license.vue?vue&type=template&id=7d610120& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_license_vue_vue_type_template_id_7d610120___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./license.vue?vue&type=template&id=7d610120& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/license.vue?vue&type=template&id=7d610120&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_license_vue_vue_type_template_id_7d610120___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_license_vue_vue_type_template_id_7d610120___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/profile.js":
/*!************************************************!*\
  !*** ./resources/assets/js/profile/profile.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue_croppa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-croppa */ "./node_modules/vue-croppa/dist/vue-croppa.js");
/* harmony import */ var vue_croppa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_croppa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PersonalInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PersonalInformation */ "./resources/assets/js/profile/PersonalInformation.vue");
/* harmony import */ var _Licenses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Licenses */ "./resources/assets/js/profile/Licenses.vue");
/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Documents */ "./resources/assets/js/profile/Documents.vue");
/* harmony import */ var _Certifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Certifications */ "./resources/assets/js/profile/Certifications.vue");
/* harmony import */ var _WorkHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WorkHistory */ "./resources/assets/js/profile/WorkHistory.vue");
/* harmony import */ var _ProfileNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfileNavigation */ "./resources/assets/js/profile/ProfileNavigation.vue");









vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_croppa__WEBPACK_IMPORTED_MODULE_2___default.a, {
  componentName: 'avatar-cropper'
});
var routes = [{
  path: '/',
  name: "home",
  component: _PersonalInformation__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/licenses',
  name: "licenses",
  component: _Licenses__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: '/documents',
  name: 'documents',
  component: _Documents__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  path: '/work-history',
  name: "workHistory",
  component: _WorkHistory__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  path: '/certifications',
  name: 'certifications',
  component: _Certifications__WEBPACK_IMPORTED_MODULE_6__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: routes,
  linkActiveClass: 'is-active'
}); // router.beforeEach((to, from, next) => {
// })

var Profile = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  name: 'Profile',
  router: router,
  components: {
    profileNavigation: _ProfileNavigation__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mounted: function mounted() {
    this.user = window.userData;
  },
  data: function data() {
    return {
      user: {
        avatar: {
          path: '#'
        }
      },
      avatarCropper: null,
      showAvatarButton: false,
      addingAvatar: false,
      imgLoaded: false,
      google: {}
    };
  },
  computed: {
    userHasAvatar: function userHasAvatar() {
      return this.user.avatar !== '#' && this.user.avatar !== null ? true : false;
    }
  },
  methods: {
    uploadImage: function uploadImage() {
      var _this = this;

      console.log('uploading...');
      this.avatarCropper.generateBlob(function (blob) {
        var file = new File([blob], "avatar.png", {
          type: 'image/png'
        });
        var data = new FormData();
        data.append('avatar', file);
        window.axios.post('/api/user/' + window.userData.id + '/avatar/', data).then(function (response) {
          console.log(response);
          _this.addingAvatar = false;
          _this.user.avatar = {
            path: response.data
          };
        });
      });
    },
    hasImage: function hasImage() {
      return this.imgLoaded = !this.imgLoaded;
    },
    toggleAvatarButton: function toggleAvatarButton() {
      return this.showAvatarButton = !this.showAvatarButton;
    }
  }
}).$mount('#profile');

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
        }).catch(function (error) {
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

/***/ "./resources/assets/js/structur/src/form/FormWithFiles.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/structur/src/form/FormWithFiles.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormWithFiles; });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./resources/assets/js/structur/src/form/Form.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var FormWithFiles =
/*#__PURE__*/
function (_Form) {
  _inherits(FormWithFiles, _Form);

  function FormWithFiles(data) {
    _classCallCheck(this, FormWithFiles);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormWithFiles).call(this, data));
  }

  _createClass(FormWithFiles, [{
    key: "data",
    value: function data() {
      var _this = this;

      var data = new FormData();

      var _loop = function _loop(property) {
        // if prop is file we need to append it,
        if (_this[property] instanceof File) {
          data.append(property, _this[property], _this[property.name]);
        } // if prop is an array we need to filter and append it to data
        // otherwise just append copy of current string/object reference.
        // Stringify prop below when adding to FormData in case array 
        // conatins objects, to avoid sending [object Object] to api.
        else {
            _this[property] instanceof Array ? _this[property].filter(function (prop) {
              return data.append(property + '[]', JSON.stringify(prop));
            }) : data.append(property, _this[property]);
          }
      };

      for (var property in this.originalData) {
        _loop(property);
      } // console.log(data.getAll('certifications'));
      // for(let key of data.values()) {
      //     console.log(JSON.stringify(key)); 
      //  }


      return data;
    }
  }]);

  return FormWithFiles;
}(_Form__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ 8:
/*!******************************************************!*\
  !*** multi ./resources/assets/js/profile/profile.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandon/code/ccg/api/resources/assets/js/profile/profile.js */"./resources/assets/js/profile/profile.js");


/***/ })

},[[8,"/js/manifest","/js/vendor"]]]);