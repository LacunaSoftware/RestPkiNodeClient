export class FileReference {
    static fromStream(stream: any): FileReference;
    static fromFile(path: any): FileReference;
    static fromContent(content: any): FileReference;
    static fromResult(result: any): FileReference;
    static fromBlob(blob: any): FileReference;
    getStream(): ReadableStreamClone;
    _stream: any;
    getPath(): any;
    getBlob(): any;
    uploadOrReference(client: any): Promise<any>;
    getContent(): Promise<any>;
    computeDataHashes(algorithms: any): Promise<any>;
    _computeDataHashes(algorithms: any, stream: any): Promise<any>;
    _openOrUseExistingStream(actionCallback: any): any;
}
import { ReadableStreamClone } from "./stream-utils";
