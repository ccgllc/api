import Invoice from '../../../resources/assets/js/claims/invoice/Invoice.js';
import LineItem from '../../../resources/assets/js/claims/invoice/QuantifiableLineItem.js';
// import {createSpy, spyOn, isSpy} from 'expect';

describe('Invoice', () => {

	it('is instantiable', () => {
		let invoice = new Invoice();
		expect(invoice instanceof Invoice).toBe(true);
		expect(invoice.userId).toBe(0);
	});

	it('has a default total of zero', () => {
		let invoice = new Invoice();
		expect(invoice.total).toBe(0);
		expect(invoice.lineItems.length).toBe(0);
	})

	it('can add line items and recalculate', () => {
		let invoice = new Invoice();
		invoice.addLineItem(new LineItem({quantity: 1, rate: 1}));
		expect(invoice.lineItems.length).toBe(1);
		expect(invoice.total).toBe('1.00');
	})

})