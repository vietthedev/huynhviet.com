import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    daisyui,
    typography(),
  ],
} as Config;
