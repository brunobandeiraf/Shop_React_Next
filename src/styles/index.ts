
import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: { // Tela global
        white: '#FFF',

        gray900: '#121214',
        gray800: '#202024',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',
  
        green500: '#00875f',
        green300: '#00b37e',
    },

    fontSizes: {
        md: '1.125rem', // 18
        lg: '1.25rem', // 20
        xl: '1.5rem', // 24
        '2xl': '2rem',// 32
    }
  }
})