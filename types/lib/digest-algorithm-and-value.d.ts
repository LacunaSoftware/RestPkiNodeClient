export class DigestAlgorithmAndValue {
    constructor(model: any);
    _algorithm: import("./digest-algorithm").MD5DigestAlgorithm | import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm | import("./digest-algorithm").SHA384DigestAlgorithm | import("./digest-algorithm").SHA512DigestAlgorithm | undefined;
    _value: Buffer | undefined;
    get algorithm(): import("./digest-algorithm").MD5DigestAlgorithm | import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm | import("./digest-algorithm").SHA384DigestAlgorithm | import("./digest-algorithm").SHA512DigestAlgorithm | undefined;
    get value(): Buffer | undefined;
    get hexValue(): string;
    toModel(): {
        algorithm: any;
        value: string;
    };
}
