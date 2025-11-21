export class XmlElementSignatureStarter extends XmlSignatureStarter {
    _toSignElementId: any;
    _idResolutionTable: any;
    set toSignElementId(toSignElementId: any);
    set idResolutionTable(idResolutionTable: any);
    startWithWebPki(): Promise<{
        token: any;
    }>;
}
import { XmlSignatureStarter } from "./xml-signature-starter";
