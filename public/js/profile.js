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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Availability.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Availability.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Availability',
  props: ['isAvailable', 'userId'],
  data: function data() {
    return {
      availability: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        available: 0
      })
    };
  },
  computed: {
    text: function text() {
      return this.isAvailable == 0 ? 'Unavailable' : 'Available';
    }
  },
  methods: {
    setAvailability: function setAvailability() {
      var _this = this;

      this.isAvailable === 0 ? this.availability.available = 1 : this.availability.available = 0;
      this.availability.put('/api/user/' + this.userId + '/available').then(function (response) {
        _this.$emit('availability-changed', response);
      });
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
      })["catch"](function (error) {
        console.error(error);
        return window.axios.post('/api/admin/client-error', error);
      });
    },
    remove: function remove(obj, uri) {
      var _this2 = this;

      window.axios["delete"]('/api/user/' + uri + '/' + obj.id).then(function (response) {
        console.log(response);

        if (uri == 'software-experiences') {
          var index = _this2.softwareExperiences.indexOf(obj);

          return _this2.softwareExperiences.splice(index, 1);
        } else {
          var _index = _this2.certifications.indexOf(obj);

          return _this2.certifications.splice(_index, 1);
        }
      })["catch"](function (error) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  data: function data() {
    return {
      appData: _data_appData_js__WEBPACK_IMPORTED_MODULE_0__["default"] // hasXactimate: false,
      // currentYear: '',
      // btnState: false,
      // geocoder: {},
      // autocomplete: {},
      // componentForm: {
      //        street_number: 'short_name',
      //        route: 'long_name',
      //        locality: 'long_name',
      //        administrative_area_level_1: 'short_name',
      //        country: 'long_name',
      //        postal_code: 'short_name'
      //     	}

    };
  },
  mounted: function mounted() {
    this.setupView();
  },
  computed: {
    requiredFieldsBlank: function requiredFieldsBlank() {
      if (this.appData.personalInfo.city == '' || this.appData.personalInfo.state == '' || this.appData.personalInfo.zip == '' || this.appData.personalInfo.street == '') {
        return true;
      }

      return false;
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (!this.requiredFieldsBlank) {
        this.appData.personalInfo.post('/api/user/personal-information', false).then(function (response) {
          _this.$router.push({
            path: '/work-history'
          });
        })["catch"](function (error) {
          _this.btnState = false;
          return window.axios.post('/api/admin/client-error', error);
        });
      }
    },
    setupView: function setupView() {
      this.appData.text.title = "Personal Information";
      this.appData.text.subtitle = "Step One - Tell Us About Yourself";
      this.appData.progress = 1;
      var today = new Date();
      this.currentYear = today.getFullYear();
      this.geocoder = new google.maps.Geocoder();
      this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('location'), {
        types: ['geocode']
      }); // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      // function 

      this.autocomplete.addListener('place_changed', this.setAddressFields);
    },
    setAddressFields: function setAddressFields() {
      var place = this.autocomplete.getPlace();
      console.log(place);

      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];

        if (this.componentForm[addressType]) {
          switch (addressType) {
            case 'street_number':
              this.appData.personalInfo.street = place.address_components[i][this.componentForm[addressType]];
              break;

            case 'route':
              this.appData.personalInfo.street += ' ' + place.address_components[i][this.componentForm[addressType]];
              break;

            case 'locality':
              this.appData.personalInfo.city = place.address_components[i][this.componentForm[addressType]];
              break;

            case 'administrative_area_level_1':
              this.appData.personalInfo.state = place.address_components[i][this.componentForm[addressType]];
              break;

            case 'postal_code':
              this.appData.personalInfo.zip = place.address_components[i][this.componentForm[addressType]];
          }
        }
      } // console.log(place.geometry.location.lat());
      // console.log(place.geometry.location.lng());


      this.appData.personalInfo.lat = place.geometry.location.lat();
      this.appData.personalInfo.lng = place.geometry.location.lng();
      this.appData.personalInfo.formatted_address = place.formatted_address;
      this.appData.personalInfo.place_id = place.place_id;
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
      })["catch"](function (error) {
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
/* harmony import */ var _components_License_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/License.vue */ "./resources/assets/js/profile/components/License.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Licenses',
  components: {
    License: _components_License_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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
      })["catch"](function (error) {
        console.error(error);
        return window.axios.post('/api/admin/client-error', error);
      });
    },
    update: function update(license) {
      var _this2 = this;

      // alert('updating...')
      window.axios.patch('/api/user/' + this.userId + '/license/' + license.id, license).then(function (response) {
        var current = _this2.adjusterLicenses.find(function (adjusterLicense) {
          return adjusterLicense.id === license.id;
        });

        var index = _this2.adjusterLicenses.indexOf(current);

        return _this2.adjusterLicenses.splice(index, 1, response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    remove: function remove(license) {
      var _this3 = this;

      window.axios["delete"]('/api/user/' + this.userId + '/license/' + license.id).then(function (response) {
        console.log(response);

        var index = _this3.adjusterLicenses.indexOf(license);

        return _this3.adjusterLicenses.splice(index, 1);
      })["catch"](function (error) {
        console.log(error);
      });
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
/* harmony import */ var _components_XactnetAddresses_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/XactnetAddresses.vue */ "./resources/assets/js/profile/components/XactnetAddresses.vue");
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
    xactnetAddresses: _components_XactnetAddresses_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
      })["catch"](function (error) {
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
        })["catch"](function (error) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EditableTextCard',
  props: ['text', 'userId', 'endpoint'],
  data: function data() {
    return {
      editing: false,
      form: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        text: ''
      })
    };
  },
  methods: {
    editText: function editText() {
      this.editing = !this.editing;
      this.form.text = this.text;
    },
    saveText: function saveText() {
      var _this = this;

      this.form.put('/api/user/' + this.userId + '/' + this.endpoint).then(function (response) {
        console.log(response);

        _this.$emit('text-changed', response);
      });
      this.editing = false;
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
        })["catch"](function (error) {
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
        window.axios["delete"]('/api/user/documents/' + file.id).then(function (response) {
          console.log(response);

          _this.$emit('file-deleted', file);
        })["catch"](function (error) {
          console.error(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/License.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/License.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'License',
  props: ['license', 'months', 'states', 'currentYear'],
  data: function data() {
    return {
      editing: false,
      editedLicense: {
        id: '',
        license_number: '',
        expiration_month: '',
        expiration_year: ''
      }
    };
  },
  mounted: function mounted() {
    this.resetLicense();
  },
  methods: {
    edit: function edit() {
      this.editing === false ? this.editing = true : this.resetLicense();
      this.$emit('edit');
    },
    update: function update() {
      this.$emit('update', this.editedLicense);
      this.editing = false;
    },
    remove: function remove() {
      confirm('Are you sure? This cannot be undone') ? this.$emit('remove', this.license) : false; //
    },
    resetLicense: function resetLicense() {
      this.editedLicense.id = this.license.id;
      this.editedLicense.license_number = this.license.license_number;
      this.editedLicense.expiration_month = this.license.expiration_month;
      this.editedLicense.expiration_year = this.license.expiration_year;
      this.editing = false;
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
        })["catch"](function (error) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/StatusManager.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/StatusManager.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
//
//
//
//
//
//
//
//
//
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
  name: 'StatusManager',
  props: ['userId', 'status'],
  data: function data() {
    return {
      form: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        status: ''
      }),
      statuses: ['active', 'inactive', 'no-hire']
    };
  },
  computed: {
    isNoHire: function isNoHire() {
      return this.status === 'no-hire' ? true : false;
    },
    isActive: function isActive() {
      return this.status === 'active' ? true : false;
    }
  },
  methods: {
    setStatus: function setStatus(status) {
      var _this = this;

      if (this.status !== status) {
        this.form.status = status;
        this.form.put('/api/user/' + this.userId + '/status').then(function (response) {
          _this.$emit('status-changed', response);
        });
      }
    },
    capitalize: function capitalize(string) {
      if (typeof string === 'string') {
        return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import userRoles from '../../components/UserRoles';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserRoleManager',
  props: ['roles', 'userRoles', 'userId', 'endpoint'],
  components: {// userRoles
  },
  data: function data() {
    return {
      showAll: false,
      form: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        role: ''
      })
    };
  },
  computed: {
    activeRoles: function activeRoles() {
      var ids = [];

      var _iterator = _createForOfIteratorHelper(this.userRoles),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var role = _step.value;
          ids.push(role.id);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return ids;
    },
    tooltipText: function tooltipText() {
      return this.showAll ? 'Hide roles' : 'Show available roles';
    }
  },
  methods: {
    hasRole: function hasRole(roleId) {
      return this.activeRoles.indexOf(roleId) !== -1 ? true : false;
    },
    assignRole: function assignRole(roleId) {
      var _this = this;

      this.form.role = roleId;
      this.form.put('/api/user/' + this.userId + '/roles').then(function (response) {
        _this.$emit('role-added', response);
      });
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'XactnetAddress',
  props: ['xactnetAddress', 'errors', 'updateError'],
  mounted: function mounted() {
    this.userId = window.userData.id;
  },
  data: function data() {
    return {
      userId: '',
      editedXactnetAddress: {
        address: this.xactnetAddress.address,
        id: this.xactnetAddress.id
      },
      editing: false,
      showOptions: false,
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
    submit: function submit() {
      return this.$emit('xactnet-address-edited', [this.editedXactnetAddress, this.xactnetAddress]);
    },
    deleteAddress: function deleteAddress(id) {
      return this.$emit('xactnet-address-deleted', id);
    },
    toggleEditing: function toggleEditing() {
      this.editing = !this.editing;
      if (this.editing == false && this.errors.any()) this.editing = true;
    },
    toggleOptions: function toggleOptions(show) {
      return this.showOptions = show;
    },
    focusInput: function focusInput() {
      return this.editing ? this.input.focus() : null;
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
      textArea.value = this.xactnetAddress.address;
      document.body.appendChild(textArea);
      textArea.select();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structur/src/form/Form.js */ "./resources/assets/js/structur/src/form/Form.js");
/* harmony import */ var _XactnetAddress_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XactnetAddress.vue */ "./resources/assets/js/profile/components/XactnetAddress.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'XactnetAddresses',
  mounted: function mounted() {
    // this.form.xactnet_address = window.userData.profile.xactnet_address;
    this.xactnetAddresses = window.userData.xactnet_addresses;
    this.userId = window.userData.id;
  },
  components: {
    xactnetAddress: _XactnetAddress_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      userId: '',
      xactnetAddresses: [],
      isUpdate: false,
      updateError: false,
      requestMethod: 'put',
      form: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        xactnet_address: '',
        current_xactnet_address: '',
        id: ''
      }),
      editing: false
    };
  },
  methods: {
    // submit newly edited 
    update: function update(data) {
      this.isUpdate = true;
      this.form.xactnet_address = data[0].address;
      this.form.id = data[1].id;
      this.form.current_xactnet_address = data[1].address;
      this.requestMethod = 'patch'; // console.log(data[1].address);

      return this.submit();
    },
    create: function create() {
      this.toggleEditing();
      this.isUpdate = false;
      this.requestMethod = 'put';
      this.form.xactnet_address = '';
    },
    remove: function remove(id) {
      var _this = this;

      window.axios["delete"]('/api/xactnet_address/' + id).then(function (response) {
        var address = _this.xactnetAddresses.find(function (address) {
          return address.id == id;
        });

        var idx = _this.xactnetAddresses.indexOf(address);

        _this.xactnetAddresses.splice(idx, 1);
      })["catch"](function (error) {
        alert(error.message);
        console.error(error);
      });
    },
    submit: function submit() {
      var _this2 = this;

      // if (this.submitable) {
      this.form[this.requestMethod]('/api/user/' + this.userId + '/xactnet_address', false).then(function (response) {
        _this2.updateError = false;
        _this2.isUpdate ? _this2.updateXactnetAddress(response) : _this2.xactnetAddresses.push(response);
        _this2.editing = false;
        console.log(_this2.editing);
      })["catch"](function (error) {
        _this2.updateError = true;
        console.error(error);
        return window.axios.post('/api/admin/client-error', error);
      });
    },
    updateXactnetAddress: function updateXactnetAddress(response) {
      var xactnetAddress = this.xactnetAddresses.find(function (xactnetAddress) {
        return xactnetAddress.id == response.id;
      });
      xactnetAddress.address = response.address;
    },
    toggleEditing: function toggleEditing() {
      return this.editing = !this.editing;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#roles.tags{\n\theight: 1.75rem;\n\toverflow: hidden;\n}\n#roles.tags.showAll{\n\theight: 100%;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoleManager.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-croppa/dist/vue-croppa.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-croppa/dist/vue-croppa.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
 * vue-croppa v1.3.8
 * https://github.com/zhanziyang/vue-croppa
 * 
 * Copyright (c) 2018 zhanziyang
 * Released under the ISC license
 */
  
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var canvasExifOrientation = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {
  'use strict';

  function drawImage(img, orientation, x, y, width, height) {
    if (!/^[1-8]$/.test(orientation)) throw new Error('orientation should be [1-8]');

    if (x == null) x = 0;
    if (y == null) y = 0;
    if (width == null) width = img.width;
    if (height == null) height = img.height;

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    ctx.save();
    switch (+orientation) {
      // 1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
      case 1:
          break;

      // 2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
      case 2:
         ctx.translate(width, 0);
         ctx.scale(-1, 1);
         break;

      // 3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
      case 3:
          ctx.translate(width, height);
          ctx.rotate(180 / 180 * Math.PI);
          break;

      // 4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
      case 4:
          ctx.translate(0, height);
          ctx.scale(1, -1);
          break;

      // 5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
      case 5:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(90 / 180 * Math.PI);
          ctx.scale(1, -1);
          break;

      // 6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
      case 6:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(90 / 180 * Math.PI);
          ctx.translate(0, -height);
          break;

      // 7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
      case 7:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(270 / 180 * Math.PI);
          ctx.translate(-width, height);
          ctx.scale(1, -1);
          break;

      // 8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
      case 8:
          canvas.width = height;
          canvas.height = width;
          ctx.translate(0, width);
          ctx.rotate(270 / 180 * Math.PI);
          break;
    }

    ctx.drawImage(img, x, y, width, height);
    ctx.restore();

    return canvas;
  }

  return {
    drawImage: drawImage
  };
}));
});

var u = {
  onePointCoord: function onePointCoord(point, vm) {
    var canvas = vm.canvas,
        quality = vm.quality;

    var rect = canvas.getBoundingClientRect();
    var clientX = point.clientX;
    var clientY = point.clientY;
    return {
      x: (clientX - rect.left) * quality,
      y: (clientY - rect.top) * quality
    };
  },
  getPointerCoords: function getPointerCoords(evt, vm) {
    var pointer = void 0;
    if (evt.touches && evt.touches[0]) {
      pointer = evt.touches[0];
    } else if (evt.changedTouches && evt.changedTouches[0]) {
      pointer = evt.changedTouches[0];
    } else {
      pointer = evt;
    }
    return this.onePointCoord(pointer, vm);
  },
  getPinchDistance: function getPinchDistance(evt, vm) {
    var pointer1 = evt.touches[0];
    var pointer2 = evt.touches[1];
    var coord1 = this.onePointCoord(pointer1, vm);
    var coord2 = this.onePointCoord(pointer2, vm);

    return Math.sqrt(Math.pow(coord1.x - coord2.x, 2) + Math.pow(coord1.y - coord2.y, 2));
  },
  getPinchCenterCoord: function getPinchCenterCoord(evt, vm) {
    var pointer1 = evt.touches[0];
    var pointer2 = evt.touches[1];
    var coord1 = this.onePointCoord(pointer1, vm);
    var coord2 = this.onePointCoord(pointer2, vm);

    return {
      x: (coord1.x + coord2.x) / 2,
      y: (coord1.y + coord2.y) / 2
    };
  },
  imageLoaded: function imageLoaded(img) {
    return img.complete && img.naturalWidth !== 0;
  },
  rAFPolyfill: function rAFPolyfill() {
    // rAF polyfill
    if (typeof document == 'undefined' || typeof window == 'undefined') return;
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          var arg = currTime + timeToCall;
          callback(arg);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }

    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  },
  toBlobPolyfill: function toBlobPolyfill() {
    if (typeof document == 'undefined' || typeof window == 'undefined' || !HTMLCanvasElement) return;
    var binStr, len, arr;
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function value(callback, type, quality) {
          binStr = atob(this.toDataURL(type, quality).split(',')[1]);
          len = binStr.length;
          arr = new Uint8Array(len);

          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }

          callback(new Blob([arr], { type: type || 'image/png' }));
        }
      });
    }
  },
  eventHasFile: function eventHasFile(evt) {
    var dt = evt.dataTransfer || evt.originalEvent.dataTransfer;
    if (dt.types) {
      for (var i = 0, len = dt.types.length; i < len; i++) {
        if (dt.types[i] == 'Files') {
          return true;
        }
      }
    }

    return false;
  },
  getFileOrientation: function getFileOrientation(arrayBuffer) {
    var view = new DataView(arrayBuffer);
    if (view.getUint16(0, false) != 0xFFD8) return -2;
    var length = view.byteLength;
    var offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return -1;
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++) {
          if (view.getUint16(offset + i * 12, little) == 0x0112) {
            return view.getUint16(offset + i * 12 + 8, little);
          }
        }
      } else if ((marker & 0xFF00) != 0xFF00) break;else offset += view.getUint16(offset, false);
    }
    return -1;
  },
  parseDataUrl: function parseDataUrl(url) {
    var reg = /^data:([^;]+)?(;base64)?,(.*)/gmi;
    return reg.exec(url)[3];
  },
  base64ToArrayBuffer: function base64ToArrayBuffer(base64) {
    var binaryString = atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  },
  getRotatedImage: function getRotatedImage(img, orientation) {
    var _canvas = canvasExifOrientation.drawImage(img, orientation);
    var _img = new Image();
    _img.src = _canvas.toDataURL();
    return _img;
  },
  flipX: function flipX(ori) {
    if (ori % 2 == 0) {
      return ori - 1;
    }

    return ori + 1;
  },
  flipY: function flipY(ori) {
    var map = {
      1: 4,
      4: 1,
      2: 3,
      3: 2,
      5: 8,
      8: 5,
      6: 7,
      7: 6
    };

    return map[ori];
  },
  rotate90: function rotate90(ori) {
    var map = {
      1: 6,
      2: 7,
      3: 8,
      4: 5,
      5: 2,
      6: 3,
      7: 4,
      8: 1
    };

    return map[ori];
  },
  numberValid: function numberValid(n) {
    return typeof n === 'number' && !isNaN(n);
  }
};

Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

var initialImageType = String;
if (typeof window !== 'undefined' && window.Image) {
  initialImageType = [String, Image];
}

var props = {
  value: Object,
  width: {
    type: Number,
    default: 200,
    validator: function validator(val) {
      return val > 0;
    }
  },
  height: {
    type: Number,
    default: 200,
    validator: function validator(val) {
      return val > 0;
    }
  },
  placeholder: {
    type: String,
    default: 'Choose an image'
  },
  placeholderColor: {
    default: '#606060'
  },
  placeholderFontSize: {
    type: Number,
    default: 0,
    validator: function validator(val) {
      return val >= 0;
    }
  },
  canvasColor: {
    default: 'transparent'
  },
  quality: {
    type: Number,
    default: 2,
    validator: function validator(val) {
      return val > 0;
    }
  },
  zoomSpeed: {
    default: 3,
    type: Number,
    validator: function validator(val) {
      return val > 0;
    }
  },
  accept: String,
  fileSizeLimit: {
    type: Number,
    default: 0,
    validator: function validator(val) {
      return val >= 0;
    }
  },
  disabled: Boolean,
  disableDragAndDrop: Boolean,
  disableClickToChoose: Boolean,
  disableDragToMove: Boolean,
  disableScrollToZoom: Boolean,
  disablePinchToZoom: Boolean,
  disableRotation: Boolean,
  reverseScrollToZoom: Boolean,
  preventWhiteSpace: Boolean,
  showRemoveButton: {
    type: Boolean,
    default: true
  },
  removeButtonColor: {
    type: String,
    default: 'red'
  },
  removeButtonSize: {
    type: Number
  },
  initialImage: initialImageType,
  initialSize: {
    type: String,
    default: 'cover',
    validator: function validator(val) {
      return val === 'cover' || val === 'contain' || val === 'natural';
    }
  },
  initialPosition: {
    type: String,
    default: 'center',
    validator: function validator(val) {
      var valids = ['center', 'top', 'bottom', 'left', 'right'];
      return val.split(' ').every(function (word) {
        return valids.indexOf(word) >= 0;
      }) || /^-?\d+% -?\d+%$/.test(val);
    }
  },
  inputAttrs: Object,
  showLoading: Boolean,
  loadingSize: {
    type: Number,
    default: 20
  },
  loadingColor: {
    type: String,
    default: '#606060'
  },
  replaceDrop: Boolean,
  passive: Boolean,
  imageBorderRadius: {
    type: [Number, String],
    default: 0
  },
  autoSizing: Boolean,
  videoEnabled: Boolean
};

var events = {
  INIT_EVENT: 'init',
  FILE_CHOOSE_EVENT: 'file-choose',
  FILE_SIZE_EXCEED_EVENT: 'file-size-exceed',
  FILE_TYPE_MISMATCH_EVENT: 'file-type-mismatch',
  NEW_IMAGE_EVENT: 'new-image',
  NEW_IMAGE_DRAWN_EVENT: 'new-image-drawn',
  IMAGE_REMOVE_EVENT: 'image-remove',
  MOVE_EVENT: 'move',
  ZOOM_EVENT: 'zoom',
  DRAW_EVENT: 'draw',
  INITIAL_IMAGE_LOADED_EVENT: 'initial-image-loaded',
  LOADING_START_EVENT: 'loading-start',
  LOADING_END_EVENT: 'loading-end'
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var PCT_PER_ZOOM = 1 / 100000; // The amount of zooming everytime it happens, in percentage of image width.
var MIN_MS_PER_CLICK = 500; // If touch duration is shorter than the value, then it is considered as a click.
var CLICK_MOVE_THRESHOLD = 100; // If touch move distance is greater than this value, then it will by no mean be considered as a click.
var MIN_WIDTH = 10; // The minimal width the user can zoom to.
var DEFAULT_PLACEHOLDER_TAKEUP = 2 / 3; // Placeholder text by default takes up this amount of times of canvas width.
var PINCH_ACCELERATION = 1; // The amount of times by which the pinching is more sensitive than the scolling

var syncData = ['imgData', 'img', 'imgSet', 'originalImage', 'naturalHeight', 'naturalWidth', 'orientation', 'scaleRatio'];
// const DEBUG = false

var component = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "wrapper", class: 'croppa-container ' + (_vm.img ? 'croppa--has-target' : '') + ' ' + (_vm.passive ? 'croppa--passive' : '') + ' ' + (_vm.disabled ? 'croppa--disabled' : '') + ' ' + (_vm.disableClickToChoose ? 'croppa--disabled-cc' : '') + ' ' + (_vm.disableDragToMove && _vm.disableScrollToZoom ? 'croppa--disabled-mz' : '') + ' ' + (_vm.fileDraggedOver ? 'croppa--dropzone' : ''), on: { "dragenter": function dragenter($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handleDragEnter($event);
        }, "dragleave": function dragleave($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handleDragLeave($event);
        }, "dragover": function dragover($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handleDragOver($event);
        }, "drop": function drop($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handleDrop($event);
        } } }, [_c('input', _vm._b({ ref: "fileInput", staticStyle: { "height": "1px", "width": "1px", "overflow": "hidden", "margin-left": "-99999px", "position": "absolute" }, attrs: { "type": "file", "accept": _vm.accept, "disabled": _vm.disabled }, on: { "change": _vm._handleInputChange } }, 'input', _vm.inputAttrs, false)), _vm._v(" "), _c('div', { staticClass: "slots", staticStyle: { "width": "0", "height": "0", "visibility": "hidden" } }, [_vm._t("initial"), _vm._v(" "), _vm._t("placeholder")], 2), _vm._v(" "), _c('canvas', { ref: "canvas", on: { "click": function click($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handleClick($event);
        }, "dblclick": function dblclick($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handleDblClick($event);
        }, "touchstart": function touchstart($event) {
          $event.stopPropagation();return _vm._handlePointerStart($event);
        }, "mousedown": function mousedown($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerStart($event);
        }, "pointerstart": function pointerstart($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerStart($event);
        }, "touchend": function touchend($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerEnd($event);
        }, "touchcancel": function touchcancel($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerEnd($event);
        }, "mouseup": function mouseup($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerEnd($event);
        }, "pointerend": function pointerend($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerEnd($event);
        }, "pointercancel": function pointercancel($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerEnd($event);
        }, "touchmove": function touchmove($event) {
          $event.stopPropagation();return _vm._handlePointerMove($event);
        }, "mousemove": function mousemove($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerMove($event);
        }, "pointermove": function pointermove($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerMove($event);
        }, "pointerleave": function pointerleave($event) {
          $event.stopPropagation();$event.preventDefault();return _vm._handlePointerLeave($event);
        }, "DOMMouseScroll": function DOMMouseScroll($event) {
          $event.stopPropagation();return _vm._handleWheel($event);
        }, "wheel": function wheel($event) {
          $event.stopPropagation();return _vm._handleWheel($event);
        }, "mousewheel": function mousewheel($event) {
          $event.stopPropagation();return _vm._handleWheel($event);
        } } }), _vm._v(" "), _vm.showRemoveButton && _vm.img && !_vm.passive ? _c('svg', { staticClass: "icon icon-remove", style: 'top: -' + _vm.height / 40 + 'px; right: -' + _vm.width / 40 + 'px', attrs: { "viewBox": "0 0 1024 1024", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "width": _vm.removeButtonSize || _vm.width / 10, "height": _vm.removeButtonSize || _vm.width / 10 }, on: { "click": _vm.remove } }, [_c('path', { attrs: { "d": "M511.921231 0C229.179077 0 0 229.257846 0 512 0 794.702769 229.179077 1024 511.921231 1024 794.781538 1024 1024 794.702769 1024 512 1024 229.257846 794.781538 0 511.921231 0ZM732.041846 650.633846 650.515692 732.081231C650.515692 732.081231 521.491692 593.683692 511.881846 593.683692 502.429538 593.683692 373.366154 732.081231 373.366154 732.081231L291.761231 650.633846C291.761231 650.633846 430.316308 523.500308 430.316308 512.196923 430.316308 500.696615 291.761231 373.523692 291.761231 373.523692L373.366154 291.918769C373.366154 291.918769 503.453538 430.395077 511.881846 430.395077 520.349538 430.395077 650.515692 291.918769 650.515692 291.918769L732.041846 373.523692C732.041846 373.523692 593.447385 502.547692 593.447385 512.196923 593.447385 521.412923 732.041846 650.633846 732.041846 650.633846Z", "fill": _vm.removeButtonColor } })]) : _vm._e(), _vm._v(" "), _vm.showLoading && _vm.loading ? _c('div', { staticClass: "sk-fading-circle", style: _vm.loadingStyle }, _vm._l(12, function (i) {
      return _c('div', { key: i, class: 'sk-circle' + i + ' sk-circle' }, [_c('div', { staticClass: "sk-circle-indicator", style: { backgroundColor: _vm.loadingColor } })]);
    })) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
  }, staticRenderFns: [],
  model: {
    prop: 'value',
    event: events.INIT_EVENT
  },

  props: props,

  data: function data() {
    return {
      canvas: null,
      ctx: null,
      originalImage: null,
      img: null,
      video: null,
      dragging: false,
      lastMovingCoord: null,
      imgData: {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0
      },
      fileDraggedOver: false,
      tabStart: 0,
      scrolling: false,
      pinching: false,
      rotating: false,
      pinchDistance: 0,
      supportTouch: false,
      pointerMoved: false,
      pointerStartCoord: null,
      naturalWidth: 0,
      naturalHeight: 0,
      scaleRatio: null,
      orientation: 1,
      userMetadata: null,
      imageSet: false,
      currentPointerCoord: null,
      currentIsInitial: false,
      loading: false,
      realWidth: 0, // only for when autoSizing is on
      realHeight: 0, // only for when autoSizing is on
      chosenFile: null,
      useAutoSizing: false
    };
  },


  computed: {
    outputWidth: function outputWidth() {
      var w = this.useAutoSizing ? this.realWidth : this.width;
      return w * this.quality;
    },
    outputHeight: function outputHeight() {
      var h = this.useAutoSizing ? this.realHeight : this.height;
      return h * this.quality;
    },
    computedPlaceholderFontSize: function computedPlaceholderFontSize() {
      return this.placeholderFontSize * this.quality;
    },
    aspectRatio: function aspectRatio() {
      return this.naturalWidth / this.naturalHeight;
    },
    loadingStyle: function loadingStyle() {
      return {
        width: this.loadingSize + 'px',
        height: this.loadingSize + 'px',
        right: '15px',
        bottom: '10px'
      };
    }
  },

  mounted: function mounted() {
    var _this = this;

    this._initialize();
    u.rAFPolyfill();
    u.toBlobPolyfill();

    var supports = this.supportDetection();
    if (!supports.basic) {
      console.warn('Your browser does not support vue-croppa functionality.');
    }

    if (this.passive) {
      this.$watch('value._data', function (data) {
        var set$$1 = false;
        if (!data) return;
        for (var key in data) {
          if (syncData.indexOf(key) >= 0) {
            var val = data[key];
            if (val !== _this[key]) {
              _this.$set(_this, key, val);
              set$$1 = true;
            }
          }
        }
        if (set$$1) {
          if (!_this.img) {
            _this.remove();
          } else {
            _this.$nextTick(function () {
              _this._draw();
            });
          }
        }
      }, {
        deep: true
      });
    }

    this.useAutoSizing = !!(this.autoSizing && this.$refs.wrapper && getComputedStyle);
    if (this.useAutoSizing) {
      this._autoSizingInit();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.useAutoSizing) {
      this._autoSizingRemove();
    }
  },


  watch: {
    outputWidth: function outputWidth() {
      this.onDimensionChange();
    },
    outputHeight: function outputHeight() {
      this.onDimensionChange();
    },
    canvasColor: function canvasColor() {
      if (!this.img) {
        this._setPlaceholders();
      } else {
        this._draw();
      }
    },
    imageBorderRadius: function imageBorderRadius() {
      if (this.img) {
        this._draw();
      }
    },
    placeholder: function placeholder() {
      if (!this.img) {
        this._setPlaceholders();
      }
    },
    placeholderColor: function placeholderColor() {
      if (!this.img) {
        this._setPlaceholders();
      }
    },
    computedPlaceholderFontSize: function computedPlaceholderFontSize() {
      if (!this.img) {
        this._setPlaceholders();
      }
    },
    preventWhiteSpace: function preventWhiteSpace(val) {
      if (val) {
        this.imageSet = false;
      }
      this._placeImage();
    },
    scaleRatio: function scaleRatio(val, oldVal) {
      if (this.passive) return;
      if (!this.img) return;
      if (!u.numberValid(val)) return;

      var x = 1;
      if (u.numberValid(oldVal) && oldVal !== 0) {
        x = val / oldVal;
      }
      var pos = this.currentPointerCoord || {
        x: this.imgData.startX + this.imgData.width / 2,
        y: this.imgData.startY + this.imgData.height / 2
      };
      this.imgData.width = this.naturalWidth * val;
      this.imgData.height = this.naturalHeight * val;

      if (!this.userMetadata && this.imageSet && !this.rotating) {
        var offsetX = (x - 1) * (pos.x - this.imgData.startX);
        var offsetY = (x - 1) * (pos.y - this.imgData.startY);
        this.imgData.startX = this.imgData.startX - offsetX;
        this.imgData.startY = this.imgData.startY - offsetY;
      }

      if (this.preventWhiteSpace) {
        this._preventZoomingToWhiteSpace();
        this._preventMovingToWhiteSpace();
      }
    },

    'imgData.width': function imgDataWidth(val, oldVal) {
      // if (this.passive) return
      if (!u.numberValid(val)) return;
      this.scaleRatio = val / this.naturalWidth;
      if (this.hasImage()) {
        if (Math.abs(val - oldVal) > val * (1 / 100000)) {
          this.emitEvent(events.ZOOM_EVENT);
          this._draw();
        }
      }
    },
    'imgData.height': function imgDataHeight(val) {
      // if (this.passive) return
      if (!u.numberValid(val)) return;
      this.scaleRatio = val / this.naturalHeight;
    },
    'imgData.startX': function imgDataStartX(val) {
      // if (this.passive) return
      if (this.hasImage()) {
        this.$nextTick(this._draw);
      }
    },
    'imgData.startY': function imgDataStartY(val) {
      // if (this.passive) return
      if (this.hasImage()) {
        this.$nextTick(this._draw);
      }
    },
    loading: function loading(val) {
      if (this.passive) return;
      if (val) {
        this.emitEvent(events.LOADING_START_EVENT);
      } else {
        this.emitEvent(events.LOADING_END_EVENT);
      }
    },
    autoSizing: function autoSizing(val) {
      this.useAutoSizing = !!(this.autoSizing && this.$refs.wrapper && getComputedStyle);
      if (val) {
        this._autoSizingInit();
      } else {
        this._autoSizingRemove();
      }
    }
  },

  methods: {
    emitEvent: function emitEvent() {
      // console.log(args[0])
      this.$emit.apply(this, arguments);
    },
    getCanvas: function getCanvas() {
      return this.canvas;
    },
    getContext: function getContext() {
      return this.ctx;
    },
    getChosenFile: function getChosenFile() {
      return this.chosenFile || this.$refs.fileInput.files[0];
    },
    move: function move(offset) {
      if (!offset || this.passive) return;
      var oldX = this.imgData.startX;
      var oldY = this.imgData.startY;
      this.imgData.startX += offset.x;
      this.imgData.startY += offset.y;
      if (this.preventWhiteSpace) {
        this._preventMovingToWhiteSpace();
      }
      if (this.imgData.startX !== oldX || this.imgData.startY !== oldY) {
        this.emitEvent(events.MOVE_EVENT);
        this._draw();
      }
    },
    moveUpwards: function moveUpwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: 0, y: -amount });
    },
    moveDownwards: function moveDownwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: 0, y: amount });
    },
    moveLeftwards: function moveLeftwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: -amount, y: 0 });
    },
    moveRightwards: function moveRightwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: amount, y: 0 });
    },
    zoom: function zoom() {
      var zoomIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var acceleration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (this.passive) return;
      var realSpeed = this.zoomSpeed * acceleration;
      var speed = this.outputWidth * PCT_PER_ZOOM * realSpeed;
      var x = 1;
      if (zoomIn) {
        x = 1 + speed;
      } else if (this.imgData.width > MIN_WIDTH) {
        x = 1 - speed;
      }

      this.scaleRatio *= x;
    },
    zoomIn: function zoomIn() {
      this.zoom(true);
    },
    zoomOut: function zoomOut() {
      this.zoom(false);
    },
    rotate: function rotate() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.disableRotation || this.disabled || this.passive) return;
      step = parseInt(step);
      if (isNaN(step) || step > 3 || step < -3) {
        console.warn('Invalid argument for rotate() method. It should one of the integers from -3 to 3.');
        step = 1;
      }
      this._rotateByStep(step);
    },
    flipX: function flipX() {
      if (this.disableRotation || this.disabled || this.passive) return;
      this._setOrientation(2);
    },
    flipY: function flipY() {
      if (this.disableRotation || this.disabled || this.passive) return;
      this._setOrientation(4);
    },
    refresh: function refresh() {
      this.$nextTick(this._initialize);
    },
    hasImage: function hasImage() {
      return !!this.imageSet;
    },
    applyMetadata: function applyMetadata(metadata) {
      if (!metadata || this.passive) return;
      this.userMetadata = metadata;
      var ori = metadata.orientation || this.orientation || 1;
      this._setOrientation(ori, true);
    },
    generateDataUrl: function generateDataUrl(type, compressionRate) {
      if (!this.hasImage()) return '';
      return this.canvas.toDataURL(type, compressionRate);
    },
    generateBlob: function generateBlob(callback, mimeType, qualityArgument) {
      if (!this.hasImage()) {
        callback(null);
        return;
      }
      this.canvas.toBlob(callback, mimeType, qualityArgument);
    },
    promisedBlob: function promisedBlob() {
      var _this2 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (typeof Promise == 'undefined') {
        console.warn('No Promise support. Please add Promise polyfill if you want to use this method.');
        return;
      }
      return new Promise(function (resolve, reject) {
        try {
          _this2.generateBlob.apply(_this2, [function (blob) {
            resolve(blob);
          }].concat(args));
        } catch (err) {
          reject(err);
        }
      });
    },
    getMetadata: function getMetadata() {
      if (!this.hasImage()) return {};
      var _imgData = this.imgData,
          startX = _imgData.startX,
          startY = _imgData.startY;


      return {
        startX: startX,
        startY: startY,
        scale: this.scaleRatio,
        orientation: this.orientation
      };
    },
    supportDetection: function supportDetection() {
      if (typeof window === 'undefined') return;
      var div = document.createElement('div');
      return {
        'basic': window.requestAnimationFrame && window.File && window.FileReader && window.FileList && window.Blob,
        'dnd': 'ondragstart' in div && 'ondrop' in div
      };
    },
    chooseFile: function chooseFile() {
      if (this.passive) return;
      this.$refs.fileInput.click();
    },
    remove: function remove() {
      if (!this.imageSet) return;
      this._setPlaceholders();

      var hadImage = this.img != null;
      this.originalImage = null;
      this.img = null;
      this.$refs.fileInput.value = '';
      this.imgData = {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0
      };
      this.orientation = 1;
      this.scaleRatio = null;
      this.userMetadata = null;
      this.imageSet = false;
      this.chosenFile = null;
      if (this.video) {
        this.video.pause();
        this.video = null;
      }

      if (hadImage) {
        this.emitEvent(events.IMAGE_REMOVE_EVENT);
      }
    },
    addClipPlugin: function addClipPlugin(plugin) {
      if (!this.clipPlugins) {
        this.clipPlugins = [];
      }
      if (typeof plugin === 'function' && this.clipPlugins.indexOf(plugin) < 0) {
        this.clipPlugins.push(plugin);
      } else {
        throw Error('Clip plugins should be functions');
      }
    },
    emitNativeEvent: function emitNativeEvent(evt) {
      this.emitEvent(evt.type, evt);
    },
    _setContainerSize: function _setContainerSize() {
      if (this.useAutoSizing) {
        this.realWidth = +getComputedStyle(this.$refs.wrapper).width.slice(0, -2);
        this.realHeight = +getComputedStyle(this.$refs.wrapper).height.slice(0, -2);
      }
    },
    _autoSizingInit: function _autoSizingInit() {
      this._setContainerSize();
      window.addEventListener('resize', this._setContainerSize);
    },
    _autoSizingRemove: function _autoSizingRemove() {
      this._setContainerSize();
      window.removeEventListener('resize', this._setContainerSize);
    },
    _initialize: function _initialize() {
      this.canvas = this.$refs.canvas;
      this._setSize();
      this.canvas.style.backgroundColor = !this.canvasColor || this.canvasColor == 'default' ? 'transparent' : typeof this.canvasColor === 'string' ? this.canvasColor : '';
      this.ctx = this.canvas.getContext('2d');
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = "high";
      this.ctx.webkitImageSmoothingEnabled = true;
      this.ctx.msImageSmoothingEnabled = true;
      this.ctx.imageSmoothingEnabled = true;
      this.originalImage = null;
      this.img = null;
      this.$refs.fileInput.value = '';
      this.imageSet = false;
      this.chosenFile = null;
      this._setInitial();
      if (!this.passive) {
        this.emitEvent(events.INIT_EVENT, this);
      }
    },
    _setSize: function _setSize() {
      this.canvas.width = this.outputWidth;
      this.canvas.height = this.outputHeight;
      this.canvas.style.width = (this.useAutoSizing ? this.realWidth : this.width) + 'px';
      this.canvas.style.height = (this.useAutoSizing ? this.realHeight : this.height) + 'px';
    },
    _rotateByStep: function _rotateByStep(step) {
      var orientation = 1;
      switch (step) {
        case 1:
          orientation = 6;
          break;
        case 2:
          orientation = 3;
          break;
        case 3:
          orientation = 8;
          break;
        case -1:
          orientation = 8;
          break;
        case -2:
          orientation = 3;
          break;
        case -3:
          orientation = 6;
          break;
      }
      this._setOrientation(orientation);
    },
    _setImagePlaceholder: function _setImagePlaceholder() {
      var _this3 = this;

      var img = void 0;
      if (this.$slots.placeholder && this.$slots.placeholder[0]) {
        var vNode = this.$slots.placeholder[0];
        var tag = vNode.tag,
            elm = vNode.elm;

        if (tag == 'img' && elm) {
          img = elm;
        }
      }

      if (!img) return;

      var onLoad = function onLoad() {
        _this3.ctx.drawImage(img, 0, 0, _this3.outputWidth, _this3.outputHeight);
      };

      if (u.imageLoaded(img)) {
        onLoad();
      } else {
        img.onload = onLoad;
      }
    },
    _setTextPlaceholder: function _setTextPlaceholder() {
      var ctx = this.ctx;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      var defaultFontSize = this.outputWidth * DEFAULT_PLACEHOLDER_TAKEUP / this.placeholder.length;
      var fontSize = !this.computedPlaceholderFontSize || this.computedPlaceholderFontSize == 0 ? defaultFontSize : this.computedPlaceholderFontSize;
      ctx.font = fontSize + 'px sans-serif';
      ctx.fillStyle = !this.placeholderColor || this.placeholderColor == 'default' ? '#606060' : this.placeholderColor;
      ctx.fillText(this.placeholder, this.outputWidth / 2, this.outputHeight / 2);
    },
    _setPlaceholders: function _setPlaceholders() {
      this._paintBackground();
      this._setImagePlaceholder();
      this._setTextPlaceholder();
    },
    _setInitial: function _setInitial() {
      var _this4 = this;

      var src = void 0,
          img = void 0;
      if (this.$slots.initial && this.$slots.initial[0]) {
        var vNode = this.$slots.initial[0];
        var tag = vNode.tag,
            elm = vNode.elm;

        if (tag == 'img' && elm) {
          img = elm;
        }
      }
      if (this.initialImage && typeof this.initialImage === 'string') {
        src = this.initialImage;
        img = new Image();
        if (!/^data:/.test(src) && !/^blob:/.test(src)) {
          img.setAttribute('crossOrigin', 'anonymous');
        }
        img.src = src;
      } else if (_typeof(this.initialImage) === 'object' && this.initialImage instanceof Image) {
        img = this.initialImage;
      }
      if (!src && !img) {
        this._setPlaceholders();
        return;
      }
      this.currentIsInitial = true;
      if (u.imageLoaded(img)) {
        // this.emitEvent(events.INITIAL_IMAGE_LOADED_EVENT)
        this._onload(img, +img.dataset['exifOrientation'], true);
      } else {
        this.loading = true;
        img.onload = function () {
          // this.emitEvent(events.INITIAL_IMAGE_LOADED_EVENT)
          _this4._onload(img, +img.dataset['exifOrientation'], true);
        };

        img.onerror = function () {
          _this4._setPlaceholders();
        };
      }
    },
    _onload: function _onload(img) {
      var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var initial = arguments[2];

      if (this.imageSet) {
        this.remove();
      }
      this.originalImage = img;
      this.img = img;

      if (isNaN(orientation)) {
        orientation = 1;
      }

      this._setOrientation(orientation);

      if (initial) {
        this.emitEvent(events.INITIAL_IMAGE_LOADED_EVENT);
      }
    },
    _onVideoLoad: function _onVideoLoad(video, initial) {
      var _this5 = this;

      this.video = video;
      var canvas = document.createElement('canvas');
      var videoWidth = video.videoWidth,
          videoHeight = video.videoHeight;

      canvas.width = videoWidth;
      canvas.height = videoHeight;
      var ctx = canvas.getContext('2d');
      this.loading = false;
      var drawFrame = function drawFrame(initial) {
        if (!_this5.video) return;
        ctx.drawImage(_this5.video, 0, 0, videoWidth, videoHeight);
        var frame = new Image();
        frame.src = canvas.toDataURL();
        frame.onload = function () {
          _this5.img = frame;
          // this._placeImage()
          if (initial) {
            _this5._placeImage();
          } else {
            _this5._draw();
          }
        };
      };
      drawFrame(true);
      var keepDrawing = function keepDrawing() {
        _this5.$nextTick(function () {
          drawFrame();
          if (!_this5.video || _this5.video.ended || _this5.video.paused) return;
          requestAnimationFrame(keepDrawing);
        });
      };
      this.video.addEventListener('play', function () {
        requestAnimationFrame(keepDrawing);
      });
    },
    _handleClick: function _handleClick(evt) {
      this.emitNativeEvent(evt);
      if (!this.hasImage() && !this.disableClickToChoose && !this.disabled && !this.supportTouch && !this.passive) {
        this.chooseFile();
      }
    },
    _handleDblClick: function _handleDblClick(evt) {
      this.emitNativeEvent(evt);
      if (this.videoEnabled && this.video) {
        if (this.video.paused || this.video.ended) {
          this.video.play();
        } else {
          this.video.pause();
        }
        return;
      }
    },
    _handleInputChange: function _handleInputChange() {
      var input = this.$refs.fileInput;
      if (!input.files.length || this.passive) return;

      var file = input.files[0];
      this._onNewFileIn(file);
    },
    _onNewFileIn: function _onNewFileIn(file) {
      var _this6 = this;

      this.currentIsInitial = false;
      this.loading = true;
      this.emitEvent(events.FILE_CHOOSE_EVENT, file);
      this.chosenFile = file;
      if (!this._fileSizeIsValid(file)) {
        this.loading = false;
        this.emitEvent(events.FILE_SIZE_EXCEED_EVENT, file);
        return false;
      }
      if (!this._fileTypeIsValid(file)) {
        this.loading = false;
        this.emitEvent(events.FILE_TYPE_MISMATCH_EVENT, file);
        var type = file.type || file.name.toLowerCase().split('.').pop();
        return false;
      }

      if (typeof window !== 'undefined' && typeof window.FileReader !== 'undefined') {
        var fr = new FileReader();
        fr.onload = function (e) {
          var fileData = e.target.result;
          var base64 = u.parseDataUrl(fileData);
          var isVideo = /^video/.test(file.type);
          if (isVideo) {
            var video = document.createElement('video');
            video.src = fileData;
            fileData = null;
            if (video.readyState >= video.HAVE_FUTURE_DATA) {
              _this6._onVideoLoad(video);
            } else {
              video.addEventListener('canplay', function () {
                console.log('can play event');
                _this6._onVideoLoad(video);
              }, false);
            }
          } else {
            var orientation = 1;
            try {
              orientation = u.getFileOrientation(u.base64ToArrayBuffer(base64));
            } catch (err) {}
            if (orientation < 1) orientation = 1;
            var img = new Image();
            img.src = fileData;
            fileData = null;
            img.onload = function () {
              _this6._onload(img, orientation);
              _this6.emitEvent(events.NEW_IMAGE_EVENT);
            };
          }
        };
        fr.readAsDataURL(file);
      }
    },
    _fileSizeIsValid: function _fileSizeIsValid(file) {
      if (!file) return false;
      if (!this.fileSizeLimit || this.fileSizeLimit == 0) return true;

      return file.size < this.fileSizeLimit;
    },
    _fileTypeIsValid: function _fileTypeIsValid(file) {
      var acceptableMimeType = this.videoEnabled && /^video/.test(file.type) && document.createElement('video').canPlayType(file.type) || /^image/.test(file.type);
      if (!acceptableMimeType) return false;
      if (!this.accept) return true;
      var accept = this.accept;
      var baseMimetype = accept.replace(/\/.*$/, '');
      var types = accept.split(',');
      for (var i = 0, len = types.length; i < len; i++) {
        var type = types[i];
        var t = type.trim();
        if (t.charAt(0) == '.') {
          if (file.name.toLowerCase().split('.').pop() === t.toLowerCase().slice(1)) return true;
        } else if (/\/\*$/.test(t)) {
          var fileBaseType = file.type.replace(/\/.*$/, '');
          if (fileBaseType === baseMimetype) {
            return true;
          }
        } else if (file.type === type) {
          return true;
        }
      }

      return false;
    },
    _placeImage: function _placeImage(applyMetadata) {
      if (!this.img) return;
      var imgData = this.imgData;

      this.naturalWidth = this.img.naturalWidth;
      this.naturalHeight = this.img.naturalHeight;

      imgData.startX = u.numberValid(imgData.startX) ? imgData.startX : 0;
      imgData.startY = u.numberValid(imgData.startY) ? imgData.startY : 0;

      if (this.preventWhiteSpace) {
        this._aspectFill();
      } else if (!this.imageSet) {
        if (this.initialSize == 'contain') {
          this._aspectFit();
        } else if (this.initialSize == 'natural') {
          this._naturalSize();
        } else {
          this._aspectFill();
        }
      } else {
        this.imgData.width = this.naturalWidth * this.scaleRatio;
        this.imgData.height = this.naturalHeight * this.scaleRatio;
      }

      if (!this.imageSet) {
        if (/top/.test(this.initialPosition)) {
          imgData.startY = 0;
        } else if (/bottom/.test(this.initialPosition)) {
          imgData.startY = this.outputHeight - imgData.height;
        }

        if (/left/.test(this.initialPosition)) {
          imgData.startX = 0;
        } else if (/right/.test(this.initialPosition)) {
          imgData.startX = this.outputWidth - imgData.width;
        }

        if (/^-?\d+% -?\d+%$/.test(this.initialPosition)) {
          var result = /^(-?\d+)% (-?\d+)%$/.exec(this.initialPosition);
          var x = +result[1] / 100;
          var y = +result[2] / 100;
          imgData.startX = x * (this.outputWidth - imgData.width);
          imgData.startY = y * (this.outputHeight - imgData.height);
        }
      }

      applyMetadata && this._applyMetadata();

      if (applyMetadata && this.preventWhiteSpace) {
        this.zoom(false, 0);
      } else {
        this.move({ x: 0, y: 0 });
        this._draw();
      }
    },
    _aspectFill: function _aspectFill() {
      var imgWidth = this.naturalWidth;
      var imgHeight = this.naturalHeight;
      var canvasRatio = this.outputWidth / this.outputHeight;
      var scaleRatio = void 0;

      if (this.aspectRatio > canvasRatio) {
        scaleRatio = imgHeight / this.outputHeight;
        this.imgData.width = imgWidth / scaleRatio;
        this.imgData.height = this.outputHeight;
        this.imgData.startX = -(this.imgData.width - this.outputWidth) / 2;
        this.imgData.startY = 0;
      } else {
        scaleRatio = imgWidth / this.outputWidth;
        this.imgData.height = imgHeight / scaleRatio;
        this.imgData.width = this.outputWidth;
        this.imgData.startY = -(this.imgData.height - this.outputHeight) / 2;
        this.imgData.startX = 0;
      }
    },
    _aspectFit: function _aspectFit() {
      var imgWidth = this.naturalWidth;
      var imgHeight = this.naturalHeight;
      var canvasRatio = this.outputWidth / this.outputHeight;
      var scaleRatio = void 0;
      if (this.aspectRatio > canvasRatio) {
        scaleRatio = imgWidth / this.outputWidth;
        this.imgData.height = imgHeight / scaleRatio;
        this.imgData.width = this.outputWidth;
        this.imgData.startY = -(this.imgData.height - this.outputHeight) / 2;
        this.imgData.startX = 0;
      } else {
        scaleRatio = imgHeight / this.outputHeight;
        this.imgData.width = imgWidth / scaleRatio;
        this.imgData.height = this.outputHeight;
        this.imgData.startX = -(this.imgData.width - this.outputWidth) / 2;
        this.imgData.startY = 0;
      }
    },
    _naturalSize: function _naturalSize() {
      var imgWidth = this.naturalWidth;
      var imgHeight = this.naturalHeight;
      this.imgData.width = imgWidth;
      this.imgData.height = imgHeight;
      this.imgData.startX = -(this.imgData.width - this.outputWidth) / 2;
      this.imgData.startY = -(this.imgData.height - this.outputHeight) / 2;
    },
    _handlePointerStart: function _handlePointerStart(evt) {
      this.emitNativeEvent(evt);
      if (this.passive) return;
      this.supportTouch = true;
      this.pointerMoved = false;
      var pointerCoord = u.getPointerCoords(evt, this);
      this.pointerStartCoord = pointerCoord;

      if (this.disabled) return;
      // simulate click with touch on mobile devices
      if (!this.hasImage() && !this.disableClickToChoose) {
        this.tabStart = new Date().valueOf();
        return;
      }
      // ignore mouse right click and middle click
      if (evt.which && evt.which > 1) return;

      if (!evt.touches || evt.touches.length === 1) {
        this.dragging = true;
        this.pinching = false;
        var coord = u.getPointerCoords(evt, this);
        this.lastMovingCoord = coord;
      }

      if (evt.touches && evt.touches.length === 2 && !this.disablePinchToZoom) {
        this.dragging = false;
        this.pinching = true;
        this.pinchDistance = u.getPinchDistance(evt, this);
      }

      var cancelEvents = ['mouseup', 'touchend', 'touchcancel', 'pointerend', 'pointercancel'];
      for (var i = 0, len = cancelEvents.length; i < len; i++) {
        var e = cancelEvents[i];
        document.addEventListener(e, this._handlePointerEnd);
      }
    },
    _handlePointerEnd: function _handlePointerEnd(evt) {
      this.emitNativeEvent(evt);
      if (this.passive) return;
      var pointerMoveDistance = 0;
      if (this.pointerStartCoord) {
        var pointerCoord = u.getPointerCoords(evt, this);
        pointerMoveDistance = Math.sqrt(Math.pow(pointerCoord.x - this.pointerStartCoord.x, 2) + Math.pow(pointerCoord.y - this.pointerStartCoord.y, 2)) || 0;
      }
      if (this.disabled) return;
      if (!this.hasImage() && !this.disableClickToChoose) {
        var tabEnd = new Date().valueOf();
        if (pointerMoveDistance < CLICK_MOVE_THRESHOLD && tabEnd - this.tabStart < MIN_MS_PER_CLICK && this.supportTouch) {
          this.chooseFile();
        }
        this.tabStart = 0;
        return;
      }

      this.dragging = false;
      this.pinching = false;
      this.pinchDistance = 0;
      this.lastMovingCoord = null;
      this.pointerMoved = false;
      this.pointerStartCoord = null;
    },
    _handlePointerMove: function _handlePointerMove(evt) {
      this.emitNativeEvent(evt);
      if (this.passive) return;
      this.pointerMoved = true;
      if (!this.hasImage()) return;
      var coord = u.getPointerCoords(evt, this);
      this.currentPointerCoord = coord;

      if (this.disabled || this.disableDragToMove) return;

      evt.preventDefault();
      if (!evt.touches || evt.touches.length === 1) {
        if (!this.dragging) return;
        if (this.lastMovingCoord) {
          this.move({
            x: coord.x - this.lastMovingCoord.x,
            y: coord.y - this.lastMovingCoord.y
          });
        }
        this.lastMovingCoord = coord;
      }

      if (evt.touches && evt.touches.length === 2 && !this.disablePinchToZoom) {
        if (!this.pinching) return;
        var distance = u.getPinchDistance(evt, this);
        var delta = distance - this.pinchDistance;
        this.zoom(delta > 0, PINCH_ACCELERATION);
        this.pinchDistance = distance;
      }
    },
    _handlePointerLeave: function _handlePointerLeave(evt) {
      this.emitNativeEvent(evt);
      if (this.passive) return;
      this.currentPointerCoord = null;
    },
    _handleWheel: function _handleWheel(evt) {
      var _this7 = this;

      this.emitNativeEvent(evt);
      if (this.passive) return;
      if (this.disabled || this.disableScrollToZoom || !this.hasImage()) return;
      evt.preventDefault();
      this.scrolling = true;
      if (evt.wheelDelta < 0 || evt.deltaY > 0 || evt.detail > 0) {
        this.zoom(this.reverseScrollToZoom);
      } else if (evt.wheelDelta > 0 || evt.deltaY < 0 || evt.detail < 0) {
        this.zoom(!this.reverseScrollToZoom);
      }
      this.$nextTick(function () {
        _this7.scrolling = false;
      });
    },
    _handleDragEnter: function _handleDragEnter(evt) {
      this.emitNativeEvent(evt);
      if (this.passive) return;
      if (this.disabled || this.disableDragAndDrop || !u.eventHasFile(evt)) return;
      if (this.hasImage() && !this.replaceDrop) return;
      this.fileDraggedOver = true;
    },
    _handleDragLeave: function _handleDragLeave(evt) {
      this.emitNativeEvent(evt);
      if (this.passive) return;
      if (!this.fileDraggedOver || !u.eventHasFile(evt)) return;
      this.fileDraggedOver = false;
    },
    _handleDragOver: function _handleDragOver(evt) {
      this.emitNativeEvent(evt);
    },
    _handleDrop: function _handleDrop(evt) {
      this.emitNativeEvent(evt);
      if (this.passive) return;
      if (!this.fileDraggedOver || !u.eventHasFile(evt)) return;
      if (this.hasImage() && !this.replaceDrop) {
        return;
      }
      this.fileDraggedOver = false;

      var file = void 0;
      var dt = evt.dataTransfer;
      if (!dt) return;
      if (dt.items) {
        for (var i = 0, len = dt.items.length; i < len; i++) {
          var item = dt.items[i];
          if (item.kind == 'file') {
            file = item.getAsFile();
            break;
          }
        }
      } else {
        file = dt.files[0];
      }

      if (file) {
        this._onNewFileIn(file);
      }
    },
    _preventMovingToWhiteSpace: function _preventMovingToWhiteSpace() {
      if (this.imgData.startX > 0) {
        this.imgData.startX = 0;
      }
      if (this.imgData.startY > 0) {
        this.imgData.startY = 0;
      }
      if (this.outputWidth - this.imgData.startX > this.imgData.width) {
        this.imgData.startX = -(this.imgData.width - this.outputWidth);
      }
      if (this.outputHeight - this.imgData.startY > this.imgData.height) {
        this.imgData.startY = -(this.imgData.height - this.outputHeight);
      }
    },
    _preventZoomingToWhiteSpace: function _preventZoomingToWhiteSpace() {
      if (this.imgData.width < this.outputWidth) {
        this.scaleRatio = this.outputWidth / this.naturalWidth;
      }

      if (this.imgData.height < this.outputHeight) {
        this.scaleRatio = this.outputHeight / this.naturalHeight;
      }
    },
    _setOrientation: function _setOrientation() {
      var _this8 = this;

      var orientation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
      var applyMetadata = arguments[1];

      var useOriginal = applyMetadata;
      if (orientation > 1 || useOriginal) {
        if (!this.img) return;
        this.rotating = true;
        // u.getRotatedImageData(useOriginal ? this.originalImage : this.img, orientation)
        var _img = u.getRotatedImage(useOriginal ? this.originalImage : this.img, orientation);
        _img.onload = function () {
          _this8.img = _img;
          _this8._placeImage(applyMetadata);
        };
      } else {
        this._placeImage(applyMetadata);
      }

      if (orientation == 2) {
        // flip x
        this.orientation = u.flipX(this.orientation);
      } else if (orientation == 4) {
        // flip y
        this.orientation = u.flipY(this.orientation);
      } else if (orientation == 6) {
        // 90 deg
        this.orientation = u.rotate90(this.orientation);
      } else if (orientation == 3) {
        // 180 deg
        this.orientation = u.rotate90(u.rotate90(this.orientation));
      } else if (orientation == 8) {
        // 270 deg
        this.orientation = u.rotate90(u.rotate90(u.rotate90(this.orientation)));
      } else {
        this.orientation = orientation;
      }

      if (useOriginal) {
        this.orientation = orientation;
      }
    },
    _paintBackground: function _paintBackground() {
      var backgroundColor = !this.canvasColor || this.canvasColor == 'default' ? 'transparent' : this.canvasColor;
      this.ctx.fillStyle = backgroundColor;
      this.ctx.clearRect(0, 0, this.outputWidth, this.outputHeight);
      this.ctx.fillRect(0, 0, this.outputWidth, this.outputHeight);
    },
    _draw: function _draw() {
      var _this9 = this;

      this.$nextTick(function () {
        if (typeof window !== 'undefined' && window.requestAnimationFrame) {
          requestAnimationFrame(_this9._drawFrame);
        } else {
          _this9._drawFrame();
        }
      });
    },
    _drawFrame: function _drawFrame() {
      if (!this.img) return;
      this.loading = false;
      var ctx = this.ctx;
      var _imgData2 = this.imgData,
          startX = _imgData2.startX,
          startY = _imgData2.startY,
          width = _imgData2.width,
          height = _imgData2.height;


      this._paintBackground();
      ctx.drawImage(this.img, startX, startY, width, height);

      if (this.preventWhiteSpace) {
        this._clip(this._createContainerClipPath);
        // this._clip(this._createImageClipPath)
      }

      this.emitEvent(events.DRAW_EVENT, ctx);
      if (!this.imageSet) {
        this.imageSet = true;
        this.emitEvent(events.NEW_IMAGE_DRAWN_EVENT);
      }
      this.rotating = false;
    },
    _clipPathFactory: function _clipPathFactory(x, y, width, height) {
      var ctx = this.ctx;
      var radius = typeof this.imageBorderRadius === 'number' ? this.imageBorderRadius : !isNaN(Number(this.imageBorderRadius)) ? Number(this.imageBorderRadius) : 0;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    },
    _createContainerClipPath: function _createContainerClipPath() {
      var _this10 = this;

      this._clipPathFactory(0, 0, this.outputWidth, this.outputHeight);
      if (this.clipPlugins && this.clipPlugins.length) {
        this.clipPlugins.forEach(function (func) {
          func(_this10.ctx, 0, 0, _this10.outputWidth, _this10.outputHeight);
        });
      }
    },


    // _createImageClipPath () {
    //   let { startX, startY, width, height } = this.imgData
    //   let w = width
    //   let h = height
    //   let x = startX
    //   let y = startY
    //   if (w < h) {
    //     h = this.outputHeight * (width / this.outputWidth)
    //   }
    //   if (h < w) {
    //     w = this.outputWidth * (height / this.outputHeight)
    //     x = startX + (width - this.outputWidth) / 2
    //   }
    //   this._clipPathFactory(x, startY, w, h)
    // },

    _clip: function _clip(createPath) {
      var ctx = this.ctx;
      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.globalCompositeOperation = 'destination-in';
      createPath();
      ctx.fill();
      ctx.restore();
    },
    _applyMetadata: function _applyMetadata() {
      var _this11 = this;

      if (!this.userMetadata) return;
      var _userMetadata = this.userMetadata,
          startX = _userMetadata.startX,
          startY = _userMetadata.startY,
          scale = _userMetadata.scale;


      if (u.numberValid(startX)) {
        this.imgData.startX = startX;
      }

      if (u.numberValid(startY)) {
        this.imgData.startY = startY;
      }

      if (u.numberValid(scale)) {
        this.scaleRatio = scale;
      }

      this.$nextTick(function () {
        _this11.userMetadata = null;
      });
    },
    onDimensionChange: function onDimensionChange() {
      if (!this.img) {
        this._initialize();
      } else {
        if (this.preventWhiteSpace) {
          this.imageSet = false;
        }
        this._setSize();
        this._placeImage();
      }
    }
  }
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var defaultOptions = {
  componentName: 'croppa'
};

var VueCroppa = {
  install: function install(Vue, options) {
    options = objectAssign({}, defaultOptions, options);
    var version = Number(Vue.version.split('.')[0]);
    if (version < 2) {
      throw new Error('vue-croppa supports vue version 2.0 and above. You are using Vue@' + version + '. Please upgrade to the latest version of Vue.');
    }
    var componentName = options.componentName || 'croppa';

    // registration
    Vue.component(componentName, component);
  },

  component: component
};

return VueCroppa;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Availability.vue?vue&type=template&id=626a0a5a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Availability.vue?vue&type=template&id=626a0a5a& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "button",
    {
      staticClass: "button is-small is-rounded",
      class: { "is-secondary": _vm.isAvailable, "is-danger": !_vm.isAvailable },
      staticStyle: { "margin-top": ".5rem" },
      on: { click: _vm.setAvailability }
    },
    [
      _c("i", {
        staticClass: "fa",
        class: { "fa-check": _vm.isAvailable, "fa-times": !_vm.isAvailable },
        staticStyle: { "margin-right": ".5rem" }
      }),
      _vm._v(" " + _vm._s(_vm.text))
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Dashboard.vue?vue&type=template&id=63c3b6cc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/Dashboard.vue?vue&type=template&id=63c3b6cc& ***!
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
    return _c("div", [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("h1", { staticClass: "title" }, [_vm._v("Dashboard")])
        ])
      ])
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
    _c("br"),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns is-multiline" },
      _vm._l(_vm.adjusterLicenses, function(license) {
        return _c("License", {
          key: license.id,
          attrs: {
            license: license,
            states: _vm.states,
            months: _vm.months,
            currentYear: _vm.currentYear
          },
          on: { update: _vm.update, remove: _vm.remove }
        })
      }),
      1
    ),
    _vm._v(" "),
    _c("br"),
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
                            _vm._m(0),
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
      _c("xactnet-addresses"),
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
                _c("i", { staticClass: "fa fa-dashboard" })
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("Dashboard")])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: { name: "personalInfo" }, tag: "li", exact: "" } },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=template&id=4e46a09c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=template&id=4e46a09c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card", staticStyle: { "margin-top": "1rem" } },
    [
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "columns is-mobile" }, [
            _c(
              "div",
              {
                staticClass: "column is-10",
                staticStyle: { "padding-top": "0", "padding-bottom": "0" }
              },
              [
                _c(
                  "h3",
                  { staticStyle: { "font-weight": "700" } },
                  [_vm._t("default")],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "column is-2",
                staticStyle: { "padding-top": "0", "padding-bottom": "0" }
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "icon has-text-info",
                    staticStyle: { cursor: "pointer" },
                    on: { click: _vm.editText }
                  },
                  [
                    !_vm.editing
                      ? _c("i", { staticClass: "fa fa-pencil" })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.editing
                      ? _c("i", { staticClass: "fa fa-times" })
                      : _vm._e()
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass: "column is-12",
                staticStyle: { "padding-top": "0" }
              },
              [
                !_vm.editing
                  ? _c("span", [
                      _c("p", { domProps: { textContent: _vm._s(_vm.text) } })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.editing
                  ? _c("span", [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.text,
                            expression: "form.text"
                          }
                        ],
                        staticClass: "textarea",
                        domProps: { value: _vm.form.text },
                        on: {
                          keyup: function($event) {
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
                            if (!$event.ctrlKey) {
                              return null
                            }
                            return _vm.saveText($event)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "text", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "button is-small is-primary",
                          staticStyle: { "margin-top": ".5rem" },
                          on: { click: _vm.saveText }
                        },
                        [_vm._v("Save")]
                      )
                    ])
                  : _vm._e()
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/License.vue?vue&type=template&id=3e6aae00&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/License.vue?vue&type=template&id=3e6aae00& ***!
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
  return _c("div", { staticClass: "column is-half" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _vm._v(
            "\n\t\t\t     " +
              _vm._s(_vm.license.license_state) +
              " Adjusting License\n\t\t\t    "
          )
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "card-header-icon",
            class: {
              "has-text-grey": _vm.editing,
              "has-background-grey-dark": _vm.editing
            },
            attrs: { "aria-label": "edit" },
            on: {
              click: function($event) {
                return _vm.edit()
              }
            }
          },
          [
            _c("span", { staticClass: "icon" }, [
              _c("i", {
                staticClass: "fa",
                class: { "fa-edit": !_vm.editing, "fa-close": _vm.editing },
                attrs: { "aria-hidden": "true" }
              })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "columns is-multiline is-mobile" }, [
            _c("div", { staticClass: "column is-6" }, [
              !_vm.editing
                ? _c("p", [
                    _c("strong", [_vm._v("License #:")]),
                    _vm._v(" " + _vm._s(_vm.license.license_number))
                  ])
                : _c("div", { staticClass: "field" }, [
                    _c("label", { staticClass: "label" }, [
                      _vm._v("License #")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "control" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editedLicense.license_number,
                            expression: "editedLicense.license_number"
                          }
                        ],
                        staticClass: "input",
                        attrs: { type: "text", name: "license_number" },
                        domProps: { value: _vm.editedLicense.license_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editedLicense,
                              "license_number",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column is-6" }, [
              !_vm.editing
                ? _c("p", [
                    _c("strong", [_vm._v("Expires:")]),
                    _vm._v(
                      " " +
                        _vm._s(_vm.license.expiration_month) +
                        " / " +
                        _vm._s(_vm.license.expiration_year)
                    )
                  ])
                : _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column" }, [
                      _c("div", { staticClass: "field" }, [
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "month" } },
                          [_vm._v("Month")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("div", { staticClass: "select is-fullwidth" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editedLicense.expiration_month,
                                    expression: "editedLicense.expiration_month"
                                  }
                                ],
                                attrs: {
                                  type: "text",
                                  name: "expiration_month"
                                },
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
                                      _vm.editedLicense,
                                      "expiration_month",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.months, function(month) {
                                return _c(
                                  "option",
                                  { domProps: { value: month.abbr } },
                                  [_vm._v(_vm._s(month.abbr))]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column" }, [
                      _c("div", { staticClass: "field" }, [
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "month" } },
                          [_vm._v("Year")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "control" }, [
                          _c("div", { staticClass: "select is-fullwidth" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editedLicense.expiration_year,
                                    expression: "editedLicense.expiration_year"
                                  }
                                ],
                                attrs: {
                                  type: "text",
                                  name: "expiration_year"
                                },
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
                                      _vm.editedLicense,
                                      "expiration_year",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(10, function(n) {
                                return _c(
                                  "option",
                                  {
                                    domProps: { value: _vm.currentYear + n - 1 }
                                  },
                                  [_vm._v(_vm._s(_vm.currentYear + n - 1))]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
            ]),
            _vm._v(" "),
            _vm.editing
              ? _c("div", { staticClass: "column is-12" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button is-info",
                      on: {
                        click: function($event) {
                          return _vm.update()
                        }
                      }
                    },
                    [_vm._v("Save")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button is-danger",
                      on: {
                        click: function($event) {
                          return _vm.remove()
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button",
                      on: {
                        click: function($event) {
                          _vm.editing = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ])
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/StatusManager.vue?vue&type=template&id=b7b0dc4c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/StatusManager.vue?vue&type=template&id=b7b0dc4c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "dropdown is-hoverable" }, [
    _c("div", { staticClass: "dropdown-trigger" }, [
      _c(
        "button",
        {
          staticClass: "button is-dark is-small is-rounded",
          class: { "is-info": _vm.isActive, "is-danger": _vm.isNoHire }
        },
        [
          _c("span", {
            domProps: { textContent: _vm._s(_vm.capitalize(_vm.status)) }
          }),
          _vm._v(" "),
          _vm._m(0)
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
        _c(
          "div",
          { staticClass: "dropdown-content" },
          _vm._l(_vm.statuses, function(status) {
            return _c("a", {
              staticClass: "dropdown-item",
              attrs: { href: "#" },
              domProps: { textContent: _vm._s(_vm.capitalize(status)) },
              on: {
                click: function($event) {
                  return _vm.setStatus(status)
                }
              }
            })
          }),
          0
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
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-angle-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=template&id=137bc5cb&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=template&id=137bc5cb& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "roles" }, [
    _c(
      "span",
      { staticStyle: { "font-weight": "700" } },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "icon tooltip is-tooltip-right",
        staticStyle: { cursor: "pointer" },
        attrs: { "data-tooltip": _vm.tooltipText },
        on: {
          click: function($event) {
            _vm.showAll = !_vm.showAll
          }
        }
      },
      [
        _c("i", {
          staticClass: "fa",
          class: {
            "fa-plus-circle": !_vm.showAll,
            "fa-times-circle": _vm.showAll
          }
        })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "tags",
        class: { showAll: _vm.showAll },
        staticStyle: { "margin-top": ".5rem" },
        attrs: { id: "roles" }
      },
      _vm._l(_vm.roles, function(role) {
        return _c("span", {
          staticClass: "tag",
          class: { "is-secondary": _vm.hasRole(role.id) },
          staticStyle: { cursor: "pointer" },
          domProps: { textContent: _vm._s(role.label) },
          on: {
            click: function($event) {
              return _vm.assignRole(role.id)
            }
          }
        })
      }),
      0
    )
  ])
}
var staticRenderFns = []
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
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column is-4" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            },
            keydown: function($event) {
              return _vm.errors.clear($event.target.name)
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
                _c(
                  "span",
                  {
                    staticClass: "icon is-small is-left",
                    staticStyle: { "pointer-events": "auto" }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.toggleEditing }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editedXactnetAddress.address,
                      expression: "editedXactnetAddress.address"
                    }
                  ],
                  staticClass: "input",
                  staticStyle: {
                    border: "none",
                    "border-bottom": "1px solid #ccc",
                    background: "transparent",
                    "box-shadow": "none"
                  },
                  attrs: { type: "text" },
                  domProps: { value: _vm.editedXactnetAddress.address },
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
                        return _vm.toggleEditing($event)
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
                        _vm.editedXactnetAddress,
                        "address",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.errors.has("xactnet_address")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.errors.get("xactnet_address"))
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.errors.has("current_xactnet_address")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(
                        _vm.errors.get("current_xactnet_address")
                      )
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
                  return _vm.toggleOptions(true)
                },
                mouseleave: function($event) {
                  return _vm.toggleOptions(false)
                }
              },
              model: {
                value: _vm.xactnetAddress,
                callback: function($$v) {
                  _vm.xactnetAddress = $$v
                },
                expression: "xactnetAddress"
              }
            },
            [
              _vm._v(
                "\n\t\t\t" +
                  _vm._s(_vm.xactnetAddress.address) +
                  " \n\t\t\t \n\t\t\t"
              ),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showOptions,
                      expression: "showOptions"
                    }
                  ]
                },
                [
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
                        [_vm._m(0)]
                      )
                    : _vm._e(),
                  _vm._v("\n\t\t\t |  \n\t\t\t"),
                  !_vm.editing
                    ? _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.deleteAddress(_vm.xactnetAddress.id)
                            }
                          }
                        },
                        [_vm._m(1)]
                      )
                    : _vm._e(),
                  _vm._v("\n\t\t\t | \n\t\t\t"),
                  !_vm.editing
                    ? _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.copyToClipboard($event)
                            }
                          }
                        },
                        [_vm._m(2)]
                      )
                    : _vm._e()
                ]
              )
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
    return _c("span", { staticClass: "icon is-small has-text-dark" }, [
      _c("span", { staticClass: "fa fa-pencil" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small has-text-danger" }, [
      _c("span", { staticClass: "fa fa-trash-o" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small has-text-secondary" }, [
      _c("span", { staticClass: "fa fa-copy" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=template&id=b50f0620&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=template&id=b50f0620& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "column is-10" },
        [
          _vm._l(_vm.xactnetAddresses, function(address) {
            return _c("xactnet-address", {
              key: address.id,
              attrs: {
                xactnetAddress: address,
                errors: _vm.form.errors,
                updateError: _vm.updateError
              },
              on: {
                "xactnet-address-edited": _vm.update,
                "xactnet-address-deleted": _vm.remove
              }
            })
          }),
          _vm._v(" "),
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
                    _c(
                      "span",
                      {
                        staticClass: "icon is-small is-left",
                        staticStyle: { "pointer-events": "auto" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-times",
                          staticStyle: { cursor: "pointer" },
                          on: { click: _vm.toggleEditing }
                        })
                      ]
                    ),
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
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.xactnet_address },
                      on: {
                        keyup: function($event) {
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
                  _vm.form.errors.has("xactnet_address")
                    ? _c("span", {
                        staticClass: "help is-danger",
                        domProps: {
                          textContent: _vm._s(
                            _vm.form.errors.get("xactnet_address")
                          )
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
                  staticClass: "icon has-text-primary",
                  staticStyle: { cursor: "pointer" },
                  on: { click: _vm.create }
                },
                [
                  _c("span", {
                    staticClass: "fa fa-plus-circle",
                    staticStyle: { "margin-left": "1rem" }
                  }),
                  _vm._v("  new")
                ]
              )
            : _vm._e()
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
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Xactnet Addresses")]), _vm._v(": ")])
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
  abbr: 'PR',
  name: 'Puerto Rico'
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

/***/ "./resources/assets/js/profile/Availability.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/profile/Availability.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Availability_vue_vue_type_template_id_626a0a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Availability.vue?vue&type=template&id=626a0a5a& */ "./resources/assets/js/profile/Availability.vue?vue&type=template&id=626a0a5a&");
/* harmony import */ var _Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Availability.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/Availability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Availability_vue_vue_type_template_id_626a0a5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Availability_vue_vue_type_template_id_626a0a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/Availability.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/Availability.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/profile/Availability.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Availability.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Availability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/Availability.vue?vue&type=template&id=626a0a5a&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/profile/Availability.vue?vue&type=template&id=626a0a5a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_626a0a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Availability.vue?vue&type=template&id=626a0a5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Availability.vue?vue&type=template&id=626a0a5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_626a0a5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_626a0a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/profile/Dashboard.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/profile/Dashboard.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_63c3b6cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=63c3b6cc& */ "./resources/assets/js/profile/Dashboard.vue?vue&type=template&id=63c3b6cc&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_63c3b6cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_63c3b6cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/profile/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/Dashboard.vue?vue&type=template&id=63c3b6cc&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/profile/Dashboard.vue?vue&type=template&id=63c3b6cc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_63c3b6cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=63c3b6cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/Dashboard.vue?vue&type=template&id=63c3b6cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_63c3b6cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_63c3b6cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/profile/components/EditableTextCard.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/profile/components/EditableTextCard.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditableTextCard_vue_vue_type_template_id_4e46a09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableTextCard.vue?vue&type=template&id=4e46a09c& */ "./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=template&id=4e46a09c&");
/* harmony import */ var _EditableTextCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableTextCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditableTextCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditableTextCard_vue_vue_type_template_id_4e46a09c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditableTextCard_vue_vue_type_template_id_4e46a09c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/EditableTextCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditableTextCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=template&id=4e46a09c&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=template&id=4e46a09c& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextCard_vue_vue_type_template_id_4e46a09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditableTextCard.vue?vue&type=template&id=4e46a09c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/EditableTextCard.vue?vue&type=template&id=4e46a09c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextCard_vue_vue_type_template_id_4e46a09c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextCard_vue_vue_type_template_id_4e46a09c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/profile/components/License.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/profile/components/License.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _License_vue_vue_type_template_id_3e6aae00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./License.vue?vue&type=template&id=3e6aae00& */ "./resources/assets/js/profile/components/License.vue?vue&type=template&id=3e6aae00&");
/* harmony import */ var _License_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./License.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/License.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _License_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _License_vue_vue_type_template_id_3e6aae00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _License_vue_vue_type_template_id_3e6aae00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/License.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/License.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/License.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_License_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./License.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/License.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_License_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/License.vue?vue&type=template&id=3e6aae00&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/License.vue?vue&type=template&id=3e6aae00& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_License_vue_vue_type_template_id_3e6aae00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./License.vue?vue&type=template&id=3e6aae00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/License.vue?vue&type=template&id=3e6aae00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_License_vue_vue_type_template_id_3e6aae00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_License_vue_vue_type_template_id_3e6aae00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/profile/components/StatusManager.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/profile/components/StatusManager.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatusManager_vue_vue_type_template_id_b7b0dc4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusManager.vue?vue&type=template&id=b7b0dc4c& */ "./resources/assets/js/profile/components/StatusManager.vue?vue&type=template&id=b7b0dc4c&");
/* harmony import */ var _StatusManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusManager.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/StatusManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatusManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatusManager_vue_vue_type_template_id_b7b0dc4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatusManager_vue_vue_type_template_id_b7b0dc4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/StatusManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/StatusManager.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/StatusManager.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/StatusManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/StatusManager.vue?vue&type=template&id=b7b0dc4c&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/StatusManager.vue?vue&type=template&id=b7b0dc4c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusManager_vue_vue_type_template_id_b7b0dc4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusManager.vue?vue&type=template&id=b7b0dc4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/StatusManager.vue?vue&type=template&id=b7b0dc4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusManager_vue_vue_type_template_id_b7b0dc4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusManager_vue_vue_type_template_id_b7b0dc4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/profile/components/UserRoleManager.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/profile/components/UserRoleManager.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserRoleManager_vue_vue_type_template_id_137bc5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRoleManager.vue?vue&type=template&id=137bc5cb& */ "./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=template&id=137bc5cb&");
/* harmony import */ var _UserRoleManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRoleManager.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserRoleManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserRoleManager.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserRoleManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserRoleManager_vue_vue_type_template_id_137bc5cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserRoleManager_vue_vue_type_template_id_137bc5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/UserRoleManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoleManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoleManager.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=template&id=137bc5cb&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=template&id=137bc5cb& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_template_id_137bc5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoleManager.vue?vue&type=template&id=137bc5cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/UserRoleManager.vue?vue&type=template&id=137bc5cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_template_id_137bc5cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoleManager_vue_vue_type_template_id_137bc5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/profile/components/XactnetAddresses.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/profile/components/XactnetAddresses.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _XactnetAddresses_vue_vue_type_template_id_b50f0620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XactnetAddresses.vue?vue&type=template&id=b50f0620& */ "./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=template&id=b50f0620&");
/* harmony import */ var _XactnetAddresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XactnetAddresses.vue?vue&type=script&lang=js& */ "./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _XactnetAddresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _XactnetAddresses_vue_vue_type_template_id_b50f0620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _XactnetAddresses_vue_vue_type_template_id_b50f0620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/profile/components/XactnetAddresses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./XactnetAddresses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=template&id=b50f0620&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=template&id=b50f0620& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddresses_vue_vue_type_template_id_b50f0620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./XactnetAddresses.vue?vue&type=template&id=b50f0620& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/profile/components/XactnetAddresses.vue?vue&type=template&id=b50f0620&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddresses_vue_vue_type_template_id_b50f0620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_XactnetAddresses_vue_vue_type_template_id_b50f0620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard */ "./resources/assets/js/profile/Dashboard.vue");
/* harmony import */ var _PersonalInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PersonalInformation */ "./resources/assets/js/profile/PersonalInformation.vue");
/* harmony import */ var _Licenses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Licenses */ "./resources/assets/js/profile/Licenses.vue");
/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Documents */ "./resources/assets/js/profile/Documents.vue");
/* harmony import */ var _Certifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Certifications */ "./resources/assets/js/profile/Certifications.vue");
/* harmony import */ var _WorkHistory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WorkHistory */ "./resources/assets/js/profile/WorkHistory.vue");
/* harmony import */ var _ProfileNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProfileNavigation */ "./resources/assets/js/profile/ProfileNavigation.vue");
/* harmony import */ var _Availability__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Availability */ "./resources/assets/js/profile/Availability.vue");
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");
/* harmony import */ var _components_EditableTextCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/EditableTextCard */ "./resources/assets/js/profile/components/EditableTextCard.vue");
/* harmony import */ var _components_UserRoleManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/UserRoleManager */ "./resources/assets/js/profile/components/UserRoleManager.vue");
/* harmony import */ var _components_StatusManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/StatusManager */ "./resources/assets/js/profile/components/StatusManager.vue");















vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_croppa__WEBPACK_IMPORTED_MODULE_2___default.a, {
  componentName: 'avatar-cropper'
});
var routes = [{
  path: '/',
  name: "home",
  component: _Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/personal-info',
  name: "personalInfo",
  component: _PersonalInformation__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: '/licenses',
  name: "licenses",
  component: _Licenses__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  path: '/documents',
  name: 'documents',
  component: _Documents__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  path: '/work-history',
  name: "workHistory",
  component: _WorkHistory__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  path: '/certifications',
  name: 'certifications',
  component: _Certifications__WEBPACK_IMPORTED_MODULE_7__["default"]
} // { path: '/complete', component: Complete }
];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: routes,
  linkActiveClass: 'is-active'
}); // router.beforeEach((to, from, next) => {
// })

var Profile = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  name: 'Profile',
  router: router,
  components: {
    profileNavigation: _ProfileNavigation__WEBPACK_IMPORTED_MODULE_9__["default"],
    availability: _Availability__WEBPACK_IMPORTED_MODULE_10__["default"],
    roleManager: _components_UserRoleManager__WEBPACK_IMPORTED_MODULE_13__["default"],
    statusManager: _components_StatusManager__WEBPACK_IMPORTED_MODULE_14__["default"],
    priority: _components_EditableTextCard__WEBPACK_IMPORTED_MODULE_12__["default"],
    notes: _components_EditableTextCard__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  mounted: function mounted() {
    this.user = window.userData;
    this.roles = window.roles;
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
      google: {},
      roles: []
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
    },
    updateAvailability: function updateAvailability(availability) {
      return this.user.available = availability;
    },
    updatePriority: function updatePriority(priority) {
      return this.user.priority = priority;
    },
    updateNotes: function updateNotes(note) {
      return this.user.notes = note;
    },
    updateRoles: function updateRoles(roles) {
      this.user.roles = roles;
    },
    updateStatus: function updateStatus(status) {
      return this.user.status = status;
    } // avatarPath() {
    // 	if (this.userHasAvatar) {
    // 		return this.user.avatar.path;
    // 	}
    // 	return "#";
    // }

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var FormWithFiles = /*#__PURE__*/function (_Form) {
  _inherits(FormWithFiles, _Form);

  var _super = _createSuper(FormWithFiles);

  function FormWithFiles(data) {
    _classCallCheck(this, FormWithFiles);

    return _super.call(this, data);
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