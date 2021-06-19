<template>
	<page title="Your Avatar" description="Click your current image or the box below to choose and edit a new avatar.">
		<div style="margin: 2em;">
			<div v-if="imgLoaded">
				<p style="margin-bottom: 0;">Use your mouse wheel (pinch on mobile) to zoom in and out</p>
				<div class="buttons has-addons" style="padding: 1em;">
			 		<button class="button" @click="avatarCropper.rotate()">Rotate</button>
			 		<button class="button" @click="avatarCropper.flipX()">Flip X</button>
			 		<button class="button" @click="avatarCropper.flipY()">Flip Y</button>
			 		<button class="button is-secondary" @click="uploadImage">Save Profile Image</button>
		 		</div>
	 		</div>

			<avatar-manager 
		   	v-model="avatarCropper" 
		   	canvas-color="transparent"
		   	:loading-size=40
		   	loading-color="#fff"
		   	:width="384"
		    :height="384"
		    :quality="2"
		    placeholder-color="#fff"
		    :prevent-white-space="true"
		    :show-loading="true"
		    :accept="'image/*'"
		    @loading-end="hasImage"
		    @image-remove="hasImage"
		  >
		  	<img slot="placeholder" :src="imgPath" alt="choose an image.." /> 
		 	 	<div class="spinner" v-if="avatarCropper && avatarCropper.loading"></div>
			</avatar-manager>
 		</div>
	</page>
</template>

<script>
	import Vue from 'vue';
	import AvatarManager from 'vue-croppa';
	import Page from '../components/Page.vue';
	import Form from '../structur/src/form/Form';
	import 'vue-croppa/dist/vue-croppa.css';

	Vue.use(AvatarManager, {componentName: 'avatarManager'});

	export default {
		name: 'Avatar',
		props: ['imgPath'],
		components: {Page},
		data() {
			return {
				addingAvatar: false,
				imgLoaded: false,
				avatarCropper: {},
			}
		},
		methods: {
			hasImage() {
				return this.imgLoaded = !this.imgLoaded;
			},
			rotate() {
				this.avatarCropper.rotate()
			},
			uploadImage() {
				console.log('uploading...');
			  this.avatarCropper.generateBlob((blob) => {
					let file = new File([blob], "avatar.png", {type: 'image/png'});
					let data = new FormData();
					data.append('avatar', file);
	      	window.axios.post('/api/user/' + window.userData.id + '/avatar/', data).then(response => {
	      		this.addingAvatar = false;
	      		this.avatarCropper.refresh();
	      		this.avatarCropper.remove();
	      	})
				});
			}
		}
	}
</script>