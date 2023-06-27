import { createRef } from 'react'
import { useTheme, Button, Text } from '@nextui-org/react'
import { useTranslation } from 'next-i18next'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Box, Description } from '@/components'
import { TextName } from '@/components/home'
import { useIsMounted } from '@/hooks'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface ChildrenProps {
    text: string
}

const Position = () => (
    <Text
        h1
        size={64}
        css={{
            textGradient: "45deg, #02AABD -20%, #00CDAC 50%",
            fontWeight: "$semibold",
            letterSpacing: "$tighter",
            // textShadow: "1px 1px 30px rgba(2, 170, 189, 0.30)",
            "@xsMax": {
                lineHeight: "50px",
                fontSize: 40
            }
        }}
    >
        Junior Full-Stack Developer
    </Text>
)

const Im = ({ text }: ChildrenProps) => (
    // I'm
    <Text css={{
        letterSpacing: "$wide",
        "@xsMax": {
            mt: 4
        }
    }}>
        { text }
    </Text>
)

const FullName = ({ isDark }: { isDark?: boolean }) => (
    <Box css={{
        display: 'flex',
        columnGap: "10px",
        flexWrap: "wrap",
        marginBottom: "10px"
    }}>
        <TextName isDark={isDark} text='Rafael' />
        <TextName isDark={isDark} text='Sequeira' />
        <TextName isDark={isDark} text='Sandoval' />
    </Box>
)

const ButtonContact = ({ text }: ChildrenProps) => (
    // Contact me
    <Button
        shadow
        color="primary"
        auto
        icon={<FontAwesomeIcon icon={faEnvelope} />}
    >
        { text }
    </Button>
)


export const Hero = () => {
    const { isDark } = useTheme()
    const { isMounted } = useIsMounted(1000)
    const { t } = useTranslation('home')

    return (
        <Box css={{
            height: "calc(100vh - 76px * 2)",
            display: "flex",
            alignItems: "center"
        }}>
            <Box css={{ display: isMounted ? "block" : "none" }}>
                <TransitionGroup component={null}>
                    {
                        isMounted && (
                            [<Position />, <Im text={ t('presentation') } />, <FullName isDark={isDark} />, <Description text={ t('description') } />, <ButtonContact text={ t('contact') }/>].map((element, i) => {
                                const node = createRef<any>()

                                return (
                                    <CSSTransition key={i} classNames="fadedown" timeout={2000} nodeRef={node}>
                                        <Box style={{ transitionDelay: `${i * 100}ms` }} ref={node}>
                                            {element}
                                        </Box>
                                    </CSSTransition>

                                )
                            })
                        )
                    }
                </TransitionGroup>
                {/* <Text
                    h1
                    size={64}
                    css={{
                        textGradient: "45deg, #02AABD -20%, #00CDAC 50%",
                        fontWeight: "$semibold",
                        letterSpacing: "$tighter",
                        "@xsMax": {
                            lineHeight: "50px",
                            fontSize: 40
                        }
                    }}
                >
                    Junior Full-Stack Developer
                </Text> */}


                {/* <Text css={{
                    letterSpacing: "$wide",
                    "@xsMax": {
                        mt: 4
                    }
                }}>
                    I'm
                </Text> */}

                {/* <Box css={{
                    display: 'flex',
                    columnGap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "10px"
                }}>
                    <TextName isDark={isDark} text='Rafael' />
                    <TextName isDark={isDark} text='Sequeira' />
                    <TextName isDark={isDark} text='Sandoval' />
                </Box> */}

                {/* <Text size={20} css={{
                    mb: 30,
                    letterSpacing: "$wide",
                    "@xsMax": {
                        fontSize: 16
                    }
                }}>
                    Lorem ipsum dolor sit amet consectetur. Mattis sapien amet augue vulputate massa adipiscing facilisis aenean semper. Neque facilisis fames rutrum a. Massa arcu urna ultricies velit orci auctor diam.
                </Text> */}
                {/* <Button
                    shadow
                    color="primary"
                    auto
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                >
                    Contact me
                </Button> */}
            </Box>
        </Box>
    )
}