import QuantifiableLineItem from './QuantifiableLineItem'
export default class MileageLineItem extends QuantifiableLineItem {
	constructor(data) {
		super(data)
		if (data.showOptions == undefined) {
			this.showOptions = true;
		}
	}

	toggleRoundTripQuantity() {
		this.locations.roundTrip 
		 	? this.quantity = (parseFloat(this.quantity) * 2)
		 	: this.quantity = (parseFloat(this.quantity) / 2);
		 	return this.calculate();
	}

}