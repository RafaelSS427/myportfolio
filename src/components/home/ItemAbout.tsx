import React from 'react'
import { Text } from '@nextui-org/react'
import { Box } from '../shared'
import { Circle } from '../ui'

interface Props {
    title: string;
    description: string;
    index: number;
}

export const ItemAbout = ({ title, description, index }: Props) => {

    const isReverse = index % 2 === 0

    return (
        <Box>
            <Box
                css={{
                    display: "flex",
                    gap: 10,
                    flexDirection: isReverse ? "row-reverse" : "row",
                    alignItems: "center",
                    mb: 10
                }}
            >
                <Box css={{ width:"24px" }}>
                    
                <Circle
                    titleNumber={index}
                    sizeBox="24px"
                    sizeText={14}
                />
                </Box>
                <Text color="$primary" h5 css={{ mb: 0, textAlign: isReverse ? "end" : "start" }}>{title}</Text>
            </Box>
            <Box css={{ display: 'flex', justifyContent: isReverse ? "end" : "start" }}>
                <Box
                    css={{
                        pl: isReverse ? 0 : "34px",
                        pr: isReverse ? "34px" : 0,
                        maxWidth: "600px",
                        "@xsMax": {
                            p: 0,
                        }
                    }}
                >
                    <Text css={{ textAlign: isReverse ? "end" : "start" }}>{description}</Text>
                </Box>
            </Box>
        </Box>
    )
}
