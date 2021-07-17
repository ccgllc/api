<template>
	<page title="My Work History" description="Keep your work history up-to-date">
		<!-- <h1 class="profile-title">My Work History</h1> 
		<br> -->
		<div class="columns is-multiline" style="padding: 2em; margin-left: .025em; margin-right: .025em; background: #f2f2f2">
			<div class="column is-3" v-for="(value, key) in workHistory" v-if="value != 0">
				<div class="card">
					<header class="card-header" :class="{'is-dark': key.includes('claims'), 'is-info': key.includes('experience')}"> 
						<p class="card-header-title is-pulled-left">
							{{ key | capitalize }}
						</p>
						 <a class="card-header-icon" aria-label="more options">
					      <span class="icon">
					        <i class="fa fa-edit" @click="edit(value, key)" style="color: #fff;" aria-hidden="true"></i>
					      </span>
					    </a>
					</header>
					<div class="card-content">
						<div class="content">
							<p>{{ value }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="columns" style="padding: 2em; margin-left: .025em; margin-right: .025em;">
			<div class="column">
				<a class="button is-info" @click="createNew">Add Work History</a>
			</div>
		</div>

		<div id="createLicense" class="quickview" :class="{'is-active': showForm}">

	    <header class="quickview-header">
	      <span class="has-text-weight-bold is-size-5 has-text-white">Add Work History</span>
	      <span class="delete" @click="showForm = false"></span>
	    </header>

	    <div class="quickview-body">
	      <div class="quickview-block" style="margin: 1em;">
	      	<form @submit.prevent="save" @keydown="newWorkHistory.errors.clear($event.target.name)">
	      		<div class="field">
		    			<label for="types" class="label">Type:</label>
		    			<div class="select is-fullwidth">
			    			<select name="types" id="types" v-model="newWorkHistory.type" :disabled="this.editing">
				      			<option value="">Select</option>
				      			<option v-for="type in types" :value="type">{{ type | format | capitalize}}</option>
			      			</select>
			      			<span class="help is-danger" v-if="newWorkHistory.errors.has('type')" v-text="newWorkHistory.errors.get('type')"></span>
		    			</div>
	    			</div>

	    			<div class="field" v-if="newWorkHistory.type.includes('claims')">
	    				<label for="value" class="label">{{ newWorkHistory.type | format | capitalize }}</label>
	    				<input 
	    					class="input"
	    					type="number" 		
				          	maxlength="6" 
				          	min="0" 
				          	max="65535"
				          	placeholder="0" 
				          	v-model="newWorkHistory.value"
				          	number
	    				>
	    				<span class="help is-danger" v-if="newWorkHistory.errors.has('value')" v-text="newWorkHistory.errors.get('value')"></span>
	    			</div>

	    			<div class="field" v-if="newWorkHistory.type.includes('experience')">
	    				<label for="value" class="label">Years</label>
	    				<input 
		          	class="input" 
		          	type="number" 
		          	maxlength="2" min="0" max="99" 
		          	placeholder="0"
		          	v-model="years"
		          	@input="calculateMonths"
		          	number
	          	>
	          </div>

          	<div class="field" v-if="newWorkHistory.type.includes('experience')">
          		<label for="value" class="label">Months</label>
	          	<input 
		          	class="input" 
		          	type="number" 
		          	maxlength="2" min="0" max="11" 
		          	placeholder="0"
		          	v-model="months"
		          	@input="calculateMonths"
		          	number
	          	>
	    			</div>
	    			<hr>
						<div class="field is-flex is-justify-content-flex-end">
				      <button class="button" @click.prevent="showForm = false">Cancel</button>&nbsp;&nbsp;
				      <input type="submit" class="button is-primary" value="Save">
						</div>
		    	</form>
	      </div>
	    </div>
    </div>
	</page>
</template>

<script> 
	import Form from '../structur/src/form/Form';
	import page from '../components/Page.vue';
	export default {
		name: 'WorkHistory',
		mounted() {
			// console.log(window.userData.work_history);
			this.workHistory = this.setup(window.userData.work_history);
		},
		components: {
			page
		},
		data() {
			return {
				workHistory: {},
				showForm: false,
				editing: false,
				years: 0,
				months: 0,
				newWorkHistory: new Form({
					type: '',
					value: 0,
				}),
				types: [
					'desk_experience',
					'residential_experience',
					'residential_claims',
					'residential_cat_experience',
					'residential_cat_claims',
					'commercial_experience',
					'commercial_claims',
					'commercial_cat_experience',
					'commercial_cat_claims',
					'large_loss_experience',
					'large_loss_claims',
					'large_loss_cat_experience',
					'large_loss_cat_claims',
					'auto_experience',
					'auto_claims',
					'inland_marine_experience',
					'inland_marine_claims',
					'casualty_experience',
					'casualty_claims',
					'environmental_experience',
					'environmental_claims',
					'flood_experience',
					'flood_claims',
					'earthquake_experience',
					'earthquake_claims',
				]
			}
		},
		methods: {
			save() {
				// console.error('newError');
				let endpoint = '/api/user/' + window.userData.id + '/work-history';
				this.newWorkHistory.post(endpoint, false)
					.then(response => {
						console.log(response);
						let type = this.newWorkHistory.type.replace(/(_)/g, " ");
						if (this.newWorkHistory.type.includes('experience'))
						{
							let value = this.newWorkHistory.value;
							this.workHistory[type] = this.getYears(value) + ' years ' + this.getMonths(value) + "  months";
						} else {
							this.workHistory[type] = this.newWorkHistory.value;
						}
						return this.cancel();
					}).catch(error => {
						console.error(error);
						return window.axios.post('/api/admin/client-error', error);
					});
			},
			createNew() {
				this.editing = false
				this.showForm = !this.showForm 
			},
			setup(data) {
				let workHistory = {};
				for (let prop in data)
				{
					let newProp = prop.replace(/(_)/g, " ");
					workHistory[newProp] = data[prop];
					if (newProp == 'id' || newProp == 'created at' || newProp ==  'updated at' || newProp == 'user id') {
						delete workHistory[newProp];
					}
					if(newProp.includes('experience') && workHistory[newProp] != 0){
						let value = workHistory[newProp];
						workHistory[newProp] = this.getYears(value) + ' years ' + this.getMonths(value) + "  months";
					}
				}
				return workHistory;
			},
			getMonths(value) {
				return +(Math.floor(+value%12));
			},
			getYears(value) {
				return +(Math.floor(+value/12));
			},
			calculateMonths() {
				if (this.years < 0) {
					this.years = 0;
				}
				if (this.months > 11) {
					return this.months = 11;
				};
				return this.newWorkHistory.value = +((this.years * 12) + +(this.months));
			},
			edit(value, key) {
				this.editing = true;
				this.showForm = true;
				if (key.includes('experience')){
					let v = value.match(/([0-9])+(?!=\s){1,2}/g);
					let sum = v.reduce((a, b) => (parseInt(a) * 12) + parseInt(b) );
					this.months = this.getMonths(+sum);
					this.years = this.getYears(+sum);
					this.newWorkHistory.value = this.years + this.months;
				}
				else {
					this.newWorkHistory.value = value;
				}
				return this.newWorkHistory.type = key.replace(/(\s)/g, "_");
			},
			cancel() {
				this.newWorkHistory.type = '';
				this.newWorkHistory.value = 0;
				this.months = 0;
				this.years = 0;
				this.editing = false;
				this.newWorkHistory.errors.any() ? this.newWorkHistory.errors.clear() : null;
				return this.showForm = !this.showForm;
			}
		},
		filters: {
			capitalize(value) {
			    if (!value) return ''
			    value = value.toString()
			    return value.charAt(0).toUpperCase() + value.slice(1)
			},
			format(key) {
				return key.replace(/(_)/g, " ");
			}
		}
	}
</script>