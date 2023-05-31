export class CadesSignature {
    constructor(model: any);
    _encapsulatedContentType: any;
    _hasEncapsulatedContent: any;
    _encapsulatedContent: any;
    _signers: CadesSignerInfo[];
    get encapsulatedContentType(): any;
    get hasEncapsulatedContent(): any;
    get signers(): CadesSignerInfo[];
    getEncapsulatedContent(client: any): Promise<any>;
    writeEncapsulatedContentToFile(client: any, path: any): Promise<void>;
}
export class CadesTimestamp extends CadesSignature {
    _genTime: any;
    _serialNumber: any;
    _messageImprint: DigestAlgorithmAndValue;
    get genTime(): any;
    get serialNumber(): any;
    get messageImprint(): DigestAlgorithmAndValue;
}
export class CadesSignerInfo {
    constructor(model: any);
    _messageDigest: DigestAlgorithmAndValue;
    _signature: SignatureAlgorithmAndValue;
    _certificate: PKCertificate;
    _signingTime: any;
    _certifiedDateReference: any;
    _signaturePolicy: SignaturePolicyIdentifier | undefined;
    _timestamps: CadesTimestamp[];
    _validationResults: ValidationResults | undefined;
    get messageDigest(): DigestAlgorithmAndValue;
    get signature(): SignatureAlgorithmAndValue;
    get certificate(): PKCertificate;
    get signingTime(): any;
    get certifiedDateReference(): any;
    get signaturePolicy(): SignaturePolicyIdentifier | undefined;
    get timestamps(): CadesTimestamp[];
    get validationResults(): ValidationResults | undefined;
}
import { DigestAlgorithmAndValue } from "./digest-algorithm-and-value";
import { SignatureAlgorithmAndValue } from "./signature-algorithm-and-value";
import { PKCertificate } from "./pk-certificate";
import { SignaturePolicyIdentifier } from "./signature-policy-identifier";
import { ValidationResults } from "./validation";
