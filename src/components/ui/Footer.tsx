import { Link, Text } from "@nextui-org/react"
import { Box } from "../shared"
import { NextSVG } from "../icons"
import { Trans, useTranslation } from "next-i18next"

export const Footer = () => {
  const { t } = useTranslation('home')
  
  return (
    <footer style={{ position: "relative", zIndex: 1 }}>
      <Box css={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 20 }}>
        <Box css={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Text css={{
            fontSize: 16
          }}>{ t('footer.caption1') }</Text>
          <NextSVG />
        </Box>
        <Text
          css={{
            fontSize: 16,
            textAlign: "center"
          }}
        >
          <Trans i18nKey={"footer.caption2"} components={[ <Link href="https://github.com/bchiang7/v4" isExternal target="_blank" rel="noopener noreferrer" />, <Link href="https://vercel.com" isExternal target="_blank" rel="noopener noreferrer" /> ]} />
          {/* Diseño inspirado en el portafolio de <Link href="https://github.com/bchiang7/v4" isExternal target="_blank" rel="noopener noreferrer">Brittany Chiang</Link> y la página de <Link href="https://vercel.com" isExternal target="_blank" rel="noopener noreferrer">Vercel</Link> */}
        </Text>

      </Box>
    </footer>
  )
}