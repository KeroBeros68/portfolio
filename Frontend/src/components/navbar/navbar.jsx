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

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '../ui/accordion'

import logo from '@/assets/images/logo.png'
import { Separator } from '@radix-ui/react-separator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const linkStyle =
  ' text-lg bg-[linear-gradient(to_right,var(--background),var(--background))] hover:bg-[linear-gradient(var(--background),var(--emerald-800))]'

const menuDesktop = (
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

const menuMobil = (
  <Sheet>
    <SheetTrigger>
      <Menu className="h-8 w-8" />
    </SheetTrigger>
    <SheetContent className="items-center">
      <SheetHeader className="w-full items-center">
        <img
          src={logo}
          alt="logo de Kévin BERTRAND - Développeur web"
          className="mt-10 w-30"
        />
      </SheetHeader>
      <Separator className="mx-2 mt-1 h-px w-[60%] bg-[var(--border)]" />
      <Link to={'/'}>Acceuil</Link>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="text-center">
          <AccordionTrigger className="text-base font-normal">
            A propos
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to={'/kevinbertrand'}>Présentation</Link>
              </li>
              <li>
                <Link to={'/skills'}>Skills</Link>
              </li>
              <li>
                <Link to={'/experiences'}>Expériences</Link>
              </li>
              <li>
                <Link to={'/formation'}>Formation</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link to={'/portfolio'}>Portfolio</Link>
      <Link to={'/contact'}>Contact</Link>
      <Separator className="mx-2 mt-1 h-px w-[60%] bg-[var(--border)]" />
      {mediaNav}
    </SheetContent>
  </Sheet>
)

const mediaNav = (
  <div className="ml-4 flex items-center gap-3">
    <a href="">
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </a>
    <a href="https://github.com/KeroBeros68">
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </a>
  </div>
)

function Navbar() {
  return (
    <>
      <nav>
        <div className="hidden md:flex">
          {menuDesktop}
          <Separator
            orientation="vertical"
            className="mx-2 mt-1 h-7 w-px bg-[var(--border)]"
          />
          {mediaNav}
        </div>
        <div className="m-0.5 flex items-center justify-between md:hidden">
          {menuMobil}
        </div>
      </nav>
    </>
  )
}

export default Navbar
