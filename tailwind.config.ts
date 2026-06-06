import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gt-navy": "#003057",
        "gt-navy-light": "#1a4d73",
        "gt-navy-deep": "#001f3d",
        "tech-gold": "#B3A369",
        "tech-gold-light": "#d4c896",
        "tech-gold-muted": "#e8e0c8",
        cream: "#FBF9F5",
        "cream-dark": "#F3EFE8",
        blush: "#F7EDE4",
        sage: "#E8EDE6",
        "warm-gray": "#5C5C5C",
        "warm-gray-light": "#8A8580",
        "card-bg": "#F7F4EF",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 8px 32px -8px rgba(0, 48, 87, 0.12)",
        card: "0 2px 16px -4px rgba(0, 48, 87, 0.08)",
        glow: "0 0 40px -10px rgba(179, 163, 105, 0.35)",
        lift: "0 12px 40px -12px rgba(0, 48, 87, 0.18)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(179,163,105,0.18), transparent), radial-gradient(ellipse 50% 40% at 90% 20%, rgba(0,48,87,0.06), transparent)",
        "section-warm":
          "linear-gradient(180deg, rgba(247,237,228,0.5) 0%, rgba(251,249,245,0) 100%)",
        "section-sage":
          "linear-gradient(180deg, rgba(232,237,230,0.4) 0%, rgba(251,249,245,0) 100%)",
        "gold-shimmer":
          "linear-gradient(135deg, rgba(179,163,105,0.15) 0%, transparent 50%, rgba(179,163,105,0.08) 100%)",
        "navy-gradient": "linear-gradient(135deg, #003057 0%, #001f3d 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
