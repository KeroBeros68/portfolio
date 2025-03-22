import Navbar from '../navbar/navbar'
import logo from '@/assets/images/logo-horizontal.png'
import { Link } from 'react-router'

function Header() {
  return (
    <>
      <header className="mx-auto flex min-h-19 w-full max-w-[1440px] items-center px-4 pt-4">
        <Link to={'/'} className="m-2">
          <img
            src={logo}
            alt="logo de Kévin BERTRAND - Développeur web"
            className="max-h-[48px]"
          />
        </Link>
        <div className="flex w-full justify-end border-b-1 p-1">
          <Navbar />
        </div>
      </header>
    </>
  )
}

export default Header
