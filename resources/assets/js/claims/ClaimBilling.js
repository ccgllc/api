module.exports = {
	name: 'Billing',
	template: require('./templates/claim-billing.template.html'),
	props: ['claim'],
	components: {
		invoice: require('../accounting/ClaimInvoice.js'),
		payments: require('./ClaimPayments.js'),
		createInvoice: require('./CreateInvoice.js')
	},
	data: function () {
		return {
			selectedPayments: [],
			invoice: {
				supplements: [],
				payments: []
			},
			assignments: {}
		}
	},
	ready: function() {
		
	},
	methods: {
		setInvoice: function(invoice)
		{
			return this.$set('invoice', invoice);
		},
		invoicePaid: function(invoice) {
			if (invoice.paid == true) {
				return 'yes';
			}
			return 'no';
		},
		getInvoices: function() {
			console.log(this.claim.invoice);
		},
		selectPayments: function(invoice) {
			this.selectedPayments = invoice.payments;
		},
	},
	route: {
		waitForData: true,
		 data: function (transition) {
		 	// console.log('invoice data!');
		 	var assignments = {
		 		adjusters: [],
		 		reviewers: []
		 	};
		 	// set up assignments from statuses.
		 	this.claim.statuses.forEach(status => {
		 		if (status.name === 'Adjuster Assigned' || status.name == 'Adjuster Reassigned')
		 		{
		 			assignments.adjusters.push(status.user);
		 		}
		 		if (status.name === 'Reviewer Assigned' || status.name == 'Reviewer Reassigned')
		 		{
		 			assignments.reviewers.push(status.user);
		 		}
		 	});
		 	transition.next({assignments: assignments});
		},
		activate: function () {
			// console.log('Hello from claim billing');
		},
		// canDeactivate: function (transition) {
		// 	console.log('You are not allowed to leave.')
		// 	transition.abort()
		// }
	},
}