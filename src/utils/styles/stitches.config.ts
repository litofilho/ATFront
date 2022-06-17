import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            primary: '#4DA1FF',
            secondary: '#1E2742',
            accent: '#FFD012',
            danger: '#CA0000',
            bgcolor: '#F5F5F5',
            bglightning: '#FAFBFC'
        },
    },
});