<template>
	<div class="is-line-item" style="line-height: 1; border: 1px solid #e0e0e0;">
		<div class="is-line-item-data" :class="{'items-center': lineItem.type !== 'MileageLineItem'}" style="width: 85%;">
			<slot name="data"></slot>
		</div>
		<div class="right is-line-item-totals" style="width: 15%;">
			<slot name="total"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LineItemBase',
		props: ['lineItem'],
	}
</script>

<style>
	.is-line-item {
		background: #eeeeee;
		/*margin: 0 0 .5em 0;
		padding: .5em;*/
		/*background-color: white;*/
		border-radius: 5px;
		/*box-shadow: 0 2px 5px rgba(10, 10, 10, 0.1), 0 0 0 0 rgba(10, 10, 10, 0.1);*/
		color: #343b4c;
		display: flex;
		margin: 0 0 .6em 0;
		padding: .5em;
	}
	.is-line-item-data {
		display: flex;
		/*justify-content: flex-start;*/
		/*align-items: center;*/
	}
	.items-start {
		align-items: flex-start;
	}
	.items-center {
		align-items: center;
	}
	.is-line-item-totals {
		display: flex;
		justify-content: flex-end;
		/*justify-items: center;*/
		align-items: center;
	}
	.is-line-item-column {
		display: flex;
		flex-direction: column;
	}
	.is-line-item .card-content {
		padding: .60rem;
	}
	.is-line-item .icon small {
		font-size: .75em;
	}
</style>