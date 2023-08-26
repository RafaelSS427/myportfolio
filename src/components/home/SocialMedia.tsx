import { Container, Link } from '@nextui-org/react'

import { useBookStore } from '@/store'
import { Box, TransitionElement } from '../shared'
import { GitHubSVG } from '../icons/GitHubSVG'
import { LinkedInSVG } from '../icons'
import { useIsMounted } from '@/hooks'

export const SocialMedia = () => {

  const { isMounted } = useIsMounted(100)

  return (
    <Container xl css={{
      display: "flex",
      justifyContent: "space-between",
      position: "fixed",
      bottom: 0,
      // backgroundColor: "red",
      mb: "40px",
      '@smMax': {
        flexDirection: "row-reverse",
        position: "absolute",
        height: "calc(650px + 76px)",
        top: 0,
      },
      zIndex: 0
    }}>

      <Box css={{
        display: 'flex',
        flexDirection: 'column',
        width: "36px",
        alignItems: 'center',
        justifyContent: 'end',
        gap: "20px",
      }}>
        <TransitionElement isMounted={isMounted} classNames='fadeleft' timeout={2000}>
          <GitHubSVG />
        </TransitionElement>
        <TransitionElement isMounted={isMounted} classNames='fadeleft' timeout={2000}>
          <LinkedInSVG />
        </TransitionElement>
      </Box>

      <Box>
        <TransitionElement isMounted={isMounted} classNames='faderight' timeout={2000}>
          <Link
            color="text"
            href="mailto:Rafaelss427@gmail.com"
            target='_blank'
            rel="noreferrer noopener"
            css={{
              writingMode: "vertical-lr",
              "@smMax": { display: "none" }
            }}
          >
            Rafaelss427@gmail.com
          </Link>
        </TransitionElement>
      </Box>
    </Container>
  )
}
