<template>
	<div class="modal" :class="{'is-active': show}">
	  <div class="modal-background" style="background-color: #f1f1f1"></div>
	  <div class="modal-content">
	   	<h1 class="title" style="color: #439BD1">Support</h1>
		<p>We're sorry you are having issues, but our support team is here to help.</p><hr style="background: #ccc;">

		<h2 style="font-size: 1.5em;">System Requirements</h2>
		<p>We currently support Windows 7+, macOS 10.8+, iOS 7+, and Android 6+.</p>
		<p>For best results always use an <a href="https://browsehappy.com/">up-to-date browser</a>.</p><br>

		<h2 style="font-size: 1.5em;">Troubleshooting</h2>
		<p>If you're having trouble registering please <a href="mailto: support@ccgops.net?subject=Help Registering">contact us</a>. Be sure to include your operating system and browser version, with the subject "Help Registering".</p><br>
		<p>Most issues can be fixed by signing out, and signing back in. <br>(<strong>Note: Closing a tab or window will not sign you out</strong>)</p><br>
		<ul>
			<li>Hover over your name (menu icon on mobile) in the dark blue bar at the top of the page.</li>
			<li>Click the signout link from the menu.</li>
			<li>This should redirect you to login screen. If you see the registration page click the link at the bottom that says login.</li>
			<li>Authenticate using your email and password and try again.</li>
		</ul><br>
		<p>If none of the above solved your issue, you'll need to <a href="mailto: support@ccgops.net?subject=Help Registering">contact us</a> to better serve you.</p><br>
		<button class="button is-info has-text-centered" @click="toggleSupport">Got it</button>
	  </div>
	  <button class="modal-close is-large" aria-label="close" @click="toggleSupport"></button>
	</div>
</template>

<script>
	export default {
		name: 'Support',
		props: ['show'],
		data() {
			return {
				//show: false
			}
		},
		mounted(){
			//alert('hello from support.');
		},
		methods: {
			toggleSupport() {
				return this.$emit('toggle-support');
			}
		}
	}
</script>
<style>
	.modal-content ul li{
		list-style: disc;
		list-style-position: inside;
	}
</style>