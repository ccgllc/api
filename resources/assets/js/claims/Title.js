module.exports = {
	el: function() {
		return '#title'
	},
	props: ['text', 'other'],
	template: require('./templates/title.template.html'),
	data:function() {
		return {
			//
		}
	}
}