<template>
	<div class="dropdown is-hoverable">
			<div class="dropdown-trigger">
	    	<button :class="{'is-info' : isActive ,'is-danger' : isNoHire}" class="button is-dark is-small is-rounded">
	    		<span v-text="capitalize(status)"></span>
	    		 <span class="icon is-small">
			      <i class="fa fa-angle-down"></i>
			    </span>
	    	</button>
	    </div>
	    <div class="dropdown-menu" id="dropdown-menu" role="menu">
		    <div class="dropdown-content">
		      <a v-for="status of statuses" v-on:click="setStatus(status)" href="#" class="dropdown-item" v-text="capitalize(status)"></a>
		    </div>
		</div>
	</div>
</template>

<script>
	import Form from '../../structur/src/form/Form';
	export default {
		name: 'StatusManager',
		props: ['userId', 'status'],
		data() {
			return {
				form: new Form({
					status: ''
				}),
				statuses: [
					'active', 'inactive', 'no-hire',
				]
			}
		},
		computed: {
			isNoHire() {
				return this.status === 'no-hire' ? true : false;
			},
			isActive() {
				return this.status === 'active' ? true : false;
			},
		},
		methods: {
			setStatus(status){
				if (this.status !== status) { 
					this.form.status = status;
					this.form.put('/api/user/' + this.userId + '/status').then(response => {
						this.$emit('status-changed', response);
					});
				}
			},
			capitalize(string){
				if (typeof string === 'string') {
					return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
				}
			}
		}
	}
</script>