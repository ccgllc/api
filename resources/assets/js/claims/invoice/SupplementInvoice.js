import Invoice from './Invoice'
import lineItemModels from './lineItemModels';
class SupplementInvoice extends Invoice {
	constructor(data) {
		super(data)
		this.calculate();
	}

	createSupplementLineItems(lineItems) {
		lineItems.forEach(lineItem => (
			this.addLineItem(new lineItemModels[lineItem.type](lineItem))
		));
	}

}

export default SupplementInvoice;