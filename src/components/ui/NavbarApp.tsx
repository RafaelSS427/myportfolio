import { Navbar, Link, Text, Dropdown } from '@nextui-org/react'
import NextLink from 'next/link'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons'

import { Box, TransitionElement } from '../shared';
import { LogoApp, SwitchApp } from './';
import { useIsMounted, useThemeUncontrolled } from '@/hooks';
import { Key, LegacyRef, createRef, useMemo, useRef } from 'react';
import { capitalize } from '@/utils';
import { useRouter } from 'next/router';

// This going on of the file configuration
const collapseItems = [
  "Features",
  "Customers",
  "Pricing",
  "Company",
  "Legal",
  "Team",
  "Help & Feedback",
  "Login",
  "Sign Up",
];

// and this too
const mainLinks = [
  "about",
  "projects",
  "contact"
]

export const NavbarApp = () => {
  const router = useRouter()

  const { controlledStyles } = useThemeUncontrolled()

  const { isMounted } = useIsMounted(100)
  
  const getLocale = useMemo(() => router.locale === 'en' ? '' : 'es', [router.locale])

  const onActionMenu = (e: Key) => {
    router.push('/', undefined, { locale: e.toString(), scroll: false })
  }

  return (
    <Navbar shouldHideOnScroll disableShadow maxWidth="fluid" variant="static">
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label="toggle navigation"
          css={{
            mr: '10px',
            '@xs': { display: 'none' },
          }}
        />
        <TransitionElement isMounted={isMounted} classNames="fadeleft" timeout={2000}>
          <LogoApp width="60px" height="60px" />
        </TransitionElement>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <TransitionGroup component={null}>
          {
            isMounted &&
            mainLinks.map((linkName, i) => {
              const nodeRef = createRef<any>()
              return (
                <CSSTransition classNames="fadedown" timeout={2000} key={`${linkName}-${i}`} nodeRef={nodeRef}>
                  <Navbar.Link key={`${linkName}-${i * 2}`} href={`/${getLocale}#${linkName}`} style={{ transitionDelay: `${i * 100}ms` }} ref={nodeRef}>
                    <Text css={{ textGradient: "45deg, #02AABD -20%, #00CDAC 50%", mr: 4 }} weight="bold">0{i + 1}.</Text>{capitalize(linkName)}
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
                  <Text css={{ textDecorationLine: "underline" }}>{ router.locale === "en" ? "English" : "Español" }</Text>
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

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
