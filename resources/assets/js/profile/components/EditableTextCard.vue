<template>
<div class="card" style="margin-top: 1rem;">
	<div class="card-content">
	    <div class="content">
	    	<div class="columns">
	    		<div class="column is-10" style="padding-top: 0; padding-bottom: 0;">
		    		<h3 style="font-weight: 700"><slot></slot></h3>
	    		</div>
	    		<div class="column is-2" style="padding-top: 0; padding-bottom: 0;">
	    			<span class="icon has-text-info" style="cursor: pointer;" @click="editText">
	    				<i class="fa fa-pencil" v-if="!editing"></i>
	    				<i class="fa fa-times" v-if="editing"></i>
	    			</span>
	    		</div>
    		</div>
    		<div class="columns">
	    		<div class="column is-12" style="padding-top: 0;">
	    			<span v-if="!editing">
    					<p v-text="text"></p>
	    			</span>
	    			<span v-if="editing">
	    				<textarea class="textarea" v-model="form.text" @keyup.ctrl.enter="saveText"></textarea>
	    				<button @click="saveText" class="button is-small is-primary" style="margin-top: .5rem;">Save</button>
	    			</span>
	    		</div>
	    	</div>
	    </div>
	</div>
</div>
</template>

<script>
	import Form from '../../structur/src/form/Form';
	export default {
		name: 'EditableTextCard',
		props: ['text', 'userId', 'endpoint'],
		data() {
			return {
				editing: false,
				form: new Form({text: ''}),
			}
		},
		methods: {
			editText() {
				this.editing = !this.editing;
				this.form.text = this.text;
			},
			saveText() {
				this.form.put('/api/user/' + this.userId + '/' + this.endpoint).then(response => {
					console.log(response);
					this.$emit('text-changed', response);
				});
				this.editing = false;
			}
		}
	}
</script>