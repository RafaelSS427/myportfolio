import { useTranslation } from 'next-i18next'
import { Grid, Text } from '@nextui-org/react'

import { Box, SectionTitle } from '@/components'
import { AnotherProjectCard, ProjectCard } from '@/components/projects'
import { Project } from '@/interfaces'

export const Projects = () => {

    const { t } = useTranslation('home')
    const projects: Project[] = t('projects.featured', { returnObjects: true })

    return (
        // <Box id="projects" css={{ minHeight: "100vh", maxHeight: "auto" }}>
        <Box id="projects">
            <SectionTitle title={t('projects.title')} />

            {
                projects.map((proyect, i) => (
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
                {t('projects.subtitle')}
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