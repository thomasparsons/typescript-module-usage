# typescript-module-usage

Typescript helper for counting usage of files within codebase

## Getting Started

`yarn add typescript-module-usage -D || npm install typescript-module-usage --save-dev`

```
// package.json

"scripts": {
  ...
  "count": "typescript-module-usage ./tsconfig.json"
}
```

### Requirements

This package extends the usage of TypeScript Module Paths: [Docs](https://www.typescriptlang.org/docs/handbook/module-resolution.html!)

## Options

- Input: ``
- Output: `--output=output.json`
