/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      prime: {
        petrel: "#3c78b4",
        DEFAULT: "#fff",
        black: "#000000",
        benthic: "#000014",
        blueDart: "#3c78a0",
        kuretake: "#001428",
        mississippi: "#3c648c",
      },
    },
  },

  screen: {
    sm: "640px",
    md: "768px",
    lg: "1280px",
    xl: "1600px",
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
