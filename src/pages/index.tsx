import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { MainLayout } from '@/components/layout'
// import { About, Hero, Projects } from '@/screens'
// import { Box } from '@/components'
// import { Contact } from '@/screens/contact'

// TODO: Remove the package called "@fortawesome/free-regular-svg-icons" if it has not been used
// TODO: Begin to add animations
const HomePage:NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    // <MainLayout>
    //   <Hero />
    //   <Box css={{ height: "76px" }} />
    //   <Projects />
    //   <About />
    //   <Contact />
    // </MainLayout>
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