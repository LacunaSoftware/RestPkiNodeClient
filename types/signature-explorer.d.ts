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
    set signatureFile(arg: any);
    set signatureFileContent(arg: any);
    setIgnoreRevocationStatusUnknown(value: any): void;
    getIgnoreRevocationStatusUnknown(): any;
    set ignoreRevocationStatusUnknown(arg: any);
    get ignoreRevocationStatusUnknown(): any;
    setTrustUncertifiedSigningTime(value: any): void;
    getTrustUncertifiedSigningTime(): any;
    set trustUncertifiedSigningTime(arg: any);
    get trustUncertifiedSigningTime(): any;
    set validate(arg: any);
    set defaultSignaturePolicyId(arg: any);
    set acceptableExplicitPolicies(arg: any);
    set securityContextId(arg: any);
    _getRequest(mimeType: any): {
        validate: boolean;
        defaultSignaturePolicyId: any;
        securityContextId: any;
        acceptableExplicitPolicies: any;
    };
}
