<template>
	<div class="column is-2" style="background: #343b4c;">
		<div class="columns is-centered">
		<div class="column has-text-white has-text-centered" @mouseover="toggleAvatarButton" @mouseout="toggleAvatarButton" style="margin-top: 1rem;">
			<span 
				class="tag is-light is-small has-text-centered" 
				v-show="showAvatarButton" 
				style="position: absolute; top: 200px; left: 4%; cursor: pointer;"
			>
				Edit
			</span>
    		<img 
    			id="avatar"
    			v-if="userHasAvatar"
    			:src="user.avatar.path"
    			:alt="user.name"
    			@click="addingAvatar = true"
    			style="width: 8em; height: 8em; margin-top: 1em;"
  			>
    		<span class="icon has-text-centered" @click="addingAvatar = true" v-else style="width: 7em; height: 7em;">
    			<i class="fa fa-user-circle-o" style="font-size:7em;"></i>
    		</span>

				<p class="is-size-6 has-text-centered"><strong style="color: whitesmoke;">{{user.name}}</strong></p>
				<span class="has-text-centered" style="color: #209cee;"><small>Joined {{ applicationDate }}</small></span>
				<div class="current-status has-text-centered mt-3 mb-4">
					<availability :is-available="user.available" :user-id="user.id" v-on:availability-changed="updateAvailability"></availability>
				</div>

			</div>
		</div>

	<aside class="menu" style="background: transparent; border:none; position: relative;">
	  <ul class="menu-list">
  		<li style="width:100%;">
  			<router-link :to="{name: 'home'}" exact>
        	<span class="icon is-small has-text-white"><i class="fa fa-dashboard"></i></span>
        	&nbsp;
        	<span class="has-text-white has-font-weight-bold">Dashboard</span>
      	</router-link>
  		</li>
	     <!--  <router-link :to="{name: 'home'}" tag="li" exact>
	        <a>
	        	<span class="icon is-small"><i class="fa fa-dashboard"></i></span>
	        	<span>Dashboard</span>
	    	</a>
	      </router-link> -->
      <li>
       <router-link :to="{name: 'personalInfo'}" exact>
        	<span class="icon is-small has-text-white"><i class="fa fa-user-circle-o"></i></span>
        	&nbsp;
        	<span class="has-text-white has-font-weight-bold">Personal Info</span>
      	</router-link>
      </li>
	     <!--  <router-link :to="{name: 'personalInfo'}" tag="li" exact>
	        <a>
	        	<span class="icon is-small"><i class="fa fa-user-circle-o"></i></span>
	        	<span>Personal Info</span>
	    	</a>
	      </router-link> -->
      <li>
	      <router-link :to="{name: 'licenses'}">
        	<span class="icon is-small has-text-white"><i class="fa fa-address-card-o"></i></span>
        	&nbsp;
        	<span class="has-text-white has-font-weight-bold">Licenses</span>
	      </router-link>
      </li>
	      <!-- <router-link :to="{name: 'licenses'}" tag="li">
	        <a>
	        	<span class="icon is-small has-text-white"><i class="fa fa-address-card-o"></i></span>
	        	<span>Licenses</span>
        	</a>
	      </router-link> -->
      <li>
	      <router-link :to="{name: 'documents'}">
	        <span class="icon is-small has-text-white"><i class="fa fa-file-text-o"></i></span>
	        &nbsp;
	        <span class="has-text-white has-font-weight-bold">Documents</span>
	    	</router-link>
	  	</li>
	    <!-- <router-link :to="{name: 'documents'}" tag="li">
	      <a>
	        <span class="icon is-small has-text-white"><i class="fa fa-file-text-o"></i></span>
	        <span>Documents</span>
	      </a>
	    </router-link> -->
    <li>
	    <router-link :to="{name: 'certifications'}">
	        <span class="icon is-small has-text-white"><i class="fa fa-certificate"></i></span>
	        &nbsp;
	        <span class="has-text-white has-font-weight-bold">Certifications</span>
	    </router-link>
	  </li>
	    <!-- <router-link :to="{name: 'certifications'}" tag="li">
	      <a>
	        <span class="icon is-small has-text-white"><i class="fa fa-certificate"></i></span>
	        <span>Certifications</span>
	      </a>
	    </router-link> -->
	    <li>
	     <router-link :to="{name: 'workHistory'}">
	        <span class="icon is-small has-text-white"><i class="fa fa-briefcase"></i></span>
	        &nbsp;
	        <span class="has-text-white has-font-weight-bold">Work History</span>
	   	</router-link>
	   </li>
	   <!--  <router-link :to="{name: 'workHistory'}" tag="li">
	      <a>
	        <span class="icon is-small has-text-white"><i class="fa fa-briefcase"></i></span>
	        <span>Work History</span>
	      </a>
	   	</router-link> -->
	  </ul>
	</aside><!-- end tabs -->
	</div>
</template>

<script>
	import croppa from 'vue-croppa';
	import availability from './Availability';

	export default {
		name: 'ProfileNavigation',
		props: ['user', 'applicationDate'],
		components: {
			croppa,
			availability
		},
		computed: {
			userHasAvatar() {
				return  this.user !== undefined && this.user.avatar !== '#' && this.user.avatar !== null ? true : false;
			},
		},
		data() {
			return {
				avatarCropper: null,
				showAvatarButton: false,
				addingAvatar: false,
				imgLoaded: false,
			}
		},
		methods: {
			uploadImage() {
				console.log('uploading...');
				this.avatarCropper.generateBlob((blob) => {
					let file = new File([blob], "avatar.png", {type: 'image/png'});
					let data = new FormData();
					data.append('avatar', file);
		        	window.axios.post('/api/user/' + window.userData.id + '/avatar/', data).then(response => {
		        		console.log(response);
		        		this.addingAvatar =  false;
		        		this.user.avatar = {
		        			path: response.data
		        		};
		        	})
				});
			},
			hasImage() {
				return this.imgLoaded = !this.imgLoaded;
			},
			toggleAvatarButton() {
				return this.showAvatarButton = !this.showAvatarButton;
			},
			updateAvailability(availability){
				return this.user.available = availability;
			},
		}
	}
</script>
<style>
.menu-list a:hover {
    background-color: #292f3d;
    color: #363636;
}
ul.menu-list li:not:(:first-child) {
		padding: 0 0 2.5px 0;
	}
	ul.menu-list li:first-child {
		padding: 0 0 2.5px 0;
	}
</style>