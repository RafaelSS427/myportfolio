import { Text } from '@nextui-org/react'
import { Box } from '../shared'

interface Props {
    titleNumber: number | string;
    sizeBox: string;
    sizeText: number;
}

export const Circle = ({ titleNumber, sizeBox, sizeText }:Props) => {
    return (
        <Box css={{
            //background: "linear-gradient(45deg, #02AABD, #00CDAC)",
            background: "$primary",
            width: sizeBox,
            height: sizeBox,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text weight="semibold" color="$primarySolidContrast" size={sizeText}>{titleNumber}</Text>
        </Box>
    )
}
