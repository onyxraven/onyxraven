module.exports = {
  mode: "jit",
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        "gradient-shift": {
          "0%": { "background-position": "right" },
          "100%": { "background-position": "left" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease-in-out alternate infinite",
      },
    },
  },
  plugins: [],
};
