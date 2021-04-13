export default [
  {name: 'Line Item', type: 'QuantifiableLineItem', quantity: 1, rate: 0, description: 'Description Here', taxable: true},
	// {name: 'Service Fee Line Item', type: 'ServiceFeeLineItem', description: 'Service Fee', amount: 0, total: 0, taxable: true, fullyReimbursable: false, feeSchedule: {}},
	// {name: 'Amount', type: 'AmountLineItem', amount: 0, description: 'Description Here', taxable: true,},
	// {name: 'Difference In Tiers', type: 'DifferenceInTiersLineItem', amount: 0, newAmount: 0, description: 'Difference In Tiers', taxable: true, fullyReimbursable: false},
	{name: 'T&E Line Item', type: 'HourlyRateLineItem', quantitiy: 0, rate: 0, description: 'Hourly Rate Line Item', taxable: true, fullyReimbursable: false },
	{name: 'Mileage', type: 'MileageLineItem', description: 'Mileage', quantity: 0, rate: 0, minimum: 0, total: 0, taxable: true, fullyReimbursable: true, locations: {start: {address: '', destinations: []}, loss: {address: '', destinations:[]}, roundTrip: false }},
	//{name: 'Less Previous Invoice', type: 'AmountLineItem', amount: 0, description: 'Less Previous Invoice Total'},
	// {name: 'MCM', type: 'AmountLineItem', description: 'Managed Claim Model Fee', amount: 0, total: 0, taxable: true, fullyReimbursable: false },
	// {name: 'Supplement', type: 'supplement', amount: 0, description: 'Supplement'},
]