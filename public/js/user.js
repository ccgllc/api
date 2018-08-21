webpackJsonp([13],{5:function(e,a,n){e.exports=n("DHPx")},DHPx:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n("I3G/"),r=n.n(t),i=n("c+1i"),s=n("d0ki"),o=n("OOfy");r.a.component("search",search);new r.a({name:"User Administration",el:"#user",data:{userData:s.a,states:o.a,certifications:[{name:"AIC",label:"AIC"},{name:"CPCU",label:"CPCU"},{name:"TWIA",label:"TWIA / TFPA"},{name:"NFIP",label:"NFIP"},{name:"HAAG",label:"HAAG"},{name:"IIRC",label:"IIRC"},{name:"rope",label:"Rope & Harness"},{name:"Earthquake",label:"Earthquake"},{name:"Umpire",label:"Umpire"},{name:"Appraiser",label:"Appraiser"}],selected:[],allSelected:!1,userService:new i.a({uri:{prefix:"api",resource:"users"},current_page:0}),autocomplete:{},bounds:{},map:{},marker:{},home:{lat:30.2702208,lng:-97.7453625},filename:"FilteredUsers.csv"},computed:{resetUsers:function(){return 0==this.userData.users.length?this.userData.users=window.users.data:"Users in list"}},mounted:function(){var e=this;return this.bounds=new google.maps.LatLngBounds,this.map=new google.maps.Map(document.getElementById("map"),{zoom:12,center:this.home}),this.marker=new google.maps.Marker({position:this.home,map:this.map}),this.autocomplete=new google.maps.places.Autocomplete(document.getElementById("claim-location"),{types:["geocode"]}),this.autocomplete.addListener("place_changed",function(){e.setHome()}),this.current_page=window.users.current_page,window.users.data?this.userData.users=window.users.data:this.userData.users=window.users},methods:{geolocate:function(){console.log("geolocating")},setHome:function(){var e=this.autocomplete.getPlace();this.home={lat:e.geometry.location.lat(),lng:e.geometry.location.lng()},console.log(this.home),this.marker.setPosition(this.home),this.map.setCenter(this.home),this.map.setZoom(12)},toggleMenu:function(e){var a=document.getElementById(e);"none"==a.style.display?a.style.display="block":a.style.display="none"},getUsers:function(){var e=this;this.userService.get("all").then(function(a){e.userData.users=a}).catch(function(e){console.log(e)})},select:function(e){console.log(e.name)},selectAll:function(e){var a=document.getElementsByClassName("has-user");if(this.allSelected)for(var n in a)"function"!=typeof a[n]&&"number"!=typeof a[n]&&(a[n].checked=!0,this.selected.push(a[n].value));else for(var t in a)"function"!=typeof a[t]&&"number"!=typeof a[t]&&(a[t].checked=!1,this.selected=[])},deleteUser:function(e){var a=this;window.axios.delete("/api/users/"+e.id).then(function(n){var t=a.userData.users.indexOf(e);return a.userData.users.splice(t,1)}).catch(function(e){console.error(e)})},deleteSelected:function(){var e=this;window.axios.post("/api/users/",{users:this.selected}).then(function(a){for(var n in e.selected){var t=e.userData.users.indexOf(e.findUser(n));e.userData.users.splice(t,1)}})},findUser:function(e){var a=this;return this.userData.users.find(function(n){return n.id==a.selected[e]})},exportToCsv:function(e,a){for(var n=function(e){var n="";return Object.keys(e).forEach(function(t){0==a.indexOf(e)&&(n+="distance"===t?'"'+t+'"\n':'"'+t+'",')}),Object.keys(e).forEach(function(a){var t=(null===e[a]?"n/a":e[a].toString()).replace(/"/g,'""');"id"==a||(n+=","),n+=t}),n+"\n"},t="",r=0;r<a.length;r++)t+=n(a[r]);var i=new Blob([t],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(i,e);else{var s=document.createElement("a");if(void 0!==s.download){var o=URL.createObjectURL(i);s.setAttribute("href",o),s.setAttribute("download",e),s.style.visibility="hidden",document.body.appendChild(s),s.click(),document.body.removeChild(s)}}}}})},OOfy:function(e,a,n){"use strict";a.a=[{abbr:"AL",name:"Alabama"},{abbr:"AK",name:"Alaska"},{abbr:"AZ",name:"Arizona"},{abbr:"AR",name:"Arkansas"},{abbr:"CA",name:"California"},{abbr:"CO",name:"Colorado"},{abbr:"CT",name:"Connecticut"},{abbr:"DE",name:"Delaware"},{abbr:"DC",name:"District of Columbia"},{abbr:"FL",name:"Florida"},{abbr:"GA",name:"Georgia"},{abbr:"HI",name:"Hawaii"},{abbr:"ID",name:"Idaho"},{abbr:"IL",name:"Illinois"},{abbr:"IN",name:"Indiana"},{abbr:"IA",name:"Iowa"},{abbr:"KS",name:"Kansas"},{abbr:"KY",name:"Kentucky"},{abbr:"LA",name:"Louisiana"},{abbr:"ME",name:"Maine"},{abbr:"MD",name:"Maryland"},{abbr:"MA",name:"Massachusetts"},{abbr:"MI",name:"Michigan"},{abbr:"MN",name:"Minnesota"},{abbr:"MS",name:"Mississippi"},{abbr:"MO",name:"Missouri"},{abbr:"MT",name:"Montana"},{abbr:"NE",name:"Nebraska"},{abbr:"NV",name:"Nevada"},{abbr:"NH",name:"New Hampshire"},{abbr:"NJ",name:"New Jersey"},{abbr:"NM",name:"New Mexico"},{abbr:"NY",name:"New York"},{abbr:"NC",name:"North Carolina"},{abbr:"ND",name:"North Dakota"},{abbr:"OH",name:"Ohio"},{abbr:"OK",name:"Oklahoma"},{abbr:"OR",name:"Oregon"},{abbr:"PA",name:"Pennsylvania"},{abbr:"RI",name:"Rhode Island"},{abbr:"SC",name:"South Carolina"},{abbr:"SD",name:"South Dakota"},{abbr:"TN",name:"Tennessee"},{abbr:"TX",name:"Texas"},{abbr:"UT",name:"Utah"},{abbr:"VT",name:"Vermont"},{abbr:"VA",name:"Virginia"},{abbr:"WA",name:"Washington"},{abbr:"WV",name:"West Virginia"},{abbr:"WI",name:"Wisconsin"},{abbr:"WY",name:"Wyoming"}]},"c+1i":function(e,a,n){"use strict";var t=n("mtWM"),r=n.n(t),i=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}();var s=function(){function e(a){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=a}return i(e,[{key:"get",value:function(e){return this.request("get",e)}},{key:"put",value:function(e,a){return this.config.data=a,this.request("put",e)}},{key:"delete",value:function(e){return this.request("delete",e)}},{key:"getData",value:function(){if(void 0!=this.config.data)return this.config.data}},{key:"request",value:function(e,a){var n=this;return new Promise(function(t,i){r.a[e](n.getFullUri()+a,n.getData()).then(function(e){t(e.data)}).catch(function(e){i(e.response.data.errors)})})}},{key:"getFullUri",value:function(){return this.getPrefix()+this.getResource()+this.getParams()}},{key:"getPrefix",value:function(){return""!=this.config.uri.prefix?"/"+this.config.uri.prefix+"/":""}},{key:"getResource",value:function(){return""!=this.config.uri.resource?this.config.uri.resource+"/":""}},{key:"getParams",value:function(){return this.config.uri.params.length>0?this.config.uri.params[0].id+"/":""}},{key:"onSuccess",value:function(e){return e}}]),e}();a.a=s},d0ki:function(e,a,n){"use strict";a.a={users:[]}}},[5]);