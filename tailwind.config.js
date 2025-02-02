/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blacks': '#2e2e2e',
        'blackstexts': '#1c1c1c',
        'heads': '#474747',
        'grays': '#ecedee'
      },
    },
  },
  plugins: [],
};
