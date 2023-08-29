'use strict';

class CompleteAuth {
    
    get certificate() {
        return this._certificate;
    }
    set certificate(value) {
        this._certificate = value;
    }
    
    get signature() {
        return this._signature;
    }
    set signature(value) {
        this._signature = value;
    }
    
	constructor(request) {
		this._signature = request['signature'] || null;
		this._certificate = request['certificate'] || null;
        return this.toModel(request)
	}

    toModel(request){
        return {
            signature: request.signature,
            certificate: request.certificate
        };
    }
}

exports.CompleteAuth = CompleteAuth;