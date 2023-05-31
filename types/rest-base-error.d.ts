export class RestBaseError extends Error {
    constructor(name: any, message: any, verb: any, url: any, innerException: any);
    _name: any;
    _verb: any;
    _url: any;
    get name(): any;
    get verb(): any;
    get url(): any;
}
