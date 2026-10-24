import EDITOR_COLORS from "./editorColors.ts"
import TOKEN_COLORS from "./languageTokens/index.ts"
import { applyFixes } from "./fixes.ts"

export const lasikFlat = {
  name: "Lasik",
  type: "dark",
  $schema: "vscode://schemas/color-theme",
  colors: EDITOR_COLORS["DARK"],
  tokenColors: TOKEN_COLORS["DARK"],
}

export const lasikHighContrast = {
  name: "Lasik - High Contrast",
  type: "dark",
  $schema: "vscode://schemas/color-theme",
  colors: EDITOR_COLORS["HC"],
  tokenColors: TOKEN_COLORS["HC"],
}

// the file path is relative to the project root
// the current project root is outside src/
await Deno.writeTextFile(
  "themes/Lasik-color-theme.json",
  JSON.stringify(applyFixes(lasikFlat)) // hard-coded color fixes, see fixes.ts
)

// // the file path is relative to the project root
// // the current project root is outside src/
// await Deno.writeTextFile(
//   "themes/Lasik-Flat-color-theme.json",
//   JSON.stringify(lasikFlat)
// )

// await Deno.writeTextFile(
//   "themes/Lasik-HighContrast-color-theme.json",
//   JSON.stringify(lasikHighContrast)
// )
