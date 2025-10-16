import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        muted: "var(--muted)",
        desert: "var(--desert)",
        beige: "var(--beige)",
        accent: "var(--accent)",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        xl: "20px",
      },
      boxShadow: {
        sm: "0 2px 10px rgba(0,0,0,.06)",
        md: "0 8px 24px rgba(0,0,0,.08)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;

