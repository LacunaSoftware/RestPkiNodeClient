export class PdfTextSection {
    constructor(text: any, color: any, fontSize: any);
    _style: string;
    _text: any;
    _fontSize: any;
    _color: any;
    set text(arg: any);
    get text(): any;
    set color(arg: any);
    get color(): any;
    set fontSize(arg: any);
    get fontSize(): any;
    set style(arg: string);
    get style(): string;
    toModel(): {
        style: string;
        text: any;
        color: any;
        fontSize: any;
    };
}
