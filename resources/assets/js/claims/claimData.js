import statuses from './data/statuses.js';
import createStatus from './data/newStatus.js';
export default {
	active: false,
	locked: false,
	hasAlert: false,
	alert: { type: 'is-link', message: ''},
	claimId: '',
	claim: {},
	user: {},
	reviewer: {},
	bounds: {},
	map: {},
	marker: {},
	home: {lat: 30.2702208, lng:  -97.7453625},
	statusesList: statuses,
	newStatus: createStatus, 
	creatingNewStatus: false,
	newTag: {},
	creatingNewTag: false,
	newConfirmAlert: {},
	confirmingAlert: false,
}