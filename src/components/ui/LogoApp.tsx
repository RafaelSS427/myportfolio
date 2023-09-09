import { FC } from 'react'
import { LogoSVGApp } from '../icons'
import { useTheme } from 'next-themes'

interface Props {
    width: string;
    height: string;
}

const colorSVG: { [key: string]: 'white' | 'black' } = {
    light: 'black',
    dark: 'white'
}

export const LogoApp: FC<Props> = ({ width, height }) => {
    const { theme } = useTheme()
    // const theme = 'light'

    return (
        // <NoSsr>
            <LogoSVGApp width={width} height={height} color={colorSVG[theme as ('light' | 'dark')]} />
        // </NoSsr>
    )
}