import { CSSProperties, useMemo } from 'react'
import { useBookStore } from '@/store'

export const useThemeUncontrolled = () => {
    const { theme } = useBookStore()

    const controlledStyles:CSSProperties = useMemo(() => ({
        color: theme === "dark" ? '#FFFFFF' : "#000000"
    }), [theme])    

    const selectedColor:string = useMemo(() => theme === "dark" ? '#FFFFFF' : "#000000", [theme])

    const colorsContrast = useMemo(
        () => [ theme === "dark" ? '#000000' : '#FFFFFF', theme === "dark" ? '#FFFFFF' : '#000000']
        , [theme])

    return {
        controlledStyles,
        selectedColor,
        colorsContrast // not used
    }
}
