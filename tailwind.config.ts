import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "Navbg":"rgb(16, 24, 40)"
      },
      fontFamily:{
        "Primary-font":"Poppins"
      },
      screens:{
        "mobile":{"max":"640px"}
      }
    },
  },
  plugins: [],
};
export default config;
