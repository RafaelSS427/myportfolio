import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Grid, Tooltip, Text, Button } from '@nextui-org/react'
import { Box, SectionTitle, ItemAbout } from '@/components'
import { useMediaQuery } from '@/hooks'
import { IItemAbout } from '@/interfaces'
import { config } from '@/config'

export const About = () => {
    const [show, setShow] = useState<boolean>(false)
    const { t } = useTranslation('home')
    const match = useMediaQuery(600)

    const itemsAbout: IItemAbout[] = t('about.items', { returnObjects: true })

    return (
        <Box id="about" css={{ minHeight: "100vh", maxHeight: "auto" }}>
            <SectionTitle title={t('about.title')} titleNumber={2} />

            <Box
                css={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20
                }}
            >
                {
                    itemsAbout.map(({ title, description }, index) => (
                        <ItemAbout key={title.trim().substring(0, title.length / 2)} title={title} description={description} index={index + 1} />
                    ))
                }
            </Box>

            {/* <Description
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptas magni nam quod reiciendis sit facere repellendus itaque sapiente aspernatur, esse quos earum dolor, porro, quas cum iste necessitatibus exercitationem!"
                textAlign="center"
            /> */}

            <Text color="$primary" h5 css={{ textAlign: "center", mt: 40, mb: 20 }}>{ t('about.subtitle') }</Text>

            <Grid.Container gap={2} justify="center">
                {
                    config.skills.main.map(({ name, logo }, i) => (
                        <Grid xs={match ? 5 : 2.5} sm={2} key={name}>
                            <Box
                                css={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%"
                                }}
                            >
                                <Tooltip content={name} placement="top" color="invert">
                                    <Box
                                        className={`animation-updown-${i % 2 === 0 ? 'up' : 'down'}`}
                                    >
                                        {logo}
                                    </Box>
                                </Tooltip>
                            </Box>
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
                    {!show ? t('ui.show.more') : t('ui.show.less')}
                </Button>
            </Box>

            {
                show && (
                    <Grid.Container gap={2} justify="center" css={{ mt: 4 }}>

                        {
                            config.skills.secondary.map(({ name, logo }, i) => (
                                <Grid xs={match ? 4 : 2} sm={1.6} key={name}>
                                    <Box
                                        css={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%"
                                        }}
                                    >
                                        <Tooltip content={name} placement="top" color="invert">
                                            <Box
                                                className={`animation-updown-${i % 2 === 0 ? 'up' : 'down'}`}
                                            >
                                                {logo}
                                            </Box>
                                        </Tooltip>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid.Container>
                )
            }

        </Box>
    )
}