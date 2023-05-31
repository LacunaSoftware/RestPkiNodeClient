export class FileResult {
    constructor(client: any, file: any);
    _client: any;
    _file: FileModel;
    openRead(): Promise<any>;
    getContent(): Promise<any>;
    writeToFile(path: any): Promise<void>;
    getFile(): FileModel;
    setFile(file: any): void;
    set file(arg: FileModel);
    get file(): FileModel;
}
import { FileModel } from "./file-model";
