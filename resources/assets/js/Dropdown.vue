<template>
	<div class="dropdown" :class="{'is-active': show, 'is-up': up, 'is-right': right}" @mouseleave="show = false">
	  <div class="dropdown-trigger" @click="show = !show">
	    <button class="button" :class="buttonStyle" aria-haspopup="true" aria-controls="dropdown-menu" >
	      <span><slot></slot></span>
	      <span class="icon is-small">
	        <i class="fa" :class="{'fa-angle-up': up, 'fa-angle-down': up == undefined}" aria-hidden="true"></i>
	      </span>
	    </button>
	  </div>
	<div class="dropdown-menu" id="dropdown-menu" role="menu">
	    <div class="dropdown-content">
	      <a v-for="item in items" class="dropdown-item" @click="handle(eventName, item)" v-if="disabled(item.name, carrier.label)">
	        {{ item.name }} 
	      </a>
	    </div>
	  </div>
	</div>
</template>

<script>
	// import claimData from './claims/claimData.js'
	export default {
		name: 'Dropdown',
		props: ['items', 'eventName', 'buttonStyle', 'up', 'right', 'carrier'],
		data() {
			return {
				show: false,
			}
		},
		methods: {	
			handle(event, data) {
				return this.$emit(event, data);	
			},
			disabled(item, carrier) {
				return item === 'MCM' && carrier !== 'TWIA'
					? false
					: true
			}
		}
	}
</script>

