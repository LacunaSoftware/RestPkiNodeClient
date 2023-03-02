'use strict';
const {RestBaseError} = require('./rest-base-error');

class RestUnreachableError extends RestBaseError {
	constructor(verb, url, innerException) {
		super('RestUnreachableError', `REST action ${verb} ${url} unreachable\n${innerException}`,
			verb, url, innerException);

		Error.captureStackTrace(this, this.constructor);
	}
}

exports.RestUnreachableError = RestUnreachableError;
