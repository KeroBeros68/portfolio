import { Link } from 'react-router'
import { Menu } from 'lucide-react'
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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import logo from '@/assets/images/logo.png'

const linkStyle =
  ' text-lg bg-[linear-gradient(to_right,var(--background),var(--background))] hover:bg-[linear-gradient(var(--background),var(--emerald-800))]'

const menuNav = (
  <NavigationMenu>
    <NavigationMenuList className="flex flex-col md:flex-row">
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
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[300px] lg:grid-cols-[1fr_1fr]">
            <li>
              <NavigationMenuLink className={linkStyle} asChild>
                <Link to={'/kevinbertrand'}>Présentation</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className={linkStyle} asChild>
                <Link to={'/skills'}>Skills</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className={linkStyle} asChild>
                <Link to={'/experiences'}>Expériences</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className={linkStyle} asChild>
                <Link to={'/formation'}>Formation</Link>
              </NavigationMenuLink>
            </li>
          </ul>
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
)

function Navbar() {
  return (
    <>
      <nav>
        <div className="hidden md:flex">{menuNav}</div>
        <div className="m-0.5 flex items-center justify-between md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="items-center">
                <img
                  src={logo}
                  alt="logo de Kévin BERTRAND - Développeur web"
                  className="w-30"
                />
                <SheetDescription>{menuNav}</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  )
}

export default Navbar
