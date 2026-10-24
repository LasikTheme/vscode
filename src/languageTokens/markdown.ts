import { PALETTE, ColorPaletteType } from "../palette.ts"
import { alpha, opaque } from "../utils.ts"

function generateMarkdownTokens(type: ColorPaletteType) {
  const COLOR = PALETTE[type]

  const MARKDOWN_COLORS = {
    HEADING: opaque(alpha(COLOR.CORAL, 0.9)),
    TEXT: opaque(alpha(COLOR.WHITE, 0.85)),
    TEXT_BOLD: opaque(alpha(COLOR.WHITE, 0.9)),
    TEXT_ITALIC: opaque(alpha(COLOR.WHITE, 0.85)),
    TEXT_STRIKETHROUGH: opaque(alpha(COLOR.WHITE, 0.6)),
    TEXT_CODE: "#F09483E6",
    TEXT_BLOCKQUOTE: "#6B99559A",

    LINK_REGULAR: "#F09483E6",
    LINK_REGULAR_HREF: "#F09483E6",
    LINK_REGULAR_ANCHOR: "#FAB795E6",
    LINK_REGULAR_DESCRIPTION: "#FAB795E6",
    LINK_IMAGE: "#FFE998E6",
    LINK_REFERENCE: "#5F8387",

    PUNCTUATION_BOLD: opaque(alpha(COLOR.WHITE, 0.4)),
    PUNCTUATION_ITALIC: opaque(alpha(COLOR.WHITE, 0.4)),
    PUNCTUATION_STRIKETHROUGH: opaque(alpha(COLOR.WHITE, 0.4)),
    PUNCTUATION_HEADING: alpha(COLOR.CORAL, 0.3),
    PUNCTUATION_CODE: "#F0938357",
    PUNCTUATION_BLOCKQUOTE: "#6B99559A",
    PUNCTUATION_LIST_ITEM: "#6796E6",
    PUNCTUATION_TABLE_SEPARATOR: "#2D456B",
    PUNCTUATION_HORIZONTAL_RULE: "#2D456B",

    PUNCTUATION_LINK: "#FAB7953D",
    PUNCTUATION_LINK_REGULAR: "#FAB7953D",
    PUNCTUATION_LINK_IMAGE: "#FAB7953D",
    PUNCTUATION_LINK_REFERENCE: "#5F838756",
  }

  return [
    // Headings
    {
      name: "[MARKDOWN] Heading",
      scope: ["markup.heading.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.HEADING,
        fontStyle: "bold",
      },
    },
    {
      name: "[MARKDOWN] Punctuation: heading # ## ### #### ##### ######",
      scope: ["punctuation.definition.heading.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_HEADING,
      },
    },

    // Text
    {
      name: "[MARKDOWN] Text",
      scope: ["text.html.markdown", "meta.paragraph.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.TEXT,
      },
    },

    // Italic
    {
      name: "[MARKDOWN] Emphasis: Italic",
      scope: "markup.italic.markdown",
      settings: {
        foreground: MARKDOWN_COLORS.TEXT_ITALIC,
        fontStyle: "italic",
      },
    },
    {
      name: "[MARKDOWN] Punctuation: Italic _ *",
      scope: ["punctuation.definition.italic.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_ITALIC,
      },
    },

    // Bold
    {
      name: "[MARKDOWN] Emphasis: Bold",
      scope: "markup.bold.markdown",
      settings: {
        foreground: MARKDOWN_COLORS.TEXT_BOLD,
        fontStyle: "bold",
      },
    },
    {
      name: "[MARKDOWN] Punctuation: Bold __ **",
      scope: ["punctuation.definition.bold.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_BOLD,
        fontStyle: "",
      },
    },

    // Strikethrough
    {
      name: "[MARKDOWN] Emphasis: Strikethrough",
      scope: "markup.strikethrough.markdown",
      settings: {
        foreground: MARKDOWN_COLORS.TEXT_STRIKETHROUGH,
        fontStyle: "strikethrough",
      },
    },
    {
      name: "[MARKDOWN] Punctuation: strikethrough ~~",
      scope: ["punctuation.definition.strikethrough.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_STRIKETHROUGH,
      },
    },

    // Blockquote
    {
      name: "[MARKDOWN] Blockquote punctuation >`",
      scope: [
        "markup.quote.markdown",
        "punctuation.definition.quote.begin.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_BLOCKQUOTE,
      },
    },

    // List Items
    {
      name: "[MARKDOWN] - + * Punctuation List",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_LIST_ITEM,
      },
    },

    // Code
    {
      name: "[MARKDOWN] Code (inline, fenced, maths)",
      scope: [
        "markup.raw.block.markdown",
        "markup.inline.raw.string.markdown",
        "markup.fenced_code.block.markdown",
        "markup.math.inline.markdown",
        "markup.math.block.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.TEXT_CODE,
      },
    },
    {
      name: "[MARKDOWN] Punctuation: Code `  ``` ~~~",
      scope: [
        "punctuation.definition.raw.markdown",
        "punctuation.definition.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_CODE,
      },
    },

    // Tables
    {
      name: "[MARKDOWN] Table separators | --- ",
      scope: [
        "punctuation.definition.table.markdown",
        "punctuation.separator.table.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_TABLE_SEPARATOR,
      },
    },

    // Horizontal rule
    {
      name: "[MARKDOWN] Horizontal rules --- ",
      scope: ["meta.separator.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_HORIZONTAL_RULE,
      },
    },

    // Link: Regular - [ANCHOR](HREF "DESCRIPTION")
    {
      name: "[MARKDOWN] Link (Regular) base color / default",
      scope: ["meta.link.inline.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.LINK_REGULAR,
      },
    },
    {
      name: "[MARKDOWN] Link (Regular) ANCHOR",
      scope: ["string.other.link.title.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.LINK_REGULAR_ANCHOR,
      },
    },
    {
      name: "[MARKDOWN] Link (Regular) HREF",
      scope: ["markup.underline.link.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.LINK_REGULAR_HREF,
      },
    },
    {
      name: "[MARKDOWN] Link (Regular) DESCRIPTION",
      scope: ["string.other.link.description.title.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.LINK_REGULAR_DESCRIPTION,
      },
    },
    {
      name: "[MARKDOWN] Punctuation: Link (Regular) - default ()",
      scope: ["punctuation.definition.metadata.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_LINK,
      },
    },
    {
      name: "[MARKDOWN] Punctuation: Link (Regular) []",
      scope: [
        "punctuation.definition.link.title.begin.markdown",
        "punctuation.definition.link.title.end.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_LINK,
      },
    },
    {
      name: '[MARKDOWN] Punctuation: Link (Regular) DESCRIPTION "" ',
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_LINK,
      },
    },
    // NOTE: It is not possible to target () punctuations for regular links and image links separately, so they will be handled together.
    // The following can be targeted
    // - Image link anchor text ![ANCHOR]
    // - Image link anchor punctuation ![]
    // - Reference link anchor text [ANCHOR] [ANCHOR]:
    // - Reference link punctuation [] []:

    // Link: Image ![ANCHOR][] or ![ANCHOR](HREF) or ![ANCHOR](HREF "DESCRIPTION")
    {
      name: "[MARKDOWN] Link (Image) ANCHOR text",
      scope: ["string.other.link.description.markdown"],
      settings: {
        foreground: MARKDOWN_COLORS.LINK_IMAGE,
      },
    },
    {
      name: "[MARKDOWN] Punctuation: Link (Image) ![]",
      scope: [
        "punctuation.definition.link.description.begin.markdown",
        "punctuation.definition.link.description.end.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_LINK_IMAGE,
      },
    },

    // Link: Reference [ANCHOR] or [ANCHOR]:
    {
      name: "[MARKDOWN] Link (Reference) ANCHOR text",
      scope: "constant.other.reference.link.markdown",
      settings: {
        foreground: MARKDOWN_COLORS.LINK_REFERENCE,
      },
    },
    {
      name: "[MARKDOWN] Punctuation: Link (Reference) []:",
      scope: [
        "punctuation.definition.constant.markdown",
        "punctuation.definition.constant.begin.markdown",
        "punctuation.definition.constant.end.markdown",
        "punctuation.separator.key-value.markdown",
      ],
      settings: {
        foreground: MARKDOWN_COLORS.PUNCTUATION_LINK_REFERENCE,
      },
    },
  ]
}

export default {
  LIGHT: generateMarkdownTokens("LIGHT"),
  DARK: generateMarkdownTokens("DARK"),
  HC: generateMarkdownTokens("HC"),
}
