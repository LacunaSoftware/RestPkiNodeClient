export class PdfMarkElement {
    constructor(elementType: any, relativeContainer: any);
    _elementType: any;
    _relativeContainer: any;
    _rotation: number;
    _opacity: number;
    set elementType(value: any);
    get elementType(): any;
    set relativeContainer(value: any);
    get relativeContainer(): any;
    set rotation(value: number);
    get rotation(): number;
    set opacity(value: number);
    get opacity(): number;
    toModel(): {
        elementType: any;
        relativeContainer: any;
        rotation: number;
        opacity: number;
    };
}
