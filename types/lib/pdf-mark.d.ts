export class PdfMark {
    _container: any;
    _borderWidth: number;
    _borderColor: Color;
    _backgroundColor: Color;
    _elements: any[];
    _pageOption: string;
    _pageOptionNumber: any;
    set container(value: any);
    get container(): any;
    set borderWidth(value: number);
    get borderWidth(): number;
    set borderColor(value: Color);
    get borderColor(): Color;
    set backgroundColor(value: Color);
    get backgroundColor(): Color;
    set elements(value: any[]);
    get elements(): any[];
    set pageOption(value: string);
    get pageOption(): string;
    set pageOptionNumber(value: any);
    get pageOptionNumber(): any;
    toModel(): {
        container: any;
        backgroundColor: {
            alpha: any;
            blue: any;
            green: any;
            red: any;
        };
        borderColor: {
            alpha: any;
            blue: any;
            green: any;
            red: any;
        };
        borderWidth: number;
        elements: any[];
        pageOption: string;
        pageOptionNumber: any;
    };
}
import { Color } from "./color";
