import { FC } from 'react'
import { useBookStore } from '@/store'
import { LogoSVGApp } from '../icons'

interface Props {
    width: string;
    height: string;
} 

const colorSVG: { [key: string]: 'white' | 'black' } = {
    light: 'black',
    dark: 'white'
}

export const LogoApp:FC<Props> = ({ width, height }) => {
    const { theme } = useBookStore()

    return (
        <LogoSVGApp width={width} height={height} color={colorSVG[theme]} />
    )
}