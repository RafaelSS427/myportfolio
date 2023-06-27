import { Grid, Card, Text } from '@nextui-org/react'
import { CarpterSVG, GitHubSVG, OpenSVG } from '../icons'
import { Box } from '../shared'
import { useMediaQuery } from '@/hooks'

export const AnotherProjectCard = () => {
    const matchDevice = useMediaQuery(500)

    return (
        <Grid xs={matchDevice ? 12 : 6} sm={4}>
            <Card css={{ p: "$6" }} isHoverable isPressable>
                <Card.Header>
                    <Box css={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Box>
                            <CarpterSVG />
                        </Box>

                        <Box css={{ display: "flex", alignItems: "center", gap: "$5" }}>
                            <GitHubSVG />
                            <OpenSVG />
                        </Box>
                    </Box>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                    <Text h4>
                        TODO
                    </Text>
                    <Text>
                        Make beautiful websites regardless of your design experience.
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <Box css={{ display: "flex", gap: "$5" }}>
                        <Text size={12} color="$primary">Nextjs</Text>
                        <Text size={12} color="$primary">Material-UI</Text>
                        <Text size={12} color="$primary">Typescript</Text>
                    </Box>
                </Card.Footer>
            </Card>
        </Grid>
    )
}