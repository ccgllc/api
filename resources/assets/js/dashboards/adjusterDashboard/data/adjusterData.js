import Form from '../../../structur/src/form/Form';
export default {
	user: {},
	creatingEstimate: false,
	creatingNewStatus: false,
	creatingInvoice: false,
	openClaims: [],
	closedClaims: [],
	newEstimate: new Form({
		gross_loss: parseFloat(0).toFixed(2),
		claim_number: '',
		claim_id: '',
		date: '',
		time: '',
	}),
	newInvoice: new Form({
		gross_loss: '',
		estimate: '',
		date: '',
		time: '',
	})
}