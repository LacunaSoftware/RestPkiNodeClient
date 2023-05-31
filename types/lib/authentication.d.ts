export class Authentication {
    constructor(client: any);
    _client: any;
    startWithWebPki(securityContextId: any): Promise<any>;
    completeWithWebPki(token: any): Promise<AuthenticationResult>;
}
import { AuthenticationResult } from "./authentication-result";
