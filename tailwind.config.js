module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      Keyframes: {
        "slide-vertical": {
          "0%": { transform: "translateY(0%)" },
          "45%": { transform: "translateY(100%)", opacity: "0" },
          "55%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      animation: {
        "slide-vertical": "slide-vertical 1s ease-in-out forwards",
      },
    },
    animation: {
      "slide-vertical": "slide-vertical 1s ease-in-out forwards",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
