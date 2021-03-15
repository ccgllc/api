<template>
	<div class="column is-half">
		<div class="card">
			<header class="card-header">
			    <p class="card-header-title">
			     {{license.license_state}} Adjusting License
			    </p>
			     <a @click="edit()" class="card-header-icon" :class="{ 'has-text-grey': editing, 'has-background-grey-dark': editing }" aria-label="edit">
			      <span class="icon">
			        <i class="fa" :class="{ 'fa-edit': !editing, 'fa-close': editing }" aria-hidden="true"></i>
			      </span>
			    </a>
		 	</header>
		 	<div class="card-content">
		 		<div class="content">
		 			<div class="columns is-multiline is-mobile">
						<!-- <div class="column is-2">
							<p><strong>License #</strong>:</p>
						</div> -->

						<div class="column is-6">
							<p v-if='!editing'><strong>License #:</strong> {{ license.license_number }}</p>
							<div class="field" v-else>
								<label class="label">License #</label>
								<div class="control">
									<input type="text" name="license_number" v-model="editedLicense.license_number" class="input">
								</div>
							</div>
						</div>

						<!-- <div class="column is-2">
							<p><strong>Expires</strong>:</p>
						</div> -->

						<div class="column is-6">
							<p v-if='!editing'><strong>Expires:</strong> {{ license.expiration_month }} / {{license.expiration_year}}</p>
							<div class="columns" v-else>
								<div class="column">
									<div class="field">
										<label for="month" class="label">Month</label>
										<div class="control">
											<div class="select is-fullwidth">
												<select type="text" name="expiration_month" v-model="editedLicense.expiration_month">
													<option v-for="month in months" :value="month.abbr">{{ month.abbr }}</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="column">
									<div class="field">
										<label for="month" class="label">Year</label>
										<div class="control">
										<div class="select is-fullwidth">
											<select type="text" name="expiration_year" v-model="editedLicense.expiration_year">
												<option v-for="n in 10" :value="(currentYear + n) - 1">{{ (currentYear + n) - 1 }}</option>	
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
						<div v-if="editing" class="column is-12">
							<button @click="update()" class="button is-info">Save</button>
							<button @click="remove()" class="button is-danger">Delete</button>
							<button @click="editing = false" class="button" >Cancel</button>
							<!-- <a @click="remove()" class="card-header-icon is-danger" " aria-label="Delete">
			     		 	<span class="icon">
			        		<i class="fa fa-close" aria-hidden="true"></i>
			      		</span>
		    			</a> -->
						</div>
					</div><!-- end inner card columns -->
				</div><!-- end content -->
	 		</div><!-- end card content --> 
	 	</div><!-- end card -->
 	</div><!-- end column -->
</template>

<script>
	export default {
		name: 'License',
		props: ['license', 'months', 'states', 'currentYear'],
		data(){
			return {
				editing: false,
				editedLicense: {
					id: '',
					license_number: '',
					expiration_month: '',
					expiration_year: ''
				}
			}
		},
		mounted() {
			this.resetLicense()
		},
		methods: {
			edit() {
				this.editing === false ? this.editing = true : this.resetLicense();
				this.$emit('edit')
			},
			update() {
				this.$emit('update', this.editedLicense);
				this.editing = false;
			},
			remove() {
				confirm('Are you sure? This cannot be undone') ?  this.$emit('remove', this.license) : false;
				//
			},
			resetLicense() {
				this.editedLicense.id = this.license.id;
				this.editedLicense.license_number = this.license.license_number;
				this.editedLicense.expiration_month = this.license.expiration_month;
				this.editedLicense.expiration_year = this.license.expiration_year;
				this.editing = false;
			}
		}
	}
</script>