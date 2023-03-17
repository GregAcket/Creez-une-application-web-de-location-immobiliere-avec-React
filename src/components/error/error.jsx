import {Link} from 'react-router-dom'
import "./error.css"

function Error() {
    return (
    <>
            <section className='error-section'>
                <p className ='error'>404</p>
                <p className='errorText' >Oups! La page que vous demandez n'existe pas.</p>
                <Link to= {`/`} className ='error-link' >Retourner sur la page d'accueil</Link>
            </section>
    </>)
}

export default Error