import LineItem from './LineItem';
export default class AmountLineItem extends LineItem {

	constructor(data) {
		super(data)
		this.calculate();
	}

	calculate() {
		return this.total = parseFloat(this.amount).toFixed(2);
	}
}