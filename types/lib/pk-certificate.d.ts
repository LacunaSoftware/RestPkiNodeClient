export class PKCertificate {
    constructor(model: any);
    _emailAddress: any;
    _serialNumber: any;
    _validityStart: any;
    _validityEnd: any;
    _subjectName: Name | undefined;
    _issuerName: Name | undefined;
    _pkiBrazil: PkiBrazilCertificateFields | undefined;
    _pkiItaly: PkiItalyCertificateFields | undefined;
    _pkiParaguay: PkiParaguayCertificateFields | undefined;
    _issuer: any;
    get emailAddress(): any;
    get serialNumber(): any;
    get validityStart(): any;
    get validityEnd(): any;
    get subjectName(): Name | undefined;
    get issuerName(): Name | undefined;
    get pkiBrazil(): PkiBrazilCertificateFields | undefined;
    get pkiItaly(): PkiItalyCertificateFields | undefined;
    get pkiParaguay(): PkiParaguayCertificateFields | undefined;
    get issuer(): any;
}
export class PkiBrazilCertificateFields {
    constructor(model: any);
    _certificateType: any;
    _cpf: any;
    _cnpj: any;
    _responsavel: any;
    _companyName: any;
    _oabUF: any;
    _oabNumero: any;
    _rgNumero: any;
    _rgEmissor: any;
    _rgEmissorUF: any;
    _dateOfBirth: Date | undefined;
    get certificateType(): any;
    get cpf(): any;
    get cnpj(): any;
    get responsavel(): any;
    get companyName(): any;
    get oabUF(): any;
    get oabNumero(): any;
    get rgNumero(): any;
    get rgEmissor(): any;
    get rgEmissorUF(): any;
    get dateOfBirth(): Date | undefined;
    get cpfFormatted(): any;
    get cnpjFormatted(): any;
}
export class PkiItalyCertificateFields {
    constructor(model: any);
    _certificateType: any;
    _codiceFiscale: any;
    _idCarta: any;
    get certificateType(): any;
    get codiceFiscale(): any;
    get idCarta(): any;
}
export class PkiParaguayCertificateFields {
    constructor(model: any);
    _personCertificateType: any;
    _certificateType: any;
    _ci: any;
    _cie: any;
    _pasaporte: any;
    _ruc: any;
    _responsable: any;
    get personCertificateType(): any;
    get certificateType(): any;
    get ci(): any;
    get cie(): any;
    get pasaporte(): any;
    get ruc(): any;
    get responsable(): any;
}
export class Name {
    constructor(model: any);
    _commonName: any;
    _country: any;
    _dnQualifier: any;
    _emailAddress: any;
    _generationQualifier: any;
    _givenName: any;
    _initials: any;
    _locality: any;
    _organization: any;
    _organizationUnit: any;
    _pseudonym: any;
    _serialNumber: any;
    _stateName: any;
    _surname: any;
    _title: any;
    get commonName(): any;
    get country(): any;
    get dnQualifier(): any;
    get emailAddress(): any;
    get generationQualifier(): any;
    get givenName(): any;
    get initials(): any;
    get locality(): any;
    get organization(): any;
    get organizationUnit(): any;
    get pseudonym(): any;
    get serialNumber(): any;
    get stateName(): any;
    get surname(): any;
    get title(): any;
}
