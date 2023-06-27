import { FC } from 'react'
import { Text } from '@nextui-org/react'

interface Props {
    isDark?: boolean;
    text: string;
}
// linear-gradient(180deg,rgba(0,0,0,.8),#000)
export const TextName: FC<Props> = ({ isDark, text }) => (
    <Text
        h2
        size={42}
        css={{
            // color: "#000",
            textGradient: isDark
                // ? "180deg, #FFFFFF 65%, #000000 99.98%, rgba(255, 255, 255, 0) 99.99%"
                ? "180deg, #FFFFFF 80%, #FFF 100%"
                : "180deg, #000 80%, #000 100%",
                // : "180deg, #000000 65%, rgba(255, 255, 255, 0) 100%",
            fontWeight: "$semibold",
            "@xsMax": {
                fontSize: 32,
                margin: 0
            }
        }}
    >
        { text }
    </Text>
)