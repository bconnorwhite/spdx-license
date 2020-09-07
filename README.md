<div align="center">
  <h1>spdx-license</h1>
  <a href="https://npmjs.com/package/spdx-license">
    <img alt="npm" src="https://img.shields.io/npm/v/spdx-license.svg">
  </a>
  <a href="https://github.com/bconnorwhite/spdx-license">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/spdx-license.svg">
  </a>
  <a href="https://github.com/bconnorwhite/spdx-license">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/spdx-license?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Get SPDX license information.

Uses [cross-fetch-json](https://npmjs.com/package/cross-fetch-json) to support usage in both brower and node.

## Installation

```bash
yarn add spdx-license
```

```bash
npm install spdx-license
```

<br />

## API

### Types
```ts
import { getLicense, getLicenses, FullLicense, Licenses, License } from "spdx-license";

function getLicense(id: string): Promise<FullLicense | undefined>;

function getLicenses(): Promise<Licenses>;

type FullLicense = {
  id: string;
  name: string;
  url: string;
  isDeprecated: boolean;
  isOSIApproved: boolean;
  isFSFLibre?: boolean;
  text: string;
};

type Licenses = {
  [id: string]: License;
}

type License = {
  id: string;
  name: string;
  url: string;
  isDeprecated: boolean;
  isOSIApproved: boolean;
  isFSFLibre?: boolean;
  getText: () => Promise<string | undefined>;
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/spdx-license.svg"></h2>

- [cross-fetch-json](https://npmjs.com/package/cross-fetch-json): Universal fetch API that only returns JSON

##

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/spdx-license.svg"></h2>

- [@bconnorwhite/bob](https://npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [jest](https://npmjs.com/package/jest): Delightful JavaScript Testing.

##

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/spdx-license.svg"></h2>

[MIT](https://mit-license.org/)

<br />

## Related Packages:
- [npm-description](https://npmjs.com/package/npm-description): Fetch a package's description from NPM
- [all-package-names](https://npmjs.com/package/all-package-names): Get all NPM package names.
- [is-name-taken](https://npmjs.com/package/is-name-taken): Check if an NPM package name is taken
