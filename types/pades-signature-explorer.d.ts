export class PadesSignatureExplorer extends SignatureExplorer {
    open(): Promise<PadesSignature>;
}
import { SignatureExplorer } from "./signature-explorer";
import { PadesSignature } from "./pades-signature";
