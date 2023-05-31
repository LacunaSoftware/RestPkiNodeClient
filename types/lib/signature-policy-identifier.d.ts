export class SignaturePolicyIdentifier {
    constructor(model: any);
    _digest: DigestAlgorithmAndValue;
    _oid: any;
    _uri: any;
    get digest(): DigestAlgorithmAndValue;
    get oid(): any;
    get uri(): any;
}
import { DigestAlgorithmAndValue } from "./digest-algorithm-and-value";
