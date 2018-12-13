import 'babel-polyfill'
window._ = require('lodash');
window.axios = require('axios');

window.bootstrap = function () {
	window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

	var token = document.head.querySelector('meta[name="csrf-token"]');
	var api_token = window.localStorage.token;

	if (token) {
	    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
	}
	else {
	    console.error('CSRF token not found');
	}

	if(api_token) 
	{
		window.axios.defaults.headers.common['Authorization'] = `Bearer ${api_token}`
	} else {
		if (! window.location === '/login#')
		{
			var prev = window.location;
			console.error('You need to login.');
		    window.axios.post('/logout').then(response => {
		    	window.location = prev;
		    })
		}
	}
	// var originalFunction = console.error;
	// console.error = function() {
	//   var args = Array.prototype.slice.call(arguments);
	//   console.log(args[0]);
	//   if(args[0]) {
	//   	window.axios.post('/api/admin/client-error', args[0].response).then(response => {
	//   		console.log(args[0].response.status);
	//   		if(args[0].response.status != 422 && args[0].response.status != 401 && args[0].response.status != 404) {
	//   			alert('Unfortunately we detected an issue with this request, We\'ve forwarded a copy of the error to our development team for investigation. If you continue to need help, please contact us at support@claimconsultantgroup.com');
	//   		}
	//   	});
	// }
	//   if (args[0].response.status == 401) {
	//   	window.axios.post('/logout').then(response => {
	// 	    window.location = '/login';
	//  	})
	//   };
	//   return originalFunction.apply(console, args);
	// }
}
bootstrap();


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
