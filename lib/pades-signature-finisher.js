'use strict';
const {SignatureFinisher} = require('./signature-finisher');
const {SignatureResult} = require('./signature-result');
const {Apis} = require('./enums');

class PadesSignatureFinisher extends SignatureFinisher {

	constructor(client) {
		super(client);
	}

	getForceBlobResult() {
		return this._forceBlobResult;
	}

	setForceBlobResult(value) {
		this._forceBlobResult = Boolean(value);
	}

	get forceBlobResult() {
		return this.getForceBlobResult();
	}

	set forceBlobResult(value) {
		this.setForceBlobResult(value);
	}

	async finish() {

		if (!this._token) {
			throw new Error('The token was not set');
		}

		try {
			let apiVersion = await this._client.getApiVersion(Apis.CompletePades);
			if (apiVersion >= 2) {
				let request = {
					forceBlobResult: this._forceBlobResult,
					signature: this._signature
				};

				let response = await this._client.getRestClient().post(`Api/v2/PadesSignatures/${this._token}/SignedBytes`, request);

				return new SignatureResult(
					this._client,
					response.data['signatureFile'],
					response.data['certificate'],
					response.data['callbackArgument']
				);
			}

			if (!this._signature) {
				let response = await this._client.getRestClient().post(`Api/PadesSignatures/${this._token}/Finalize`);
				return new SignatureResult(
					this._client,
					{content: response.data['signedPdf']},
					response.data['certificate'],
					response.data['callbackArgument']
				);
			} else {
				let request = {
					signature: this._signature
				};
				let response = await this._client.getRestClient().post(`Api/PadesSignatures/${this._token}/SignedBytes`, request);

				return new SignatureResult(
					this._client,
					{content: response.data['signedPdf']},
					response.data['certificate'],
					response.data['callbackArgument']
				);
			}
		} catch (err) {
			throw err;
		}
	}
}

exports.PadesSignatureFinisher = PadesSignatureFinisher;