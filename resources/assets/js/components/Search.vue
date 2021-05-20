<template>
	<div class="sticky-search">
		<div class="navbar-item" style="background: #f0f0f0; width: 100%; border-bottom: 1px solid #ccc; box-shadow: 0 2px 3px #d6d6d6;">
      <div class="control has-icons-left" style="width: 100%;">
          <input type="text" class="input is-medium"
          	v-model="search.query" 
          	@input="dynamicSearch($event)" 
          	@keydown="detectKeyboardAction($event)"  
          	:placeholder="placeholder()" 
          	style="background: transparent; border:none; width: 100%;">
          <span class="icon is-left"><i class="fa fa-search has-text-grey"></i></span>
      </div>
    </div>
    <div class="menu" v-if="results.length > 0" style="width: 100%;">
			<ul class="menu-list"">
				<li v-for="result in results" style="list-style: none; border-radius: 7px;" v-bind:class="{selected: isSelected == result.id }">
					<a :href="'/' + result.scope + '/' + result.id">
						<strong>{{ result.claim_number || result.name  }}</strong> 
						<span v-if="result.scope == 'claims'">•</span> 
						<span style="overflow: hidden;">{{ result.insured }}</span>
					</a> 
				</li>
			</ul>
		</div>
	</div>
        <!-- @keydown="search.errors.clear($event.target.name) -->
	 <!-- <div class="navbar-item">
        <div class="field">
			<div id="search">
				<form @submit.prevent> 
					<div class="field">
					    <input v-model="search.query" class="input is-search" type="text" @input="dynamicSearch($event)" @keydown="detectKeyboardAction($event)" :placeholder="placeholder()" style="position: relative;">
					</div>
				</form>
				<div class="menu is-global-search" v-if="results.length > 0">
					<ul class="menu-list">
						<li v-for="result in results" style="list-style: none;" v-bind:class="{selected: isSelected == result.id }">
							<a :href="'/' + result.scope + '/' + result.id">
								<strong>{{ result.claim_number || result.name  }}</strong> 
								<span v-if="result.scope == 'claims'">•</span> 
								<span style="overflow: hidden;">{{ result.insured }}</span>
							</a> 
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div> -->
</template>

<script>
	import Form from '../structur/src/form/Form.js';
	import userData from '../data/userData.js';
	import _ from '../../../../node_modules/lodash/lodash.min.js';
	export default {
		name: 'search',
		// props: ['usersCount', 'claimsCount'],
		data() {
			return {
				userData,
				url: '/api/search',
				search: new Form({
					query: '',
					scope: 'users',
				}),
				results: [],
				complete: true,
				selectedResult: 0,
			}
		},
		computed: {
			isSelected() {
				return this.results.length > 0 ? this.results[this.selectedResult]['id'] : 0;
			}
		},
		methods: {
			dynamicSearch: _.debounce(function(event) {
				var vm = this;
				let action = vm.detectKeyboardAction(event);
				// console.log(action);
				if (!action && vm.search.query != '')  vm.submit();
				if (vm.search.query == '') vm.results = [];
				// if (vm.search.query == '') vm.userData.users = window.users;
			}, 200),
			detectKeyboardAction(event) {
				console.log(event.key);
				switch (event.key) {
					case 'Escape':
					this.search.query = '';
					this.results = [];
					return true;
					break;

					case 'Enter':
					window.location = '/' + this.results[this.selectedResult].scope + '/' + this.isSelected + '/#';
					return true;
					break;

					case 'ArrowDown':
					if (this.selectedResult + 1 < this.results.length) this.selectedResult += 1;
					return true;
					break;

					case 'ArrowUp':
					if (this.selectedResult > 0) this.selectedResult -= 1;
					return true;
					break;

					default:
					// this.search.scope = 'claims';
					return false;
				}
			},
			submit() {
				this.search.post(this.url, false)
					.then(response => {
						console.log(response);
						// this.userData.users = response;
						this.results = response;
						// this.search.scope = 'claims';
					}).catch(error => {
						console.log('has an error');
				});
			},
			placeholder() {
				return `search claims, users...`
			}
		}
	}
</script>
<style>
.sticky-search {
		position: sticky; top: 64px; z-index: 1000;
	}
@media screen and (min-width: 800px) {
	.sticky-search {
		position: sticky; top: 0; z-index: 1000;
	}
}
	.menu li {
		/*background: #292f3d; */
		/*padding: .25em;*/
	}
	.menu li.selected{
		background: #f2f2f2;
		color: whitesmoke;
		border: none;
	}
</style>
