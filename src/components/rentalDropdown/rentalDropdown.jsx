import { useState } from "react"
import arrow from "../../assets/vector.svg"
import "./rentalDropdown.css"

function RentalDropdown (props){

    const [ open,  setOpen ] = useState(true)
    
    return open ? (
        <>
            <article>
                <div  className="description">
                    <p>{props.name}</p>
                    <button onClick={() => setOpen(false)}><img className="up" src={arrow} alt="logo flèche" ></img></button>
                </div>
                <div className="equipement">
                    <p>{props.content}</p>
                </div>
            </article>
        </>
            ) : (
        <>
            <article className="description">
                    <p>{props.name}</p>
                <button onClick={() => setOpen(true)}><img src={arrow} alt="Logo flèche"></img></button>
            </article>

        </>
            )

}

export default RentalDropdown