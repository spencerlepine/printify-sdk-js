## Source Code

The source code for this SDK is written by hand, and we aim to match the exact request/response of every single endpoint supported by the Printify V1 API. Printify does not provide us their API model schema (.json, OpenAPI spec, etc.) publicly, so the only source of truth we have is opening the documentation website and manually comparing it.

## Documentation

The API.md file is manually written and could be out of date. We manually review and maintain a copy of it in this markdown file.

Local copy: docs/API.md

Source of truth: https://developers.printify.com/

## End-to-End Testing

> **PREREQUISITE:** the user MUST provide a `STORE_ID` and `PRINTIFY_API_TOKEN`, or a `.env` file. You can't test anything end-to-end without this.

1. Bootstrap the testing package

```sh
cd examples/commonjs
npm install
# creates "examples/commonjs/node_modules/printify-sdk-js"
# examples/commonjs/node_modules/printify-sdk-js/dist/index.cjs.js
```

2. Write Node.js code to invoke the module that's being modified/tested -> Boilerplate: examples/commonjs/app.cjs

3. Generate a local build

```sh
# in root directory
rm -rf dist
npm run build
# creates: dist/index.cjs.js
```

4. Copy over the build into the test package:

Source: dist/index.cjs.js

Destination: examples/commonjs/node_modules/printify-sdk-js/dist/index.cjs.js

5. Invoke the script:

```bash
cd examples/commonjs
export PRINTIFY_API_TOKEN="<STRING>"
export STORE_ID="<STRING>"
node my-script.cjs
# analyze the output
```
