export class XmlIdResolutionTable {
    constructor(includeXmlIdGlobalAttribute: any);
    _elementIdAttributes: any[];
    _globalIdAttributes: any[];
    _includeXmlIdAttribute: any;
    addGlobalIdttribute(idAttibuteLocalName: any, idAttributeNamespace: any): void;
    setElementIdAttribute(elementLocalName: any, elementNamespace: any, idAttributeLocalName: any, idAttributeNamespace: any): void;
    toModel(): {
        elementIdAttributes: any[];
        globalIdAttributes: any[];
        includeXmlIdAttribute: any;
    };
}
