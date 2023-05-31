export class SignatureAlgorithm {
    static get MD5WithRSA(): RSASignatureAlgorithm;
    static get SHA1WithRSA(): RSASignatureAlgorithm;
    static get SHA256WithRSA(): RSASignatureAlgorithm;
    static get SHA384WithRSA(): RSASignatureAlgorithm;
    static get SHA512WithRSA(): RSASignatureAlgorithm;
    static get _algorithms(): RSASignatureAlgorithm[];
    static get _safeAlgorithms(): RSASignatureAlgorithm[];
    static getInstanceByName(name: any): RSASignatureAlgorithm;
    static getInstanceByOid(oid: any): RSASignatureAlgorithm;
    static getInstanceByXmlUri(xmlUri: any): RSASignatureAlgorithm;
    static getInstanceByApiModel(model: any): RSASignatureAlgorithm;
    constructor(name: any, oid: any, xmlUri: any, digestAlgorithm: any, pkAlgorithm: any);
    _name: any;
    _oid: any;
    _xmlUri: any;
    _digestAlgorithm: any;
    _pkAlgorithm: any;
    get oid(): any;
    get name(): any;
    get xmlUri(): any;
    get digestAlgorithm(): any;
    get pkAlgorithm(): any;
}
export class RSASignatureAlgorithm extends SignatureAlgorithm {
    constructor(digestAlgorithm: any);
}
export class RSAPKAlgorithm extends PKAlgorithm {
    static getSignatureAlgorithm(digestAlgorithm: any): RSASignatureAlgorithm;
    constructor();
}
export class PKAlgorithm {
    static get RSA(): RSAPKAlgorithm;
    static get _algorithms(): RSAPKAlgorithm[];
    static getInstanceByName(name: any): RSAPKAlgorithm;
    static getInstanceByOid(oid: any): RSAPKAlgorithm;
    static getInstanceByApiModel(algorithm: any): RSAPKAlgorithm;
    static getSignatureAlgorithm(digestAlgorithm: any): void;
    constructor(name: any, oid: any);
    equals(instance: any): boolean;
    _name: any;
    _oid: any;
    get name(): any;
    get oid(): any;
}
