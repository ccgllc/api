import LineItem from './LineItem';
export default class ServiceFeeLineItem extends LineItem {

	constructor(data) {
		super(data)
		this.calculate();
	}

	calculate() {
		//reset the total each time so the total isn't ammended each time called..
		this.total = 0
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
		//normalize an amount value as parseFloat will interpret
		//comas (,) as decimals causing issues during calculation.
		amount = parseFloat(String(amount).replace(/,/g, ''))

		// loop through tiers to calulate service fee.
		for (let tier of this.getNumericTiers()) {
			if (tier >= amount) {
				return amount > 0 
					? parseFloat(+this.feeSchedule[tier]).toFixed(2)
					: (0).toFixed(2)
			// if the amount is greater than the highest tier, 
			// service fee is 0.00 -- bill @ T&E rate
			}
			 else if (this.highestTier() < amount ) {
				return (0).toFixed(2)
			}
		}
	}

	getNonNumericTier(amount) {
		// return values for non numeric tiers 
		// if feeSchedule has key [amount] return its value
		// otherwise just return 0
		return this.feeSchedule[amount]
			? parseFloat(+this.feeSchedule[amount]).toFixed(2)
			:  (0).toFixed(2);
	}

	getNumericTiers() {
		let tiers = Object.keys(this.feeSchedule)
		tiers = tiers.filter(tier => this.isNumeric(tier))
		return tiers.map(tier => parseFloat(tier))		
	}

	highestTier(){
		return Math.max(...this.getNumericTiers())
	}

	isNumeric(amount) {
		//check for non numeric tiers ("erroneous, cwop")
		return Number.isNaN( parseFloat(amount) )
			? false
			: true
	}
}