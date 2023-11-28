import { autoDarkColor, defineConfig, Preset } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
import presetTypography, { TypographyTheme } from "@twind/preset-typography";

export default {
  ...defineConfig({
    darkColor: autoDarkColor,
    presets: [
      presetTypography() as Preset<TypographyTheme>,
      presetTailwind(),
      presetAutoprefix(),
    ],
  }),
  selfURL: import.meta.url,
};
