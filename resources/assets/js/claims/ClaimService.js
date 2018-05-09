import Vue from 'vue';
module.exports = {
	fetch: function (params, cb) {
		Vue.http.get('/claims/' + params.id).then((response) => {
			return cb(null, response.data)
		});
	}
}