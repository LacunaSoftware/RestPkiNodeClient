export class ValidationError extends RestBaseError {
    constructor(verb: any, url: any, validationResults: any);
    _validationResults: any;
    get validationResults(): any;
}
import { RestBaseError } from "./rest-base-error";
