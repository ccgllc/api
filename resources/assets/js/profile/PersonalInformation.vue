<template>
	<div id="personal-information">
		<h1 class="profile-title">Personal Information</h1>
		<xactnet-addresses></xactnet-addresses>
		<phone-number></phone-number>
		<email-address></email-address>
		<mailing-address></mailing-address>
	</div>
</template>

<script>
	import xactnetAddresses from './components/XactnetAddresses.vue';
	import phoneNumber from './components/PhoneNumber.vue';
	import emailAddress from './components/EmailAddress.vue';
	import mailingAddress from './components/Address.vue';
	// import EditableText from './EditableText.vue';
	export default {
		name: 'PersonalInformation',
		components: {
			xactnetAddresses,
			phoneNumber,
			emailAddress,
			mailingAddress
		},
		data() {
			return {
				//
			}
		}
	}
</script>