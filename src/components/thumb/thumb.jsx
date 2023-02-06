import { Link } from "react-router-dom";
import logementJson from "../../data/logements.json"
import "./thumb.css"


function Thumb() {
    return(
<>
    {logementJson.map((rental) => (
        <Link to={`/Logement/${rental.id}`}  key={rental.id} >
            <article className="homepageArticle">
                <img className="rentalImg" src={rental.cover} alt={rental.title}></img>
                <span className="rentalName"> {rental.title}</span>
            </article>
        </Link>
  ))}
</>
)}

export default Thumb;