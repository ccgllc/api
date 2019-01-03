import Form from './Form';
export default class FormWithFiles extends Form {
	constructor(data) {
		super(data);
	}
	data() {
		let data = new FormData();
		for (let property in this.originalData) {
            // if prop is file we need to append it,
                  if (this[property] instanceof File) {
                      data.append(property, this[property], this[property.name]);
                  }
                  // if prop is an array we need to filter and append it to data
                  // otherwise just append copy of current string/object reference.
                  // Stringify prop below when adding to FormData in case array 
                  // conatins objects, to avoid sending [object Object] to api.
                  else {
                  	this[property] instanceof Array
                  		  ? this[property].filter(prop => data.append(property + '[]', JSON.stringify(prop)))
                  		  : data.append(property, this[property]);
                  }
		}
            // console.log(data.getAll('certifications'));
           // for(let key of data.values()) {
           //     console.log(JSON.stringify(key)); 
           //  }
		return data;
	}
}