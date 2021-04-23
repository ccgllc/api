import AmountLineItem from './AmountLineItem';
export default class CitySurchargeLineItem extends AmountLineItem {

	constructor(data) {
		super(data)
		this.calculate();
	}

}