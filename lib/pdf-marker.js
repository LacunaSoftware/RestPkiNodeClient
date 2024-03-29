'use strict';
const fs = require('fs');

const {PadesMeasurementUnits} = require('./enums');
const {FileResult} = require('./file-result');

class PdfMarker {

	constructor(client) {
		this._client = client;
		this._marks = [];
		this._measurementUnits = PadesMeasurementUnits.CENTIMETERS;
		this._pageOptimization = null;
		this._abortIfSigned = false;
		this._fileContent = null;
	}

	//region setFile

	setFileFromPath(path) {
		this._fileContent = fs.readFileSync(path);
	}

	setFileFromContentRaw(contentRaw) {
		this._fileContent = contentRaw;
	}

	setFileFromContentBase64(contentBase64) {
		this._fileContent = new Buffer(contentBase64, 'base64');
	}

	set file(path) {
		this.setFileFromPath(path);
	}

	set fileContent(contentRaw) {
		this.setFileFromContentRaw(contentRaw);
	}

	//endregion

	get marks() {
		return this._marks;
	}

	set marks(value) {
		this._marks = value;
	}

	get measurementUnits() {
		return this._measurementUnits;
	}

	set measurementUnits(value) {
		this._measurementUnits = value;
	}

	get pageOptimization() {
		return this._pageOptimization;
	}

	set pageOptimization(value) {
		this._pageOptimization = value;
	}

	get abortIfSigned() {
		return this._abortIfSigned;
	}

	set abortIfSigned(value) {
		this._abortIfSigned = value;
	}

	async apply() {

		let marks = [];
		for (let mark of this._marks) {
			marks.push(mark.toModel());
		}
		let request = {
			marks: marks,
			measurementUnits: this._measurementUnits,
			pageOptimization: this._pageOptimization ? this._pageOptimization.toModel() : null,
			abortIfSigned: this._abortIfSigned
		};
		request['file'] = {
			content: new Buffer(this._fileContent).toString('base64')
		};
		try {
			let response = await this._client.getRestClient().post('Api/Pdf/AddMarks', request);
			return new FileResult(this._client, response.data['file']);

		} catch (err) {
			throw err;
		}
	}
}

exports.PdfMarker = PdfMarker;
