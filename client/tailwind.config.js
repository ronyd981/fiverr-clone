/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#1dbf73",
        primaryTitle: "#404145",
        primaryText: "#62646a",
        grayBackground: "#FAFAFA",
        darkGreen: "#003912",
      },
    },
  },
  plugins: [
    {
      handler(api) {
        api.addUtilities({
          ".no-scrollbar": {
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          },
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
        });
      },
    },
  ],
};
