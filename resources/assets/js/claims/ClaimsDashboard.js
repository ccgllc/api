var Vue = require('vue');
var Router = require('vue-router');
Vue.use(require('vue-resource'));
Vue.use(Router);
Vue.config.debug = true;

// Vue.directive('select-two', {
//   twoWay: true,
//   bind: function () {
//     $(this.el).select2()
//     .on("select2:select", function(e) {
//       this.set($(this.el).val());
//     }.bind(this));
//   },
//   update: function(nv, ov) {
//     $(this.el).trigger("change");
//   }
// });

Vue.directive('date', {
	twoWay: true,
	bind: function () {
		this.handler = function () {
			this.vm.$dispatch('dateUpdated');
	      	this.set(this.el.value);
	    }.bind(this)
	    $(this.el).change(this.handler);
	    // this.el.addEventListener('change', this.handler);
  	},
	unbind: function () {
	   this.el.removeEventListener('input', this.handler);
	}
});

var Claims = Vue.extend({
	name: 'Claims',
	components: {
		title: require('./Title.js')
		// navigation: require('./Navigation.js')
	},
	data: function() {
		return {
			titleText: 'Claims',
			otherText: '',
			permissions: [],
		}
	},
	ready: function() {
		//TODO Implement Permissions object.
		// this.$http.get('users/permissions', function(permissions){
		// 	this.permissions = permissions;
		// });
	}
})

var router = new Router({
	linkActiveClass: 'active'
});
router.map({
	'/': {
		name: 'Claims',
		component: require('./Claims.js'),
	},
	'/create': {
		name: 'createClaim',
		component: require('./NewClaim.js')
	},
	'/:claimId/edit': {
		name: 'edit',
		component: require('./EditClaim.js'),
	},
	'/:claimId/show': {
		name: 'showClaim',
		component: require('./ShowClaim.js'),
		subRoutes: {
			'/': {
				name: 'details',
				component: require('./ClaimDetail.js')
			},
			'/billing': {
				name: 'billing',
				component: require('./ClaimBilling.js'),
			},
			'/timeline': {
				name: 'timeline',
				component: require('./Timeline.js')
			},
			'/policy': {
				name: 'policy',
				component: {
					name: 'Policy',
					template: '<h4>This is Policy Template</h4>'
				},
			},
		} //subroutes		
	} // showClaim
})
router.start(Claims, '#claims-app');