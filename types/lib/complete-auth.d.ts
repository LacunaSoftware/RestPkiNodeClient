export class CompleteAuth {
    constructor(request: any);
    set certificate(arg: any);
    get certificate(): any;
    _certificate: any;
    set signature(arg: any);
    get signature(): any;
    _signature: any;
    toModel(request: any): {
        signature: any;
        certificate: any;
    };
}
