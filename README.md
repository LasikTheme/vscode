# Lasik - Super Dark
A dark, easy on the eyes theme for Visual Studio Code that has decent contrast for coders with sensitive eyes.

The theme was developed for personal use by a developer who writes a lot of React, TypeScript, Python, Sass/CSS, HTML and Markdown files.

See other Lasik ports

- [Konsole](https://github.com/aamnah/lasik-konsole-theme)

**Installation**

Launch VS Code Quick Open (`Ctrl+P`), paste the following command, and press enter.

```
ext install AmnaAkram.lasik
```

Activate the theme: _Code > Preferences > Color Theme > **Lasik**_

![Screenshot](./images/screenshot.png)

## Python

![Python sample](./images/python-sample.png)

## Markdown

![Basic Markdown](./images/markdown-basics.png)

![Markdown Tables](./images/markdown-tables.png)

## Bash

Attention was paid to making arithmetic evaluation, command evaluation, variables inside strings, and command names more obvious

![Bash sample](./images/bash-sample.png)

## Dimmed punctuation

Some elements have been dimmed (for example quotes around strings and property names in JSON and HTML, or punctuation around Markdown elements), to give more emphasis to the actual _keys_ and _values_ and not punctuation marks. The assumption here is that you already have a linter or syntax highlighting good enough to point out a missing punctuation and you don't necessarily need to see them prominently.

This is more readable:

![Dimmed punctuation colors](./images/dimmed-punctuation-colors.png)

than this:

![Normal punctuation colors](./images/normal-punctuation-colors.png)


## Built-in language support

The theme comes with syntax highlighting for these file types, so you don't need a separate extension for them:

| Language | Files |
|---|---|
| `.env` (dotenv) | `.env`, `.env.local`, `.env.production`, `.env.example`, `.flaskenv` and other `.env.*` files |
| TOML | `.toml`, `Cargo.lock`, `Pipfile`, `poetry.lock`, `uv.lock` |
| Assembly (x86 NASM) | `.asm`, `.nasm` |
| CSV and TSV, rainbow columns | `.csv`, `.tsv`, `.tab` (each column gets its own color) |
| systemd unit files (INI) | `.service`, `.socket`, `.timer`, `.target`, `.mount`, `.path`, `.network` and others |

If you use Even Better TOML, turn it off to get the Lasik TOML colors (muted quotes). YAML and Makefile highlighting are built into VS Code; the theme only sets their colors.
