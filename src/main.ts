import EDITOR_COLORS from "./editorColors.ts"
import TOKEN_COLORS from "./languageTokens/index.ts"
import { applyFixes, toHighContrast, toQuiet } from "./fixes.ts"

// Lasik Dark: the base theme plus the hard-coded fixes (see fixes.ts)
const lasikDark = applyFixes({
  name: "Lasik Dark",
  type: "dark",
  $schema: "vscode://schemas/color-theme",
  colors: EDITOR_COLORS["DARK"],
  tokenColors: TOKEN_COLORS["DARK"],
})
// the other two variants start from Lasik Dark and swap colors
const lasikDarkQuiet = { ...toQuiet(lasikDark), name: "Lasik Dark Quiet" }
const lasikDarkHighContrast = { ...toHighContrast(lasikDark), name: "Lasik Dark High Contrast", type: "hcDark" }

// file paths are relative to the project root (run this from there)
const THEMES: [string, object][] = [
  ["themes/Lasik-Dark-color-theme.json", lasikDark],
  ["themes/Lasik-Dark-Quiet-color-theme.json", lasikDarkQuiet],
  ["themes/Lasik-Dark-High-Contrast-color-theme.json", lasikDarkHighContrast],
]
for (const [file, theme] of THEMES) {
  await Deno.writeTextFile(file, JSON.stringify(theme, null, 2))
  console.log("wrote", file)
}
