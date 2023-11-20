import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
import presetTypography from "@twind/preset-typography";

export default {
  ...defineConfig({
    presets: [
      presetTypography(),
      presetTailwind(),
      presetAutoprefix(),
    ],
  }),
  selfURL: import.meta.url,
};
