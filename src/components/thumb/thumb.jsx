import { Link } from "react-router-dom";
import logementJson from "../../data/logements.json"
import "./thumb.css"


function Thumb() {

    return(
<>
    {logementJson.map((rental) => (
        <Link to={`/Logement/${rental.id}`}  key={rental.id}>
            <article className="homepageArticle">
                <img className="rentalImg" src={rental.cover} alt={rental.title} />
                <p className="rentalName"> {rental.title}</p>
            </article>
        </Link>
  ))}
</>
)}

export default Thumb;