<template>
	<div>
		<h3 style="font-size: 1.5em; font-weight: bold; padding-bottom: 1rem;">My Open Claims</h3>
		<table class="table is-striped is-fullwidth">
			<thead>
				<tr><th>Claim #</th><th>Insured</th><th>Type Of Loss</th><th>Edit Invoice</th><th>Actions</th></tr>
			</thead>
			<tbody>
				<tr v-for="claim in claims">
					<!-- <td><a class="icon"><i class="fa fa-caret-square-o-right"></i></a></td> -->
					<td><a :href="'/claims/' + claim.id" target="_blank" v-text="claim.claim_number"></a></td> 
					<td v-text="claim.insured"></td>
					<td v-text="claim.type_of_loss"></td>
					<td>
						<div class="select">
						  <select :disabled="true">
						    <option>Edit Invoice</option>
						  </select>
						</div>
					</td>
					<td>
						<div class="dropdown is-right" @click="toggleMenu(claim.id)">
							<div class="dropdown-trigger">
				       		    <button class="button is-small is-gray" aria-haspopup="true" aria-controls="dropdown-menu">
						    		<span class="icon is-small">
								       	<i class="fa fa-th-list" aria-hidden="true"></i>
						     	  	</span>
								    <span class="icon is-small">
								      	<i class="fa fa-caret-down" aria-hidden="true"></i>
							     	</span>
							    </button>
							</div>
						    <div class="dropdown-menu" :id="claim.id" role="menu" style="display:none">
							  	<div class="dropdown-content" @mouseleave="toggleMenu(claim.id)">
							  		<a @click="$emit('estimate-toggle', claim) && toggleMenu(claim.id)" class="dropdown-item"><span class="icon"><span class="fa fa-usd"></span></span>&nbsp;Add Estimate</a>	
							  		<hr class="dropdown-divider">
							  		<a class="dropdown-item"><span class="icon"><span class="fa fa-plus"></span></span>&nbsp;Create Invoice</a>
							  		<hr class="dropdown-divider">
							  		<a class="dropdown-item"><span class="icon"><span class="fa fa-credit-card"></span></span>&nbsp;Add Expenses</a>
								   <!-- <a :href="'/claim/'+ claim.id" class="dropdown-item">Manage Roles</a> -->
								   <!-- <a href="#" class="dropdown-item">Suspend Account</a> -->
								   <!-- <a href="#" class="dropdown-item">Send Message</a> -->
							    </div>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	name: 'OpenClaims',
	props: ['claims'],
	methods: {
		toggleMenu(id) {
			let menu = document.getElementById(id);
			menu.style.display == 'none' 
				? menu.style.display = 'block' 
				: menu.style.display = 'none';
		},
	}
}
</script>