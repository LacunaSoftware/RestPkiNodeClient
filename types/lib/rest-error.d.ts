export class RestError extends RestBaseError {
    constructor(verb: any, url: any, statusCode: any, errorMessage: any);
    _statusCode: any;
    _errorMessage: any;
    get statusCode(): any;
    get errorMessage(): any;
}
import { RestBaseError } from "./rest-base-error";
