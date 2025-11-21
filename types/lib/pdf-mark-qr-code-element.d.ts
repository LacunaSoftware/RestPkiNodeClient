export class PdfMarkQRCodeElement extends PdfMarkElement {
    _qrCodeData: any;
    _drawQuietZones: boolean;
    set qrCodeData(value: any);
    get qrCodeData(): any;
    set drawQuietZones(value: boolean);
    get drawQuietZones(): boolean;
}
import { PdfMarkElement } from "./pdf-mark-element";
