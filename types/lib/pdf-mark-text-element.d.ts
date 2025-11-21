export class PdfMarkTextElement extends PdfMarkElement {
    _textSections: any;
    _align: string;
    set textSections(value: any);
    get textSections(): any;
    set align(value: string);
    get align(): string;
}
import { PdfMarkElement } from "./pdf-mark-element";
