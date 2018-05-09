module.exports = {
	name: 'EditClaim',

	template: require('./templates/editclaim.template.html'),

	components: {
		newClaim: require('./NewClaim.js')
	},

	props: ['title', ],

	data: function() {
		return {
			'btnText': 'Update Claim'
		}
	},
	
	ready: function() {
		this.title = 'Edit Claim',
		this.mode = 'edit'
	}
}