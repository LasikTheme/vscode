// One pass of hard-coded color fixes for Lasik (2026-10-24), applied to the built theme
// in main.ts. Later these colors will come from palette.toml; for now they are typed in.
//
// What it fixes:
//   - pure white text -> lavender (white on near-black glows: the "halo" effect)
//   - text below WCAG AA (4.5:1): line numbers, comments, dimmed punctuation
//   - see-through syntax colors -> solid colors (they stack and look darker on dark)
//   - missing terminal, cursor, error and git colors
//   - comments: upright (italic is hard to read) and docstrings in the comment color
// Contrast numbers are against the editor background #01030a.

type Theme = {
  [key: string]: unknown // name, type, $schema
  colors: Record<string, string>
  tokenColors: { name?: string; scope?: string | string[]; settings: { foreground?: string; fontStyle?: string } }[]
}

// ---- UI colors: replace a value everywhere it's used
const UI_VALUES: Record<string, string> = {
  "#cccccc": "#cdd2e4", // gray text -> LAVENDER_MUTED (13.7:1)
  "#ffffff": "#e8ecfd", // pure white -> LAVENDER_BRIGHT (17.5:1), no halo
  "#ff0000": "#a8bcfc", // pure red focus border (a leftover) -> PERIWINKLE
  "#0078d4": "#569cd6", // VS Code blue -> BLUE (buttons, focus, status bar)
  "#026ec1": "#6fb5f1", // button hover -> BLUE_BRIGHT
  "#f85149": "#d24e6d", // error red -> RED (5.0:1)
  "#2ea043": "#a0c38f", // added (gutter) -> GREEN
}

// ---- UI colors: set or override single keys
const UI_KEYS: Record<string, string> = {
  "editorLineNumber.foreground": "#6a78a4", // SLATE_MUTED, 4.7:1 (was 1.9)
  "activityBar.inactiveForeground": "#6a78a4", // same, inactive icons (was 1.9)
  "editorIndentGuide.background1": "#4f5a7c", // 3:1, the minimum for UI lines (was 2.0)
  "editorRuler.foreground": "#2a324b", // SLATE_QUIET, the faint comment color: barely visible, so the ruler doesn't cut through text (was VS Code's gray #5a5a5a)
  "input.placeholderForeground": "#989898", // 4.5:1 on the input background (was 3.3)
  "editor.selectionBackground": "#a8bcfc40", // a bit stronger, so the selection is easy to see
  "editorCursor.foreground": "#a8bcfc",
  // buttons and blue status bar items: dark text on BLUE (7.0:1)
  "button.foreground": "#01030a",
  "statusBar.debuggingForeground": "#01030a",
  "statusBarItem.remoteForeground": "#01030a",
  // errors, warnings, info
  "errorForeground": "#d24e6d", // RED
  "editorError.foreground": "#d24e6d",
  "editorWarning.foreground": "#ffd370", // YELLOW_DEEP
  "editorInfo.foreground": "#569cd6", // BLUE
  // git colors in the file list
  "gitDecoration.addedResourceForeground": "#a0c38f", // GREEN
  "gitDecoration.untrackedResourceForeground": "#a0c38f",
  "gitDecoration.modifiedResourceForeground": "#ffd370", // YELLOW_DEEP
  "gitDecoration.deletedResourceForeground": "#d24e6d", // RED
  "gitDecoration.conflictingResourceForeground": "#c175ea", // MAUVE
  "gitDecoration.ignoredResourceForeground": "#6a78a4", // SLATE_MUTED, the comment gray
  // terminal: base colors for normal, the BRIGHT tier for bright
  "terminal.background": "#01030a",
  "terminal.foreground": "#e8ecfd", // LAVENDER_BRIGHT, not white
  "terminalCursor.foreground": "#a8bcfc",
  "terminal.selectionBackground": "#a8bcfc40",
  "terminal.ansiBlack": "#3c476c", // SLATE
  "terminal.ansiRed": "#d24e6d",
  "terminal.ansiGreen": "#a0c38f",
  "terminal.ansiYellow": "#ffe2a3",
  "terminal.ansiBlue": "#569cd6",
  "terminal.ansiMagenta": "#c175ea", // MAUVE
  "terminal.ansiCyan": "#02bbcc", // SAPPHIRE
  "terminal.ansiWhite": "#d1dafa", // LAVENDER
  "terminal.ansiBrightBlack": "#8796c4", // SLATE_BRIGHT, 7.0:1 (shell suggestions, git hints)
  "terminal.ansiBrightRed": "#f16a87",
  "terminal.ansiBrightGreen": "#b9dda8",
  "terminal.ansiBrightYellow": "#ffeabd",
  "terminal.ansiBrightBlue": "#6fb5f1",
  "terminal.ansiBrightMagenta": "#d893ff",
  "terminal.ansiBrightCyan": "#3fd5e6",
  "terminal.ansiBrightWhite": "#e8ecfd",
}

// ---- syntax colors: replace a value everywhere it's used (case doesn't matter)
const TOKEN_VALUES: Record<string, string> = {
  "#a1add8b3": "#6a78a4", // comments: see-through 4.9:1 -> SLATE_MUTED, solid 4.7:1
  "#e95678e6": "#d24e6d", // tags, headings: RED (5.0:1)
  "#e95678": "#d24e6d", // same red, solid version
  "#f9c859": "#ffd370", // Bash $( ) brackets -> YELLOW_DEEP
  "#000080": "#569cd6", // "header" was navy on black (1.3:1)
  "#ce6350": "#d98677", // unquoted strings (YAML values etc.) and other string-like tokens -> PEACH (7.5:1)
  "#646695": "#6a78a4", // regexp: 3.8 -> SLATE_MUTED (4.7)
  // dimmed punctuation: still quiet, but 4.5:1 (the muted version of the color it belongs to)
  "#522030": "#338476", // JSON key quotes (was 1.6) -> generated: TEAL mixed into OBSIDIAN to 4.5:1
  "#58423b": "#a5675d", // JSON value quotes (was 2.2)
  "#6a283c": "#737784", // Bash $ (was 1.9) -> generated: text color mixed into OBSIDIAN to 4.5:1
  "#e956784d": "#c94a69", // Markdown # marks (was 1.4)
  "#e95678b3": "#c94a69", // HTML tag brackets (was 3.3)
  "#67686c": "#737784", // Markdown ** _ ~~ marks (was 3.7)
  "#f0938357": "#a4655c", // Markdown ` marks (was 1.9)
  "#fab7953d": "#946d5c", // Markdown link [ ] ( ) marks (was 1.6)
  "#5f838756": "#5a7d81", // Markdown reference [ ]: marks (was 1.5)
  "#2d456b": "#437aa9", // Markdown table pipes (was 2.1)
  "#6b99559a": "#5a8149", // Markdown blockquote > (was 2.8)
  "#fab795b3": "#e2a587", // blockquote text: content, so full color -> TUMBLEWEED
  // leftover VS Code Dark+ colors -> the base palette color of the same family (all 4.5:1 or more)
  "#d7ba7d": "#fac29a", // APRICOT
  "#6796e6": "#569cd6", // BLUE
  "#b5cea8": "#a0c38f", // GREEN
  "#e6e6e7": "#cdd2e4", // LAVENDER_MUTED, the text color
  "#d993ff": "#c175ea", // MAUVE
  "#b877db": "#c175ea", // MAUVE
  "#b267e6": "#c175ea", // MAUVE
  "#d16969": "#d98677", // PEACH
  "#f09483": "#d98677", // PEACH
  "#f44747": "#d24e6d", // RED
  "#25b0bc": "#02bbcc", // SAPPHIRE
  "#d4d4d4": "#bbbbbb", // SILVER
  "#c8c8c8": "#bbbbbb", // SILVER
  "#d9d9da": "#bbbbbb", // SILVER
  "#999a9d": "#bbbbbb", // SILVER
  "#9cdcfe": "#4fc1ff", // SKY
  "#6f72a1": "#6a78a4", // SLATE_MUTED (SLATE itself is 1.9:1, too dark for text)
  "#808080": "#6a78a4", // SLATE_MUTED
  "#5f8387": "#4ec9b0", // TEAL
  "#ffb1a3": "#e2a587", // TUMBLEWEED
  "#fab795": "#e2a587", // TUMBLEWEED
  "#cd9731": "#e2a587", // TUMBLEWEED
  "#dcdcaa": "#ffe2a3", // YELLOW
  "#ffe998": "#ffe2a3", // YELLOW
}

// Python docstrings are strings to the grammar, and JSDoc tags have their own scopes,
// so the plain `comment` rule misses them. This rule gives them the comment color too.
const COMMENT_RULE = {
  name: "All comment types: docstrings and doc-comment tags",
  scope: [
    "string.quoted.docstring",
    "string.quoted.docstring punctuation.definition.string",
    "string.quoted.docstring constant",
    "comment.block.documentation storage",
    "comment.block.documentation entity",
    "comment.block.documentation variable",
    "comment.block.documentation keyword",
    "comment.block.documentation punctuation",
    "comment.block.documentation markup",
    "comment.block.documentation constant",
    "comment punctuation.definition.comment",
  ],
  settings: { foreground: "#6a78a4", fontStyle: "" }, // "" = upright, overrides italic from other rules
}

// Strings are YELLOW (#ffe2a3, 16:1); their quotes are a muted yellow at 4.5:1, so they step back
// but still pass WCAG AA.
// generated: YELLOW mixed into OBSIDIAN until 4.5:1 (#837558). Palette gap: no muted yellow at 4.5:1 yet.
const STRING_QUOTE_RULE = {
  name: "Quotes around strings, all languages",
  scope: ["punctuation.definition.string.begin", "punctuation.definition.string.end", "punctuation.definition.string.template"],
  settings: { foreground: "#837558" },
}



// Keys and variables, Dracula-inspired: keys in TEAL, variables in the normal text color.
// (Red keys and variables read like errors, and they're the most common tokens.)
const KEY_RULE = {
  name: "Keys: JSON, JS objects, TOML, YAML",
  scope: ["support.type.property-name", "meta.object-literal.key", "support.type.property-name.json", "support.type.property-name.toml", "entity.name.tag.yaml"],
  settings: { foreground: "#4ec9b0" }, // TEAL, 10.1:1
}
const VARIABLE_RULE = {
  name: "Variables",
  scope: ["variable", "variable.other", "entity.name.variable", "support.variable", "meta.definition.variable.name"],
  settings: { foreground: "#cdd2e4" }, // LAVENDER_MUTED, the text color
}

// Quotes around quoted keys ("my key" = 1 in TOML, "my key": 1 in YAML): the muted key red, like JSON key quotes.
const KEY_QUOTE_RULE = {
  name: "Quotes around keys (TOML, YAML)",
  scope: [
    "punctuation.definition.key.begin.toml",
    "punctuation.definition.key.end.toml",
    "meta.map.key.yaml punctuation.definition.string", // VS Code's built-in YAML grammar
    "meta.flow.map.key.yaml punctuation.definition.string",
  ],
  settings: { foreground: "#338476" }, // generated: TEAL mixed into OBSIDIAN to 4.5:1, same as JSON key quotes
}

// Rainbow CSV / TSV: each column gets its own palette color (see syntaxes/csv/), cycling after 10.
const RAINBOW = ["#569cd6", "#ffe2a3", "#a0c38f", "#c586c0", "#02bbcc", "#e2a587", "#c175ea", "#4ec9b0", "#fc7e9b", "#4fc1ff"]
// BLUE, YELLOW, GREEN, PINK, SAPPHIRE, TUMBLEWEED, MAUVE, TEAL, ROSE, SKY: all 4.5:1 or more on OBSIDIAN
const RAINBOW_RULES = RAINBOW.map((color, i) => ({
  name: `Rainbow CSV column ${i + 1}`,
  scope: [`rainbow${i + 1}.csv`, `rainbow${i + 1}.tsv`],
  settings: { foreground: color },
}))

export function applyFixes(theme: Theme): Theme {
  const colors: Record<string, string> = {}
  for (const [key, value] of Object.entries(theme.colors)) colors[key] = UI_VALUES[value.toLowerCase()] ?? value
  Object.assign(colors, UI_KEYS)

  const tokenColors = theme.tokenColors.map((rule) => {
    const settings = { ...rule.settings }
    const fg = settings.foreground?.toLowerCase()
    if (fg && TOKEN_VALUES[fg]) settings.foreground = TOKEN_VALUES[fg]
    // any other see-through color with high opacity (E6 = 90%): just drop the transparency
    else if (fg && fg.length === 9 && fg.endsWith("e6")) settings.foreground = TOKEN_VALUES[fg.slice(0, 7)] ?? fg.slice(0, 7)
    const isComment = rule.scope === "comment" || (Array.isArray(rule.scope) && rule.scope.includes("comment"))
    if (isComment) settings.fontStyle = "" // upright comments
    return { ...rule, settings }
  })
  // quotes around strings, in every language (TOML, Python, JS, Bash, ...): the Lasik signature.
  // JSON and Markdown keep their own, more specific quote rules.
  tokenColors.push(KEY_RULE, VARIABLE_RULE, STRING_QUOTE_RULE, KEY_QUOTE_RULE, ...RAINBOW_RULES)
  // insert the docstring rule right after the comment rule
  const commentIndex = tokenColors.findIndex((r) => Array.isArray(r.scope) && r.scope.includes("comment"))
  tokenColors.splice(commentIndex + 1, 0, COMMENT_RULE)

  return { ...theme, colors, tokenColors }
}

// ---------------------------------------------------------------- variants
// Lasik Dark Quiet and Lasik Dark High Contrast start from Lasik Dark (applyFixes above)
// and swap colors. Every swapped-in color is a palette.toml color (name in the comment).

type Variant = { colors?: Record<string, string>; ui?: Record<string, string>; tokens: Record<string, string> }

/** Swap colors by value (UI and syntax), then set single UI keys. */
function swap(theme: Theme, variant: Variant): Theme {
  const colors: Record<string, string> = {}
  for (const [key, value] of Object.entries(theme.colors)) colors[key] = variant.colors?.[value.toLowerCase()] ?? value
  Object.assign(colors, variant.ui ?? {})
  const tokenColors = theme.tokenColors.map((rule) => {
    const fg = rule.settings.foreground?.toLowerCase()
    return fg && variant.tokens[fg] ? { ...rule, settings: { ...rule.settings, foreground: variant.tokens[fg] } } : rule
  })
  return { ...theme, colors, tokenColors }
}

// Lasik Dark Quiet (opt-in, below WCAG on purpose): punctuation uses the QUIET tier,
// line numbers are dimmer. Code colors are the same as Lasik Dark.
export const QUIET: Variant = {
  tokens: {
    "#338476": "#1c4844", // key quotes -> TEAL_QUIET
    "#a5675d": "#4d3130", // JSON value quotes -> PEACH_QUIET
    "#c94a69": "#4a1d2d", // Markdown # marks, HTML tag brackets -> RED_QUIET
    "#737784": "#4a4e5e", // Markdown ** _ ~~ marks -> LAVENDER_QUIET
    "#a4655c": "#4d3130", // Markdown ` marks -> PEACH_QUIET
    "#946d5c": "#503c36", // Markdown link marks -> TUMBLEWEED_QUIET
    "#5a7d81": "#1c4844", // Markdown reference marks -> TEAL_QUIET
    "#437aa9": "#1f3951", // Markdown table pipes -> BLUE_QUIET
    "#5a8149": "#394639", // Markdown blockquote > -> GREEN_QUIET
    "#837558": "#5a5140", // string quotes, all languages -> YELLOW_QUIET
  },
  ui: {
    "editorLineNumber.foreground": "#3c476c", // SLATE (2.3:1)
    "activityBar.inactiveForeground": "#6a78a4", // SLATE_MUTED
    "editorIndentGuide.background1": "#2a324b", // SLATE_DEEP
  },
}

// Lasik Dark High Contrast: every syntax color is a BRIGHT palette color (all 7:1 or more), white text,
// borders around panels (VS Code high contrast themes need contrastBorder).
export const HIGH_CONTRAST: Variant = {
  colors: {
    "#cdd2e4": "#ffffff", // text -> WHITE (allowed in this variant only)
    "#e8ecfd": "#ffffff",
  },
  ui: {
    "contrastBorder": "#6a78a4", // SLATE_MUTED, 4.7:1
    "contrastActiveBorder": "#a8bcfc", // PERIWINKLE
    "editor.foreground": "#ffffff",
  },
  // every syntax color -> the BRIGHT (7:1+) palette color of its color family.
  // Muted punctuation (quotes, $, Markdown marks) stays at 4.5:1 and is not listed.
  tokens: {
    "#fac29a": "#ffe4d1", // APRICOT -> APRICOT_BRIGHT
    "#569cd6": "#6fb5f1", // BLUE -> BLUE_BRIGHT
    "#a0c38f": "#b9dda8", // GREEN -> GREEN_BRIGHT
    "#cdd2e4": "#ffffff", // LAVENDER_MUTED (text) -> WHITE
    "#c175ea": "#d893ff", // MAUVE -> MAUVE_BRIGHT
    "#d98677": "#f49f8f", // PEACH -> PEACH_BRIGHT
    "#c586c0": "#df9fda", // PINK -> PINK_BRIGHT
    "#d24e6d": "#f16a87", // RED -> RED_BRIGHT
    "#fc7e9b": "#ffaaba", // ROSE -> ROSE_BRIGHT
    "#02bbcc": "#3fd5e6", // SAPPHIRE -> SAPPHIRE_BRIGHT
    "#bbbbbb": "#d5d5d5", // SILVER -> SILVER_BRIGHT
    "#4fc1ff": "#98d8ff", // SKY -> SKY_BRIGHT
    "#6a78a4": "#8796c4", // SLATE_MUTED (comments) -> SLATE_BRIGHT
    "#4ec9b0": "#6be3c9", // TEAL -> TEAL_BRIGHT
    "#e2a587": "#fdbea0", // TUMBLEWEED -> TUMBLEWEED_BRIGHT
    "#ffe2a3": "#ffeabd", // YELLOW -> YELLOW_BRIGHT
    // YELLOW_DEEP #ffd370 (Bash $( )) is kept: orange-yellow, 14.5:1
  },
}

export const toQuiet = (theme: Theme) => swap(theme, QUIET)
export const toHighContrast = (theme: Theme) => swap(theme, HIGH_CONTRAST)
