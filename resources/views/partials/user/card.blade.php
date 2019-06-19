<div class="card">
	<div class="card-content">
	    <div class="content">
	    	<div class="columns">
		    	<div class="column is-3 has-text-centered">
		    		<div @mouseover="toggleAvatarButton" @mouseout="toggleAvatarButton">
		    			<span 
		    				class="tag is-light is-small has-text-centered" 
		    				v-show="showAvatarButton" 
		    				style="position: absolute; top: 225px; left: 12%; cursor: pointer;"
	    				>
	    					Edit
		    			</span>
				    		<img 
				    			id="avatar"
				    			v-if="userHasAvatar"
				    			:src="user.avatar.path"
				    			:alt="user.name"
				    			@click="addingAvatar = true"
				    			style=""
			    			>
				    		<span class="icon is-extra-large" @click="addingAvatar = true" v-else>
				    			<i class="fa fa-12x fa-user-circle-o"></i>
				    		</span>
		    		</div>
		    		
		    		{{-- <br> --}}
		    		<div class="current-status">
		    			<h4>My Status</h4>
		    			<availability :is-available="user.available" :user-id="user.id" v-on:availability-changed="updateAvailability"></availability>
		    		</div>
		    	</div>
		    	<div class="column is-9">
		    		<h1 style="margin-top: 0;">{{ $user->name  }}</h1>

		    		@if(auth()->user()->hasRole('administrator'))
						{{-- If current authenticated user is an admin show editable status controls --}}
				    	<status-manager 
				    		:user-id="{{ $user->id }}" 
				    		:status="user.status"
				    		v-on:status-changed="updateStatus"
			    		>
			    			
			    		</status-manager>

					@else
						{{-- if the profile-user has roles, show the one last assigned. --}}
						@if($user->roles->count())
		    			    <span class="tag is-rounded is-info">{{ ucfirst($user->roles->last()->label) }}</span>
		    			@endif

					@endif
			      	
			      	<div class="card-section">
			      		<h4><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;My Location</h4>
			      		<h3>{{ $user->profile->city ?? 'No City' }} {{ $user->profile->state ?? 'No State' }}</h3>
			      	</div>
					
					<div class="card-section">
						<h4><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;Application Date</h4>
						@if ($user->profile)
							<h3>{{ $user->profile->created_at->diffForHumans() }}</h3>
						@else 
							<h3>User has not completed their application</h3>
						@endif
					</div>

		    	</div>
		    </div>
	    </div>
	</div>
	<div class="modal is-solid" v-bind:class="{ 'is-active': addingAvatar }">
	  <div class="modal-background"></div>
	  <div class="modal-card">
	   {{--  <header class="modal-card-head">
	      <p class="modal-card-title">Add Your Profile Picture</p>
	      <button class="delete" aria-label="close" @click="addingAvatar=false"></button>
	    </header> --}}
	    <section class="modal-card-body">
	    <div class="columns">
	    	<div class="column is-6 is-offset-3">
	    		 <avatar-cropper 
			     	class="has-text-centered"
			     	v-model="avatarCropper" 
			     	canvas-color="transparent"
			     	:width="256"
		         	:height="256"
		         	:quality="2"
		         	:prevent-white-space="true"
		         	:show-loading="true"
		         	:accept="'image/*'"
		         	v-on:loading-end="hasImage"
		         	v-on:image-remove="hasImage"
			    >
			   	 	<div class="spinner" v-if="avatarCropper && avatarCropper.loading"></div>
	     		</avatar-cropper>
	     		<button class="button is-success" @click="uploadImage" :disabled="!imgLoaded">Save Profile Image</button>
	      		<button class="button" @click="addingAvatar = false">Cancel</button>
	    	</div>
	    </div>
	    </section>
	   {{--  <footer class="modal-card-foot"> --}}
	      
	    {{-- </footer> --}}
	  </div>
	</div>
</div>	