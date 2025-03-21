import Navbar from '../navbar/navbar'
import logo from '../../assets/logo-horizontal.png'
import { Link } from 'react-router'

function Header() {
  return (
    <>
      <header className="max-w-[1440px] w-full mx-auto p-4 flex justify-between items-center">
        <Link to={'/'}>
          <img
            src={logo}
            alt="logo de Kévin BERTRAND - Développeur web"
            className="max-h-[48px]"
          />
        </Link>
        <Navbar />
      </header>
    </>
  )
}

export default Header
