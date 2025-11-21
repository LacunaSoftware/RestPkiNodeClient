export class CompleteAuth {
    constructor(request: any);
    set certificate(value: any);
    get certificate(): any;
    _certificate: any;
    set signature(value: any);
    get signature(): any;
    _signature: any;
    toModel(request: any): {
        signature: any;
        certificate: any;
    };
}
