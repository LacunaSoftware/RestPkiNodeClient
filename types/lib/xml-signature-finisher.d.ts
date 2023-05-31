export class XmlSignatureFinisher extends SignatureFinisher {
    finish(): Promise<SignatureResult>;
}
import { SignatureFinisher } from "./signature-finisher";
import { SignatureResult } from "./signature-result";
