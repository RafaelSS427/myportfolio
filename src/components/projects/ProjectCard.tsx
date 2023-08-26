import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { Grid, Text, Image, Link, Card } from '@nextui-org/react'
import { GitHubSVG, OpenSVG } from '../icons'
import { Box, Description } from '../shared'
import { useThemeUncontrolled } from '@/hooks'
import { Project } from '@/interfaces'

interface Props {
    project: Project
    direction?: "row-reverse" | "row" | "column" | "column-reverse"
}

export const ProjectCard: FC<Props> = ({ direction = "row", project }) => {
    const { t } = useTranslation('home')
    const { title, description, linksType, technologies, src } = project
    const { selectedColor } = useThemeUncontrolled()

    return (
        <Grid.Container gap={3} direction={direction}>
            <Grid 
                xs={12} 
                sm={6} 
                justify="center"
                css={{
                    "@xsMax": {
                        px: 0
                    }
                }}
            >
                <Box
                    css={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Card
                        css={{
                            transition: ".3s",
                            backgroundColor: 'transparent',
                            filter: "drop-shadow(0px 2px 5px transparent)",
                            width: "100%",
                            "@smMax": {
                                width: "75%",
                            },
                            "@xsMax": {
                                width: "100%",
                            },
                            "&:hover": {
                                filter: `drop-shadow(0px 2px 5px ${selectedColor})`,
                            }
                        }}
                        isHoverable
                    >
                        <a href={linksType.find(e => e.name === 'browser')?.url || linksType.find(e => e.name === 'github')?.url || '#'} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={src}
                                width="100%"
                                alt="Example project"
                                objectFit="contain"
                            />
                        </a>
                    </Card>
                </Box>
            </Grid>
            <Grid 
                xs={12} 
                sm={6}
                css={{
                    "@xsMax": {
                        px: 0
                    }
                }}
            >
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
                        {t('projects.detail')}
                    </Text>
                    <Text
                        css={{
                            textGradient: "45deg, #02AABD -20%, #00CDAC 50%",
                            fontWeight: "$bold",
                            textAlign: direction === "row-reverse" ? "start" : "end",
                            width: "100%",
                            fontSize: 28,
                            lineHeight: "40px",
                            "@xsMax": {
                                fontSize: 24,
                                lineHeight: "32px",
                            }
                        }}
                    >
                        {title}
                    </Text>

                    <Description textAlign={direction === "row-reverse" ? "start" : "end"} size={14} text={description} />

                    <Box css={{ display: "flex", justifyContent: direction === "row-reverse" ? "start" : "end", gap: "$5", flexWrap: "wrap" }}>
                        {
                            technologies.map(tech => (
                                <Text key={tech} size={12} color="$primary">{tech}</Text>
                            ))
                        }
                    </Box>

                    <Box css={{ display: "flex", justifyContent: direction === "row-reverse" ? "start" : "end", alignItems: "center", gap: "$5" }}>
                        {
                            linksType.map(({ name, url }) => {
                                switch (name) {
                                    case 'github':
                                        return <GitHubSVG key={name} />
                                    case 'browser':
                                        return (
                                            <Link key={name} href={url} target="_blank" rel="noopener noreferrer">
                                                <OpenSVG />
                                            </Link>
                                        )
                                    default:
                                        return null
                                }
                            })
                        }
                    </Box>
                </Box>
            </Grid>

        </Grid.Container>
    )
}