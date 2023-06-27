import { createTheme } from '@nextui-org/react'

export const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            primary: '#FFFFFF',
            primaryBorder: '#CCCCCC',
            primaryBorderHover: '#999999',
            primarySolidHover: '#EEEEEE',
            primarySolidContrast: '#000000',
            primaryShadow: 'rgba(255, 255, 255, 0.3)',
            text: '#888888',
        },

    },
})