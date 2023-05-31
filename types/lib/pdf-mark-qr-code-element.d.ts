export class PdfMarkQRCodeElement extends PdfMarkElement {
    _qrCodeData: any;
    _drawQuietZones: boolean;
    set qrCodeData(arg: any);
    get qrCodeData(): any;
    set drawQuietZones(arg: boolean);
    get drawQuietZones(): boolean;
}
import { PdfMarkElement } from "./pdf-mark-element";
