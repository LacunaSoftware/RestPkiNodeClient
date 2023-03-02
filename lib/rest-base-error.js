'use strict';

class RestBaseError extends Error {

	constructor(name, message, verb, url, innerException) {
		super(message, {cause: innerException});
		this._name = name;
		this._verb = verb;
		this._url = url;

		Error.captureStackTrace(this, this.constructor);
	}

	get name() {
		return this._name;
	}

	get verb() {
		return this._verb;
	}

	get url() {
		return this._url;
	}

}

exports.RestBaseError = RestBaseError;