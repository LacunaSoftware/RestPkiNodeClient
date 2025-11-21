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
    set ignoreRevocationStatusUnknown(value: any);
    get ignoreRevocationStatusUnknown(): any;
    setPdfToSignFromPath(path: any): void;
    setPdfToSignFromStream(stream: any): void;
    setPdfToSignFromResult(result: any): void;
    setPdfToSignFromContentRaw(contentRaw: any): void;
    setPdfToSignFromContentBase64(contentBase64: any): void;
    /**
     * @param {string} path
     */
    set pdfToSign(path: string);
    /**
     * @param {Buffer} contentRaw
     */
    set pdfToSignContent(contentRaw: Buffer);
    set visualRepresentation(value: any);
    set bypassMarksIfSigned(value: any);
    set pdfMarks(value: any);
    set measurementUnits(value: any);
    set pageOptimization(value: any);
    set customSignatureFieldName(value: any);
    get customSignatureFieldName(): any;
    set certificationLevel(value: any);
    get certificationLevel(): any;
    set reason(value: any);
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
import { FileReference } from "./file-reference";
import { SignatureStarter } from "./signature-starter";

