export class AuthenticationResult {
    constructor(model: any);
    _validationResults: ValidationResults | undefined;
    _certificate: PKCertificate | undefined;
    get validationResults(): ValidationResults | undefined;
    get certificate(): PKCertificate | undefined;
}
import { ValidationResults } from "./validation";
import { PKCertificate } from "./pk-certificate";
