/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        "bg-2": "#0b1020",
        primary: "#8b7cff",
        "primary-2": "#b4a7ff",
        cyan: "#39d5ff",
        pink: "#ff6ec7",
        mint: "#4adea7",
        amber: "#ffac69",
        text: "#f5f7ff",
        "text-soft": "#b8c2de",
        "text-muted": "#7d88b5",
      },
      backgroundImage: {
        'grad-1': 'linear-gradient(135deg, #8b7cff 0%, #b4a7ff 40%, #7de2ff 100%)',
        'grad-2': 'linear-gradient(135deg, #39d5ff 0%, #8b7cff 50%, #ff6ec7 100%)',
        'grad-3': 'linear-gradient(135deg, #1a233d 0%, rgba(139, 124, 255, 0.25) 100%)',
      }
    },
  },
  plugins: [],
}
