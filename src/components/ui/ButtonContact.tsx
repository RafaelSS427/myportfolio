import { Button } from '@nextui-org/react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ButtonContact = ({ text }: { text: string }) => (
    <Button
        shadow
        color="primary"
        auto
        icon={<FontAwesomeIcon icon={faEnvelope} />}
    >
        { text }
    </Button>
)