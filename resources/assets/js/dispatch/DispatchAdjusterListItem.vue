<template>
	<div class="card is-dispatch-adjuster" :class="{'is-active':  isSelected}" @click="selectToggle(adjuster)" style="margin-bottom: 1em;">
		<div class="card-content">
			<div class="columns">
				<!-- <div class="column is-1 is-icon" v-if="isSelected">
					<span class="icon is-large" style="padding-right: 1em;"><i class="fa fa-map-pin fa-lg has-text-danger"></i></span>
				</div> -->
				<div class="column is-2 is-icon">
					<a :href="'/users/' + adjuster.id">
						<img v-if="adjuster.avatar" style="border-radius: 512px; border: 3px solid #343b4d; margin-top: .5rem;" :src="adjuster.avatar.path" :alt="adjuster.name" width="50%" height="auto">
						<span v-else class="icon is-large" style="padding-right: 1em;"><i class="fa fa-user-circle-o fa-2x has-text-dark"></i></span>
					</a>
					
				</div>
				<div class="column">
					<h4 class="subtitle">Adjuster</h4>
					<h3 class="title"><a v-text="adjuster.name"></a></h3>
				</div>
				<div class="column is-3 has-text-centered">
					<h4 class="subtitle">XP</h4>
					<h3 class="title is-grey-lighter"><a v-text="totalXp(adjuster)"></a></h3>
				</div>
				<div class="column" v-if="adjuster.distance.text">
					<h4 class="subtitle">Distance</h4>
					<h3 class="title is-grey-lighter"><a v-text="adjuster.distance.text"></a></h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AdjusterListItem',
		props: ['adjuster'],
		data() {
			return {
				isSelected: false
			}
		},
		methods: {
			selectToggle(adjuster) {
				this.isSelected = !this.isSelected;
				return this.isSelected == true 
					? this.$emit('adjuster-selected', adjuster)
					: this.$emit('adjuster-removed', adjuster)
			},
			totalXp(adjuster) {
				let xp = 0;
				if (adjuster.work_history) {
					Object.values(adjuster.work_history).filter((workHistory) => {
						if (typeof workHistory === 'number') xp += workHistory;
					});
				}
				adjuster.xp = xp;
				return adjuster.xp;
			}
		}
	}
</script>