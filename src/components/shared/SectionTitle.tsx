import { FC } from 'react'
import { Text } from '@nextui-org/react'

import { Box } from './Box'
import { Circle } from '../ui';

interface Props {
    title: string;
    titleNumber?: number;
    mb?: string;
}

export const SectionTitle: FC<Props> = ({ title, titleNumber = 1, mb = "24px" }) => {
    return (
        <Box css={{ display: "flex", flexDirection: "column", alignItems: "center", my: mb }}>
            <Box css={{
                background: `linear-gradient($primarySolidContrast, $primary)`,
                // background: "linear-gradient($primarySolidContrast, #02AABD)",
                width: "1px",
                height: "125px"
            }} />
            <Circle 
                titleNumber={`0${titleNumber}`}
                sizeBox="40px"
                sizeText={16}
            />
            <Text
                h2
                color="$primary"
                weight="semibold"
                css={{
                    fontSize: 32,
                    "@xs": {
                        fontSize: 36
                    }
                }}
            >
                {title}
            </Text>
            {/* <Text h2 css={{ textGradient: "45deg, #02AABD -20%, #00CDAC 50%" }} weight="bold">{ title }</Text> */}
        </Box>
    )
}