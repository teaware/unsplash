module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        84: "21rem",
      },
      keyframes: {
        cat: {
          "0%, 100%": { transform: "translate3d(0, -4px, 0)" },
          "50%": { transform: "translate3d(0, 4px, 0)" },
        },
        bling: {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
        },
        spin2: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        cat: "cat 4s ease-in-out -2s infinite",
        bling: "bling 700ms forwards",
        spin2: "spin2 1000ms linear",
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
