// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        background: mode('light', '#ffffff')(props), //mode(light mode color, dark mode color)
      },
    }),
  },
});

export default theme;
