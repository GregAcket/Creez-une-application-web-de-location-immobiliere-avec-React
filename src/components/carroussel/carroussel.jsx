import"./carroussel.css"
import arrow from "../../assets/arrow.svg"
import { useState } from "react"

function Carroussel({image}) {

    let [n, setn] = useState(0)

    if (n < 0){
        n = image.length-1
    } else if (n > image.length-1){
        n = 0
    }

    return (
    <>
        <div className="carrousselWrapper">      
            {image[n]}
            {image.length !== 1 && 
            <div className="buttonWrapper">
                <button onClick={() => setn(n-1)}><img className="left arrow" src={arrow} alt="logo flèche gauche" ></img></button>
                <button onClick={() => setn(n+1)}><img className="right arrow" src={arrow} alt="logo flèche droite" ></img></button>
                <p>{n+1}/{image.length}</p>  
            </div> }
        </div>
    </>
    )
}

export default Carroussel