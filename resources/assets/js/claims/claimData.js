import Statuses from './data/statuses.js'
import NewStatus from './data/newStatus.js'
import Form from '../structur/src/form/Form.js'
import Invoice from './invoice/Invoice.js'
import defaultLineItems from './invoice/defaultLineItems.js'
import lineItemTypes from './invoice/lineItemTypes.js'
export default {
	active: false,
	locked: false,
	hasAlert: false,
	alert: { type: 'is-link', message: ''},
	claimId: '',
	claim: {},
	user: {},
	adjuster: {},
	reviewer: {},
	bounds: {},
	map: {},
	marker: {},
	home: {lat: 30.2702208, lng:  -97.7453625},
	statusesList: Statuses,
	newStatus: NewStatus, 
	creatingNewStatus: false,
	newTag: {},
	creatingNewTag: false,
	newConfirmAlert: {},
	confirmingAlert: false,
	editingGrossLoss: false,
	creatingEstimate: false,
	date: '',
	time: '',
	estimate: {},
	defaultLineItems,
	creatingInvoice: false,
	newInvoice: {},
	// invoiceForm: new Form(),
	lineItemTypes
}