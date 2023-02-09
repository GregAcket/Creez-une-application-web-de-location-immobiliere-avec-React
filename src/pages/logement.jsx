import { Outlet, useParams } from "react-router-dom";
import Carroussel from "../components/carroussel/carroussel";
import Dropdown from "../components/dropdown/dropdown";
import Ratings from "../components/ratings/ratings";
import Tag from "../components/tag/tag";
import logementJson  from "../data/logements.json"
import "./logement.css"


function Logement () {

    let id = useParams()

    let checkRental = logementJson.find(search => search.id === id.id)

    let tags = checkRental.tags.map((tag, index) => (
        <Tag key={`${index}`} tag={`${tag}`} />
    ))

    let rentalEquipment = checkRental.equipments.map(( equipment, index ) => {
        return (
            <li key={`${index}`} >{equipment}</li>
    )})

    let pictures = checkRental.pictures.map((pics, index) => {
        return (
            <img key={index} className="image" src= {pics} alt="habitation"/>
    )})

    return(
    <>
        <Outlet />
        <Carroussel image={pictures}/>

        <section className="rentalIdentity" >
            <div className="place" >
                <p className="rentalTitle" >{checkRental.title}</p>
                <p className="rentalPlace" >{checkRental.location}</p>
                <div className="tagWrapper">
                    {tags}
                </div>
            </div>
            <div className="hostAndRate" >
                <div className="host" >
                    <p className="renterName" >{checkRental.host.name}</p>
                    <img  className="renterPicture" src={checkRental.host.picture} alt="Profil du loueur" />
                </div>
                <div>
                    <Ratings rate={checkRental.rating}/>
                </div>
            </div>
        </section>

        <aside>
            <Dropdown name="Description" content= {checkRental.description} />
            <Dropdown name="Équipement" content= {rentalEquipment} />
        </aside>
    </>
    )
}

export default Logement