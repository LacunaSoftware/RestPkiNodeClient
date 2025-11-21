export class CadesSignatureFinisher extends SignatureFinisher {
    getForceBlobResult(): boolean | undefined;
    setForceBlobResult(value: any): void;
    _forceBlobResult: boolean | undefined;
    set forceBlobResult(value: boolean | undefined);
    get forceBlobResult(): boolean | undefined;
    finish(): Promise<SignatureResult>;
}
import { SignatureFinisher } from "./signature-finisher";
import { SignatureResult } from "./signature-result";

