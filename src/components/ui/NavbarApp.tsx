import { Key, createRef, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Navbar, Link, Text, Dropdown, Button } from '@nextui-org/react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons'

import { Box, TransitionElement } from '../shared'
import { LogoApp, SwitchApp } from './'
import { useIsMounted, useThemeUncontrolled } from '@/hooks'
import { useBookStore } from '@/store'

type LinksNavbar = {
  label: string,
  href: string
}

interface PropsToggle  {
  isOpen: boolean;
  setIsOpen: (value:boolean) => void;
}

const ToogleApp = ({ isOpen, setIsOpen }: PropsToggle) => {
  return (
    <Navbar.Toggle
      isSelected={isOpen}
      aria-label="toggle navigation"
      onChange={() => setIsOpen(!isOpen)}
      css={{
        mr: '10px',
        '@xs': { display: 'none' },
      }}
    />
  )
}

export const NavbarApp = () => {
  const router = useRouter()
  const isOpenMenuMobile = useBookStore(store => store.isOpenMenuMobile)
  const setIsOpenMenuMobile = useBookStore(store => store.setIsOpenMenuMobile)

  const { t } = useTranslation('home')

  const { controlledStyles } = useThemeUncontrolled()

  const { isMounted } = useIsMounted(100)

  const getLocale = useMemo(() => router.locale === 'en' ? '' : 'es', [router.locale])

  const onActionMenu = (e: Key) => {
    router.push('/', undefined, { locale: e.toString(), scroll: false })
  }

  const links: LinksNavbar[] = t('navbar.links', { returnObjects: true })

  const handleLinkMobile = (href: string) => {
    document.body.style.overflow = 'initial';
    setIsOpenMenuMobile(false)
    router.push(`/${getLocale}#${href}`, undefined, { scroll: false })
  }

  // useEffect(() => {
  //   document.body.style.overflow = isOpenMenuMobile ? 'hidden' : 'scroll';
  // }, [isOpenMenuMobile])

  return (
    // <Navbar shouldHideOnScroll disableShadow maxWidth="fluid" variant="static">
    <Navbar disableShadow disableScrollHandler maxWidth="fluid" variant="floating">
      <Navbar.Brand>
        <ToogleApp isOpen={isOpenMenuMobile} setIsOpen={setIsOpenMenuMobile} />
        {/* <Navbar.Toggle
          isSelected={isOpenMenuMobile}
          aria-label="toggle navigation"
          onChange={() => setIsOpenMenuMobile(!isOpenMenuMobile)}
          css={{
            mr: '10px',
            '@xs': { display: 'none' },
          }}
        /> */}
        <TransitionElement isMounted={isMounted} classNames="fadeleft" timeout={2000}>
          <LogoApp width="60px" height="60px" />
        </TransitionElement>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <TransitionGroup component={null}>
          {
            isMounted &&
            links.map(({ label, href }, i) => {
              const nodeRef = createRef<any>()
              return (
                <CSSTransition classNames="fadedown" timeout={2000} key={`${label}-${i}`} nodeRef={nodeRef}>
                  <Navbar.Link href={`/${getLocale}#${href}`} style={{ transitionDelay: `${i * 100}ms` }} ref={nodeRef}>
                    <Text css={{ textGradient: "45deg, #02AABD -20%, #00CDAC 50%", mr: 4 }} weight="bold">0{i + 1}.</Text> {label}
                  </Navbar.Link>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
      </Navbar.Content>

      <TransitionElement isMounted={isMounted} classNames="faderight" timeout={2000} >
        <Navbar.Content>
          <Navbar.Item>
            <Dropdown isBordered>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={<FontAwesomeIcon icon={faChevronDown} size="xs" style={controlledStyles} />}
                ripple={false}
              >
                <Box css={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: "10px"
                }}>
                  <FontAwesomeIcon icon={faGlobe} size="lg" style={controlledStyles} />
                  <Text css={{ textDecorationLine: "underline" }}>{router.locale === "en" ? "English" : "Español"}</Text>
                </Box>
              </Dropdown.Button>


              <Dropdown.Menu
                selectionMode="single"
                aria-label="languages"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
                onAction={onActionMenu}
              >
                <Dropdown.Item key="es">
                  Spanish
                </Dropdown.Item>
                <Dropdown.Item key="en">
                  English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
          <Navbar.Item>
            <SwitchApp />
          </Navbar.Item>
        </Navbar.Content>

      </TransitionElement>

      <Navbar.Collapse isOpen={isOpenMenuMobile} >
        {links.map(({ label, href }, index) => (
          <Navbar.CollapseItem key={label + index}>
            <Button onPress={() => handleLinkMobile(href)} auto light ripple={false} animated={false}>
              {label}
            </Button>
            {/* <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={`/${getLocale}#${href}`}
            >
              {label}
            </Link> */}
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}