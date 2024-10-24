export class SignatureAlgorithmAndValue {
    constructor(model: any);
    _algorithm: import("./pk-algorithms").RSASignatureAlgorithm;
    _value: string;
    get algorithm(): import("./pk-algorithms").RSASignatureAlgorithm;
    get value(): string;
}
