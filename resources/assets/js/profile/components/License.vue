<template>
	<div class="columns" :style="background" style="padding: 2em; margin: 0; overflow: hidden; width: 100%;">
		<!-- <div class="column is-1">
			
		</div> -->

		<div class="column">
			<p v-if="!editing"><strong>{{ license.license_state }} Adjusting License</strong></p>
			<div class="columns" v-else>
					<div class="column">
						<div class="field">
							<label for="state" class="label">State</label>
							<div class="control">
								<div class="select is-fullwidth">
									<select type="text" name="expiration_month" v-model="editedLicense.license_state">
										<option v-for="state in states" :value="state.abbr">{{ state.name }}</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>

		<div class="column">
			<p v-if='!editing'><strong>License #:</strong> {{ license.license_number }}</p>
			<div class="field" v-else>
				<label class="label">License #</label>
				<div class="control">
					<input type="text" name="license_number" v-model="editedLicense.license_number" class="input">
				</div>
			</div>
		</div>

		<div class="column">
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
			<div class="column">
				<button class="button is-info" v-if="!editing" @click="edit()" :class="{ 'has-text-grey': editing }" aria-label="edit">
		      &nbsp;<span class="icon is-small">
		        <i class="fa fa-edit" aria-hidden="true"></i>
		      </span>
		      <span>edit</span>
		      &nbsp;
    		</button>
				<div class="field has-addons" v-if="editing" style="margin-top: 2em;">
					<p class="control"><button @click="update()" class="button is-info">&nbsp;<span class="icon is-small"><i class="fa fa-check"></i></span>&nbsp;</button></p>
					<p class="control"><button @click="remove()" class="button is-danger">&nbsp;<span class="icon is-small"><i class="fa fa-trash-o"></i></span>&nbsp;</button></p>
					<p class="control"><button @click="editing = false" class="button is-dark">&nbsp;<span class="icon is-small"><i class="fa fa-times"></i></span>&nbsp;</button></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'License',
		props: ['license', 'months', 'states', 'currentYear', 'background'],
		data(){
			return {
				editing: false,
				editedLicense: {
					id: '',
					license_state: '',
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
				this.editedLicense.license_state = this.license.license_state;
				this.editedLicense.license_number = this.license.license_number;
				this.editedLicense.expiration_month = this.license.expiration_month;
				this.editedLicense.expiration_year = this.license.expiration_year;
				this.editing = false;
			}
		}
	}
</script>