export default class LineItem {
	constructor(data) {
		// this.originalData = data

		for(let field in data) {
			this[field] = data[field];
		}
	}

	has(property) {
		return this.hasOwnProperty(property) ? true : false
	}

	set feeSchedule(data) {
		return this._feeSchedule = data
	}
	
	get feeSchedule() {
		return this._feeSchedule
	}
}