(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0Jeh":function(t,e,s){"use strict";s.r(e);var n=s("XuX8"),i=s.n(n),r=s("qJw9"),a={name:"RegistrationForm",data:function(){return{form:new r.a({firstName:"",lastName:"",email:"",password:"",password_confirmation:""}),successfulRegistration:!1}},computed:{passwordsMatch:function(){return this.form.password===this.form.password_confirmation}},methods:{submit:function(){var t=this;return this.form.post("/register",!1).then(function(e){t.successfulRegistration=!0}).catch(function(t){console.log(t)})}}},o=s("KHd+"),c=Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.successfulRegistration?t._e():s("div",{staticClass:"sign-in-title"},[s("h1",[t._v("You'll need to register to apply")])]),t._v(" "),t.successfulRegistration?s("div",{staticStyle:{position:"relative",top:"40px"}},[s("h1",{staticClass:"title"},[t._v("Welcome, "+t._s(t.form.firstName))]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Thanks for creating an account")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("We've sent an email to the address you just signed up with. You'll need to verify your account by clicking the link proided in the email to continue your application for employment with CCG.")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.successfulRegistration?t._e():s("form",{attrs:{method:"post",action:"/register"},on:{submit:function(e){return e.preventDefault(),t.submit(e)},keydown:function(e){return t.form.errors.clear(e.target.name)}}},[s("div",{staticClass:"field is-signin"},[s("div",{staticClass:"control has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstName,expression:"form.firstName"}],staticClass:"input is-medium",attrs:{type:"text",id:"firstName",name:"firstName",placeholder:"First Name"},domProps:{value:t.form.firstName},on:{input:function(e){e.target.composing||t.$set(t.form,"firstName",e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),t.form.errors.has("firstName")?s("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.form.errors.get("firstName"))}}):t._e()])]),t._v(" "),s("div",{staticClass:"field is-signin"},[s("div",{staticClass:"control has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastName,expression:"form.lastName"}],staticClass:"input is-medium",attrs:{type:"text",id:"lastName",name:"lastName",placeholder:"Last Name"},domProps:{value:t.form.lastName},on:{input:function(e){e.target.composing||t.$set(t.form,"lastName",e.target.value)}}}),t._v(" "),t._m(2),t._v(" "),t.form.errors.has("lastName")?s("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.form.errors.get("lastName"))}}):t._e()])]),t._v(" "),s("div",{staticClass:"field is-signin",staticStyle:{margin:"20px 0 20px 0"}},[s("div",{staticClass:"control has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input is-medium",attrs:{type:"text",id:"email",name:"email",placeholder:"Email Address"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t._m(3),t._v(" "),t.form.errors.has("email")?s("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.form.errors.get("email"))}}):t._e()])]),t._v(" "),s("div",{staticClass:"field is-signin"},[s("div",{staticClass:"control has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input is-medium",class:{"is-success":t.passwordsMatch,"is-danger":!t.passwordsMatch},attrs:{type:"password",id:"password",name:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),t._m(4),t._v(" "),t.form.errors.has("password")?s("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.form.errors.get("password"))}}):t._e()])]),t._v(" "),s("div",{staticClass:"field is-signin"},[s("div",{staticClass:"control has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"input is-medium",class:{"is-success":t.passwordsMatch,"is-danger":!t.passwordsMatch},attrs:{type:"password",id:"passwordConfirmation",name:"passwordConfirmation",placeholder:"Confirm Password"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),t._m(5),t._v(" "),t.form.errors.has("password_confirmation")?s("span",{staticClass:"help is-danger",domProps:{textContent:t._s(t.form.errors.get("password_confirmation"))}}):t._e()])]),t._v(" "),s("br"),t._v(" "),t._m(6),t._v(" "),t._m(7)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control",staticStyle:{"margin-top":"35px"}},[e("a",{staticClass:"button is-medium is-ccg is-full-width",attrs:{href:"/login"}},[e("span",[this._v("Login")]),this._v(" "),e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-login"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fa fa-lock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fa fa-lock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("button",{staticClass:"button is-medium is-ccg is-full-width"},[e("span",[this._v("Create Account")]),this._v(" "),e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-chevron-circle-right"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control has-text-centered"},[e("a",{staticClass:"button is-text is-small",staticStyle:{color:"rgb(177, 177, 177)"},attrs:{href:"/login"}},[e("span",[this._v("Login")])])])}],!1,null,null,null).exports;new i.a({name:"Register",el:"#register",components:{registrationForm:c}})},1:function(t,e,s){t.exports=s("0Jeh")},"8oxB":function(t,e){var s,n,i=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(s===setTimeout)return setTimeout(t,0);if((s===r||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:r}catch(t){s=r}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,l=[],u=!1,f=-1;function m(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!u){var t=o(m);u=!0;for(var e=l.length;e;){for(c=l,l=[];++f<e;)c&&c[f].run();f=-1,e=l.length}c=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)e[s-1]=arguments[s];l.push(new p(t,e)),1!==l.length||u||o(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,i,r,a,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}s.d(e,"a",function(){return n})},URgk:function(t,e,s){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new r(i.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new r(i.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},s("YBdB"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,s("yLpj"))},YBdB:function(t,e,s){(function(t,e){!function(t,s){"use strict";if(!t.setImmediate){var n,i,r,a,o,c=1,l={},u=!1,f=t.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(t);m=m&&m.setTimeout?m:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick(function(){p(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,s=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=s,e}}()?t.MessageChannel?((r=new MessageChannel).port1.onmessage=function(t){p(t.data)},n=function(t){r.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,n=function(t){var e=f.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):n=function(t){setTimeout(p,0,t)}:(a="setImmediate$"+Math.random()+"$",o=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&p(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",o,!1):t.attachEvent("onmessage",o),n=function(e){t.postMessage(a+e,"*")}),m.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),s=0;s<e.length;s++)e[s]=arguments[s+1];var i={callback:t,args:e};return l[c]=i,n(c),c++},m.clearImmediate=d}function d(t){delete l[t]}function p(t){if(u)setTimeout(p,0,t);else{var e=l[t];if(e){u=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(s,n)}}(e)}finally{d(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,s("yLpj"),s("8oxB"))},qJw9:function(t,e,s){"use strict";function n(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,s,i;return e=t,(s=[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}])&&n(e.prototype,s),i&&n(e,i),t}();function r(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}s.d(e,"a",function(){return a});var a=function(){function t(e){for(var s in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.originalData=e,e)this[s]=e[s];this.errors=new i}var e,s,n;return e=t,(s=[{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"reset",value:function(){for(var t in this.originalData)this[t]="";this.errors.clear()}},{key:"get",value:function(t){return this.errors[t][0]}},{key:"post",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.submit("post",t,e)}},{key:"put",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.submit("put",t,e)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var s=this,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise(function(i,r){axios[t](e,s.data()).then(function(t){s.onSuccess(t.data,n),i(t.data)}).catch(function(t){console.error(t),s.onFail(t.response.data.errors),r(t.response.data.errors)})})}},{key:"onSuccess",value:function(t,e){1==e&&this.reset()}},{key:"onFail",value:function(t){this.errors.record(t)}}])&&r(e.prototype,s),n&&r(e,n),t}()},yLpj:function(t,e){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch(t){"object"==typeof window&&(s=window)}t.exports=s}},[[1,0,1]]]);