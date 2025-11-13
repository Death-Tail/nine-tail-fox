// Theme configuration for easy customization
export const themes = {
  kitsune: {
    name: "Nine-Tailed Kitsune",
    colors: {
      primary: "hsl(25, 100%, 50%)", // Fiery orange
      secondary: "hsl(25, 30%, 15%)", // Dark brown
      accent: "hsl(35, 100%, 60%)", // Amber
      background: "hsl(0, 0%, 5%)", // Near black
      foreground: "hsl(25, 80%, 90%)", // Light cream
      card: "hsl(0, 0%, 8%)",
      cardForeground: "hsl(25, 60%, 85%)",
      border: "hsl(25, 80%, 40%)",
      muted: "hsl(25, 20%, 20%)",
      mutedForeground: "hsl(25, 40%, 60%)",
    },
    font: {
      primary: "Press Start 2P",
      fallback: "monospace",
    },
  },
  // Add more themes here
  cyberpunk: {
    name: "Cyberpunk Neon",
    colors: {
      primary: "hsl(280, 100%, 60%)",
      secondary: "hsl(280, 30%, 15%)",
      accent: "hsl(180, 100%, 50%)",
      background: "hsl(240, 30%, 8%)",
      foreground: "hsl(180, 80%, 90%)",
      card: "hsl(240, 20%, 12%)",
      cardForeground: "hsl(180, 60%, 85%)",
      border: "hsl(280, 80%, 50%)",
      muted: "hsl(240, 20%, 20%)",
      mutedForeground: "hsl(180, 40%, 60%)",
    },
    font: {
      primary: "Press Start 2P",
      fallback: "monospace",
    },
  },
} as const

export type ThemeName = keyof typeof themes
export const currentTheme: ThemeName = "kitsune"
