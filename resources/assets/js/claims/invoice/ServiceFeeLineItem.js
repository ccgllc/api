import LineItem from './LineItem';
export default class ServiceFeeLineItem extends LineItem {

	constructor(data) {
		super(data)
		this.calculate();
	}

	calculate() {
		//reset the total each time so the total isn't ammended each time called..
		this.total = 0
		// this.description = this.setDescription();
		return this.total = this.getFeeScheduleTier(this.amount)

	}

	getFeeScheduleTier(amount) {
		// Numeric or Non Numeric (1,234.34 or "erroneous" respectively)
		// console.log(`${amount} has numeric amount ${this.isNumeric(amount)}`)
		return this.isNumeric(amount)
			? this.getNumericTier(amount)
			: this.getNonNumericTier(amount)
	}

	calculateNumericTier(){
		return this.getNumericTier(amount)
	}

	getNumericTier(amount){
		//normalize an grossloss value as parseFloat will interpret
		//comas (,) as decimals causing issues during calculation.
		amount = parseFloat(String(amount).replace(/,/g, ''))

		// loop through tiers to calulate service fee.
		for (let tier of this.getNumericTiers()) {
			if (tier >= amount) {
				return parseFloat(+this.feeSchedule[tier]).toFixed(2)
				// return amount 
				// 	? parseFloat(+this.feeSchedule[tier]).toFixed(2)
				// 	: (0).toFixed(2)
			} 
			// if the amount is greater than the highest tier, 
			 else if (this.highestTier() < amount ) {
				// here we are determining if the highest tier is a % of gross loss, if so,
				// we calculate that. Otherwise, it's T&E only so we return 0.
				return this.isTierPercentageOfGrossLoss(this.highestTier()) 
							? this.calculatePercentageOfGrossLoss(this.highestTier(), amount) 
							: (0).toFixed(2)
			}
		}
	}

	calculatePercentageOfGrossLoss(tier, amount){
		// this.description += ' (Billed at % of Gross Loss)';
		return (amount * +this.feeSchedule[tier]).toFixed(2);
	}

	isTierPercentageOfGrossLoss(tier){
		return +this.feeSchedule[tier] < 1 && +this.feeSchedule[tier] > 0
						? true : false;
	}

	setDescription() {
		// return this.isServiceFeePercentageOfGrossLoss() 
		// 		? this.description = `Service Fee (Billed @ ${+this.feeSchedule[this.highestTier()] * 100} % of Gross Loss)` 
		// 		: this.description = 'Service Fee';
	}

	getNonNumericTier(amount) {
		// return values for non numeric tiers 
		// if feeSchedule has key [amount] return its value
		// otherwise just return 0
		return this.feeSchedule[amount]
			? parseFloat(+this.feeSchedule[amount]).toFixed(2)
			: (0).toFixed(2);
	}

	getNumericTiers() {
		let tiers = Object.keys(this.feeSchedule)
		tiers = tiers.filter(tier => this.isNumeric(tier))
		return tiers.map(tier => parseFloat(tier))		
	}

	highestTier(){
		//console.log(Math.max(...this.getNumericTiers()))
		return Math.max(...this.getNumericTiers())
	}

	isNumeric(amount) {
		//check for non numeric tiers ("erroneous, cwop")
		return Number.isNaN( parseFloat(amount) )
			? false
			: true
	}
}