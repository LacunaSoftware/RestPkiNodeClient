export class PadesSignatureFinisher extends SignatureFinisher {
    getForceBlobResult(): boolean | undefined;
    setForceBlobResult(value: any): void;
    _forceBlobResult: boolean | undefined;
    set forceBlobResult(arg: boolean | undefined);
    get forceBlobResult(): boolean | undefined;
    finish(): Promise<SignatureResult>;
}
import { SignatureFinisher } from "./signature-finisher";
import { SignatureResult } from "./signature-result";
