import { Box, ButtonContact, Description, SectionTitle } from '@/components'
import { useTranslation } from 'next-i18next'

export const Contact = () => {
  const { t } = useTranslation('home')

  return (
    <Box id="contact" css={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent:"space-evenly" }}>

      <Box>
      <SectionTitle title={t('contact.title')} titleNumber={3} mb="16px" />
        <Description
          text={ t('contact.description') }
          textAlign="center"
          size={20}
        />

        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ButtonContact text={ t('contact.ui.contactAction') } />
        </Box>
      </Box>

    </Box>
  )
}