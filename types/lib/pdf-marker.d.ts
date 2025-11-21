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
    set file(path: any);
    set fileContent(contentRaw: any);
    set marks(value: any[]);
    get marks(): any[];
    set measurementUnits(value: string);
    get measurementUnits(): string;
    set pageOptimization(value: any);
    get pageOptimization(): any;
    set abortIfSigned(value: boolean);
    get abortIfSigned(): boolean;
    apply(): Promise<FileResult>;
}
import { FileResult } from "./file-result";
