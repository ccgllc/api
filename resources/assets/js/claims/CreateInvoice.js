module.exports = {
	name: 'CreateNewInvoice',
	template: require('./templates/create-new-invoice.template.html'),
	props: ['claim', 'assignments'],
	data: function() {
		return {
			invoice: {
				claim_id: this.claim.id,
				carrier: this.claim.carrier_name,
				insured: this.claim.insured,
				carrier_id: this.claim.carrier_id,
				adjuster_id: this.claim.adjuster_id,
				reviewer_id: this.claim.reviewer_id,
				claim_type: this.claim.claim_type,
				claim_number: this.claim.claim_number,
			}
		}
	},
	ready: function() {
		$('#createInvoice').on('hide.bs.modal', function() {
			// this.resetForm();
		}.bind(this));
	},
	computed: {
		invoiceHasMultipleAssignees: function() {
			if (this.claimHasBeenReassigned)
			{
				return true
			}
			return false;
		},
		canCreateNewInvoice: function() {
			if (this.reassignment == '' || this.isAlreadyAssigned)
			{
				return false;
			}
			return true;
		},
		wasPreviouslyAssigned: function () {
			if (this.ReviewerAlreadyAssigned || this.adjusterAlreadyAssigned){
				return true;
			}
			return false;
		},
		adjusterPreviouslyAssigned: function() {
			if(this.invoice.adjuster_id !== this.claim.adjuster_id)
			{
				return true;
			}
			return false;
		},
		reviewerPreviouslyAssigned: function() {
			if ( this.invoice.reviewer_id !== this.claim.reviewer_id)
			{
				return true;
			}
			return false;
		}
	},
	methods:{
		createInvoice: function() {
			this.$http.post('/invoices', this.invoice).then(response => {
				this.claim.invoices.push(response.data);
				console.log(response.data);
			});
		},
		claimHasBeenReassigned: function() {
			if (this.assignments.adjusters.length > 1 || this.assignments.reviewers.length > 1)
			{
				return true;
			}
			return false;
		}
	}
}