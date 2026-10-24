import { PALETTE, ColorPaletteType } from "../palette.ts"
import { alpha, opaque } from "../utils.ts"

function generateBashTokens(type: ColorPaletteType) {
  const COLOR = PALETTE[type]

  const BASH_COLORS = {
    COMMAND_NAME: COLOR.TURQUOISE,
    PUNCTUATION_COMMAND_EVALUATION: COLOR.YELLOW,
    PUNCTUATION_ARITHMETIC_EVALUATION: COLOR.SAGE,
    PUNCTUATION_VARIABLES: opaque(alpha(COLOR.CORAL, 0.45)),
  }

  return [
    {
      name: "[BASH] Punctuation: ${Variable}",
      scope: ["punctuation.definition.variable.shell"],
      settings: {
        foreground: BASH_COLORS.PUNCTUATION_VARIABLES,
      },
    },
    {
      name: "[BASH] Punctuation: $((Arithmetic Evaluation))",
      scope: [
        "punctuation.definition.evaluation.arithmetic.begin.shell",
        "punctuation.definition.evaluation.arithmetic.end.shell",
      ],
      settings: {
        foreground: BASH_COLORS.PUNCTUATION_ARITHMETIC_EVALUATION,
      },
    },
    {
      name: "[BASH] Punctuation: $(Command Evaluation)",
      scope: [
        "punctuation.definition.evaluation.parens.begin.shell",
        "punctuation.definition.evaluation.parens.end.shell",
      ],
      settings: {
        foreground: BASH_COLORS.PUNCTUATION_COMMAND_EVALUATION,
      },
    },
    {
      name: "[BASH] Command names",
      scope: ["entity.name.command.shell"],
      settings: {
        foreground: BASH_COLORS.COMMAND_NAME,
      },
    },
    {
      name: "[BASH] Parameter Expansion",
      scope: ["meta.parameter-expansion"],
      settings: {
        foreground: "#FC7E9BE6",
      },
    },
  ]
}

export default {
  LIGHT: generateBashTokens("LIGHT"),
  DARK: generateBashTokens("DARK"),
  HC: generateBashTokens("HC"),
}
