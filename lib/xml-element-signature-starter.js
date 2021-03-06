'use strict';
const {XmlSignatureStarter} = require('./xml-signature-starter');
const {PKCertificate} = require('./pk-certificate');

class XmlElementSignatureStarter extends XmlSignatureStarter {

	constructor(client) {
		super(client);
		this._toSignElementId = null;
		this._idResolutionTable = null;
	}

	set toSignElementId(toSignElementId) {
		this._toSignElementId = toSignElementId;
	}

	set idResolutionTable(idResolutionTable) {
		this._idResolutionTable = idResolutionTable;
	}

	async startWithWebPki() {

		this._verifyCommonParameters(true);

		if (!this._toSignElementId) {
			throw new Error('The XML element id to sign was not set');
		}

		let request = this._getRequest();
		request['elementToSignId'] = this._toSignElementId;
		if (this._idResolutionTable) {
			request['idResolutionTable'] = this._idResolutionTable.toModel();
		}

		try {
			let response = await this._client.getRestClient().post('Api/XmlSignatures/XmlElementSignature', request);
			let result = {
				token: response.data['token']
			};
			if (response.data['certificate']) {
				result['certificate'] = new PKCertificate(response.data['certificate']);
			}
			return result;
		} catch (err) {
			throw err;
		}
	}

}

exports.XmlElementSignatureStarter = XmlElementSignatureStarter;