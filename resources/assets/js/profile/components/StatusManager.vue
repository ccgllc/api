<template>
	<div class="columns" style="padding: 2em; background: #f2f2f2; margin: .05em .025em 0 .025em;">

		<div class="column is-2">
			<p><strong>Status</strong>:</p>
		</div>

		<div class="column is-10">
			<div class="dropdown" :class="{'is-active': show}" style="z-index: 100;" @mouseleave="show = false">
				<div class="dropdown-trigger" @click="show = !show">
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
				show: false,
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
				this.show = false;
			},
			capitalize(string){
				if (typeof string === 'string') {
					return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
				}
			}
		}
	}
</script>