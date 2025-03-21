import packageJson from '../../../package.json'
import logo from '../../assets/logo-horizontal-grey.png'

const version = packageJson.version

function Footer() {
  return (
    <>
      <footer className="p-5 bg-gradient-to-b from-emerald-950 to-black">
        <div className="p-2 flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="logo de Kévin BERTRAND - Développeur web"
            className="max-h-[48px]"
          />
          <span>Site réalisé à la main et ne collecte aucune donnée</span>
          <span>version: {version} - Mars 2025</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
