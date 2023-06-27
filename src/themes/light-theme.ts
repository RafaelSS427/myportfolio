import { createTheme } from '@nextui-org/react'

export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            primary: '#000000',
            primaryBorder: '#303030',
            primaryBorderHover: '#505050',
            primarySolidHover: '#101010',
            primarySolidContrast: '#FFFFFF',
            primaryShadow: 'rgba(0, 0, 0, 0.3)',
            text: '#666666',
        }
    }
})