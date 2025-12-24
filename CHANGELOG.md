# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-12-24

### Breaking Changes
- Minimum Node.js version is now 18+
- Minimum Eleventy version is now 2.0.0+

### Changed
- Converted to ES Modules (ESM) with CommonJS wrapper for backwards compatibility
- Replaced `cheerio` with `linkedom` for lighter SVG manipulation
- Moved `@11ty/eleventy` from dependencies to peerDependencies

### Added
- Liquid template support: pass a string as second argument for extra classes
  - Example: `{% feather "icon-name" "extra-classes" %}`
- Dual package support (ESM and CommonJS)

## [1.1.0] - 2023-07-26

### Changed
- Updated dependencies
- Added cheerio for SVG attribute manipulation

## [1.0.0] - Initial Release

### Added
- Initial release with Feather icons shortcode support
