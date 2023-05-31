export class PdfMarkTextElement extends PdfMarkElement {
    _textSections: any;
    _align: string;
    set textSections(arg: any);
    get textSections(): any;
    set align(arg: string);
    get align(): string;
}
import { PdfMarkElement } from "./pdf-mark-element";
