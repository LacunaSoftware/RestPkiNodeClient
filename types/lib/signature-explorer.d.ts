export class SignatureExplorer {
    constructor(client: any);
    _client: any;
    _signatureFileContent: any;
    _validate: boolean;
    _defaultSignaturePolicyId: any;
    _acceptableExplicitPolicies: any;
    _securityContextId: any;
    _ignoreRevocationStatusUnknown: any;
    _trustUncertifiedSigningTime: any;
    setSignatureFileFromPath(path: any): void;
    setSignatureFileFromContentRaw(contentRaw: any): void;
    setSignatureFileFromContentBase64(contentBase64: any): void;
    set signatureFile(path: any);
    set signatureFileContent(contentRaw: any);
    setIgnoreRevocationStatusUnknown(value: any): void;
    getIgnoreRevocationStatusUnknown(): any;
    set ignoreRevocationStatusUnknown(value: any);
    get ignoreRevocationStatusUnknown(): any;
    setTrustUncertifiedSigningTime(value: any): void;
    getTrustUncertifiedSigningTime(): any;
    set trustUncertifiedSigningTime(value: any);
    get trustUncertifiedSigningTime(): any;
    set validate(validate: any);
    set defaultSignaturePolicyId(signaturePolicyId: any);
    set acceptableExplicitPolicies(policyCatalog: any);
    set securityContextId(securityContextId: any);
    _getRequest(mimeType: any): {
        validate: boolean;
        defaultSignaturePolicyId: any;
        securityContextId: any;
        acceptableExplicitPolicies: any;
    };
}
