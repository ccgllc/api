import ServiceFeeLineItem from './ServiceFeeLineItem';
export default class DifferenceInTiersLineItem extends ServiceFeeLineItem {
	constructor(data) {
		super(data)
		this.calculate()
	}

	calculate() {
		this.total = 0
		return this.total = this.calculateDifference()
	}

	calculateDifference() {
		let diff = 0
		const minuend = this.getFeeScheduleTier(this.amounts().amount)
		const subtrahend = this.getFeeScheduleTier(this.amounts().newAmount)
		// console.log(minuend + '-' + subtrahend);
		// console.log(`${this.getFeeScheduleTier(this.amounts().amount)} - ${this.getFeeScheduleTier(this.amounts().newAmount)}`);
		// console.log(this.getFeeScheduleTier(this.amounts().amount) + ' - ' +  this.getFeeScheduleTier(this.amounts().newAmount))
		// console.log(minuend + ' - ' + subtrahend);
		minuend !== undefined && subtrahend !== undefined
			?  diff = (minuend - subtrahend)
			:  diff = (0)
			// console.log(diff);
		return diff < 0 ? (Math.abs(diff)).toFixed(2) : (- Math.abs(diff)).toFixed(2)
	}

	amounts() {
		let amounts = {}
		// if numeric, normalize an amount value as parseFloat will interpret
		// comas (,) as decimals causing issues during calculation
		// otherwise just return value becuase its not numeric
		this.isNumeric(this.amount)
			? amounts.amount = parseFloat(String(this.amount).replace(/,/g, ''))
			: amounts.amount = this.amount
		this.isNumeric(this.newAmount)
			? amounts.newAmount = parseFloat(String(this.newAmount).replace(/,/g, ''))
			: amounts.newAmount = this.newAmount

		return amounts
	}
}