# ESM Helpers

[![CircleCI](https://circleci.com/gh/5app/esm-helpers.svg?style=shield)](https://circleci.com/gh/5app/esm-helpers)


ESM Helpers provides shims for working with NodeJS using ESM

```js
import {dirName, requireJSON} from 'esm-helpers';

// Recreate __dirname
const __dirname === dirName(import.meta);

// Load JSON files from a relative path
// Replaces `require('./package.json')`
const myJSON = await requireJSON(import.meta, './package.json');
```
