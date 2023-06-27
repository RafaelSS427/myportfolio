import { Box, CarpterSVG, GitHubSVG, OpenSVG, SectionTitle } from '@/components'
import { AnotherProjectCard, ProjectCard } from '@/components/projects'
import { Proyect } from '@/interfaces'
import { Card, Grid, Image, Link, Text } from '@nextui-org/react'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

export const Projects = () => {

    const { t } = useTranslation('projects')
    const proyects: Proyect[] = t('featured', { returnObjects: true })

    return (
        <Box id="projects" css={{ minHeight: "100vh", maxHeight: "auto" }}>
            <SectionTitle title={t('title')} titleNumber={2} />

            {
                proyects.map((proyect, i) => (
                    <ProjectCard key={proyect.title} project={proyect} direction={i % 2 === 0 ? "row" : "row-reverse"} />
                ))
            }

            <Text
                css={{
                    mt: 40,
                    mb: 20,
                    textTransform: "uppercase",
                    fontSize: "$sm",
                    color: "$primary",
                    letterSpacing: "$normal",
                    textAlign: "center",
                    width: "100%",
                    fontWeight: "$medium"
                }}>
                {t('subtitle')}
            </Text>

            <Grid.Container gap={1}>
                {
                    [1, 2, 3, 4, 5, 6].map(e => (
                        <AnotherProjectCard key={e} />
                    ))
                }
            </Grid.Container>

        </Box>
    )
}