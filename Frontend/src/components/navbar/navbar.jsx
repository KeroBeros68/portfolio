import { Link } from 'react-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '../ui/navigation-menu'

const linkStyle =
  ' text-lg bg-[linear-gradient(to_right,var(--background),var(--background))] hover:bg-[linear-gradient(var(--background),var(--emerald-800))]'

function Navbar() {
  return (
    <>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + linkStyle}
                asChild
              >
                <Link to={'/'}>Acceuil</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={linkStyle}>
                A propos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={linkStyle} asChild>
                  <Link to={'/skills'}>Skills</Link>
                </NavigationMenuLink>
                <NavigationMenuLink className={linkStyle} asChild>
                  <Link to={'/experiences'}>Expériences</Link>
                </NavigationMenuLink>
                <NavigationMenuLink className={linkStyle} asChild>
                  <Link to={'/formation'}>Formation</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + linkStyle}
                asChild
              >
                <Link to={'/portfolio'}>Portfolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + linkStyle}
                asChild
              >
                <Link to={'/contact'}>Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  )
}

export default Navbar
