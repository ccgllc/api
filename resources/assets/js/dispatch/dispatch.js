import Vue from 'vue';
import dashboard from './Dashboard.vue';
import search from '../components/Search.vue';
let vue = new Vue({
	el: '#dashboard',
	components: {
		dashboard, search
	}
});