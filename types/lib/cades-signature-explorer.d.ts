export class CadesSignatureExplorer extends SignatureExplorer {
    _dataFileContent: any;
    setDataFileFromPath(path: any): void;
    setDataFileFromContentRaw(contentRaw: any): void;
    setDataFileFromContentBase64(contentBase64: any): void;
    set dataFile(arg: any);
    set dataFileContent(arg: any);
    open(extractContent?: boolean): Promise<CadesSignature>;
    _getRequiredHashes(): Promise<(import("./digest-algorithm").MD5DigestAlgorithm | import("./digest-algorithm").SHA1DigestAlgorithm | import("./digest-algorithm").SHA256DigestAlgorithm | import("./digest-algorithm").SHA384DigestAlgorithm | import("./digest-algorithm").SHA512DigestAlgorithm)[]>;
    _computeDataHashes(dataFileContent: any, algorithms: any): {
        algorithm: any;
        value: any;
    }[];
}
import { SignatureExplorer } from "./signature-explorer";
import { CadesSignature } from "./cades-signature";
