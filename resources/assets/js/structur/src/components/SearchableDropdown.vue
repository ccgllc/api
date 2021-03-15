<template>
	<div style="margin-top: 1em; margin-bottom: 1em;">
		<label class="label"><slot name="label"></slot></label>
		<div class="dropdown is-full-width" @pointerleave="isFocused = false" @blur="isFocused = false" v-bind:class="{ 'is-active': active }">
				<div class="dropdown-trigger is-full-width">
				<div class="control is-full-width has-icons-right">
					<input 
						type="text" class="input is-full-width" :placeholder="'Select a ' + placeholderText + '...'"
						v-model="query"
						@click="isFocused = true"
						@focus="isFocused = true"
						@blur="notify()"
						@keydown.tab="select($event)" 
						@keydown.enter="select($event)"
						@keydown.down="move($event)" 
						@keydown.up="move($event)" 
						@keydown.delete="move($event)"
						@keydown.escape="move($event)"
					>
					<span class="icon is-small is-medium is-right">
					    <i class="fa fa-angle-down" style="color: #439BD1;"></i>
				  	</span>
				</div>
			</div>
			<div class="dropdown-menu" @pointerleave="isFocused = false" id="dropdown-menu" role="menu" style="height: 200px; overflow: scroll;">
			    <div class="dropdown-content">
			      	<a class="dropdown-item" 
			      		v-for="item in filteredList"
			      		@click="selectedIdx = filteredList.indexOf(item); select($event)"
			      		:class="{ 'is-active': selectedIdx == filteredList.indexOf(item) }"
		      	 	>
			        	{{ item.name }}
			      </a>
			    </div>
		  	</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'filterableDropdown',
		props: ['list', 'model', 'property', 'placeholderText' ],
		data() {
			return {
				query: '',
				isFocused: false,
				selectedIdx: 0
			}
		},
		computed: {
			filteredList() {
				var self = this;
				if(!Array.isArray(self.list)){
					console.log('not an array');
					let list = [];
					for (let prop in self.list) {
						list.push({ name: prop });
					}
					return list.filter(item => {
						let prop = item[self.property].toLowerCase();
						return prop.indexOf(self.query.toLowerCase()) !== -1
					});
				}
				
				return self.list.filter(item => {
					let prop = item[self.property].toLowerCase();
        	return prop.indexOf(self.query.toLowerCase()) !== -1
	    	});

			},
			active() {
				return this.filteredList.length > 0  && this.isFocused ? true : false;
			}
		},
		methods: {
			select(evt) {
				console.log(evt);
				if (this.active && this.query) {
					evt.preventDefault();
				}
					this.isFocused = false;
					this.query = this.filteredList[this.selectedIdx][this.property];
					this.notify();
				// }else 
				// {
				// 	this.isFocused = false;
				// }
			},
			move(evt) {
				console.log(evt);
				if (evt.key == 'ArrowDown') {
					return this.selectedIdx + 1 < this.filteredList.length ?  this.selectedIdx++ : this.selectedIdx = this.selectedIdx;
				}
				if (evt.key == 'ArrowUp') {
					return this.selectedIdx > 0 ? this.selectedIdx-- : this.selectedIdx = 0;
				}
				if (evt.key == "delete") {
					return this.selectedIdx = 0;
				}
				if(evt.key == 'Escape'){
					this.isFocused = false;
					this.query = '';
					this.notify();
				}
			},
			notify() {
				this.$emit('selected', { selection: this.query,  model: this.model });
			}
		}
	}
</script>

<style>
	a.dropdown-item.is-active {
		background: #439BD1;
	}
</style>
