module.exports = {
	name: 'Timeline',
	template: require('./templates/timeline.template.html'),
	props: ['claim'],
	components: {
		statusForm: require('./StatusForm.js')
	},
	data: function () {
		return {
			statusTypes: [
				{ name: 'In Assign Queue', value: '',  type: 'date', claim_id: this.claim.id, disabled: false },
				{ name: 'Adjuster Assigned', value: '', assignee: 0, type: 'Adjuster', claim_id: this.claim.id },
				{ name: 'Reviewer Assigned', value: '', assignee: 0, type: 'Reviewer', claim_id: this.claim.id },
				{ name: 'Reassigned', value: '', assignee: 0, type: 'user', claim_id: this.claim.id },
				{ name: 'Contacted', value: '', type: 'date', claim_id: this.claim.id },
				{ name: 'Site Inspected', value: '', type: 'date', claim_id: this.claim.id },
				{ name: 'Estimate Received', value: '', type: 'amount', claim_id: this.claim.id, disabled: false },
				{ name: 'Correction Received', value: '', type: 'amount', claim_id: this.claim.id },
				{ name: 'File Closed', value: '', type: 'date', claim_id: this.claim.id },
				{ name: 'File Reopened', value: '', type: 'date', claim_id: this.claim.id },
			],
			selectedStatus: {
				adjuster: {},
				reviewer: {},
				value: '',
				type: '',
				date: '',
			},
			estimateDisabled: false
		}
	},
	computed: {
		hasEstimateStatus: function() {
			let estimate = this.claim.statuses.find(statusType => statusType.name === 'Estimate Received')
			if (estimate !== undefined) {
				return true;
			}
			return false;
		},
		hasAdjusterAssignmentStatus: function(){
			let assignment = this.claim.statuses.find(statusType => statusType.name === 'Adjuster Assigned')
			if (assignment !== undefined)
			{
				return true;
			}
			return false;
		},
		hasReviewerAssignmentStatus: function(){
			let assignment = this.claim.statuses.find(statusType => statusType.name === 'Reviewer Assigned')
			if (assignment !== undefined)
			{
				return true;
			}
			return false;
		}
	},
	methods: {
		setStatus: function (status) {
			this.selectedStatus = status;
			console.log(this.selectedStatus);
		},
		setUpAvailableStatuses: function() {
			if (this.hasEstimateStatus)
		 	{
		 		this.removeEstimateStatus();
		 	}
		 	if (this.hasAdjusterAssignmentStatus)
		 	{
		 		this.removeAdjusterAssignmentStatus();
		 	}
		 	if (this.hasReviewerAssignmentStatus)
		 	{
		 		this.removeReviewerAssignmentStatus();
		 	}
		},
		removeEstimateStatus: function(estimate) {
			let est = this.statusTypes.find(estimate => estimate.name == 'Estimate Received');
			return this.statusTypes.$remove(est);
		},
		removeAdjusterAssignmentStatus: function(assignment)
		{
			let assign = this.statusTypes.find(assignment => assignment.name === 'Adjuster Assigned');
			return this.statusTypes.$remove(assign);
		},
		removeReviewerAssignmentStatus: function(assignment)
		{
			let assign = this.statusTypes.find(assignment => assignment.name === 'Reviewer Assigned');
			return this.statusTypes.$remove(assign);
		}
	},
	route: {
		// waitForData: true,
		 data: function (transition) {
		 	this.setUpAvailableStatuses();
		 	transition.next();
		 	// var statuses = [
		 	// 	{ id: 23, type: 'Contacted', date: 'Feb 22, 2016', time:'02:47 pm', transaction_id: "001NQTT", claim_number: 'C0208586', orig_transaction_id: "001NQTT", value: null, claim_id: 285 },
		 	// 	{ id: 1, type: 'In Assign Queue', date: 'Feb 21, 2016', time:'01:23 pm', transaction_id: "001NQTT",  claim_number: 'C0208586', orig_transaction_id: "001NQTT", value: null, claim_id: 285 }
		 	// ]
	 		// this.$http.get('claims/' + this.claim.id + '/statuses').then((response => {
	 		// 	console.log(response.data.statuses);
	 			// transition.next({ statuses: this.claim.statuses });
	 		// }));
		},
		activate: function () {
			console.log('Hello from timeline');
		},
		// canDeactivate: function (transition) {
		// 	console.log('You are not allowed to leave.')
		// 	transition.abort()
		// }
	},
}