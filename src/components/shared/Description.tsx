import { FC } from 'react'
import { Text } from '@nextui-org/react'

interface Props {
    text: string,
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent",
    size?: number
}

export const Description:FC<Props> = ({ text, textAlign = "start", size = 20 }) => (
    // Lorem ipsum dolor sit amet consectetur. Mattis sapien amet augue vulputate massa adipiscing facilisis aenean semper. Neque facilisis fames rutrum a. Massa arcu urna ultricies velit orci auctor diam.
    <Text size={size} css={{
        mb: size !== 20 ? 0 : 30,
        letterSpacing: "$wide",
        textAlign: textAlign,
        "@xsMax": {
            fontSize: 16
        }
    }}>
        { text }
    </Text>
)
