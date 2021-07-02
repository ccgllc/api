<template>
	<div class="nav">

		<div class="navbar-brand has-text-centered" style="background: #292f3d; padding-left: .75em;">
	    <a class="navbar-item" href="/apply">
	      <img src="/images/icon.png" height="auto" width="auto" alt="Claim Consulant Group" >
	    </a>

	    <div class="navbar-burger burger" :class="{'is-active': show}" data-target="userMenu" @click="toggleMobile">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>

	  <div class="nav-container is-flex is-flex-direction-column is-justify-content-space-between" v-if="show">
			<div id="" class="" style="background: #343b4c;">
				<aside class="menu mt-4 mb-4" style="background: transparent; border:none; position: relative;">
				  <ul class="menu-list">
			  		<li v-if="hasRoles">
			  			<a href="/dashboard/#/">
				        	<span class="icon is-small"><i class="fa fa-dashboard"></i></span>
				        	<span class="has-text-weight-medium">My Dashboard</span>
			      		</a>
			      		<ul style="font-size: .75em; border-color: #439bd1">
			        		<li v-if="user.permissions.find(perm => perm.name === 'manage-users')"><a href="/dashboard/users/#/">Users Dashboard</a></li>
			        		<li v-if="user.roles.find(role => role.name === 'dispatch')""><a href="/dashboard/dispatch/#/">Dispatch Dashboard</a></li>
			        	</ul>
			  		</li>
			      <li>
				      <a v-if="hasRoles" href="/claims/#/">
				        <span class="icon is-small "><i class="fa fa-file-text-o"></i></span>
				        <span class="has-text-weight-medium">Claims</span>
				    	</a>
				  	</li>
			      <li>
				      <a v-if="hasRoles" href="/users/#/">
			        	<span class="icon is-small "><i class="fa fa-users"></i></span>
			        	<span class="has-text-weight-medium">Users</span>
				      </a>
			      </li>
			      <li>
			       <a href="/profile/#/">
			        	<span class="icon is-small "><i class="fa fa-user-circle-o"></i></span>
			        	<span class="has-text-weight-medium">My Profile</span>
			      	</a>
			      </li>
				  </ul>
				</aside>
			</div>
			<div id="auth" class="" style="padding: 1em;">
	  		<div class="is-flex is-align-items-center" style="">
	    		<img 
	    			v-if="userHasAvatar"
	    			:src="user ? user.avatar.path : '#'"
	    			:alt="user.name"
	    			style="width: 4em; height: 4em; border-radius: 512px;"
	  			>

	    		<span class="icon" @click="addingAvatar = true" v-else style="width: 7em; height: 7em;">
	    			<i class="fa fa-user-circle-o" style="font-size:7em;"></i>
	    		</span>

		    		<div class="ml-2">
		    			<p class="is-size-6"><strong style="color: #7683a2;" v-text="user.name"></strong></p>
							<p class="has-text-left" style="color: #209cee;">
								<a @click.prevent="signout()">
                  Signout
	              </a>
							</p>
						</div>

	    		<!-- </div> -->

			        <!-- <span class="has-text-centered"><small><strong>CCG CMS Version {{ version }}</strong></small></span><br>
			        <small>© Claim Consultant Group {{ year }}. All rights reserved.</small> -->
			    <!-- 	</div>
					</div> -->
				<!-- </div> -->
	        <!-- <span class="has-text-centered"><small><strong>CCG CMS Version {{ version }}</strong></small></span><br>
	        <small>© Claim Consultant Group {{ year }}. All rights reserved.</small> -->
	    	<!-- </div> -->
				</div>
			</div>
		</div>

	</div>
	<!-- </div> -->

</template>

<script>
	import availability from '../profile/Availability';

	export default {
		name: 'Navigation',
		props: ['applicationDate', 'year', 'version', 'logoutRoute'],
		components: {
			availability,
		},
		mounted() {
			this.innerWidth = window.innerWidth;
			window.addEventListener('resize', this.resized);
			this.user = window.user;
			this.mobile ? this.show = false : this.show = true;
		},
		computed: {
			userHasAvatar() {
				return  this.user !== undefined && this.user.avatar !== '#' && this.user.avatar !== null ? true : false;
			},
			hasRoles() {
				return this.user.roles.length ? true : false;
			},
			mobile() {
				return this.innerWidth > 800 ? false : true;
			}
		},
		data() {
			return {
				user: {avatar:{path: '#'}},
				innerWidth: 0,
				show: false,
			}
		},
		methods: {
			signout(){
				window.axios.post(this.logoutRoute).then(response => {
					console.log(response);
					window.location.reload();
				});
			},
			toggleMobile() {
				// alert('toggle')
				if (this.mobile) {
					return this.show = !this.show;
				}
			},
			resized (e) { 
				this.innerWidth = window.innerWidth;
				return this.mobile ? this.show = false : this.show = true;
			},
			hasImage() {
				return this.imgLoaded = !this.imgLoaded;
			},
			updateAvailability(availability){
				return this.user.available = availability;
			},
		}
	}
</script>
<style>
.icon: {
	color: #7683a2;
}
.menu-list li {
	margin: .25em;
	font-size: 1.15em;
}
.menu-list .icon {
	margin-right: .5em;
}
.menu-list a {
	color: #7683a2;
}
.menu-list a:hover {
    background-color: #292f3d;
    color: #3298dc;
}
.navbar-burger {
	color: #7683a2;
}
.nav {
		height: auto;
	}
#auth {
	position: static;
	background: #292f3d; 
	/*width: 100%;*/
}

@media screen and (min-width: 1024px) {
	.nav {
		min-height: 100vh;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		/*overflow: hidden;*/
		background: #343b4c;
		/*position: --webkit-sticky;
		position: sticky;
		top: 0;
		align-self: flex-start;*/
		/*justify-content: space-between;*/
	}
	.nav-container {
		/*min-height: 100%;*/
		display: flex;
		flex-grow: 1;
		/*min-height: 94vh;*/
	}
	#auth{
		/*position: absolute; bottom: 0;*/
	}
	.navbar, .navbar-menu, .navbar-start, .navbar-end {
		align-items: stretch;
		display: flex;
		flex-direction: column;
	}
}

/*ul.menu-list li:not:(:first-child) {
		padding: 0 0 2.5px 0;
	}
	ul.menu-list li:first-child {
		padding: 0 0 2.5px 0;
	}*/
</style>