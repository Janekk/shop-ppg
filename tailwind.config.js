module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontSize: {
      "3xs": "12px",
      "2xs": "14px",
      xs: "16px",
      sm: "18px",
      m: "24px",
      lg: "36px",
      xg: "54px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        black: "#2F2F2F",
        "gray-10": "#FAFAFA",
        "gray-20": "#F5F5F5",
        "gray-40": "#788995",
        gray: "#828282",
      },
      width: {
        "152px": "152px",
        "365px": "365px",
        "800px": "800px",
        "900px": "900px",
      },
      minHeight: {
        "56px": "56px",
        "140px": "140px",
        "530px": "530px",
      },
      animation: {
        "pulse-fast": "pulse 0.9s ease 0s infinite",
        "pulse-mid": "pulse 0.9s ease 0.3s infinite",
        "pulse-slow": "pulse 0.9s ease 0.6s infinite",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      pointerEvents: ["disabled"],
      backgroundColor: ["disabled"],
      borderColor: ["disabled"],
    },
  },
  plugins: [],
};
