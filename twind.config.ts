import { Options } from "$fresh/plugins/twind.ts";
import typography from "@twind/typography";

export default {
  plugins: {
    ...typography(),
  },
  selfURL: import.meta.url,
} as Options;
