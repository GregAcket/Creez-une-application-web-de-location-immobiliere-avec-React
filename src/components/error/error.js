import {Link} from 'react-router-dom'
import logo from '../../assets/404.svg'
import "./error.css"

function Error() {
    return (
    <>  
        <div className='error-page'>
            <section className='error-section'>
                <img className = 'error' src={logo} alt="Logo 404"></img>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to= {`/`} className ='error-link' >Retourner sur la page d'accueil</Link>
            </section>
        </div>
    </>)
}

export default Error