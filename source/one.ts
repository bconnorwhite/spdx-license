import fetch from "cross-fetch-json";

export type RawLicenseFields = {
  isDeprecatedLicenseId: boolean;
  isFsfLibre?: boolean;
  name: string;
  licenseId: string;
  seeAlso: string[];
  isOsiApproved: boolean;
}

export type RawFullLicense = RawLicenseFields & {
  licenseText: string;
}

export type LicenseFields = {
  id: string;
  name: string;
  url: string;
  isDeprecated: boolean;
  isOSIApproved: boolean;
  isFSFLibre?: boolean;
}

export type FullLicense = LicenseFields & {
  text: string;
}

function getURL(license: RawLicenseFields, fallbackURL: string) {
  if(license.seeAlso.length > 0) { // should always be at least 1 item, but just in case
    return license.seeAlso[license.seeAlso.length-1]; // last in list seems to be highest quality
  } else {
    return fallbackURL;
  }
}

export function getLicenseFields(license: RawLicenseFields, sourceURL: string): LicenseFields {
  return {
    id: license.licenseId,
    name: license.name,
    url: getURL(license, sourceURL),
    isDeprecated: license.isDeprecatedLicenseId,
    isOSIApproved: license.isOsiApproved,
    isFSFLibre: license.isFsfLibre
  }
}

export async function getLicense(id: string): Promise<FullLicense | undefined> {
  const url = `https://spdx.org/licenses/${id}.json`;
  return fetch<RawFullLicense>(url).then((license) => {
    if(license) {
      return {
        ...getLicenseFields(license, url),
        text: license.licenseText
      }
    } else {
      return undefined;
    }
  });
}
