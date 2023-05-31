export namespace Apis {
    const StartCades: string;
    const CompleteCades: string;
    const StartPades: string;
    const CompletePades: string;
    const MultipartUpload: string;
    const AddPdfMarks: string;
}
export namespace DigestAlgorithms {
    const MD5: string;
    const SHA1: string;
    const SHA256: string;
    const SHA384: string;
    const SHA512: string;
}
export namespace SignatureAlgorithms {
    const MD5_WITH_RSA: string;
    const SHA1_WITH_RSA: string;
    const SHA256_WITH_RSA: string;
    const SHA384_WITH_RSA: string;
    const SHA512_WITH_RSA: string;
}
export namespace PKAlgorithms {
    const RSA: string;
}
export namespace PkiItalyCertificateTypes {
    const UNDEFINED: string;
    const CNS: string;
    const DIGITAL_SIGNATURE: string;
}
export namespace PkiBrazilCertificateTypes {
    const UNKNOWN: string;
    const A1: string;
    const A2: string;
    const A3: string;
    const A4: string;
    const S1: string;
    const S2: string;
    const S3: string;
    const S4: string;
    const T3: string;
    const T4: string;
}
export namespace PadesMeasurementUnits {
    const CENTIMETERS: string;
    const PDF_POINTS: string;
}
export namespace XmlInsertionOptions {
    const APPEND_CHILD: string;
    const PREPEND_CHILD: string;
    const APPEND_SIBLING: string;
    const PREPEND_SIBLING: string;
}
export namespace StandardSecurityContexts {
    const PKI_BRAZIL: string;
    const PKI_ITALY: string;
    const WINDOWS_SERVER: string;
    const LACUNA_TEST: string;
}
export namespace StandardSignaturePolicies {
    const PADES_BASIC: string;
    const PADES_BASIC_WITH_PKI_BRAZIL_CERTS: string;
    const PADES_T_WITH_PKI_BRAZIL_CERTS: string;
    const PKI_BRAZIL_PADES_ADR_BASICA: string;
    const PKI_BRAZIL_PADES_ADR_TEMPO: string;
    const CADES_BES: string;
    const CADES_BES_WITH_SIGNING_TIME_AND_NO_CRLS: string;
    const PKI_BRAZIL_CADES_ADR_BASICA: string;
    const PKI_BRAZIL_CADES_ADR_BASICA_WITHOUT_CRLS: string;
    const PKI_BRAZIL_CADES_ADR_TEMPO: string;
    const PKI_BRAZIL_CADES_ADR_COMPLETA: string;
    const XADES_BES: string;
    const XML_DSIG_BASIC: string;
    const PKI_BRAZIL_XADES_ADR_BASICA: string;
    const PKI_BRAZIL_XADES_ADR_TEMPO: string;
    const PKI_BRAZIL_XADES_ADR_ARQUIVAMENTO: string;
    const PKI_BRAZIL_XADES_ADR_COMPLETA: string;
    const PKI_BRAZIL_NFE_PADRAO_NACIONAL: string;
    const COD_WITH_SHA1: string;
    const COD_WITH_SHA256: string;
    const ADOBE_READER: string;
}
export namespace PdfTextStyle {
    const NORMAL: string;
    const BOLD: string;
    const ITALIC: string;
}
export namespace PdfMarkElementType {
    const TEXT: string;
    const IMAGE: string;
    const QRCODE: string;
}
export namespace PdfMarkPageOptions {
    const ALL_PAGES: string;
    const SINGLE_PAGE: string;
    const SINGLE_PAGE_FROM_END: string;
    const NEW_PAGE: string;
}
export namespace PadesCertificationLevels {
    const NOT_CERTIFIED: string;
    const CERTIFIED_FORM_FILLING: string;
    const CERTIFIED_FORM_FILLING_AND_ANNOTATIONS: string;
    const CERTIFIED_NO_CHANGES_ALLOWED: string;
}
