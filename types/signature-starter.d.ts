export class SignatureStarter {
    static _getClientSideInstructionsObject(response: any): {
        token: any;
        toSignData: any;
        toSignHash: any;
        digestAlgorithmOid: any;
        cryptoSignatureAlgorithm: string | null;
    };
    static _getCryptoSignatureAlgorithm(oid: any): "RSA-MD5" | "RSA-SHA1" | "RSA-SHA256" | "RSA-SHA384" | "RSA-SHA512" | null;
    constructor(client: any);
    _client: any;
    _signerCertificate: any;
    _signaturePolicyId: any;
    _securityContextId: any;
    _callbackArgument: any;
    set signerCertificate(arg: any);
    set signaturePolicy(arg: any);
    set securityContext(arg: any);
    set callbackArgument(arg: any);
    start(): void;
    startWithWebPki(): void;
}
