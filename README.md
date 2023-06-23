# @vngn/codestyle

`@vngn/codestyle` is a package that provides ESLint, Prettier, Babel, and tsconfig configuration for other `@vngn/*` packages. It enforces consistent coding style and ensures code quality across the Vendgine Project.

## Features

- Configurations for ESLint, Prettier, Babel, and tsconfig
- Consistent coding style and code quality
- Easy integration with Vendgine projects

## Installation
To install `@vngn/codestyle`, use npm or yarn:

```shell
npm install @vngn/codestyle --save-dev
yarn add @vngn/codestyle --dev
```

## Usage

To use the provided configurations, extend the respective configuration files in your project's configuration:

## ESLint

Create an `.eslintrc.cjs` file in the root of your project and extend the `@vngn/codestyle/.eslintrc.cjs` configuration:

```js
module.exports = {
  extends: ['@vngn/codestyle/.eslintrc.cjs'],
  // Add any project-specific rules or overrides here
};
```

## Prettier

Create a `.prettierrc.js` file in the root of your project and extend the `@vngn/codestyle/.prettierrc.json` configuration:

```js
module.exports = {
  ...require('@vngn/codestyle/.prettierrc.json'),
  // Add any project-specific Prettier configurations here
};
```

## Babel

Create a `babel.config.js` file in the root of your project and extend the `@vngn/codestyle/babel.config.json` configuration:

```js
module.exports = {
  extends: '@vngn/codestyle/babel.config.json',
  // Add any project-specific Babel configurations here
};
```

## TypeScript

Create a `tsconfig.json` (or `tsconfig.production.json`) file in the root of your project and extend the `@vngn/codestyle/tsconfig.*.json` configuration:

*development:*
```json
{
  "extends": "@vngn/codestyle/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "build",
    // Add any project-specific TypeScript configurations here
  }
}
```
*production:*
```json
{
  "extends": "@vngn/codestyle/tsconfig.production.json",
  "compilerOptions": {
    "outDir": "build",
    // Add any project-specific TypeScript configurations here
  }
}
```

## LICENSE

```
Copyright © 2023 Piontkovskii Andrei <andrei@p10i.ru>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, distribute with modifications, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE ABOVE COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Except as contained in this notice, the name(s) of the above copyright
holders shall not be used in advertising or otherwise to promote the
sale, use or other dealings in this Software without prior written
authorization.
```
