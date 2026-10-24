# Change Log

All notable changes to the "Lasik" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.2.0] - 2026-10-24

### Added

- Three variants: **Lasik Dark** (the default, keeps the theme id so you stay on it), **Lasik Dark Quiet** (dimmer punctuation, line numbers and quotes, below WCAG on purpose) and **Lasik Dark High Contrast** (black background, code at 7:1 or more).
- Built-in syntax highlighting for `.env` files, TOML, x86 NASM assembly, rainbow CSV/TSV and systemd unit files, so you don't need separate extensions for them.
- Terminal colors (all 16), error, warning and git colors.

### Changed

- Every syntax color now comes from the [Lasik palette](https://github.com/LasikTheme/palette).
- Keys are teal and variables use the text color (red keys and variables read like errors).
- Quotes are dimmed in every language, not only JSON.
- Comments, Python docstrings and JSDoc tags all use the comment color, and comments are no longer italic.
- No pure white text (it glows on a dark background); text is a light lavender.
- Line numbers, comments and dimmed punctuation now meet WCAG AA (4.5:1).
- The editor ruler is a faint slate instead of a gray line.
- New screenshots in the README.

### Fixed

- Marketplace links now point to the theme's own repository.

## 2025-03-05

- #4 Added support for theme generation using TypeScript and Deno

## [Unreleased]

- Initial release
