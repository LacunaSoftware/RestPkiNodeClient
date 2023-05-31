export class PdfMarker {
    constructor(client: any);
    _client: any;
    _marks: any[];
    _measurementUnits: string;
    _pageOptimization: any;
    _abortIfSigned: boolean;
    _fileContent: any;
    setFileFromPath(path: any): void;
    setFileFromContentRaw(contentRaw: any): void;
    setFileFromContentBase64(contentBase64: any): void;
    set file(arg: any);
    set fileContent(arg: any);
    set marks(arg: any[]);
    get marks(): any[];
    set measurementUnits(arg: string);
    get measurementUnits(): string;
    set pageOptimization(arg: any);
    get pageOptimization(): any;
    set abortIfSigned(arg: boolean);
    get abortIfSigned(): boolean;
    apply(): Promise<FileResult>;
}
import { FileResult } from "./file-result";
