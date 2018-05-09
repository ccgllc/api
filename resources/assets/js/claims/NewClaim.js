module.exports = {
	name: 'NewClaim',
	template: require('./templates/create-claim.template.html'),
	props: ['title', 'mode', 'btnText'],
	data: function() {
		return {
			claim: {
				claim_type: {},
				claim_number: '',
				insured: '',
				adjuster: {},
				reviewer: {},
				carrier: {},
				date_received: '',
				date_of_loss: '',
				appointment_date: '',
				gross_loss: 0,
				is_commercial: false
			},
			carriers: [],
			adjusters: [],
			reviewers: [],
			claimTypes: [
				{ name: 'Daily' },
				{ name: 'CAT' }
			],
			errors:[]
		}
	},
	ready:function() {
		this.title = 'Create A New Claim';
		this.$http.get('/invoices/create').then(function(response) {
			// Move this request to the ClaimController 
			// once Claims is fully implemented. 
			this.carriers = response.data.carriers;
			this.adjusters = response.data.adjusters;
			this.reviewers = response.data.reviewers;	
			this.setDate();
			if (this.mode == 'edit'){
				this.isEdit();
			}
		});
	},
	methods: {
		setDate: function() {
			if(this.mode !== 'edit')
			{
				console.log('triggered');
				// var today = new Date();
				// today.setDate(today.getDate());
				// $('.date').datepicker('setDate', today);
				$('.date').datepicker('update');
			}
			
		},
		setDateProperties: function(date_of_loss, date_received, appointment_date) {
			$('#date_of_loss').datepicker('setDate', date_of_loss);
			$('#date_received').datepicker('setDate', date_received);
			$('#appointment_date').datepicker('setDate', appointment_date);
			$('.date').datepicker('update');
		},
		submitClaim: function() {
			//reset our errors on the page.
			this.resetErrors();

			if (this.mode == 'edit')
			{
				this.$http.put('/claims/' + this.claim.id, this.claim).then(function(response){
					console.log(response.data);
					return this.$router.go({ name: 'showClaim', params: { claimId: this.claim.id }});
				}, function(response){
					return this.showErrors(response);
				});
			} else {
				this.$http.post('/claims', this.claim).then(function(response){
					console.log(response.data.id);
					return this.$router.go({ name: 'showClaim', params: { claimId: response.data.id }});
				}, function(response){
					return this.showErrors(response);
				});
			}
			
		},
		showErrors: function (response) {
			for (var error in response.data) {	
			 // skip loop if the property is from prototype
				if (!response.data.hasOwnProperty(error)) continue;
				var obj = response.data[error];
				for (var prop in obj) {
	       			// skip loop if the property is from prototype
	        		if(!obj.hasOwnProperty(prop)) continue;
	       		 	// notify
	        		this.errors.push(obj[prop]);
	    		}	
			}
		},
		resetErrors:function(){
			return this.errors = [];
		},
		isEdit: function() {
			this.$http.get('/claims/' + this.$route.params.claimId + '/edit').then(function(response){
				this.claim = response.data;
				this.setDateProperties(this.claim.date_of_loss, this.claim.date_received, this.claim.appointment_date);
				this.claim.adjuster = this.setClaimObject(this.adjusters, response.data.adjuster_id);
				this.claim.reviewer = this.setClaimObject(this.reviewers, response.data.reviewer_id);
				this.claim.carrier = this.setClaimObject(this.carriers, response.data.carrier_id);
			});
		},
		setClaimObject: function(obj, key) {
			for (var i=0; i < obj.length; i+=1)
			{
				if (obj[i].name == key || obj[i].id == key)
				{
					return obj[i];
				}
			}
		}
	}
}