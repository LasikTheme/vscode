import { PALETTE, ColorPaletteType } from "../palette.ts"
import { alpha, opaque } from "../utils.ts"

function generateJsonTokens(type: ColorPaletteType) {
  const COLOR = PALETTE[type]
  const JSON_COLORS = {
    PUNCTUATION_KEYS: opaque(alpha(COLOR.CORAL, 0.35)),
    PUNCTUATION_VALUES: opaque(alpha(COLOR.PEACH, 0.35)),
  }

  return [
    {
      name: "[JSON] Punctuation: Quoted Strings - Keys",
      scope: [
        "punctuation.support.type.property-name.begin.json",
        "punctuation.support.type.property-name.end.json",
      ],
      settings: {
        foreground: JSON_COLORS.PUNCTUATION_KEYS,
      },
    },
    {
      name: "[JSON] Punctuation: Quoted Strings - Values",
      scope: [
        "punctuation.definition.string.begin.json",
        "punctuation.definition.string.end.json",
      ],
      settings: {
        foreground: JSON_COLORS.PUNCTUATION_VALUES,
      },
    },
  ]
}

export default {
  LIGHT: generateJsonTokens("LIGHT"),
  DARK: generateJsonTokens("DARK"),
  HC: generateJsonTokens("HC"),
}
