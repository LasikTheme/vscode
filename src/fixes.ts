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
  "#f85149": "#e35d7b", // error red -> RED, lifted to 6:1
  "#2ea043": "#a0c38f", // added (gutter) -> GREEN
}

// ---- UI colors: set or override single keys
const UI_KEYS: Record<string, string> = {
  "editorLineNumber.foreground": "#6976a0", // PERIWINKLE mixed into the background, 4.5:1 (was 1.9)
  "activityBar.inactiveForeground": "#6976a0", // same, inactive icons (was 1.9)
  "editorIndentGuide.background1": "#4f5a7c", // 3:1, the minimum for UI lines (was 2.0)
  "input.placeholderForeground": "#989898", // 4.5:1 on the input background (was 3.3)
  "editor.selectionBackground": "#a8bcfc40", // a bit stronger, so the selection is easy to see
  "editorCursor.foreground": "#a8bcfc",
  // buttons and blue status bar items: dark text on BLUE (7.0:1)
  "button.foreground": "#01030a",
  "statusBar.debuggingForeground": "#01030a",
  "statusBarItem.remoteForeground": "#01030a",
  // errors, warnings, info
  "errorForeground": "#e35d7b",
  "editorError.foreground": "#e35d7b",
  "editorWarning.foreground": "#ffd370", // YELLOW_DEEP
  "editorInfo.foreground": "#569cd6", // BLUE
  // git colors in the file list
  "gitDecoration.addedResourceForeground": "#a0c38f", // GREEN
  "gitDecoration.untrackedResourceForeground": "#a0c38f",
  "gitDecoration.modifiedResourceForeground": "#ffd370", // YELLOW_DEEP
  "gitDecoration.deletedResourceForeground": "#e35d7b", // RED
  "gitDecoration.conflictingResourceForeground": "#c175ea", // MAUVE
  "gitDecoration.ignoredResourceForeground": "#7583b0", // the comment gray
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
  "terminal.ansiBrightBlack": "#6e7ca8", // SLATE_BRIGHT, 5.0:1 (shell suggestions, git hints)
  "terminal.ansiBrightRed": "#ee6885",
  "terminal.ansiBrightGreen": "#b9dda8",
  "terminal.ansiBrightYellow": "#ffeabd",
  "terminal.ansiBrightBlue": "#6fb5f1",
  "terminal.ansiBrightMagenta": "#d893ff",
  "terminal.ansiBrightCyan": "#3fd5e6",
  "terminal.ansiBrightWhite": "#e8ecfd",
}

// ---- syntax colors: replace a value everywhere it's used (case doesn't matter)
const TOKEN_VALUES: Record<string, string> = {
  "#a1add8b3": "#7583b0", // comments: see-through 4.9:1 -> solid 5.5:1
  "#e95678e6": "#e35d7b", // variables, keys, tags: RED lifted to 6:1
  "#d24e6d": "#e35d7b", // Markdown headings: same red
  "#000080": "#569cd6", // "header" was navy on black (1.3:1)
  "#646695": "#6f72a1", // regexp: 3.8 -> 4.5
  // dimmed punctuation: still quiet, but 4.5:1 (the muted version of the color it belongs to)
  "#522030": "#c1506a", // JSON key quotes (was 1.6)
  "#58423b": "#a5675d", // JSON value quotes (was 2.2)
  "#6a283c": "#c1506a", // Bash $ (was 1.9)
  "#e956784d": "#c94a69", // Markdown # marks (was 1.4)
  "#e95678b3": "#c94a69", // HTML tag brackets (was 3.3)
  "#67686c": "#737784", // Markdown ** _ ~~ marks (was 3.7)
  "#f0938357": "#a4655c", // Markdown ` marks (was 1.9)
  "#fab7953d": "#946d5c", // Markdown link [ ] ( ) marks (was 1.6)
  "#5f838756": "#5a7d81", // Markdown reference [ ]: marks (was 1.5)
  "#2d456b": "#437aa9", // Markdown table pipes (was 2.1)
  "#6b99559a": "#5a8149", // Markdown blockquote > (was 2.8)
  "#fab795b3": "#fab795", // blockquote text: content, so full color
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
  settings: { foreground: "#7583b0", fontStyle: "" }, // "" = upright, overrides italic from other rules
}

export function applyFixes(theme: Theme): Theme {
  const colors: Record<string, string> = {}
  for (const [key, value] of Object.entries(theme.colors)) colors[key] = UI_VALUES[value.toLowerCase()] ?? value
  Object.assign(colors, UI_KEYS)

  const tokenColors = theme.tokenColors.map((rule) => {
    const settings = { ...rule.settings }
    const fg = settings.foreground?.toLowerCase()
    if (fg && TOKEN_VALUES[fg]) settings.foreground = TOKEN_VALUES[fg]
    // any other see-through color with high opacity (E6 = 90%): just drop the transparency
    else if (fg && fg.length === 9 && fg.endsWith("e6")) settings.foreground = fg.slice(0, 7)
    const isComment = rule.scope === "comment" || (Array.isArray(rule.scope) && rule.scope.includes("comment"))
    if (isComment) settings.fontStyle = "" // upright comments
    return { ...rule, settings }
  })
  // insert the docstring rule right after the comment rule
  const commentIndex = tokenColors.findIndex((r) => Array.isArray(r.scope) && r.scope.includes("comment"))
  tokenColors.splice(commentIndex + 1, 0, COMMENT_RULE)

  return { ...theme, colors, tokenColors }
}
