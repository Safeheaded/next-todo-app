import { extendTheme, type ThemeConfig, Theme } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config }) as Theme;
