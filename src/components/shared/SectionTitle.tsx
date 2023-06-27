import { FC } from 'react'
import { Text } from '@nextui-org/react'

import { Box } from './Box'

interface Props {
    title: string;
    titleNumber?: number;
}

export const SectionTitle:FC<Props> = ({ title, titleNumber = 1 }) => {
    return (
        <Box css={{ display: "flex", flexDirection: "column", alignItems: "center", mb: "24px" }}>
            <Box css={{
                background: `linear-gradient($primarySolidContrast, $primary)`,
                // background: "linear-gradient($primarySolidContrast, #02AABD)",
                width: "1px",
                height: "125px"
            }} />
            <Box css={{
                //background: "linear-gradient(45deg, #02AABD, #00CDAC)",
                background: "$primary",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text weight="semibold" color="$primarySolidContrast">0{titleNumber}</Text>
            </Box>
            <Text h2 color="$primary" weight="semibold">{ title }</Text>
            {/* <Text h2 css={{ textGradient: "45deg, #02AABD -20%, #00CDAC 50%" }} weight="bold">{ title }</Text> */}
        </Box>
    )
}