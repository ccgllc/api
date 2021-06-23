<<<<<<< Updated upstream
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/0ug":function(t,e,n){"use strict";e.a=[{name:"Line Item",type:"QuantifiableLineItem",quantity:1,rate:0,description:"Description Here",taxable:!0,total:0},{name:"Service Fee Line Item",type:"ServiceFeeLineItem",description:"Service Fee",amount:0,total:0,taxable:!0,fullyReimbursable:!1,feeSchedule:{}},{name:"Difference In Tiers",type:"DifferenceInTiersLineItem",amount:"default",newAmount:"default",description:"Difference In Tiers",taxable:!0,fullyReimbursable:!1,feeSchedule:{}},{name:"T&E Line Item",type:"HourlyRateLineItem",quantitiy:0,rate:0,description:"Hourly Rate Line Item",taxable:!0,fullyReimbursable:!1},{name:"Mileage",type:"MileageLineItem",description:"Mileage",quantity:0,rate:0,minimum:0,total:0,taxable:!0,fullyReimbursable:!0,locations:{start:{address:"",destinations:[]},loss:{address:"",destinations:[]},roundTrip:!1}}]},13:function(t,e,n){t.exports=n("2GaN")},"19pB":function(t,e,n){"use strict";var r=n("qJw9"),i=new r.a({type:"",name:"Select a status",value:"",date:"",claim_number:"",time:"",claim_id:"",user_id:""}),o=(n("iufW"),n("/0ug"));e.a={active:!1,locked:!1,hasAlert:!1,alert:{type:"is-link",message:""},claimId:"",claim:{},newGrossLoss:new r.a({gross_loss:"",user_id:0,claim_id:0}),user:{},adjuster:{},reviewer:{},bounds:{},map:{},geocoder:{},autocomplete:{},autocompleteResults:[],selectedAutocompleteResult:0,directions:{},marker:{},home:{lat:30.2702208,lng:-97.7453625},statusesList:[{name:"Select a status"},{name:"Adjuster Assigned",value:"",type:"assignment"},{name:"Reviewer Assigned",value:"",type:"assignment"},{name:"Reassigned",value:"",type:"reassignment"},{name:"Contacted",value:"",type:"date"},{name:"Site Inspected",value:"",type:"date"},{name:"Estimate Received",value:"",type:"value",disabled:!1},{name:"Correction Received",value:"",type:"value"},{name:"File Closed",value:"",type:"date"},{name:"File Reopened",value:"",type:"date"}],newStatus:i,creatingNewStatus:!1,newTag:{},creatingNewTag:!1,newConfirmAlert:{},confirmingAlert:!1,editingGrossLoss:!1,creatingEstimate:!1,date:"",time:"",estimate:{},defaultLineItems:{grossLoss:{type:"ServiceFeeLineItem",description:"Service Fee",amount:"default",total:0,taxable:!0,fullyReimbursable:!1,feeSchedule:{},id:1},photos:{type:"QuantifiableLineItem",description:"Claim Photos",quantity:0,rate:0,minimum:0,taxable:!0,fullyReimbursable:!1,total:0},hours:{type:"HourlyRateLineItem",description:"Time & Expense Hours",quantity:0,rate:0,total:0,taxable:!0,fullyReimbursable:!1},reimbursable:{type:"AmountLineItem",description:"Reimbursable Expenses",amount:0,total:0,taxable:!1,fullyReimbursable:!0},mileage:{type:"MileageLineItem",description:"Mileage",quantity:0,rate:0,minimum:0,total:0,taxable:!0,fullyReimbursable:!0,locations:{start:{address:"",destinations:[]},loss:{address:"",destinations:[]},roundTrip:!1}},adminFee:{type:"AmountLineItem",description:"Administrative Fee",amount:0,minimum:0,total:0,taxable:!0,fullyReimbursable:!1},surcharge:{type:"CitySurchargeLineItem",description:"Surcharge (10% of Service Fee)",amount:0,minimum:0,total:0,taxable:!0,fullyReimbursable:!1}},creatingInvoice:!1,supplement:!1,newInvoice:{},lineItemTypes:o.a}},"2GaN":function(t,e,n){"use strict";n.r(e);var r=n("XuX8"),i=n.n(r),o=n("jE9Z"),a=n("qJw9"),s={user:{},creatingEstimate:!1,creatingNewStatus:!1,creatingInvoice:!1,openClaims:[],closedClaims:[],newEstimate:new a.a({gross_loss:parseFloat(0).toFixed(2),claim_number:"",claim_id:"",date:"",time:""}),newInvoice:new a.a({gross_loss:"",estimate:"",date:"",time:""})},u=n("4Gil"),c=(n("eHHA"),{name:"OpenClaims",props:["claims"],methods:{toggleMenu:function(t){var e=document.getElementById(t);"none"==e.style.display?e.style.display="block":e.style.display="none"}}}),l=n("KHd+"),f={name:"AdjsuterDashboard",components:{claims:Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticStyle:{"font-size":"1.5em","font-weight":"bold","padding-bottom":"1rem"}},[t._v("My Open Claims")]),t._v(" "),n("table",{staticClass:"table is-striped is-fullwidth"},[t._m(0),t._v(" "),n("tbody",t._l(t.claims,(function(e){return n("tr",[n("td",[n("a",{attrs:{href:"/claims/"+e.id,target:"_blank"},domProps:{textContent:t._s(e.claim_number)}})]),t._v(" "),n("td",{domProps:{textContent:t._s(e.insured)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.type_of_loss)}}),t._v(" "),n("td",[n("div",{staticClass:"select"},[n("select",{attrs:{disabled:!0}},[n("option",[t._v("Edit Invoice")])])])]),t._v(" "),n("td",[n("div",{staticClass:"dropdown is-right",on:{click:function(n){return t.toggleMenu(e.id)}}},[t._m(1,!0),t._v(" "),n("div",{staticClass:"dropdown-menu",staticStyle:{display:"none"},attrs:{id:e.id,role:"menu"}},[n("div",{staticClass:"dropdown-content",on:{mouseleave:function(n){return t.toggleMenu(e.id)}}},[n("a",{staticClass:"dropdown-item",on:{click:function(n){t.$emit("estimate-toggle",e)&&t.toggleMenu(e.id)}}},[t._m(2,!0),t._v(" Add Estimate")]),t._v(" "),n("hr",{staticClass:"dropdown-divider"}),t._v(" "),t._m(3,!0),t._v(" "),n("hr",{staticClass:"dropdown-divider"}),t._v(" "),t._m(4,!0)])])])])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Claim #")]),e("th",[this._v("Insured")]),e("th",[this._v("Type Of Loss")]),e("th",[this._v("Edit Invoice")]),e("th",[this._v("Actions")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dropdown-trigger"},[e("button",{staticClass:"button is-small is-gray",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"}},[e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-th-list",attrs:{"aria-hidden":"true"}})]),this._v(" "),e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-caret-down",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("span",{staticClass:"fa fa-usd"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-item"},[e("span",{staticClass:"icon"},[e("span",{staticClass:"fa fa-plus"})]),this._v(" Create Invoice")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-item"},[e("span",{staticClass:"icon"},[e("span",{staticClass:"fa fa-credit-card"})]),this._v(" Add Expenses")])}],!1,null,null,null).exports,newStatus:u.a},mounted:function(){this.user=window.adjusterData.user,this.openClaims=window.adjusterData.claims},data:function(){return s},methods:{toggleCreatingNewStatus:function(){return console.log("toggled"),this.creatingNewStatus=!this.creatingNewStatus},toggleEstimate:function(t){return console.log("toggled"),null!=t&&(this.newEstimate.claim_number=t.claim_number),this.creatingEstimate=!this.creatingEstimate},toggleInvoice:function(t){return console.log("toggled"),null!=t&&(this.newInvoice.claim_number=t.claim_number),this.creatingInvoice=!this.creatingInvoice}}},p=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"is-clipped":t.creatingEstimate}},[n("h1",{staticClass:"title"},[t._v(t._s(t.user.name)+"'s Dashboard")]),n("hr",{staticStyle:{background:"#dfdfdf"}}),t._v(" "),n("claims",{attrs:{claims:t.openClaims},on:{"estimate-toggle":t.toggleEstimate}}),t._v(" "),n("estimate",{on:{"estimate-toggle":t.toggleEstimate}}),t._v(" "),n("invoice",{on:{"invoice-toggle":t.toggleInvoice}})],1)}),[],!1,null,null,null).exports;i.a.use(o.default);var m=[{path:"/",name:"home",component:p}],h=new o.default({routes:m,linkActiveClass:"is-active"});new i.a({name:"Dashboard",router:h,components:{},data:function(){return{}}}).$mount("#dashboard")},"4Gil":function(t,e,n){"use strict";var r=n("19pB"),i={name:"NewStatus",components:{modal:n("eHHA").a},data:function(){return r.a},mounted:function(){this.newStatus.claim_number=this.claim.claim_number,this.newStatus.claim_id=this.claim.id,this.newStatus.user_id=window.user.id,this.getTodaysDate()},methods:{submit:function(){var t=this;this.newStatus.post("/api/claims/"+this.claim.id+"/statuses").then((function(e){console.log(e),t.claim.statuses.unshift(e),t.$emit("new-status-toggle")})).catch((function(e){console.error(e),t.$emit("new-status-toggle")}))},getTodaysDate:function(){var t=new Date;this.newStatus.date=t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear(),this.newStatus.time=t.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}.{1,})/g,"").trim()}},computed:{}},o=n("KHd+"),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{show:t.creatingNewStatus,solid:!0}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("h3",{staticClass:"subtitle has-text-info has-text-weight-light"},[t._v("Claim# "+t._s(t.claim.claim_number))]),t._v(" "),n("h1",{staticClass:"title",staticStyle:{color:"#efefef"}},[t._v(t._s(t.newStatus.name))]),t._v(" "),n("hr",{staticStyle:{background:"#485269"}}),t._v(" "),"Select a status"==t.newStatus.name?n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:"status"}},[t._v("Status:")]),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.newStatus.name,expression:"newStatus.name"}],staticClass:"input",attrs:{name:"status"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.newStatus,"name",e.target.multiple?n:n[0])}}},t._l(t.statusesList,(function(e){return n("option",{domProps:{value:e.name,textContent:t._s(e.name)}})})),0)])])]):t._e(),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:"another"}},[t._v("Date:")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStatus.date,expression:"newStatus.date"}],staticClass:"input",attrs:{type:"text",placeholder:"yyyy/mm/dd/"},domProps:{value:t.newStatus.date},on:{input:function(e){e.target.composing||t.$set(t.newStatus,"date",e.target.value)}}}),t._v(" "),n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-calendar-o"})]),t._v(" "),t.newStatus.errors.has("date")?n("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.newStatus.errors.get("date"))}}):t._e()])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:"another"}},[t._v("Time:")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStatus.time,expression:"newStatus.time"}],staticClass:"input",attrs:{type:"text",placeholder:"11:35 am"},domProps:{value:t.newStatus.time},on:{input:function(e){e.target.composing||t.$set(t.newStatus,"time",e.target.value)}}}),t._v(" "),n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-clock-o"})]),t._v(" "),t.newStatus.errors.has("time")?n("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.newStatus.errors.get("time"))}}):t._e()])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"value"==t.newStatus.type,expression:"newStatus.type == 'value'"}],staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:"another"}},[t._v("Value:")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStatus.value,expression:"newStatus.value"}],staticClass:"input",attrs:{type:"text",placeholder:"$1000.00"},domProps:{value:t.newStatus.value},on:{input:function(e){e.target.composing||t.$set(t.newStatus,"value",e.target.value)}}}),t._v(" "),n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-clock-o"})]),t._v(" "),t.newStatus.errors.has("value")?n("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.newStatus.errors.get("value"))}}):t._e()])]),t._v(" "),n("div",{staticClass:"field",staticStyle:{"margin-top":"1em"}},[n("input",{staticClass:"switch is-small is-rounded is-info",attrs:{id:"switchRoundedInfo",type:"checkbox",name:"switchRoundedInfo",disabled:!0},domProps:{checked:!1}}),t._v(" "),n("label",{attrs:{for:"switchRoundedInfo"}},[t._v("Export to third parties")])]),t._v(" "),n("div",{staticClass:"has-text-right",staticStyle:{"margin-top":"1.5em"}},[n("a",{staticClass:"is-size-7 has-text-white is-light is-small is-link",staticStyle:{"margin-right":"1em","margin-top":"2em"},on:{click:function(e){return e.preventDefault(),t.$emit("new-status-toggle")}}},[t._v("cancel")]),t._v(" "),n("button",{staticClass:"button is-info is-small",attrs:{type:"submit"}},[t._v("Add Status")])])])])}),[],!1,null,null,null);e.a=a.exports},"8oxB":function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&m())}function m(){if(!l){var t=s(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||s(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},FakD:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return c}));var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(u,t);var e,n,r,s=a(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),e=s.call(this,t),null==t.showOptions&&(e.showOptions=!0),e}return e=u,(n=[{key:"toggleRoundTripQuantity",value:function(){return this.locations.roundTrip?this.quantity=2*parseFloat(this.quantity):this.quantity=parseFloat(this.quantity)/2,this.calculate()}}])&&i(e.prototype,n),r&&i(e,r),u}(n("I8lY").a)},I8lY:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return c}));var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(u,t);var e,n,r,s=a(u);function u(t){var e;for(var n in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=s.call(this,t)).type="QuantifiableLineItem",t)e[n]=t[n];return e.calculate(),e}return e=u,(n=[{key:"calculate",value:function(){return this.total=(parseFloat(this.rate)*parseFloat(this.getBillableQuantity())).toFixed(2)}},{key:"getBillableQuantity",value:function(){return Number.isNaN(parseFloat(this.quantity))?(this.quantity=0,0):this.hasMoreThanMinimum()?parseFloat(this.quantity)-parseFloat(this.minimum):this.hasLessThanMinimum()?0:parseFloat(this.quantity)}},{key:"hasMoreThanMinimum",value:function(){return!!(this.has("minimum")&&this.quantity>this.minimum)}},{key:"hasLessThanMinimum",value:function(){return!!(this.has("minimum")&&this.quantity<=this.minimum)}}])&&i(e.prototype,n),r&&i(e,r),u}(n("kK6B").a)},IGdi:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return u}));var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=o(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,t)).calculate(),r}return n}(n("gWvg").a)},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},URgk:function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("YBdB"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i,o,a,s,u=1,c={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick((function(){h(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){h(t.data)},r=function(t){o.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(h,0,t)}:(a="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&h(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(a+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return c[u]=i,r(u),u++},p.clearImmediate=m}function m(t){delete c[t]}function h(t){if(l)setTimeout(h,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{m(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n("yLpj"),n("8oxB"))},aIKr:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return c}));var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(n,t);var e=a(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(n("I8lY").a)},eHHA:function(t,e,n){"use strict";var r={name:"Modal",props:["show","solid"],data:function(){return{}}},i=n("KHd+"),o=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal",class:{"is-active":this.show,"is-solid":this.solid},staticStyle:{position:"fixed"}},[e("div",{staticClass:"modal-background"}),this._v(" "),e("div",{staticClass:"modal-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.a=o.exports},gWvg:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return c}));var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(u,t);var e,n,r,s=a(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=s.call(this,t)).calculate(),e}return e=u,(n=[{key:"calculate",value:function(){return this.total=parseFloat(this.amount).toFixed(2)}}])&&i(e.prototype,n),r&&i(e,r),u}(n("kK6B").a)},iufW:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("ypT6"),i=n("I8lY"),o=n("FakD"),a=n("gWvg"),s=n("aIKr"),u=n("xxoq"),c=n("IGdi"),l=n("kQnH");function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){for(var n in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lineItems=[],this.userId=window.user?window.user.id:0,this.subTotal=0,this.tax=0,this.taxRate=0,this.total=0,this.carrier={},this.options={mcm:!1,cwop:!1,show:!0,taxable:!1},this.feeSchedule={},this.is_supplement=0,e)this[n]=e[n]}var e,n,p;return e=t,(n=[{key:"data",value:function(){var t,e={},n=f(this.getInvoiceProperties());try{for(n.s();!(t=n.n()).done;){var r=t.value;e[r]=this[r]}}catch(t){n.e(t)}finally{n.f()}return e}},{key:"calculate",value:function(){var t=this;return this.subTotal=0,this.total=0,this.lineItems.forEach((function(e){t.subTotal=parseFloat(t.subTotal)+parseFloat(e.total)})),this.subTotal=+this.subTotal.toFixed(2),this.tax=this.calculateTax(),this.total=(this.subTotal+this.tax).toFixed(2),isNaN(this.total)?this.total=0:this.total}},{key:"calculateTax",value:function(){var t=this,e=this.getTaxableLineItems(),n=0;return void 0!==this.feeSchedule.taxable&&this.feeSchedule.taxble&&e.forEach((function(e){return n+=+ +e.total*+t.taxRate})),+n.toFixed(2)}},{key:"getTaxableLineItems",value:function(){return this.lineItems.filter((function(t){return!0===t.taxable}))}},{key:"createServiceFeeLineItem",value:function(t){t.feeSchedule=this.feeSchedule,this.addLineItem(new r.a(t))}},{key:"createAdjusterExpenseLineItems",value:function(t){var e=this;t.forEach((function(t){var n={AmountLineItem:a.a,HourlyRateLineItem:s.a,QuantifiableLineItem:i.a,MileageLineItem:o.a,AdminFeeLineItem:u.a,CitySurchargeLineItem:c.a,DifferenceInTiersLineItem:l.a};return e.addLineItem(new n[t.type](t))}))}},{key:"addLineItem",value:function(t){return console.log(t),this.lineItems.push(t),this.calculate()}},{key:"removeLineItem",value:function(t){return this.lineItems.splice(this.lineItems.indexOf(t),1),this.calculate()}},{key:"recalculateLineItems",value:function(){var t=this;return this.lineItems.forEach((function(e){e.feeSchedule=t.feeSchedule,e.calculate()})),this.calculate()}},{key:"getHourlyRate",value:function(){return this.hasMultipleHourlyRates()?this.getSortedHourlyRate():this.feeSchedule.hourly}},{key:"getSortedHourlyRate",value:function(){return this.feeSchedule.hourly.sort((function(t,e){return t.amount-e.amount})),this.feeSchedule.hourly[0].amount}},{key:"hasMultipleHourlyRates",value:function(){return!!Array.isArray(this.feeSchedule.hourly)}},{key:"getMileageRate",value:function(){return this.feeSchedule.mileageRate}},{key:"getMileageMinimum",value:function(){return this.feeSchedule.mileageMinimum}},{key:"getPhotoRate",value:function(){return this.feeSchedule.photoRate}},{key:"getPhotoMinimum",value:function(){return this.feeSchedule.photoMinimum}},{key:"getInvoiceProperties",value:function(){return["total","subTotal","feeSchedule","options","tax","taxRate","lineItems","userId","is_supplement"]}},{key:"subTotal",get:function(){return this._subTotal},set:function(t){this._subTotal=t}},{key:"total",get:function(){return this._total},set:function(t){this._total=t}},{key:"carrier",get:function(){return this._carrier},set:function(t){this._carrier=t}},{key:"feeSchedule",get:function(){return this._feeSchedule},set:function(t){this._feeSchedule=t}},{key:"show",get:function(){return this._show},set:function(t){this._show=t}}])&&m(e.prototype,n),p&&m(e,p),t}()},kK6B:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return i}));var i=function(){function t(e){for(var n in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e)this[n]=e[n]}var e,n,i;return e=t,(n=[{key:"has",value:function(t){return!!this.hasOwnProperty(t)}},{key:"feeSchedule",get:function(){return this._feeSchedule},set:function(t){return this._feeSchedule=t}}])&&r(e.prototype,n),i&&r(e,i),t}()},kQnH:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return c}));var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(u,t);var e,n,r,s=a(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=s.call(this,t)).calculate(),e}return e=u,(n=[{key:"calculate",value:function(){return this.total=0,this.total=this.calculateDifference()}},{key:"calculateDifference",value:function(){var t=0,e=this.getFeeScheduleTier(this.amounts().amount),n=this.getFeeScheduleTier(this.amounts().newAmount);return(t=void 0!==e&&void 0!==n?e-n:0)<0?Math.abs(t).toFixed(2):(-Math.abs(t)).toFixed(2)}},{key:"amounts",value:function(){var t={};return this.isNumeric(this.amount)?t.amount=parseFloat(String(this.amount).replace(/,/g,"")):t.amount=this.amount,this.isNumeric(this.newAmount)?t.newAmount=parseFloat(String(this.newAmount).replace(/,/g,"")):t.newAmount=this.newAmount,t}}])&&i(e.prototype,n),r&&i(e,r),u}(n("ypT6").a)},qJw9:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return a}));var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,n,i;return e=t,(n=[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}])&&r(e.prototype,n),i&&r(e,i),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){for(var n in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.originalData=e,e)this[n]=e[n];this.errors=new i}var e,n,r;return e=t,(n=[{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"reset",value:function(){for(var t in this.originalData)this[t]="";this.errors.clear()}},{key:"get",value:function(t){return this.errors[t][0]}},{key:"post",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.submit("post",t,e)}},{key:"put",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.submit("put",t,e)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise((function(i,o){axios[t](e,n.data()).then((function(t){n.onSuccess(t.data,r),i(t.data)})).catch((function(t){console.error(t),n.onFail(t.response.data.errors),o(t.response.data.errors)}))}))}},{key:"onSuccess",value:function(t,e){1==e&&this.reset()}},{key:"onFail",value:function(t){this.errors.record(t)}}])&&o(e.prototype,n),r&&o(e,r),t}()},xxoq:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return u}));var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=o(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,t)).calculate(),r}return n}(n("gWvg").a)},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},ypT6:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return p}));var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(l,t);var e,n,r,a=c(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this,t)).calculate(),e}return e=l,(n=[{key:"calculate",value:function(){return this.total=0,this.total=this.getFeeScheduleTier(this.amount)}},{key:"getFeeScheduleTier",value:function(t){return this.isNumeric(t)?this.getNumericTier(t):this.getNonNumericTier(t)}},{key:"calculateNumericTier",value:function(){return this.getNumericTier(amount)}},{key:"getNumericTier",value:function(t){t=parseFloat(String(t).replace(/,/g,""));var e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}(this.getNumericTiers());try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r>=t)return this.isTierPercentageOfGrossLoss(r)?this.calculatePercentageOfGrossLoss(r,t):parseFloat(+this.feeSchedule[r]).toFixed(2)}}catch(t){n.e(t)}finally{n.f()}}},{key:"calculatePercentageOfGrossLoss",value:function(t,e){return(e*+this.feeSchedule[t]).toFixed(2)}},{key:"isTierPercentageOfGrossLoss",value:function(t){return+this.feeSchedule[t]<1&&+this.feeSchedule[t]>0}},{key:"setDescription",value:function(){}},{key:"getNonNumericTier",value:function(t){return void 0===this.feeSchedule?(0).toFixed(2):this.feeSchedule[t]?parseFloat(+this.feeSchedule[t]).toFixed(2):(0).toFixed(2)}},{key:"getNumericTiers",value:function(){var t=this,e=Object.keys(this.feeSchedule);if(void 0===e)throw new Error("This lineitem requires a feeschedule.");return(e=e.filter((function(e){return t.isNumeric(e)}))).map((function(t){return parseFloat(t)}))}},{key:"highestTier",value:function(){return Math.max.apply(Math,i(this.getNumericTiers()))}},{key:"isNumeric",value:function(t){return!Number.isNaN(parseFloat(t))}}])&&s(e.prototype,n),r&&s(e,r),l}(n("kK6B").a)}},[[13,0,1]]]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/AdjusterDashboard"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_adjusterData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/adjusterData.js */ "./resources/assets/js/dashboards/AdjusterDashboard/data/adjusterData.js");
/* harmony import */ var _claims_NewStatus_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../claims/NewStatus.vue */ "./resources/assets/js/claims/NewStatus.vue");
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Modal.vue */ "./resources/assets/js/Modal.vue");
/* harmony import */ var _OpenClaims_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenClaims.vue */ "./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import estimate from '../../../claims/NewEstimate.vue';
// import invoice from '../../../claims/NewInvoice.vue';



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdjsuterDashboard',
  components: {
    claims: _OpenClaims_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    newStatus: _claims_NewStatus_vue__WEBPACK_IMPORTED_MODULE_1__["default"] // estimate,
    // invoice

  },
  mounted: function mounted() {
    this.user = window.adjusterData.user;
    this.openClaims = window.adjusterData.claims;
  },
  data: function data() {
    return _data_adjusterData_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  methods: {
    toggleCreatingNewStatus: function toggleCreatingNewStatus() {
      console.log('toggled');
      return this.creatingNewStatus = !this.creatingNewStatus;
    },
    toggleEstimate: function toggleEstimate(claim) {
      console.log('toggled'); // console.log(claim.claim_number);

      if (claim != undefined) this.newEstimate.claim_number = claim.claim_number;
      return this.creatingEstimate = !this.creatingEstimate;
    },
    toggleInvoice: function toggleInvoice(claim) {
      console.log('toggled'); // console.log(claim.claim_number);

      if (claim != undefined) this.newInvoice.claim_number = claim.claim_number;
      return this.creatingInvoice = !this.creatingInvoice;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OpenClaims',
  props: ['claims'],
  methods: {
    toggleMenu: function toggleMenu(id) {
      var menu = document.getElementById(id);
      menu.style.display == 'none' ? menu.style.display = 'block' : menu.style.display = 'none';
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=template&id=e73336ba&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=template&id=e73336ba& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { class: { "is-clipped": _vm.creatingEstimate } },
    [
      _c("h1", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.user.name) + "'s Dashboard")
      ]),
      _c("hr", { staticStyle: { background: "#dfdfdf" } }),
      _vm._v(" "),
      _c("claims", {
        attrs: { claims: _vm.openClaims },
        on: { "estimate-toggle": _vm.toggleEstimate }
      }),
      _vm._v(" "),
      _c("estimate", { on: { "estimate-toggle": _vm.toggleEstimate } }),
      _vm._v(" "),
      _c("invoice", { on: { "invoice-toggle": _vm.toggleInvoice } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=template&id=d50abf36&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=template&id=d50abf36& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      "h3",
      {
        staticStyle: {
          "font-size": "1.5em",
          "font-weight": "bold",
          "padding-bottom": "1rem"
        }
      },
      [_vm._v("My Open Claims")]
    ),
    _vm._v(" "),
    _c("table", { staticClass: "table is-striped is-fullwidth" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.claims, function(claim) {
          return _c("tr", [
            _c("td", [
              _c("a", {
                attrs: { href: "/claims/" + claim.id, target: "_blank" },
                domProps: { textContent: _vm._s(claim.claim_number) }
              })
            ]),
            _vm._v(" "),
            _c("td", { domProps: { textContent: _vm._s(claim.insured) } }),
            _vm._v(" "),
            _c("td", { domProps: { textContent: _vm._s(claim.type_of_loss) } }),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "select" }, [
                _c("select", { attrs: { disabled: true } }, [
                  _c("option", [_vm._v("Edit Invoice")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "div",
                {
                  staticClass: "dropdown is-right",
                  on: {
                    click: function($event) {
                      return _vm.toggleMenu(claim.id)
                    }
                  }
                },
                [
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu",
                      staticStyle: { display: "none" },
                      attrs: { id: claim.id, role: "menu" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-content",
                          on: {
                            mouseleave: function($event) {
                              return _vm.toggleMenu(claim.id)
                            }
                          }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              on: {
                                click: function($event) {
                                  _vm.$emit("estimate-toggle", claim) &&
                                    _vm.toggleMenu(claim.id)
                                }
                              }
                            },
                            [_vm._m(2, true), _vm._v(" Add Estimate")]
                          ),
                          _vm._v(" "),
                          _c("hr", { staticClass: "dropdown-divider" }),
                          _vm._v(" "),
                          _vm._m(3, true),
                          _vm._v(" "),
                          _c("hr", { staticClass: "dropdown-divider" }),
                          _vm._v(" "),
                          _vm._m(4, true)
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Claim #")]),
        _c("th", [_vm._v("Insured")]),
        _c("th", [_vm._v("Type Of Loss")]),
        _c("th", [_vm._v("Edit Invoice")]),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-trigger" }, [
      _c(
        "button",
        {
          staticClass: "button is-small is-gray",
          attrs: { "aria-haspopup": "true", "aria-controls": "dropdown-menu" }
        },
        [
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", {
              staticClass: "fa fa-th-list",
              attrs: { "aria-hidden": "true" }
            })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", {
              staticClass: "fa fa-caret-down",
              attrs: { "aria-hidden": "true" }
            })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("span", { staticClass: "fa fa-usd" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item" }, [
      _c("span", { staticClass: "icon" }, [
        _c("span", { staticClass: "fa fa-plus" })
      ]),
      _vm._v(" Create Invoice")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item" }, [
      _c("span", { staticClass: "icon" }, [
        _c("span", { staticClass: "fa fa-credit-card" })
      ]),
      _vm._v(" Add Expenses")
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
  // creatingGrossLoss: false,
  newGrossLoss: new _structur_src_form_Form_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    gross_loss: '',
    user_id: 0,
    claim_id: 0
  }),
  user: {},
  adjuster: {},
  reviewer: {},
  bounds: {},
  map: {},
  geocoder: {},
  autocomplete: {},
  autocompleteResults: [],
  selectedAutocompleteResult: 0,
  directions: {},
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
  supplement: false,
  newInvoice: {},
  lineItemTypes: _invoice_lineItemTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"]
});

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

/***/ "./resources/assets/js/claims/invoice/AdminFeeLineItem.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/AdminFeeLineItem.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminFeeLineItem; });
/* harmony import */ var _AmountLineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmountLineItem */ "./resources/assets/js/claims/invoice/AmountLineItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AdminFeeLineItem = /*#__PURE__*/function (_AmountLineItem) {
  _inherits(AdminFeeLineItem, _AmountLineItem);

  var _super = _createSuper(AdminFeeLineItem);

  function AdminFeeLineItem(data) {
    var _this;

    _classCallCheck(this, AdminFeeLineItem);

    _this = _super.call(this, data);

    _this.calculate();

    return _this;
  }

  return AdminFeeLineItem;
}(_AmountLineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AmountLineItem = /*#__PURE__*/function (_LineItem) {
  _inherits(AmountLineItem, _LineItem);

  var _super = _createSuper(AmountLineItem);

  function AmountLineItem(data) {
    var _this;

    _classCallCheck(this, AmountLineItem);

    _this = _super.call(this, data);

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

/***/ "./resources/assets/js/claims/invoice/CitySurchargeLineItem.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/CitySurchargeLineItem.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CitySurchargeLineItem; });
/* harmony import */ var _AmountLineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmountLineItem */ "./resources/assets/js/claims/invoice/AmountLineItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CitySurchargeLineItem = /*#__PURE__*/function (_AmountLineItem) {
  _inherits(CitySurchargeLineItem, _AmountLineItem);

  var _super = _createSuper(CitySurchargeLineItem);

  function CitySurchargeLineItem(data) {
    var _this;

    _classCallCheck(this, CitySurchargeLineItem);

    _this = _super.call(this, data);

    _this.calculate();

    return _this;
  }

  return CitySurchargeLineItem;
}(_AmountLineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DifferenceInTiersLineItem = /*#__PURE__*/function (_ServiceFeeLineItem) {
  _inherits(DifferenceInTiersLineItem, _ServiceFeeLineItem);

  var _super = _createSuper(DifferenceInTiersLineItem);

  function DifferenceInTiersLineItem(data) {
    var _this;

    _classCallCheck(this, DifferenceInTiersLineItem);

    _this = _super.call(this, data);

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
      var subtrahend = this.getFeeScheduleTier(this.amounts().newAmount); // console.log(minuend + '-' + subtrahend);
      // console.log(`${this.getFeeScheduleTier(this.amounts().amount)} - ${this.getFeeScheduleTier(this.amounts().newAmount)}`);
      // console.log(this.getFeeScheduleTier(this.amounts().amount) + ' - ' +  this.getFeeScheduleTier(this.amounts().newAmount))
      // console.log(minuend + ' - ' + subtrahend);

      minuend !== undefined && subtrahend !== undefined ? diff = minuend - subtrahend : diff = 0; // console.log(diff);

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

/***/ "./resources/assets/js/claims/invoice/HourlyRateLineItem.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/HourlyRateLineItem.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HourlyRateLineItem; });
/* harmony import */ var _QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuantifiableLineItem */ "./resources/assets/js/claims/invoice/QuantifiableLineItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var HourlyRateLineItem = /*#__PURE__*/function (_QuantifiableLineItem) {
  _inherits(HourlyRateLineItem, _QuantifiableLineItem);

  var _super = _createSuper(HourlyRateLineItem);

  function HourlyRateLineItem() {
    _classCallCheck(this, HourlyRateLineItem);

    return _super.apply(this, arguments);
  }

  return HourlyRateLineItem;
}(_QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
/* harmony import */ var _MileageLineItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MileageLineItem */ "./resources/assets/js/claims/invoice/MileageLineItem.js");
/* harmony import */ var _AmountLineItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AmountLineItem */ "./resources/assets/js/claims/invoice/AmountLineItem.js");
/* harmony import */ var _HourlyRateLineItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HourlyRateLineItem */ "./resources/assets/js/claims/invoice/HourlyRateLineItem.js");
/* harmony import */ var _AdminFeeLineItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminFeeLineItem */ "./resources/assets/js/claims/invoice/AdminFeeLineItem.js");
/* harmony import */ var _CitySurchargeLineItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CitySurchargeLineItem */ "./resources/assets/js/claims/invoice/CitySurchargeLineItem.js");
/* harmony import */ var _DifferenceInTiersLineItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DifferenceInTiersLineItem */ "./resources/assets/js/claims/invoice/DifferenceInTiersLineItem.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








 // import Form from '../../structur/src/form/Form.js';

var Invoice = /*#__PURE__*/function () {
  function Invoice(data) {
    _classCallCheck(this, Invoice);

    // console.log(data['taxRate']);
    this.lineItems = [];
    this.userId = window.user ? window.user.id : 0;
    this.subTotal = 0;
    this.tax = 0; // the amount of the tax calculations...

    this.taxRate = 0;
    this.total = 0;
    this.carrier = {};
    this.options = {
      mcm: false,
      cwop: false,
      show: true,
      taxable: false
    };
    this.feeSchedule = {};
    this.is_supplement = 0; // stored outside of invoice data column in table for fast queries (idx) on supplements...
    // overwrites any default property values if passed into constructor..

    for (var property in data) {
      this[property] = data[property];
    } // console.log(this.taxRate)

  }
  /**
   * Method gathering data to save invoice.
   * @return {Object}.
   */


  _createClass(Invoice, [{
    key: "data",
    value: function data() {
      var data = {};

      var _iterator = _createForOfIteratorHelper(this.getInvoiceProperties()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          data[property] = this[property];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
      this.subTotal = +this.subTotal.toFixed(2);
      this.tax = this.calculateTax();
      this.total = (this.subTotal + this.tax).toFixed(2);
      return isNaN(this.total) ? this.total = 0.00 : this.total;
    }
  }, {
    key: "calculateTax",
    value: function calculateTax() {
      var _this2 = this;

      var taxable = this.getTaxableLineItems();
      var tax = 0;

      if (this.feeSchedule.taxable !== undefined && this.feeSchedule.taxble) {
        taxable.forEach(function (item) {
          return tax += +(+item.total * +_this2.taxRate);
        });
      }

      return +tax.toFixed(2);
    }
  }, {
    key: "getTaxableLineItems",
    value: function getTaxableLineItems() {
      return this.lineItems.filter(function (item) {
        return item.taxable === true;
      });
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
      var _this3 = this;

      expenses.forEach(function (expense) {
        // collect lineItemtypes...
        var lineItemTypes = {
          AmountLineItem: _AmountLineItem__WEBPACK_IMPORTED_MODULE_3__["default"],
          HourlyRateLineItem: _HourlyRateLineItem__WEBPACK_IMPORTED_MODULE_4__["default"],
          QuantifiableLineItem: _QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_1__["default"],
          MileageLineItem: _MileageLineItem__WEBPACK_IMPORTED_MODULE_2__["default"],
          AdminFeeLineItem: _AdminFeeLineItem__WEBPACK_IMPORTED_MODULE_5__["default"],
          CitySurchargeLineItem: _CitySurchargeLineItem__WEBPACK_IMPORTED_MODULE_6__["default"],
          DifferenceInTiersLineItem: _DifferenceInTiersLineItem__WEBPACK_IMPORTED_MODULE_7__["default"]
        }; // Create a new line ite based on the type provided

        return _this3.addLineItem(new lineItemTypes[expense.type](expense));
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
      console.log(lineItem);
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
    } // generateId() {
    // 	let ids = []
    // 	this.lineItems.forEach(item => ids.push(item.id))
    // 	return ids.length > 0 
    // 		? Math.max(...ids) + 1
    // 		: 1
    // }

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
      var _this4 = this;

      this.lineItems.forEach(function (lineItem) {
        // this.setFeeSchedule()
        lineItem.feeSchedule = _this4.feeSchedule;
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
    } // setTaxRate(rate) {
    // 	return this.taxRate = rate;
    // }
    // getTaxRate() {
    // 	return this.taxRate;
    // }

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
     * Method for getting mileage rate from current feeSchedule.
     * @return String.
     */

  }, {
    key: "getMileageMinimum",
    value: function getMileageMinimum() {
      return this.feeSchedule.mileageMinimum;
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
     * Method for getting photo rate from current feeSchedule.
     * @return String.
     */

  }, {
    key: "getPhotoMinimum",
    value: function getPhotoMinimum() {
      return this.feeSchedule.photoMinimum;
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
      return ['total', 'subTotal', 'feeSchedule', 'options', 'tax', 'taxRate', 'lineItems', 'userId', 'is_supplement'];
    } // Getters & Setters...//

  }, {
    key: "subTotal",
    get: function get() {
      return this._subTotal;
    },
    set: function set(data) {
      this._subTotal = data;
    }
  }, {
    key: "total",
    get: function get() {
      return this._total;
    },
    set: function set(data) {
      this._total = data;
    }
  }, {
    key: "carrier",
    get: function get() {
      return this._carrier;
    },
    set: function set(data) {
      this._carrier = data;
    }
  }, {
    key: "feeSchedule",
    get: function get() {
      return this._feeSchedule;
    },
    set: function set(data) {
      this._feeSchedule = data;
    }
  }, {
    key: "show",
    get: function get() {
      return this._show;
    },
    set: function set(data) {
      this._show = data;
    }
  }]);

  return Invoice;
}();



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

var LineItem = /*#__PURE__*/function () {
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
    get: function get() {
      return this._feeSchedule;
    },
    set: function set(data) {
      return this._feeSchedule = data;
    }
  }]);

  return LineItem;
}();



/***/ }),

/***/ "./resources/assets/js/claims/invoice/MileageLineItem.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/claims/invoice/MileageLineItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MileageLineItem; });
/* harmony import */ var _QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuantifiableLineItem */ "./resources/assets/js/claims/invoice/QuantifiableLineItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MileageLineItem = /*#__PURE__*/function (_QuantifiableLineItem) {
  _inherits(MileageLineItem, _QuantifiableLineItem);

  var _super = _createSuper(MileageLineItem);

  function MileageLineItem(data) {
    var _this;

    _classCallCheck(this, MileageLineItem);

    _this = _super.call(this, data);

    if (data.showOptions == undefined) {
      _this.showOptions = true;
    }

    return _this;
  }

  _createClass(MileageLineItem, [{
    key: "toggleRoundTripQuantity",
    value: function toggleRoundTripQuantity() {
      this.locations.roundTrip ? this.quantity = parseFloat(this.quantity) * 2 : this.quantity = parseFloat(this.quantity) / 2;
      return this.calculate();
    }
  }]);

  return MileageLineItem;
}(_QuantifiableLineItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var QuantifiableLineItem = /*#__PURE__*/function (_LineItem) {
  _inherits(QuantifiableLineItem, _LineItem);

  var _super = _createSuper(QuantifiableLineItem);

  function QuantifiableLineItem(data) {
    var _this;

    _classCallCheck(this, QuantifiableLineItem);

    _this = _super.call(this, data);
    _this.type = 'QuantifiableLineItem'; // this.description = '' 
    // this.quantity = 0
    // this.rate =  0 
    // this.minimum = 0 
    // this.total = 0 
    // this.taxable = false
    // this.fullyReimbursable = false

    for (var property in data) {
      _this[property] = data[property];
    }

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ServiceFeeLineItem = /*#__PURE__*/function (_LineItem) {
  _inherits(ServiceFeeLineItem, _LineItem);

  var _super = _createSuper(ServiceFeeLineItem);

  function ServiceFeeLineItem(data) {
    var _this;

    _classCallCheck(this, ServiceFeeLineItem);

    _this = _super.call(this, data);

    _this.calculate();

    return _this;
  }

  _createClass(ServiceFeeLineItem, [{
    key: "calculate",
    value: function calculate() {
      //reset the total each time so the total isn't ammended each time called..
      this.total = 0; // this.description = this.setDescription();

      return this.total = this.getFeeScheduleTier(this.amount);
    }
  }, {
    key: "getFeeScheduleTier",
    value: function getFeeScheduleTier(amount) {
      // Numeric or Non Numeric (1,234.34 or "erroneous" respectively)
      // console.log(`${amount} has numeric amount ${this.isNumeric(amount)}`)
      // console.log(this.getNumericTier(amount))
      // console.log(amount);
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
      //normalize an grossloss value as parseFloat will interpret
      //comas (,) as decimals causing issues during calculation.
      // console.log(parseFloat(String(amount).replace(/,/g, '')))
      amount = parseFloat(String(amount).replace(/,/g, '')); // loop through tiers to calulate service fee.

      var _iterator = _createForOfIteratorHelper(this.getNumericTiers()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tier = _step.value;

          if (tier >= amount) {
            return this.isTierPercentageOfGrossLoss(tier) ? this.calculatePercentageOfGrossLoss(tier, amount) : parseFloat(+this.feeSchedule[tier]).toFixed(2);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "calculatePercentageOfGrossLoss",
    value: function calculatePercentageOfGrossLoss(tier, amount) {
      // this.description += ' (Billed at % of Gross Loss)';
      return (amount * +this.feeSchedule[tier]).toFixed(2);
    }
  }, {
    key: "isTierPercentageOfGrossLoss",
    value: function isTierPercentageOfGrossLoss(tier) {
      return +this.feeSchedule[tier] < 1 && +this.feeSchedule[tier] > 0 ? true : false;
    }
  }, {
    key: "setDescription",
    value: function setDescription() {// return this.isServiceFeePercentageOfGrossLoss() 
      // 		? this.description = `Service Fee (Billed @ ${+this.feeSchedule[this.highestTier()] * 100} % of Gross Loss)` 
      // 		: this.description = 'Service Fee';
    }
  }, {
    key: "getNonNumericTier",
    value: function getNonNumericTier(amount) {
      // return values for non numeric tiers 
      // if feeSchedule has key [amount] return its value
      // otherwise just return 0
      if (this.feeSchedule === undefined) return 0 .toFixed(2);
      return this.feeSchedule[amount] ? parseFloat(+this.feeSchedule[amount]).toFixed(2) : 0 .toFixed(2);
    }
  }, {
    key: "getNumericTiers",
    value: function getNumericTiers() {
      var _this2 = this;

      var tiers = Object.keys(this.feeSchedule);
      if (tiers === undefined) throw new Error('This lineitem requires a feeschedule.');
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
      //console.log(Math.max(...this.getNumericTiers()))
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
    amount: 'default',
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
    taxable: true,
    fullyReimbursable: false,
    total: 0
  },
  hours: {
    type: 'HourlyRateLineItem',
    description: 'Time & Expense Hours',
    quantity: 0,
    rate: 0,
    total: 0,
    taxable: true,
    fullyReimbursable: false
  },
  reimbursable: {
    type: 'AmountLineItem',
    description: 'Reimbursable Expenses',
    amount: 0,
    total: 0,
    taxable: false,
    fullyReimbursable: true
  },
  mileage: {
    type: 'MileageLineItem',
    description: 'Mileage',
    quantity: 0,
    rate: 0,
    minimum: 0,
    total: 0,
    taxable: true,
    fullyReimbursable: true,
    locations: {
      start: {
        address: '',
        destinations: []
      },
      loss: {
        address: '',
        destinations: []
      },
      roundTrip: false
    }
  },
  adminFee: {
    type: 'AmountLineItem',
    description: 'Administrative Fee',
    amount: 0,
    minimum: 0,
    total: 0,
    taxable: true,
    fullyReimbursable: false
  },
  surcharge: {
    type: 'CitySurchargeLineItem',
    description: 'Surcharge (10% of Service Fee)',
    amount: 0,
    minimum: 0,
    total: 0,
    taxable: true,
    fullyReimbursable: false
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
  name: 'Line Item',
  type: 'QuantifiableLineItem',
  quantity: 1,
  rate: 0,
  description: 'Description Here',
  taxable: true,
  total: 0
}, {
  name: 'Service Fee Line Item',
  type: 'ServiceFeeLineItem',
  description: 'Service Fee',
  amount: 0,
  total: 0,
  taxable: true,
  fullyReimbursable: false,
  feeSchedule: {}
}, // {name: 'Amount', type: 'AmountLineItem', amount: 0, description: 'Description Here', taxable: true,},
{
  name: 'Difference In Tiers',
  type: 'DifferenceInTiersLineItem',
  amount: 'default',
  newAmount: 'default',
  description: 'Difference In Tiers',
  taxable: true,
  fullyReimbursable: false,
  feeSchedule: {}
}, {
  name: 'T&E Line Item',
  type: 'HourlyRateLineItem',
  quantitiy: 0,
  rate: 0,
  description: 'Hourly Rate Line Item',
  taxable: true,
  fullyReimbursable: false
}, {
  name: 'Mileage',
  type: 'MileageLineItem',
  description: 'Mileage',
  quantity: 0,
  rate: 0,
  minimum: 0,
  total: 0,
  taxable: true,
  fullyReimbursable: true,
  locations: {
    start: {
      address: '',
      destinations: []
    },
    loss: {
      address: '',
      destinations: []
    },
    roundTrip: false
  }
} //{name: 'Less Previous Invoice', type: 'AmountLineItem', amount: 0, description: 'Less Previous Invoice Total'},
// {name: 'MCM', type: 'AmountLineItem', description: 'Managed Claim Model Fee', amount: 0, total: 0, taxable: true, fullyReimbursable: false },
// {name: 'Supplement', type: 'supplement', amount: 0, description: 'Supplement'},
]);

/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/AdjusterDashboard.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/AdjusterDashboard.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home.vue */ "./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var routes = [{
  path: '/',
  name: "home",
  component: _components_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
} // { path: '/licenses', name: "licenses", component: Licenses },
// { path: '/certifications', component: Certifications },
// { path: '/complete', component: Complete }
];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: routes,
  linkActiveClass: 'is-active'
});
var Dashboard = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  name: 'Dashboard',
  router: router,
  components: {//root vue components here.
  },
  data: function data() {
    return {//Dashboard Data.
    };
  }
}).$mount('#dashboard');

/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e73336ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e73336ba& */ "./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=template&id=e73336ba&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e73336ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e73336ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=template&id=e73336ba&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=template&id=e73336ba& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e73336ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e73336ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/Home.vue?vue&type=template&id=e73336ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e73336ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e73336ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenClaims_vue_vue_type_template_id_d50abf36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenClaims.vue?vue&type=template&id=d50abf36& */ "./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=template&id=d50abf36&");
/* harmony import */ var _OpenClaims_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenClaims.vue?vue&type=script&lang=js& */ "./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenClaims_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenClaims_vue_vue_type_template_id_d50abf36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenClaims_vue_vue_type_template_id_d50abf36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenClaims_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OpenClaims.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenClaims_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=template&id=d50abf36&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=template&id=d50abf36& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenClaims_vue_vue_type_template_id_d50abf36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OpenClaims.vue?vue&type=template&id=d50abf36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/dashboards/AdjusterDashboard/components/OpenClaims.vue?vue&type=template&id=d50abf36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenClaims_vue_vue_type_template_id_d50abf36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenClaims_vue_vue_type_template_id_d50abf36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/dashboards/AdjusterDashboard/data/adjusterData.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/dashboards/AdjusterDashboard/data/adjusterData.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../structur/src/form/Form */ "./resources/assets/js/structur/src/form/Form.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  user: {},
  creatingEstimate: false,
  creatingNewStatus: false,
  creatingInvoice: false,
  openClaims: [],
  closedClaims: [],
  newEstimate: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
    gross_loss: parseFloat(0).toFixed(2),
    claim_number: '',
    claim_id: '',
    date: '',
    time: ''
  }),
  newInvoice: new _structur_src_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
    gross_loss: '',
    estimate: '',
    date: '',
    time: ''
  })
});

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
        * @param {boolean} reset 
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
/*!*************************************************************************************!*\
  !*** multi ./resources/assets/js/dashboards/AdjusterDashboard/AdjusterDashboard.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandon/code/ccg/api/resources/assets/js/dashboards/AdjusterDashboard/AdjusterDashboard.js */"./resources/assets/js/dashboards/AdjusterDashboard/AdjusterDashboard.js");


/***/ })

},[[13,"/js/manifest","/js/vendor"]]]);
>>>>>>> Stashed changes
