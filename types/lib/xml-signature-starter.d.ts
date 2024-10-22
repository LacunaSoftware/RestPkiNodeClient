export class XmlSignatureStarter extends SignatureStarter {
    _xmlContent: any;
    _signatureElementId: any;
    _signatureElementLocationXPath: any;
    _signatureElementLocationNsm: any;
    _signatureElementLocationInsertionOption: any;
    setXmlToSignFromPath(path: any): void;
    setXmlToSignFromContentRaw(contentRaw: any): void;
    setXmlToSignFromContentBase64(contentBase64: any): void;
    set xmlToSign(path: any);
    set xmlToSignContent(contentRaw: any);
    setSignatureElementLocation(xpath: any, insertionOption: any, namespaceManager: any): void;
    set signatureElementId(signatureElementId: any);
    /**
     *
     * @param isWithWebPki
     * @protected
     */
    protected _verifyCommonParameters(isWithWebPki: any): void;
    /**
     *
     * @protected
     */
    protected _getRequest(): {
        signaturePolicyId: any;
        securityContextId: any;
        signatureElementId: any;
    };
}
import { SignatureStarter } from "./signature-starter";
