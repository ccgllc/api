import AmountLineItem from './AmountLineItem';
export default class AdminFeeLineItem extends AmountLineItem {

	constructor(data) {
		super(data)
		this.calculate();
	}

}