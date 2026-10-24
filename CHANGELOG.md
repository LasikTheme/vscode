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

## [0.1.3] - 2025-03-06

### Changed

- Comments are a lighter color, so they're easier to read.
- Emphasized (bold and italic) Markdown text no longer gets extra colors (#3).
- The theme is now generated from TypeScript with Deno, using named color variables (#4), which makes variants possible (#1).
- A new theme icon.

### Added

- Install instructions and a link to the Konsole port in the README.
- Syntax highlighting samples for checking the theme, as a git submodule.

## [0.1.0] - 2024-07-11

### Changed

- Panel colors match the theme. Panels are the views below the editor, like Output and the integrated Terminal.

## [0.0.18] - 2023-12-27

The first release on GitHub. Versions 0.0.1 to 0.0.17 were published to the Marketplace while the theme was being set up (2023-12-24 and 25).

### Added

- A very dark editor and UI.
- Syntax colors for Markdown, JSON, Bash and Python.
- Dimmed punctuation: JSON quotes, Markdown markup and code block marks are dimmed, so the keys, values and text stand out.
- Bash: colors for parameter expansion and command names.
- Editor selection and highlight colors.
- README screenshots, a theme icon and a sponsor link.
