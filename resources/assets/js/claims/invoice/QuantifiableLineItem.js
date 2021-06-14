import LineItem from './LineItem';
export default class QuantifiableLineItem extends LineItem {

	constructor(data) {
		super(data)
		this.type = 'QuantifiableLineItem'
		// this.description = '' 
		// this.quantity = 0
		// this.rate =  0 
		// this.minimum = 0 
		// this.total = 0 
		// this.taxable = false
		// this.fullyReimbursable = false

		for (let property in data) {
			this[property] = data[property];
		}
		
		this.calculate();
	}

	calculate() {
		// console.log( parseFloat(this.rate) + ' * ' + parseFloat(this.billableQuantity) + ' = ' + (parseFloat(this.rate) * parseFloat(this.billableQuantity)))
		return this.total = (parseFloat(this.rate) * parseFloat(this.getBillableQuantity())).toFixed(2);
	}

	getBillableQuantity() {
		 if (Number.isNaN(parseFloat(this.quantity))) {
			this.quantity = 0;
			return 0;
		}
		else if  (this.hasMoreThanMinimum()) {
			return (parseFloat(this.quantity) - parseFloat(this.minimum))
		}
		else if (this.hasLessThanMinimum()) {
			return 0;
		}
		else {
			return parseFloat(this.quantity);
		}	
	}

	hasMoreThanMinimum() {
		return this.has('minimum') && this.quantity > this.minimum 
			? true 
			: false
	}

	hasLessThanMinimum() {
		return this.has('minimum') && this.quantity <= this.minimum
			? true 
			: false
	}

}