interface Colors {
  CORAL: string
  CYAN: string
  LAVENDER: string
  OBSIDIAN: string
  ORANGE: string
  PEACH: string
  SAGE: string
  TURQUOISE: string
  WHITE: string
  YELLOW: string
}

interface ColorPalette {
  LIGHT: Colors
  DARK: Colors
  HC: Colors
}

export type ColorPaletteType = "LIGHT" | "DARK" | "HC"

export const PALETTE: ColorPalette = {
  LIGHT: {
    CORAL: "#E95678",
    CYAN: "#25B0BC",
    LAVENDER: "#B877DB",
    OBSIDIAN: "#01030a",
    ORANGE: "#ff7039",
    PEACH: "#FAB795",
    SAGE: "#B5CEA8",
    TURQUOISE: "#4EC9B0",
    WHITE: "#ffffff",
    YELLOW: "#F9C859",
  },
  DARK: {
    CORAL: "#E95678",
    CYAN: "#25B0BC",
    LAVENDER: "#B877DB",
    OBSIDIAN: "#01030a",
    ORANGE: "#ff7039",
    PEACH: "#FAB795",
    SAGE: "#B5CEA8",
    TURQUOISE: "#4EC9B0",
    WHITE: "#ffffff",
    YELLOW: "#F9C859",
  },
  HC: {
    CORAL: "#E95678",
    CYAN: "#25B0BC",
    LAVENDER: "#B877DB",
    OBSIDIAN: "#000005",
    ORANGE: "#ff7039",
    PEACH: "#FAB795",
    SAGE: "#B5CEA8",
    TURQUOISE: "#4EC9B0",
    WHITE: "#ffffff",
    YELLOW: "#F9C859",
  },
}
