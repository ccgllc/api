module.exports = {
	name: 'StatusForm',
	template: require('./templates/status-form.template.html'),
	props: ['selectedStatus'],
	data: function() {
		return {
			currentAdjuster: this.$parent.claim.adjuster,
			role: 0,
			adjusters: [],
			reviewers: []
		}
	},
	ready: function() {
		console.log('ready');
		$('#status').on('shown.bs.modal', function () {
  			var statusDate = $('.status-date').datepicker();
  			$('#value').focus()
  			var today = new Date();
			today.setDate(today.getDate());
			console.log(today);
			statusDate.datepicker('setDate', today);
			statusDate.datepicker('update');
		});
		this.$http.get('/invoices/create').then(function(response) {
			var adjusters = response.data.adjusters;
			var currAdj = this.currentAdjuster;
			this.reviewers = response.data.reviewers;	
			this.adjusters = adjusters//.filter(byId);
			// function byId(obj) {
			//   if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id) && obj.id !== currAdj.id) {
			//     return true;
			//   } else {
			//     return false;
			//   }
			//}
		});
	},
	computed: {
		isReassignment: function () {
			if (this.selectedStatus.type == 'user' || this.selectedStatus.type == 'Adjuster Reassignment' || this.selectedStatus.type == 'Reviewer Reassignment')
			{
				return true;
			}
			return false;
		},
	},
	methods: {
		createStatus: function(){
			this.$http.post('/claims/status/', this.selectedStatus).then((response) => {
				this.$parent.claim.statuses.unshift(response.data);
				this.$dispatch('newStatusCreated', response.data.name);
				this.$parent.claim.current_status = response.data.name;
				this.applyStatusToClaim(response.data);
				this.resetSelectedStatus();
				$('#status').modal('hide');
			}, (response) => {
				//err callback
				console.log(response.data);
			})
		},
		applyStatusToClaim: function (status) {
			if (status.name == 'Estimate Received' || status.name == 'Correction Received')
			{
				this.$parent.claim.gross_loss = +response.data.value;
			}
			if (status.name == 'Adjuster Assigned' || status.name == 'Adjuster Reassigned')
			{
				this.$parent.claim.adjuster = this.selectedStatus.assignee;
			}
			if (status.name == 'Reviewer Assigned' || status.name == 'Reviewer Reassigned')
			{
				this.$parent.claim.reviewer = this.selectedStatus.assignee;
			}
		},
		setReassignmentType: function () {
			return this.selectedStatus.type = this.role;
		},
		resetSelectedStatus: function () {
			return this.selectedStatus = {
				adjuster: {},
				reviewer: {},
				value: '',
				type: '',
				date: '',
			}
		}
	}
}