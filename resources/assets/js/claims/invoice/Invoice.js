import ServiceFeeLineItem from './ServiceFeeLineItem';
import QuantifiableLineItem from './QuantifiableLineItem';
import MileageLineItem from './MileageLineItem';
import AmountLineItem from './AmountLineItem';
import HourlyRateLineItem from './HourlyRateLineItem';
// import Form from '../../structur/src/form/Form.js';

export default class Invoice {

	constructor(data) {
		// console.log(data['taxRate']);
		this.lineItems   = []
		this.userId      = window.user ? window.user.id : 0
		this.subTotal    = 0
		this.tax         = 0 // the amount of the tax calculations...
		this.taxRate     = 0;
		this.total       = 0
		this.carrier     = {}
		this.options     = {mcm: false, cwop: false, show: true, taxable: false}
		this.feeSchedule = {}
		for (let property in data) {
			this[property] = data[property]
		}
		// console.log(this.taxRate)
	}

	/**
	 * Method gathering data to save invoice.
	 * @return {Object}.
	 */
	data() {
		let data = {}
		for (let property of this.getInvoiceProperties()) {
			data[property] = this[property]
		}
		return data
	}	

	/**
	 * Calculates total from each {lineItem.total} + any applicable tax.
	 * @return {float}.
	 */
	calculate() {
		this.subTotal = 0; this.total = 0;
		this.lineItems.forEach(lineItem => {
			this.subTotal = (parseFloat(this.subTotal) + parseFloat(lineItem.total))
		});
		this.subTotal = +this.subTotal.toFixed(2);
		this.tax = this.calculateTax();
		this.total = (this.subTotal + this.tax).toFixed(2);
		return isNaN(this.total) ? this.total = 0.00 : this.total;
	}

	calculateTax() {
		const taxable = this.getTaxableLineItems();
		let tax = 0;
		taxable.forEach(
			item => tax += +(+item.total * +this.taxRate)
		);
		return +tax.toFixed(2);
	}

	getTaxableLineItems() {
		return this.lineItems.filter(item => item.taxable === true);
	}

	/**
	 * Method for creating instance of {ServiceFeeLineItem}, and adding it to {this.lineItems}.
	 * @param {grossLoss} found in /resources/assets/js/claims/claimData.js 
	 * @return void.
	 */
	createServiceFeeLineItem(grossLoss) {
		grossLoss.feeSchedule = this.feeSchedule
		this.addLineItem(new ServiceFeeLineItem(grossLoss))
	}

	/**
	 * Method for creating instances of {QuantifiableLineItem} (adjuster expenses)
	 * and adding them to {this.lineItems} for calculation.
	 * @param Array [photos, mileage, reimbursable, hours] found in /resources/assets/js/claims/claimData.js 
	 * @return void.
	 */
	createAdjusterExpenseLineItems(expenses) {
		expenses.forEach(expense => { 
			return expense.type === "AmountLineItem"
				? this.addLineItem(new AmountLineItem(expense))
				: expense.type === 'HourlyRateLineItem' 
						? this.addLineItem(new HourlyRateLineItem(expense))
						: this.addLineItem(new QuantifiableLineItem(expense))
		});
	}

	/**
	 * Method for adding a line item to this.lineItems[]
	 * @param LineItem 
	 * @return void.
	 */
	addLineItem(lineItem) {
		this.lineItems.push(lineItem)
		return this.calculate()
	}

	/**
	 * Method for removing a line item from this.lineItems[]
	 * @param LineItem 
	 * @return void.
	 */
	removeLineItem(lineItem) {
		this.lineItems.splice(
			this.lineItems.indexOf(lineItem), 1
		)
		return this.calculate()
	}

	// generateId() {
	// 	let ids = []
	// 	this.lineItems.forEach(item => ids.push(item.id))
	// 	return ids.length > 0 
	// 		? Math.max(...ids) + 1
	// 		: 1
	// }

	/**
	 * Method for recalculating all line items
	 * example: when the fee schedule is changed,
	 * all line items will need to be recalculated.
	 * @param LineItem 
	 * @return void.
	 */
	recalculateLineItems() {
		this.lineItems.forEach(lineItem => {
			// this.setFeeSchedule()
			lineItem.feeSchedule = this.feeSchedule
			lineItem.calculate()
		})
		return this.calculate()
	}

	/**
	 * Method for determining hourly rate in feeSchedule
	 * example: if multilple hourly rates set the lowest avail.
	 * @return Int.
	 */
	getHourlyRate() {
		return this.hasMultipleHourlyRates()
			? this.getSortedHourlyRate()
			: this.feeSchedule.hourly
	}

	getSortedHourlyRate() {
		//sort with comparison function to order by hourly rate amount 
		//small to large
		this.feeSchedule.hourly.sort((a, b) => a.amount - b.amount)
		//return the lowest (first) hourly rate avail after sorting.
		return this.feeSchedule.hourly[0].amount
	}

	hasMultipleHourlyRates() {
		//check if our hourly prop is an array
		return Array.isArray(this.feeSchedule.hourly) ? true : false
	}

	// setTaxRate(rate) {
	// 	return this.taxRate = rate;
	// }

	// getTaxRate() {
	// 	return this.taxRate;
	// }

	/**
	 * Method for getting mileage rate from current feeSchedule.
	 * @return String.
	 */
	getMileageRate() {
		return this.feeSchedule.mileageRate
	}

	/**
	 * Method for getting mileage rate from current feeSchedule.
	 * @return String.
	 */
	getMileageMinimum() {
		return this.feeSchedule.mileageMinimum;
	}

	/**
	 * Method for getting photo rate from current feeSchedule.
	 * @return String.
	 */
	getPhotoRate() {
		return this.feeSchedule.photoRate
	}

	/**
	 * Method for getting photo rate from current feeSchedule.
	 * @return String.
	 */
	getPhotoMinimum() {
		return this.feeSchedule.photoMinimum;
	}

	/**
	 * Method for setting default feeSchedule.
	 * @return Object.
	 */
	// setFeeSchedule() {
	// 	console.log(this.feeSchedule)
	// 	return this.feeSchedule = this.carrier.fee_schedules[this.feeSchedule].data;
	// }

	getInvoiceProperties() {
		return ['total', 'subTotal', 'feeSchedule', 'options', 'tax', 'taxRate', 'lineItems', 'userId'];
	}

	// Getters & Setters...//

	set subTotal(data) {
		this._subTotal = data
	}

	get subTotal() {
		return this._subTotal
	}

	set total(data) {
		this._total = data
	}

	get total() {
		return this._total
	}

	set carrier(data) {
		this._carrier = data
	}

	get carrier() {
		return this._carrier
	}

	set feeSchedule(data) {
		this._feeSchedule = data
	}

	get feeSchedule() {
		return this._feeSchedule
	}

	set show(data) {
		this._show = data
	}

	get show() {
		return this._show
	}
}