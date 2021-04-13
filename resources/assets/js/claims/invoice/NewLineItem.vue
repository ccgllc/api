<template>
<span 
	class="dropdown is-up" 
	:class="{'is-active' : showMenu}" 
	style="width: 100%; display:block;" 
	@click="showMenu = !showMenu" 
	@mouseleave="showMenu = false"
>
	<span class="dropdown-trigger">
		<div 
			class="is-line-item" 
			style="line-height: 1; background-color: #e3eff8; border: 1px solid #209cee; cursor: pointer;"
		>
			<div class="is-line-item-data is-flex has-text-info has-text-weight-medium" style="align-items: center;">
				<span class="icon has-text-info"><i class="fa fa-plus-square"></i></span>
				<span class="">Add another line item</span>
					<!-- <dropdown :carrier="claim.carrier" :items="lineItemTypes" @new-line-item="addLineItem" event-name="new-line-item" up="true" buttonStyle="is-rounded is-info is-small">Add Line Item</dropdown> -->
			</div>
		</div>
	</span>
	<div class="dropdown-menu" id="dropdown-menu2" role="menu" style="">
    <div class="dropdown-content">
    	<div class="dropdown-item">
        <strong>Choose any line item type from the menu below...</strong>
      </div>
      <hr class="dropdown-divider">
      <div class="dropdown-item">
        <a class="dropdown-item" v-for="lineItem in lineItemTypes" @click="$emit('new-line-item', lineItem)">{{ lineItem.name }}</a>
      </div>
    </div>
  </div>
</span>
</template>

<script>
	export default {
		name: 'NewLineItem',
		props: ['invoice', 'lineItemTypes', 'carrier'],
		data() {
			return {
				showMenu: false,
			}
		}
	}
</script>