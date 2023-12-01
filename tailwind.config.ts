import nightwind from "nightwind";
import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    nightwind,
    typography(),
  ],
} as Config;
