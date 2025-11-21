export class CadesSignatureStarter extends SignatureStarter {
    _fileToSign: FileReference | null;
    _cmsToCoSign: FileReference | null;
    _encapsulateContent: boolean;
    _digestAlgorithmsForDetachedSignature: (import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm)[];
    setIgnoreRevocationStatusUnknown(value: any): void;
    _ignoreRevocationStatusUnknown: boolean | undefined;
    getIgnoreRevocationStatusUnknown(): boolean | undefined;
    set ignoreRevocationStatusUnknown(value: boolean | undefined);
    get ignoreRevocationStatusUnknown(): boolean | undefined;
    setDigestAlgorithmsForDetachedSignature(list: any): void;
    getDigestAlgorithmsForDetachedSignature(): (import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm)[];
    set digestAlgorithmsForDetachedSignature(value: (import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm)[]);
    get digestAlgorithmsForDetachedSignature(): (import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm)[];
    setFileToSignFromPath(path: any): void;
    setFileToSignFromContentRaw(contentRaw: any): void;
    setFileToSignFromContentBase64(contentBase64: any): void;
    setFileToSignFromStream(stream: any): void;
    setFileToSignFromResult(result: any): void;
    /**
     * @param {string} path
     */
    set fileToSign(path: string);
    /**
     * @param {Buffer} content
     */
    set fileToSignContent(content: Buffer);
    setCmsToCoSignFromPath(path: any): void;
    setCmsToCoSignFromContentRaw(contentRaw: any): void;
    setCmsToCoSignFromContentBase64(contentBase64: any): void;
    setCmsToCoSignFromStream(stream: any): void;
    setCmsToCoSignFromResult(result: any): void;
    /**
     * @param {string} path
     */
    set cmsToCoSign(path: string);
    /**
     * @param {Buffer} content
     */
    set cmsToCoSignContent(content: Buffer);
    /**
     * @param {boolean} value
     */
    set encapsulateContent(value: boolean);
    start(): Promise<{
        token: any;
        toSignData: any;
        toSignHash: any;
        digestAlgorithmOid: any;
        cryptoSignatureAlgorithm: string | null;
    }>;
    startWithWebPki(): Promise<{
        token: any;
    }>;
    _startCommon(): Promise<any>;
    _startCommonGetRequest(): Promise<{
        signaturePolicyId: any;
        securityContextId: any;
        callbackArgument: any;
        encapsulateContent: boolean;
    }>;
}
import { SignatureStarter } from "./signature-starter";
import { FileReference } from "./file-reference";
