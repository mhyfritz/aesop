module.exports = {
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      serif: ["Spectral", "serif"],
      code: "var(--font-code)"
    },
    extend: {
      textColor: {
        default: "var(--color-text-default)",
        soft: "var(--color-text-soft)",
        accent: "var(--color-text-accent)"
      },
      backgroundColor: {
        default: "var(--color-bg-default)"
      },
      borderColor: theme => theme("textColor")
    }
  }
};
