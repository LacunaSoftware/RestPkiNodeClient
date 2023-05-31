export class ApiVersion {
    constructor(v: any);
    _versionStr: any;
    _versionArr: any;
    isLessThanOrEqualTo(otherVersion: any): boolean;
    isLessThan(otherVersion: any): boolean;
    isEqualTo(otherVersion: any): boolean;
    isGreaterThan(otherVersion: any): boolean;
    isGreaterThanOrEqualTo(otherVersion: any): boolean;
    compareElementsBasedOnThisInstance(otherVersion: any): 1 | -1 | 0;
    getVersionArr(): any;
    getVersionStr(): any;
    get versionArr(): any;
    get versionStr(): any;
}
