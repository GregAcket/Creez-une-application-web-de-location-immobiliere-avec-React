import "./ratings.css"
import greyStar from "../../assets/greystar.svg"
import redStar from "../../assets/redstar.svg"


function Ratings ({ rate }) {

    const totalStars = 5
    const ratedStars = parseInt(rate)
    const unratedStars = totalStars - ratedStars

    let starArray = []

    for (let i = 0; i < ratedStars ; i++) {
        let redstar = <img className="rating" src = {redStar} alt = "Etoile de notation" key={i}/>

        starArray.push(redstar)
    }
    for (let i = 0; i < unratedStars ; i++) {
        let greystar = <img className="rating" src = {greyStar} alt = "Etoile de notation" key={ratedStars+i}/>

        starArray.push(greystar)
    }

    return(
        <>
            {starArray}
        </>
    )
}

export default Ratings