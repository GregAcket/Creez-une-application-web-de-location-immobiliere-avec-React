import { useParams } from "react-router-dom";
import Carroussel from "../components/carroussel/carroussel";
import Dropdown from "../components/dropdown/dropdown";
import Ratings from "../components/ratings/ratings";
import Tag from "../components/tag/tag";
import logementJson  from "../data/logements.json"
import "./logement.css"


function Logement () {

    let id = useParams()

    let checkedRental = logementJson.find(search => search.id === id.id)

    let rentalEquipment = checkedRental.equipments.map(( equipment, index ) => {
        return (
            <li key={`${index}`} >{equipment}</li>
    )})

    let pictures = checkedRental.pictures.map((pics, index) => {
        return (
            <img key={index} className="image" src= {pics} alt="habitation"/>
    )})

    let tags = checkedRental.tags.map((tag, index) => (
        <Tag key={`${index}`} tag={`${tag}`} />
    ))

    return(
    <>
        <Carroussel image={pictures}/>

        <section className="rentalIdentity" >
            <div className="place" >
                <p className="rentalTitle" >{checkedRental.title}</p>
                <p className="rentalPlace" >{checkedRental.location}</p>
                <div className="tagWrapper">
                    {tags}
                </div>
            </div>
            <div className="hostAndRate" >
                <div className="host" >
                    <p className="renterName" >{checkedRental.host.name}</p>
                    <img  className="renterPicture" src={checkedRental.host.picture} alt="Profil du loueur" />
                </div>
                <div className="rates">
                    <Ratings rate={checkedRental.rating}/>
                </div>
            </div>
        </section>

        <aside>
            <Dropdown name="Description" content= {checkedRental.description} />
            <Dropdown name="Équipement" content= {rentalEquipment} />
        </aside>
    </>
    )
}

export default Logement