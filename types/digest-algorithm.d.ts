export class DigestAlgorithm {
    static get MD5(): MD5DigestAlgorithm;
    static get SHA1(): SHA1DigestAlgorithm;
    static get SHA256(): SHA256DigestAlgorithm;
    static get SHA384(): SHA384DigestAlgorithm;
    static get SHA512(): SHA512DigestAlgorithm;
    static get _algorithms(): (MD5DigestAlgorithm | SHA1DigestAlgorithm | SHA256DigestAlgorithm | SHA384DigestAlgorithm | SHA512DigestAlgorithm)[];
    static getInstanceByName(name: any): MD5DigestAlgorithm | SHA1DigestAlgorithm | SHA256DigestAlgorithm | SHA384DigestAlgorithm | SHA512DigestAlgorithm;
    static getInstanceByOid(oid: any): MD5DigestAlgorithm | SHA1DigestAlgorithm | SHA256DigestAlgorithm | SHA384DigestAlgorithm | SHA512DigestAlgorithm;
    static getInstanceByXmlUri(xmlUri: any): MD5DigestAlgorithm | SHA1DigestAlgorithm | SHA256DigestAlgorithm | SHA384DigestAlgorithm | SHA512DigestAlgorithm;
    static getInstanceByApiModel(algorithm: any): MD5DigestAlgorithm | SHA1DigestAlgorithm | SHA256DigestAlgorithm | SHA384DigestAlgorithm | SHA512DigestAlgorithm;
    constructor(name: any, oid: any, byteLength: any, apiModel: any, xmlUri: any);
    _name: any;
    _oid: any;
    _byteLength: any;
    _apiModel: any;
    _xmlUri: any;
    equals(instance: any): boolean;
    computeHash(content: any, output_encoding: any): any;
    checkLength(digestValue: any): void;
    get name(): any;
    get oid(): any;
    get byteLength(): any;
    get apiModel(): any;
    get xmlUri(): any;
    get cryptoHash(): void;
    createCryptoHash(): void;
}
export class MD5DigestAlgorithm extends DigestAlgorithm {
    constructor();
    createCryptoHash(): any;
}
export class SHA1DigestAlgorithm extends DigestAlgorithm {
    constructor();
    createCryptoHash(): any;
}
export class SHA256DigestAlgorithm extends DigestAlgorithm {
    constructor();
    createCryptoHash(): any;
}
export class SHA384DigestAlgorithm extends DigestAlgorithm {
    constructor();
    createCryptoHash(): any;
}
export class SHA512DigestAlgorithm extends DigestAlgorithm {
    constructor();
    createCryptoHash(): any;
}
