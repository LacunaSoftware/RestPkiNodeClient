export class PdfMark {
    _container: any;
    _borderWidth: number;
    _borderColor: Color;
    _backgroundColor: Color;
    _elements: any[];
    _pageOption: string;
    _pageOptionNumber: any;
    set container(arg: any);
    get container(): any;
    set borderWidth(arg: number);
    get borderWidth(): number;
    set borderColor(arg: Color);
    get borderColor(): Color;
    set backgroundColor(arg: Color);
    get backgroundColor(): Color;
    set elements(arg: any[]);
    get elements(): any[];
    set pageOption(arg: string);
    get pageOption(): string;
    set pageOptionNumber(arg: any);
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
