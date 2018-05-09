module.exports = {
	name: 'ClaimDetail',
	props: ['claim'],
	template: require('./templates/claim-detail.template.html'),
	data: function() {
		return {
			//
		}
	},
	filters: {
		ucwords: function(val) {
			if (val) {
				let str = val.toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
				});
			return str;
			}
			return;
		}
	}
}