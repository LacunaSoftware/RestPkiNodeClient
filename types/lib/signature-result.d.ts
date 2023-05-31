export class SignatureResult extends FileResult {
    constructor(client: any, file: any, certificate: any, callbackArgument: any);
    certificate: PKCertificate;
    callbackArgument: any;
}
import { FileResult } from "./file-result";
import { PKCertificate } from "./pk-certificate";
