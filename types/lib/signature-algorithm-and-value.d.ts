export class SignatureAlgorithmAndValue {
    constructor(model: any);
    _algorithm: import("./pk-algorithms").RSASignatureAlgorithm;
    _value: Buffer;
    get algorithm(): import("./pk-algorithms").RSASignatureAlgorithm;
    get value(): Buffer;
}
