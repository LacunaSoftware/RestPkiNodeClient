export class XmlElementSignatureStarter extends XmlSignatureStarter {
    _toSignElementId: any;
    _idResolutionTable: any;
    set toSignElementId(arg: any);
    set idResolutionTable(arg: any);
    startWithWebPki(): Promise<{
        token: any;
    }>;
}
import { XmlSignatureStarter } from "./xml-signature-starter";
