export class PdfMarkImage {
    constructor(imageContent: any, mimeType: any);
    _resource: ResourceContentOrReference;
    set resource(arg: ResourceContentOrReference);
    get resource(): ResourceContentOrReference;
    toModel(): {
        resource: {
            content: any;
            mimeType: any;
            url?: undefined;
        };
    } | {
        resource: {
            url: any;
            mimeType: any;
            content?: undefined;
        };
    };
}
import { ResourceContentOrReference } from "./resource-content-or-reference";
