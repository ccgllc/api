<template>
	<div class="column is-half">
		<div class="card">
			<header class="card-header">
			    <p class="card-header-title">
			     {{license.license_state}} Adjusting License
			    </p>
			     <a @click="edit(license)" class="card-header-icon is-info" aria-label="edit">
			      <span class="icon">
			        <i class="fa fa-edit" aria-hidden="true"></i>
			      </span>
			    </a>
			    <a @click="remove(license)" class="card-header-icon is-danger" aria-label="Delete">
			      <span class="icon">
			        <i class="fa fa-close" aria-hidden="true"></i>
			      </span>
			    </a>
		 	</header>
		 	<div class="card-content">
		 		<div class="content">
		 			<div class="columns">
						<div class="column is-3">
							<p><strong>License #</strong>:</p>
						</div>

						<div class="column is-3">
							<p>{{ license.license_number }}</p>
						</div>

						<div class="column is-3">
							<p><strong>Expiration</strong>:</p>
						</div>

						<div class="column is-3">
							<p>{{ license.expiration_month }} / {{license.expiration_year}}</p>
						</div>
					</div><!-- end inner card columns -->
				</div><!-- end content -->
	 		</div><!-- end card content --> 
	 	</div><!-- end card -->
 	</div><!-- end column -->
</template>

<script>
	export default {
		name: 'License',
		props: ['license'],
		methods: {
			edit() {
				this.$emit('edit')
			},
			remove() {
				this.$emit('remove')
			}
		}
	}
</script>