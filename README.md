# @keeveeg/vite-replace-prod-files

## Installation

```sh
$ npm install @keeveeg/vite-replace-prod-files
```

## Example

File `./src/router.js` will be replaced to `./src/router.prod.js`

```javascript
import { defineConfig } from 'vite'
import replaceProdFiles from '@keeveeg/vite-replace-prod-files'

export default defineConfig({
  plugins: [replaceProdFiles(['./src/router.js']), vue()],
})
```
