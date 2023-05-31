export class Color {
    static fromRGBString(rgbString: any, alpha: any): Color;
    constructor(red: any, green: any, blue: any, alpha: any);
    _alpha: any;
    _red: any;
    _green: any;
    _blue: any;
    get alpha(): any;
    get blue(): any;
    get green(): any;
    get red(): any;
    toModel(): {
        alpha: any;
        blue: any;
        green: any;
        red: any;
    };
}
