export class Authentication {
    constructor(client: any);
    _client: any;
    startWithWebPki(securityContextId: any): Promise<any>;
    start(securityContextId: any): Promise<any>;
    completeWithWebPki(token: any): Promise<AuthenticationResult>;
    /**
     *
     * @param {string} token
     * @param {CompleteAuth} request
     * @returns
     */
    complete(token: string, request: CompleteAuth): Promise<AuthenticationResult>;
}
import { AuthenticationResult } from "./authentication-result";
import { CompleteAuth } from "./complete-auth";
