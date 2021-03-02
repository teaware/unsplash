module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "come-in-out": {
          "0%": { transform: "scale(0)" },
          "50% ": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        animation: {
          "come-in-out": "'come-in-out' 300ms forwards",
          spin: "spin 500ms linear forwards",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
