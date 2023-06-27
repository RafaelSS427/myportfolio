import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainLayout } from '@/components/layout'
import { About, Hero, Projects } from '@/screens'
import { Box } from '@/components'

// TODO: Remove the package called "@fortawesome/free-regular-svg-icons" if it has not been used
// TODO: Begin to add animations
const HomePage:NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Box css={{ height: "76px" }} />
      <About />
      <Projects />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['home', 'projects'])

  return {
    props: {
      ...translations
    }
  }
}

export default HomePage