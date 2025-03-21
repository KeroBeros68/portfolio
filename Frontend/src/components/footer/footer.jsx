import packageJson from '../../../package.json'
import logo from '../../assets/logo-horizontal-grey.png'

const version = packageJson.version

function Footer() {
  return (
    <>
      <footer className="p-6 bg-gradient-to-b from-emerald-950 to-black">
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="logo de Kévin BERTRAND - Développeur web"
            className="max-h-[48px]"
          />
          <div>Site réalisé à la main et ne collecte aucune donnée</div>
          <div>version: {version} - Mars 2025</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
