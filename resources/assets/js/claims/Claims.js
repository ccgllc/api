module.exports = {
	// name: 'Claims',

	template: require('./templates/claims.template.html'),

	data: function() {
		return {
			claims: [],
			search: ''
		}
	},

	ready: function() {
		// this.$parent.titleText = 'Claims';
		this.$http.get('/claims').then(function(response){
			// console.log(data);
			this.claims = response.data;
		});
	}
}