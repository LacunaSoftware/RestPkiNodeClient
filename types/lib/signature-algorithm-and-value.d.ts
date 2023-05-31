export class SignatureAlgorithmAndValue {
    constructor(model: any);
    _algorithm: import("./pk-algorithms").RSASignatureAlgorithm;
    _value: any;
    get algorithm(): import("./pk-algorithms").RSASignatureAlgorithm;
    get value(): any;
}
