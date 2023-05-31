export class RestPkiError extends RestBaseError {
    constructor(verb: any, url: any, errorCode: any, detail: any);
    _errorCode: any;
    _detail: any;
    get errorCode(): any;
    get detail(): any;
}
import { RestBaseError } from "./rest-base-error";
