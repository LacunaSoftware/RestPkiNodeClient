'use strict';
const {AuthenticationResult} = require('./authentication-result');
const { CompleteAuth } = require('./complete-auth');

class Authentication {

	constructor(client) {
		this._client = client;
	}

	async startWithWebPki(securityContextId) {
		let request = {
			securityContextId: securityContextId
		};

		try {
			let response = await this._client.getRestClient().post('Api/Authentications', request);
			return response.data['token'];
		} catch (err) {
			throw err;
		}
	}

	async start(securityContextId) {
		let request = {
			securityContextId: securityContextId
		};

		try {
			let response = await this._client.getRestClient().post('Api/Authentications', request);
			return response.data;
		} catch (err) {
			throw err;
		}
	}

	async completeWithWebPki(token) {
		try {
			let response = await this._client.getRestClient().post(`Api/Authentications/${token}/Finalize`);
			return new AuthenticationResult(response.data);
		} catch (err) {
			throw err;
		} 
	}

	/**
	 * 
	 * @param {string} token 
	 * @param {CompleteAuth} request 
	 * @returns 
	 */
	async complete(token, request) {
		try {
			let response = await this._client.getRestClient().post(`Api/Authentications/${token}/SignedBytes`, request);
			return new AuthenticationResult(response.data);
		} catch (err) {
			throw err;
		}
	}

}

exports.Authentication = Authentication;