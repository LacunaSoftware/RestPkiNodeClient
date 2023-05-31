export class DigestAlgorithmAndValue {
    constructor(model: any);
    _algorithm: import("./digest-algorithm").MD5DigestAlgorithm | import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm | import("./digest-algorithm").SHA384DigestAlgorithm | import("./digest-algorithm").SHA512DigestAlgorithm | undefined;
    _value: any;
    get algorithm(): import("./digest-algorithm").MD5DigestAlgorithm | import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm | import("./digest-algorithm").SHA384DigestAlgorithm | import("./digest-algorithm").SHA512DigestAlgorithm | undefined;
    get value(): any;
    get hexValue(): any;
    toModel(): {
        algorithm: any;
        value: any;
    };
}
