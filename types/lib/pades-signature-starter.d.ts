export class PadesSignatureStarter extends SignatureStarter {
    _bypassMarksIfSigned: boolean;
    _pdfMarks: any[];
    _pdfToSign: FileReference | null;
    _measurementUnits: any;
    _pageOptimization: any;
    _visualRepresentation: any;
    _customSignatureFieldName: any;
    _certificationLevel: any;
    _reason: any;
    setIgnoreRevocationStatusUnknown(value: any): void;
    _ignoreRevocationStatusUnknown: any;
    getIgnoreRevocationStatusUnknown(): any;
    set ignoreRevocationStatusUnknown(arg: any);
    get ignoreRevocationStatusUnknown(): any;
    setPdfToSignFromPath(path: any): void;
    setPdfToSignFromStream(stream: any): void;
    setPdfToSignFromResult(result: any): void;
    setPdfToSignFromContentRaw(contentRaw: any): void;
    setPdfToSignFromContentBase64(contentBase64: any): void;
    /**
     * @param {string} path
     */
    set pdfToSign(arg: string);
    /**
     * @param {Buffer} contentRaw
     */
    set pdfToSignContent(arg: Buffer);
    set visualRepresentation(arg: any);
    set bypassMarksIfSigned(arg: any);
    set pdfMarks(arg: any);
    set measurementUnits(arg: any);
    set pageOptimization(arg: any);
    set customSignatureFieldName(arg: any);
    get customSignatureFieldName(): any;
    set certificationLevel(arg: any);
    get certificationLevel(): any;
    set reason(arg: any);
    get reason(): any;
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
        pdfMarks: any[];
        bypassMarksIfSigned: boolean;
        measurementUnits: any;
        pageOptimization: any;
        visualRepresentation: any;
        customSignatureFieldName: any;
        certificationLevel: any;
        reason: any;
    }>;
}
import { SignatureStarter } from "./signature-starter";
import { FileReference } from "./file-reference";
