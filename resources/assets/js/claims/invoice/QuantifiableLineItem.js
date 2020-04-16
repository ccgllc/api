import LineItem from './LineItem';
export default class QuantifiableLineItem extends LineItem {

	constructor(data) {
		super(data)
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