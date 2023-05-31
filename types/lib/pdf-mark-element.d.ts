export class PdfMarkElement {
    constructor(elementType: any, relativeContainer: any);
    _elementType: any;
    _relativeContainer: any;
    _rotation: number;
    _opacity: number;
    set elementType(arg: any);
    get elementType(): any;
    set relativeContainer(arg: any);
    get relativeContainer(): any;
    set rotation(arg: number);
    get rotation(): number;
    set opacity(arg: number);
    get opacity(): number;
    toModel(): {
        elementType: any;
        relativeContainer: any;
        rotation: number;
        opacity: number;
    };
}
