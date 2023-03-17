import {NavLink, Link} from "react-router-dom";
import logo from '../../assets/logo.svg'
import "./header.css"


function Header() {

return (
<>
    <header>
        <Link to={`/`}>
            <img src={logo} alt="Logo Kasa"></img>
        </Link>
        <nav >
            <ul>
                <li>
                    <NavLink
                        to= {`/`} 
                        className={({ isActive }) => isActive ? "accueilActive" : "accueil" }>Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= {`/About`}
                        className={({ isActive }) => isActive ? "aproposActive" : "apropos" } >A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
</>)
}

export default Header