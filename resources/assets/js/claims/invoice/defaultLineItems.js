export default {
	grossLoss: {type: 'ServiceFeeLineItem', description: 'Service Fee', amount: 0, total: 0, taxable: true, fullyReimbursable: false, feeSchedule: {}, id: 1},
	photos: {type: 'QuantifiableLineItem', description: 'Claim Photos', quantity: 0, rate: 0, minimum: 0, taxable: true, fullyReimbursable: false, total: 0 },
	hours: {type: 'HourlyRateLineItem', description: 'Time & Expense Hours', quantity: 0, rate: 0, total: 0, taxable: true, fullyReimbursable: false },
	reimbursable: {type: 'AmountLineItem', description: 'Reimbursable Expenses',  amount: 0, total: 0, taxable: false, fullyReimbursable: true },
	mileage: {type: 'MileageLineItem', description: 'Mileage', quantity: 0, rate: 0, minimum: 0, total: 0, taxable: true, fullyReimbursable: true, locations: {start: {address: '', destinations: []}, loss: {address: '', destinations:[]}, roundTrip: false }}
}