module.exports = {
  mode: "jit",
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
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
        "gradient-shift": "gradient-shift 5s ease alternate infinite",
      },
    },
  },
  plugins: [],
};
