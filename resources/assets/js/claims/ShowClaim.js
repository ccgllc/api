var claimService = require('./ClaimService.js')
module.exports = {
	name: 'showClaim',
	template: require('./templates/claim.template.html'),
	props: ['title', 'other'],
	data: function() {
		return {
			claim: {
				latestStatus: '',
				date_received: '',
				date_of_loss: '',
				appointment_date: '',
				claim_type: '',
				claim_number: '',
				insured: '',
				carrier_name: '',
				gross_loss: '',
				adjuster: {
					lname: '',
					fname: ''
				},
				claim_detail: {},
				reviewer: {
					lname: '',
					fname: ''
				},
				carrier: {
					id: '',
					name: '',
					pay_scale: {},
					milage_minimum: 0,
				},
				invoice: {
					invoice_number: '',
					carrier_name: '',
					payout: 0,
					taxable: 0,
					balance: 0,
					mcm: false,
					mcm_total: 0,
					bill_te_only: false,
					bill_cat: false,
					adjuster_milage_payout: 0,
					supplementsTotal: 0,
					adjuster_supplements_total: 0,
					ccg_supplements_total: 0,
					supplements: [],
					payments: [],
				},
				statuses: []
			}
		}
	},
	computed: {
		statusText: function () {
			if (this.currentStatusClosed())
			{
				return 'Inactive';
			}
			return 'Active'
		},
		activeColor: function() {
			if (this.currentStatusClosed())
			{
				return;
			}
			return '#42caa4';
		},
		activeIcon: function() {
			if (this.currentStatusClosed())
			{
				return 'glyphicon-remove';
			}
			return 'glyphicon-ok';
		}
	},
	methods: {
		currentStatusClosed: function() {
			if (this.claim.current_status == 'closed')
			{
				return true;
			}
			return false; 
		},
		getAssignee: function(assignee) 
		{
			return assignee !== null ? assignee.fname + " " + assignee.lname : "Not Yet Assigned";
		}
	},
	events: {
		newStatusCreated: function(status)
		{
			// console.log('new status');
			return this.claim.latestStatus = status;
		}
	},
	route: {
		waitForData: true,
		 data: function ({ to, next }) {
			var params = {
		 		id: to.params.claimId
		 	}
   			claimService.fetch(params, (err, data) => {
				this.title ='Claim ';
				this.other = data.claim_number;
				data.carrier.pay_scale = JSON.parse(data.carrier.pay_scale);
				data.carrier.commercial_pay_scale = JSON.parse(data.carrier.commercial_pay_scale);
				data.carrier.catastrophe_pay_scale = JSON.parse(data.carrier.catastrophe_pay_scale);
				data.claim_detail = JSON.parse(data.claim_data);
				// data.invoice.ccg_supplements_total = parseFloat(data.invoice.ccg_supplements_total);
				// data.invoice.adjuster_supplements_total = parseFloat(data.invoice.adjuster_supplements_total);
				// data.current_status !== null ? : data.current_status = 'No Status';
					return next({
						claim: data
					})
   			}); 	
		},
		activate: function () {
			// console.log('hook-example activated!')
		},
		// canDeactivate: function (transition) {
		// 	console.log('You are not allowed to leave.')
		// 	// transition.abort()
		// }
	},
}