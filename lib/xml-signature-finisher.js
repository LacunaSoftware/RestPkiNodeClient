'use strict';
const {SignatureFinisher} = require('./signature-finisher');
const {SignatureResult} = require('./signature-result');

class XmlSignatureFinisher extends SignatureFinisher {

	constructor(client) {
		super(client);
	}

	async finish() {
		if (!this._token) {
			throw new Error('The token was not set');
		}

		try {
			let response = await this._client.getRestClient().post(`Api/XmlSignatures/${this._token}/Finalize`);

			return new SignatureResult(
				this._client,
				{content: response.data['signedXml']},
				response.data['certificate']
			);
		} catch (err) {
			throw err;
		}
	}

}

exports.XmlSignatureFinisher = XmlSignatureFinisher;