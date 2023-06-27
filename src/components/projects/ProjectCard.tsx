import { Grid, Text, Image } from '@nextui-org/react'
import { GitHubSVG, OpenSVG } from '../icons'
import { Box, Description } from '../shared'
import { FC } from 'react'
import { Proyect } from '@/interfaces'
import { useTranslation } from 'next-i18next'

interface Props {
    project: Proyect
    direction?: "row-reverse" | "row" | "column" | "column-reverse"
}

export const ProjectCard: FC<Props> = ({ direction = "row", project }) => {
    const { t } = useTranslation('projects')
    const { title, description, linksType, technologies } = project
    return (
        <Grid.Container gap={3} direction={direction}>
            <Grid xs={12} sm={6} justify="center">
                <Box
                    css={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        "@smMax": {
                            width: "75%",
                        },
                        "@xsMax": {
                            width: "100%",
                        },
                    }}>
                    <Image
                        src="/img/project-device.png"
                        width="100%"
                        alt="Example project"
                        objectFit="contain"
                    />
                </Box>

            </Grid>
            <Grid xs={12} sm={6}>
                <Box css={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "$8"
                }}>
                    <Text
                        css={{
                            textTransform: "uppercase",
                            fontSize: "$xs",
                            color: "$primary",
                            letterSpacing: "$normal",
                            textAlign: direction === "row-reverse" ? "start" : "end",
                            width: "100%",
                            fontWeight: "$medium"
                        }}>
                        { t('detail') }
                    </Text>
                    <Text
                        css={{
                            textGradient: "45deg, #02AABD -20%, #00CDAC 50%",
                            fontWeight: "$bold",
                            textAlign: direction === "row-reverse" ? "start" : "end",
                            width: "100%",
                            lineHeight: "42px",
                            fontSize: 32,
                            "@xsMax": {
                                fontSize: 24
                            }
                        }}
                    >
                        {title}
                    </Text>

                    <Description textAlign={direction === "row-reverse" ? "start" : "end"} size={14} text={description} />

                    <Box css={{ display: "flex", justifyContent: direction === "row-reverse" ? "start" : "end", gap: "$5" }}>
                        {
                            technologies.map(tech => (
                                <Text key={tech} size={12} color="$primary">{tech}</Text>
                            ))
                        }
                        {/* <Text size={12} color="$primary">Material-UI</Text>
                        <Text size={12} color="$primary">Typescript</Text> */}
                    </Box>

                    <Box css={{ display: "flex", justifyContent: direction === "row-reverse" ? "start" : "end", alignItems: "center", gap: "$5" }}>
                        {
                            linksType.map(({ name, url }) => {
                                switch (name) {
                                    case 'github':
                                        return <GitHubSVG />
                                    case 'browser':
                                        return <OpenSVG />
                                    default:
                                        return null
                                }
                            })
                        }
                        {/* <GitHubSVG />
                        <OpenSVG /> */}
                    </Box>
                </Box>
            </Grid>

        </Grid.Container>
    )
}