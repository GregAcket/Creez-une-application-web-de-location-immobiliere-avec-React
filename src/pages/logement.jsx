import { Outlet, useParams } from "react-router-dom";
import Carroussel from "../components/carroussel/carroussel";
import RentalDropdown from "../components/rentalDropdown/rentalDropdown";
import Tag from "../components/tag/tag";
import  logementJson  from "../data/logements.json"
import "./logement.css"


function Logement () {

    let id = useParams()

    let checkRental = logementJson.find(search => search.id === id.id)

    let tags = checkRental.tags

{/*

    let dropdown = [
                    {
                        "name": "description",
                        "content": checkRental.description
                    },
                    {
                        "name": "équipement",
                        "content": checkRental.equipments
                    }
                   ]
    console.log(checkRental.equipments) */}

    return(
    <>
        <Outlet />
        <Carroussel />

        <section className="rentalIdentity" >
            <div className="Place" >
                <p className="rentalTitle" >{checkRental.title}</p>
                <p className="rentalPlace" >{checkRental.location}</p>
                <div className="tagWrapper">

                {tags.map((tag) => (
                    <Tag key={`${tag}`} tag={`${tag}`} />
                ))}
                </div>

            </div>
            <div className="host" >
                <p className="renterName" >{checkRental.host.name}</p>
                <img  className="renterPicture" src={checkRental.host.picture} alt="profil du loueur" />
                {/* Ratings */}
            </div>
        </section>

        <aside>
        
            
          <RentalDropdown name="description" content= {checkRental.description} />
          <RentalDropdown name="équipement" content= {checkRental.equipments} />


        </aside>
    </>
    )
}

export default Logement