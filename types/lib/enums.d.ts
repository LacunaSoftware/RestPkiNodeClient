export namespace Apis {
    let StartCades: string;
    let CompleteCades: string;
    let StartPades: string;
    let CompletePades: string;
    let MultipartUpload: string;
    let AddPdfMarks: string;
}
export namespace DigestAlgorithms {
    let MD5: string;
    let SHA1: string;
    let SHA256: string;
    let SHA384: string;
    let SHA512: string;
}
export namespace SignatureAlgorithms {
    let MD5_WITH_RSA: string;
    let SHA1_WITH_RSA: string;
    let SHA256_WITH_RSA: string;
    let SHA384_WITH_RSA: string;
    let SHA512_WITH_RSA: string;
}
export namespace PKAlgorithms {
    let RSA: string;
}
export namespace PkiItalyCertificateTypes {
    let UNDEFINED: string;
    let CNS: string;
    let DIGITAL_SIGNATURE: string;
}
export namespace PkiBrazilCertificateTypes {
    let UNKNOWN: string;
    let A1: string;
    let A2: string;
    let A3: string;
    let A4: string;
    let S1: string;
    let S2: string;
    let S3: string;
    let S4: string;
    let T3: string;
    let T4: string;
}
export namespace PadesMeasurementUnits {
    let CENTIMETERS: string;
    let PDF_POINTS: string;
}
export namespace XmlInsertionOptions {
    let APPEND_CHILD: string;
    let PREPEND_CHILD: string;
    let APPEND_SIBLING: string;
    let PREPEND_SIBLING: string;
}
export namespace StandardSecurityContexts {
    let PKI_BRAZIL: string;
    let PKI_ITALY: string;
    let WINDOWS_SERVER: string;
    let LACUNA_TEST: string;
}
export namespace StandardSignaturePolicies {
    let PADES_BASIC: string;
    let PADES_BASIC_WITH_PKI_BRAZIL_CERTS: string;
    let PADES_T_WITH_PKI_BRAZIL_CERTS: string;
    let PKI_BRAZIL_PADES_ADR_BASICA: string;
    let PKI_BRAZIL_PADES_ADR_TEMPO: string;
    let CADES_BES: string;
    let CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS: string;
    let PKI_BRAZIL_CADES_ADR_BASICA: string;
    let PKI_BRAZIL_CADES_ADR_BASICA_WITHOUT_CRLS: string;
    let PKI_BRAZIL_CADES_ADR_TEMPO: string;
    let PKI_BRAZIL_CADES_ADR_COMPLETA: string;
    let XADES_BES: string;
    let XML_DSIG_BASIC: string;
    let PKI_BRAZIL_XADES_ADR_BASICA: string;
    let PKI_BRAZIL_XADES_ADR_TEMPO: string;
    let PKI_BRAZIL_XADES_ADR_ARQUIVAMENTO: string;
    let PKI_BRAZIL_XADES_ADR_COMPLETA: string;
    let PKI_BRAZIL_NFE_PADRAO_NACIONAL: string;
    let COD_WITH_SHA1: string;
    let COD_WITH_SHA256: string;
    let ADOBE_READER: string;
}
export namespace PdfTextStyle {
    let NORMAL: string;
    let BOLD: string;
    let ITALIC: string;
}
export namespace PdfMarkElementType {
    let TEXT: string;
    let IMAGE: string;
    let QRCODE: string;
}
export namespace PdfMarkPageOptions {
    let ALL_PAGES: string;
    let SINGLE_PAGE: string;
    let SINGLE_PAGE_FROM_END: string;
    let NEW_PAGE: string;
}
export namespace PadesCertificationLevels {
    let NOT_CERTIFIED: string;
    let CERTIFIED_FORM_FILLING: string;
    let CERTIFIED_FORM_FILLING_AND_ANNOTATIONS: string;
    let CERTIFIED_NO_CHANGES_ALLOWED: string;
}
