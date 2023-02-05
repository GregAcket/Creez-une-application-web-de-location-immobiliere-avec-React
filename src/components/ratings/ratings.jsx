import "./ratings.css"
import greyStar from "../../assets/greystar.svg"
import redStar from "../../assets/redstar.svg"


function Ratings ({ rate }) {

    const totalStars = 5
    const ratedStars = parseInt(rate)
    const unratedStars = totalStars - ratedStars
    
    let starArray = []

    let redstar = <img className="rating" src = {redStar} alt = "Etoile de notation"/>
    let greystar = <img className="rating" src = {greyStar} alt = "Etoile de notation"/>

    for (let i = 0; i < ratedStars ; i++) {
        starArray.push(redstar)
    }
    for (let i = 0; i < unratedStars ; i++) {
        starArray.push(greystar)
    }

    let finalRating = starArray.map((star) => {return star})

    return(
        <>
            {finalRating}
        </>
    )
}

export default Ratings