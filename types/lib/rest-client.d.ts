export class RestClient {
    constructor(endpointUrl: any, accessToken?: null, proxy?: null, timeout?: null);
    _endpointUrl: any;
    _accessToken: any;
    _proxy: any;
    _timeout: any;
    _instance: any;
    get(url: any): any;
    getAsBuffer(url: any): any;
    getAsStream(url: any): any;
    post(url: any, data?: null): any;
    _checkResponse(errObj: any, restRes: any, verb: any, url: any): void;
}
