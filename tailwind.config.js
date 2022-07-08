/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Open Sans, Helvetica, Arial, sans-serif",
      serif: "Roboto Slab, serif",
    },
    extend: {
      colors: {
        orange: "#f63",
        "orange-light": "#f85",
      },
      animation: {
        "octocat-wave": "octocat-wave 750ms ease-in-out",
      },
      keyframes: {
        "octocat-wave": {
          "0%, 100%": { transform: "rotate(0)" },
          "20%, 60%": { transform: "rotate(-25deg)" },
          "40%, 80%": { transform: "rotate(10deg)" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            p: {
              "font-family": theme('fontFamily.serif'),
            },
            a: {
              color: theme('colors.orange'),
              "text-decoration": "none",
            }
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
