import {Link } from "react-router-dom";
import logofooter from '../../assets/logofooter.svg'
import "./footer.css"

function Footer() {
    return (
<>
    <footer>
        <Link to={`/`}>
            <img src={logofooter} alt="Logo Kasa"></img>
        </Link>
        <p>
            © 2020 Kasa. All rights reserved
        </p>
    </footer>
</>
)
}

export default Footer