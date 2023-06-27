import { FC } from 'react'
import { Switch, SwitchEvent } from '@nextui-org/react'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useBookStore } from '@/store'
import { SunSVG } from '../icons'

export const SwitchApp: FC = () => {
    
    const { theme, updateTheme } = useBookStore()

    const handleSwitch = (e: SwitchEvent) => {
        const selectedTheme = e.target.checked ? 'light' : 'dark'
        localStorage.setItem('theme', selectedTheme)
        updateTheme(selectedTheme)
    }

    return (
        <Switch
            checked={!(theme === 'dark')}
            onChange={handleSwitch}
            color="primary"
            shadow
            size="lg"
            iconOn={<SunSVG />}
            iconOff={<FontAwesomeIcon icon={faMoon} style={{ color: "#FFF" }} />}
        />
    )
}