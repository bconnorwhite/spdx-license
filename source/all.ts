import fetch from "cross-fetch-json";
import { getLicenseFields, RawFullLicense, LicenseFields } from "./one";

type Result = {
  licenseListVersion: string;
  licenses: RawLicense[];
  releaseDate: string;
}

type RawLicense = {
  reference: string;
  isDeprecatedLicenseId: boolean;
  detailsUrl: string;
  referenceNumber: string;
  name: string;
  licenseId: string;
  seeAlso: string[];
  isOsiApproved: boolean;
  isFsfLibre?: boolean;
}

export type License = LicenseFields & {
  getText: () => Promise<string | undefined>;
}

export type Licenses = {
  [id: string]: License;
}

async function getText(url: string) {
  return fetch<RawFullLicense>(url).then((result) => {
    return result?.licenseText;
  });
}

export async function getLicenses(): Promise<Licenses> {
  return fetch<Result>("https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json").then((result) => {
    return (result?.licenses ?? []).reduce((retval, license) => {
      retval[license.licenseId] = {
        ...getLicenseFields(license, license.detailsUrl),
        getText: () => getText(license.detailsUrl)
      };
      return retval;
    }, {} as Licenses);
  });
}
