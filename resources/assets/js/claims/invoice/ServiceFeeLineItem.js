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
		// console.log(this.getNumericTier(amount))
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
		// console.log(parseFloat(String(amount).replace(/,/g, '')))
		amount = parseFloat(String(amount).replace(/,/g, ''))
		// loop through tiers to calulate service fee.
		for (let tier of this.getNumericTiers()) {
			if (tier >= amount) {
				return this.isTierPercentageOfGrossLoss(tier) 
					? this.calculatePercentageOfGrossLoss(tier, amount)
					: parseFloat(+this.feeSchedule[tier]).toFixed(2)
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
		if (this.feeSchedule === undefined) return (0).toFixed(2);
		return this.feeSchedule[amount]
			? parseFloat(+this.feeSchedule[amount]).toFixed(2)
			: (0).toFixed(2);
	}

	getNumericTiers() {
		let tiers = Object.keys(this.feeSchedule)
		if (tiers === undefined) throw new Error('This lineitem requires a feeschedule.')
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