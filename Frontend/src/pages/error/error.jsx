import { Link } from 'react-router'

function Error() {
  return (
    <>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={'/'}>Retourner sur la page d'acceuil</Link>
    </>
  )
}

export default Error
