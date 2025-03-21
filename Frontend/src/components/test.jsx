import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from './ui/navigation-menu'

import { Link } from 'react-router'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function NavigationMenuMain() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink className="nav-link" asChild>
          <Link to="/">Accueil</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className="nav-link">
          À propos
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[300px] lg:grid-cols-[1fr_1fr]">
            <li>
              <NavigationMenuLink className="nav-link" asChild>
                <Link to="/kevinbertrand">Présentation</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className="nav-link" asChild>
                <Link to="/skills">Skills</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className="nav-link" asChild>
                <Link to="/experiences">Expériences</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink className="nav-link" asChild>
                <Link to="/formation">Formation</Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink className="nav-link" asChild>
          <Link to="/portfolio">Portfolio</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink className="nav-link" asChild>
          <Link to="/contact">Contact</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  )

  return (
    <nav className="border-border bg-background w-full border-b px-4 py-2">
      {/* Menu Desktop */}
      <div className="hidden justify-center md:flex">
        <NavigationMenu>
          <NavigationMenuList>{navItems}</NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Bouton Burger (Mobile) */}
      <div className="flex items-center justify-between md:hidden">
        <h1 className="text-xl font-bold">MonSite</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="mt-2 space-y-2 md:hidden">
          <Link
            to="/"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/kevinbertrand"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Présentation
          </Link>
          <Link
            to="/skills"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/experiences"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Expériences
          </Link>
          <Link
            to="/formation"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Formation
          </Link>
          <Link
            to="/portfolio"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
