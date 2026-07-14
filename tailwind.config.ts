import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "var(--color-page)",
        card: "var(--color-card)",
        ink: "var(--color-text)",
        "ink-soft": "var(--color-text-soft)",
        muted: "var(--color-muted)",
        "muted-light": "var(--color-muted-light)",
        surface: "var(--color-surface)",
        "surface-warm": "var(--color-surface-warm)",
        border: "var(--color-border)",
        "border-dark": "var(--color-border-dark)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-muted": "var(--color-accent-muted)",
        inverse: "var(--color-inverse)",
        "inverse-foreground": "var(--color-inverse-text)",
        "footer-muted": "var(--color-footer-muted)",
        "footer-subtle": "var(--color-footer-subtle)",
        "btn-primary": "var(--color-btn-primary)",
        "btn-primary-hover": "var(--color-btn-primary-hover)",
        "btn-primary-text": "var(--color-btn-primary-text)",
        "header-bg": "var(--color-header-bg)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
      },
      animation: {
        "fade-up": "fadeUp 0.55s ease-out forwards",
        "soft-float": "softFloat 7s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
