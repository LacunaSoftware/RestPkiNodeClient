export class FullXmlSignatureStarter extends XmlSignatureStarter {
    startWithWebPki(): Promise<{
        token: any;
    }>;
}
import { XmlSignatureStarter } from "./xml-signature-starter";
