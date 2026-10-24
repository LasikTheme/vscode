import MARKDOWN from "./markdown.ts"
import BASH from "./bash.ts"
import JSON from "./json.ts"
import { PALETTE, ColorPaletteType } from "../palette.ts"
import { alpha, opaque } from "../utils.ts"
// Markup specifies styles but no colors
const TEXT_MARKUP = [
  {
    scope: "emphasis",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "strong",
    settings: {
      fontStyle: "bold",
    },
  },
  {
    scope: "markup.underline",
    settings: {
      fontStyle: "underline",
    },
  },
  {
    scope: "markup.italic",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "markup.strikethrough",
    settings: {
      fontStyle: "strikethrough",
    },
  },
]

function generateBaseTokens(type: ColorPaletteType) {
  const COLOR = PALETTE[type]

  const BASE_COLORS = {
    PUNCTUATION_KEYS: opaque(alpha(COLOR.CORAL, 0.35)),
    PUNCTUATION_VALUES: opaque(alpha(COLOR.PEACH, 0.35)),
    COLOR1: "#CE6350",
    COLOR2: "#FFE2A3",
    COLOR3: "#E95678",
  }
  return [
    {
      scope: [
        "meta.embedded",
        "source.groovy.embedded",
        "string meta.image.inline.markdown",
        "variable.legacy.builtin.python",
      ],
      settings: {
        foreground: "#D4D4D4",
      },
    },
    {
      scope: "header",
      settings: {
        foreground: "#000080",
      },
    },
    {
      scope: ["comment"],
      settings: {
        foreground: "#a1add8b3",
        // "" = upright. Italic is harder to read, and an empty value also overrides
        // italic from other rules (e.g. `storage` inside JSDoc comments)
        fontStyle: "",
      },
    },
    {
      // Every kind of comment gets the comment color, not only the `comment` scope:
      // - Python docstrings ("""...""") are strings to the grammar (string.quoted.docstring),
      //   so without this rule they fall back to the yellow string color
      // - JSDoc / doc-comment tags (@param, {Type}, names) get their own scopes inside the comment
      // The more specific scope wins over plain `string` and `storage`, so order doesn't matter here.
      name: "All comment types: docstrings and doc-comment tags",
      scope: [
        "string.quoted.docstring",
        "string.quoted.docstring punctuation.definition.string",
        "comment.block.documentation storage",
        "comment.block.documentation entity",
        "comment.block.documentation variable",
        "comment.block.documentation keyword",
        "comment.block.documentation punctuation",
        "comment.block.documentation markup",
        "string.quoted.docstring constant",
        "comment.block.documentation constant",
        "comment punctuation.definition.comment",
      ],
      settings: {
        foreground: "#a1add8b3",
        fontStyle: "",
      },
    },
    {
      scope: "constant.language",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: [
        "constant.numeric",
        "variable.other.enummember",
        "keyword.operator.plus.exponent",
        "keyword.operator.minus.exponent",
      ],
      settings: {
        foreground: "#B5CEA8",
      },
    },
    {
      scope: "constant.regexp",
      settings: {
        foreground: "#646695",
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "entity.name.tag.css",
      settings: {
        foreground: "#D7BA7D",
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#9CDCFE",
      },
    },
    {
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.mixin.css",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.parent-selector.css",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "source.css.less entity.other.attribute-name.id",
        "entity.other.attribute-name.scss",
      ],
      settings: {
        foreground: "#D7BA7D",
      },
    },
    {
      scope: "invalid",
      settings: {
        foreground: "#F44747",
      },
    },

    {
      scope: "markup.bold",
      settings: {
        foreground: "#569CD6",
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: "#569CD6",
        fontStyle: "bold",
      },
    },

    {
      scope: "markup.inserted",
      settings: {
        foreground: "#B5CEA8",
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: "punctuation.definition.tag",
      settings: {
        foreground: "#808080",
      },
    },
    {
      scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "meta.preprocessor.string",
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: "meta.preprocessor.numeric",
      settings: {
        foreground: "#B5CEA8",
      },
    },
    {
      scope: "meta.structure.dictionary.key.python",
      settings: {
        foreground: "#9CDCFE",
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "storage",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "storage.type",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: ["storage.modifier", "keyword.operator.noexcept"],
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: ["string", "meta.embedded.assembly"],
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: "string.tag",
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: "string.value",
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: "#D16969",
      },
    },
    {
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: ["meta.template.expression"],
      settings: {
        foreground: "#D4D4D4",
      },
    },
    {
      scope: [
        "support.type.vendored.property-name",
        "support.type.property-name",
        "variable.css",
        "variable.scss",
        "variable.other.less",
        "source.coffee.embedded",
      ],
      settings: {
        foreground: "#9CDCFE",
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: "#D4D4D4",
      },
    },
    {
      scope: [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.cast",
        "keyword.operator.sizeof",
        "keyword.operator.alignof",
        "keyword.operator.typeid",
        "keyword.operator.alignas",
        "keyword.operator.instanceof",
        "keyword.operator.logical.python",
        "keyword.operator.wordlike",
      ],
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: "#B5CEA8",
      },
    },
    {
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php",
      ],
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: "#9CDCFE",
      },
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: "#B5CEA8",
      },
    },
    {
      scope: [
        "storage.modifier.import.java",
        "variable.language.wildcard.java",
        "storage.modifier.package.java",
      ],
      settings: {
        foreground: "#D4D4D4",
      },
    },
    {
      scope: "variable.language",
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "support.constant.handlebars",
        "source.powershell variable.other.member",
        "entity.name.operator.custom-literal",
      ],
      settings: {
        foreground: "#DCDCAA",
      },
    },
    {
      scope: [
        "support.class",
        "support.type",
        "entity.name.type",
        "entity.name.namespace",
        "entity.other.attribute",
        "entity.name.scope-resolution",
        "entity.name.class",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.cs",
        "storage.type.generic.cs",
        "storage.type.modifier.cs",
        "storage.type.variable.cs",
        "storage.type.annotation.java",
        "storage.type.generic.java",
        "storage.type.java",
        "storage.type.object.array.java",
        "storage.type.primitive.array.java",
        "storage.type.primitive.java",
        "storage.type.token.java",
        "storage.type.groovy",
        "storage.type.annotation.groovy",
        "storage.type.parameters.groovy",
        "storage.type.generic.groovy",
        "storage.type.object.array.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.groovy",
      ],
      settings: {
        foreground: "#4EC9B0",
      },
    },
    {
      scope: [
        "meta.type.cast.expr",
        "meta.type.new.expr",
        "support.constant.math",
        "support.constant.dom",
        "support.constant.json",
        "entity.other.inherited-class",
      ],
      settings: {
        foreground: "#4EC9B0",
      },
    },
    {
      scope: [
        "keyword.control",
        "source.cpp keyword.operator.new",
        "keyword.operator.delete",
        "keyword.other.using",
        "keyword.other.directive.using",
        "keyword.other.operator",
        "entity.name.operator",
      ],
      settings: {
        foreground: "#C586C0",
      },
    },
    {
      scope: [
        "variable",
        "meta.definition.variable.name",
        "support.variable",
        "entity.name.variable",
        "constant.other.placeholder",
      ],
      settings: {
        foreground: "#9CDCFE",
      },
    },
    {
      scope: ["variable.other.constant", "variable.other.enummember"],
      settings: {
        foreground: "#4FC1FF",
      },
    },
    {
      scope: "variable.parameter",
      settings: {
        foreground: "#FC7E9B",
      },
    },
    {
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: "#9CDCFE",
      },
    },
    {
      scope: [
        "support.constant.property-value",
        "support.constant.font-name",
        "support.constant.media-type",
        "support.constant.media",
        "constant.other.color.rgb-value",
        "constant.other.rgb-value",
        "support.constant.color",
      ],
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: [
        "punctuation.definition.group.regexp",
        "punctuation.definition.group.assertion.regexp",
        "punctuation.definition.character-class.regexp",
        "punctuation.character.set.begin.regexp",
        "punctuation.character.set.end.regexp",
        "keyword.operator.negation.regexp",
        "support.other.parenthesis.regexp",
      ],
      settings: {
        foreground: BASE_COLORS.COLOR1,
      },
    },
    {
      scope: [
        "constant.character.character-class.regexp",
        "constant.other.character-class.set.regexp",
        "constant.other.character-class.regexp",
        "constant.character.set.regexp",
      ],
      settings: {
        foreground: "#D16969",
      },
    },
    {
      scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
      settings: {
        foreground: "#DCDCAA",
      },
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: "#D7BA7D",
      },
    },
    {
      scope: ["constant.character", "constant.other.option"],
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: "#D7BA7D",
      },
    },
    {
      scope: "entity.name.label",
      settings: {
        foreground: "#C8C8C8",
      },
    },
    {
      scope: "constant",
      settings: {
        foreground: "#FFB1A3",
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: "#25B0BC",
      },
    },
    {
      scope: "entity.name",
      settings: {
        foreground: "#FAC29A",
      },
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: "#02BBCC",
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: BASE_COLORS.COLOR3,
        fontStyle: "",
      },
    },
    {
      scope: ["entity.name.type", "storage.type.cs"],
      settings: {
        foreground: "#FAC29A",
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#F09483",
        fontStyle: "italic",
      },
    },
    {
      scope: "entity.other.inherited-class",
      settings: {
        foreground: BASE_COLORS.COLOR2,
      },
    },
    {
      scope: "entity.other.attribute-name.id",
      settings: {
        foreground: "#25B0BC",
      },
    },
    {
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: BASE_COLORS.COLOR2,
      },
    },
    {
      scope: ["entity.name.variable", "variable"],
      settings: {
        foreground: BASE_COLORS.COLOR3,
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: "#D993FF",
        fontStyle: "italic",
      },
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: "#BBBBBB",
      },
    },
    {
      scope: [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.logical",
        "keyword.operator.delete",
      ],
      settings: {
        foreground: "#B877DB",
      },
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: "#F09483",
      },
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: "#FAB795B3",
        fontStyle: "italic",
      },
    },
    {
      scope: ["markup.heading", "entity.name.section"],
      settings: {
        foreground: BASE_COLORS.COLOR3,
      },
    },
    {
      scope: "markup.bold",
      settings: {
        foreground: "#B877DB",
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        foreground: "#25B0BC",
        fontStyle: "italic",
      },
    },
    {
      scope: ["markup.inline.raw", "markup.fenced_code.block"],
      settings: {
        foreground: "#F09483",
      },
    },
    {
      scope: "markup.underline.link",
      settings: {
        foreground: BASE_COLORS.COLOR2,
      },
    },
    {
      scope: "storage",
      settings: {
        foreground: "#B877DB",
        fontStyle: "italic",
      },
    },
    {
      scope: ["string.quoted", "string.template"],
      settings: {
        foreground: BASE_COLORS.COLOR2,
      },
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: "#F09483",
      },
    },
    {
      scope: "string.other.link",
      settings: {
        foreground: "#F09483",
      },
    },
    {
      scope: "support",
      settings: {
        foreground: "#FAC29A",
      },
    },
    {
      scope: "support.function",
      settings: {
        foreground: "#25B0BC",
      },
    },
    {
      scope: "support.variable",
      settings: {
        foreground: BASE_COLORS.COLOR3,
      },
    },
    {
      scope: ["support.type.property-name", "meta.object-literal.key"],
      settings: {
        foreground: BASE_COLORS.COLOR3,
      },
    },
    {
      scope: "support.type.property-name.css",
      settings: {
        foreground: "#BBBBBB",
      },
    },
    {
      scope: ["variable.language"],
      settings: {
        foreground: "#FAC29A",
        fontStyle: "italic",
      },
    },
    {
      scope: "variable.parameter",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "string.template meta.embedded",
      settings: {
        foreground: "#BBBBBB",
      },
    },
    {
      scope: "punctuation.definition.tag",
      settings: {
        foreground: "#E95678B3",
        fontStyle: "",
      },
    },
    {
      scope: "punctuation.separator",
      settings: {
        foreground: "#BBBBBB",
      },
    },
    {
      scope: "punctuation.definition.template-expression",
      settings: {
        foreground: "#B877DB",
      },
    },
    {
      scope: "punctuation.section.embedded",
      settings: {
        foreground: "#B877DB",
      },
    },
    {
      scope: "punctuation.definition.list",
      settings: {
        foreground: "#F09483",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#6796E6",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#CD9731",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#F44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#B267E6",
      },
    },
  ]
}

const BASE = {
  LIGHT: generateBaseTokens("LIGHT"),
  DARK: generateBaseTokens("DARK"),
  HC: generateBaseTokens("HC"),
}

function generateTokenColors(type: ColorPaletteType) {
  // TODO: The colors based on the selected theme need to be updated inside the individual language token files as well
  return [
    ...TEXT_MARKUP,
    ...BASE[type],
    ...BASH[type],
    ...MARKDOWN[type],
    ...JSON[type],
  ]
}

// Export token colors for the three different Lasik variants
export default {
  LIGHT: generateTokenColors("LIGHT"),
  DARK: generateTokenColors("DARK"),
  HC: generateTokenColors("HC"),
}
