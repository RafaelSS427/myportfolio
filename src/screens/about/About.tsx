import { Box, Description, SectionTitle } from '@/components'
import { Grid, Tooltip, Text, Button, Container } from '@nextui-org/react'
import { config } from '@/config'
import { useState } from 'react'
import { useMediaQuery } from '@/hooks'

export const About = () => {
    const [show, setShow] = useState<boolean>(false)
    const match = useMediaQuery(600)

    return (
        <Box id="about" css={{ minHeight: "100vh", maxHeight: "auto" }}>
            <SectionTitle title="About me" />
            <Description
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptas magni nam quod reiciendis sit facere repellendus itaque sapiente aspernatur, esse quos earum dolor, porro, quas cum iste necessitatibus exercitationem!"
                textAlign="center"
            />

            <Grid.Container gap={2} justify="center" css={{ mt: 4 }}>

                {
                    config.skills.main.map(({ name, logo }, i) => (
                        <Grid xs={match ? 5 : 2.5} sm={2} key={name}>
                            <Tooltip content={name} placement="top" color="invert">
                                <Box
                                    css={{
                                        p: (name === 'Javascript' || name === 'Typescript')
                                            ? "1.75rem"
                                            : "1.25rem"
                                    }}
                                    className={`animation-updown-${i % 2 === 0 ? 'up' : 'down'}`}
                                >
                                    {logo}
                                </Box>
                            </Tooltip>
                        </Grid>
                    ))
                }
            </Grid.Container>

            <Box css={{ display: "flex", justifyContent: "center" }}>
                <Button
                    auto
                    bordered
                    color="primary"
                    css={{
                        border: "none",
                        textDecoration: "underline"
                    }}
                    onPress={() => setShow(v => !v)}
                >
                    { !show ? "View more" : "View less" }
                </Button>
            </Box>

            {
                show && (
                        <Grid.Container gap={2} justify="center" css={{ mt: 4 }}>

                            {
                                config.skills.secondary.map(({ name, logo }, i) => (
                                    <Grid xs={match ? 4 : 2} sm={1.6} key={name}>
                                        <Tooltip content={name} placement="top" color="invert">
                                            <Box
                                                css={{
                                                    p: "1.25rem",
                                                    mt: i % 2 === 0 ? "0px" : "20px"
                                                }}
                                                className={`animation-updown-${i % 2 === 0 ? 'up' : 'down'}`}
                                            >
                                                {logo}
                                            </Box>
                                        </Tooltip>
                                    </Grid>
                                ))
                            }
                        </Grid.Container>
                )
            }

        </Box>
    )
}