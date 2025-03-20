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

function Navbar() {
  return (
    <>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + ' text-lg'}
                asChild
              >
                <Link to={'/'}>Acceuil</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg">
                A propos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="text-lg" asChild>
                  <Link to={'/skills'}>Skills</Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="text-lg" asChild>
                  <Link to={'/experiences'}>Expériences</Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="text-lg" asChild>
                  <Link to={'/formation'}>Formation</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + ' text-lg'}
                asChild
              >
                <Link to={'/portfolio'}>Portfolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + ' text-lg'}
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
