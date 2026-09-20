# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2026-09-19

- Surface Printify's API error body (`message`, `reason`, `code`) on thrown errors instead of discarding it, and fix `UpdateProductData` so a fetched `Product` can be passed back
  to `products.updateOne()`. ([#43](https://github.com/spencerlepine/printify-sdk-js/issues/43))
- Bump axios to resolve vulnerability
- Fixed ESM support: `import Printify from 'printify-sdk-js'` failed with `Cannot use import statement outside a module`, because the ESM bundle shipped as `dist/index.esm.js` and
  Node parsed it as CommonJS. It is now `dist/index.mjs`.

## [1.4.0] - 2025-10-28

- Custom axios instance support
- Fix typescript interfaces

## [1.3.2] - 2025-09-14

- Patch dependency vulnerabilities
- Add security arguments to webhooks API - #37

## [1.3.1] - 2025-07-24

- Patch dependency vulnerabilities

## [1.3.0] - 2025-01-06

- Added support for V2 endpoints.
- Removed verbose stack trace from errors.

## [1.2.0] - 2025-01-03

- Organized shared types and fixed bundle export.
- Improved configuration object.

## [1.1.0] - 2024-11-08

- Replaced `fetch` with `axios` for enhanced security.
- Refactored internal code for better maintainability.

## [1.0.2] - 2024-10-24

- Added error logging for easier debugging.

## [1.0.1] - 2024-07-29

- Updated documentation to include TypeScript support.

## [1.0.0] - 2024-07-26

- Initial release for Printify API v1.
