import { useState } from "react"
import arrow from "../../assets/arrow.svg"
import "./dropdown.css"


function Dropdown (props) {

    const [ open,  setOpen ] = useState(false)

    return open ? (
        <>
            <article>
                <button className="DropdownButton" onClick={() => setOpen(false)}>
                    <p>{props.name}</p>
                    <img className="up" src={arrow} alt="logo flèche" ></img>
                </button>
                {typeof props.content === "object" ? <ul className="text">{props.content}</ul> : <p className="text">{props.content}</p>}
            </article>
        </>
        ) : (
        <>

            <button className="DropdownButton" onClick={() => setOpen(true)}>
                <article>
                    <p>{props.name}</p>
                    <img src={arrow} alt="Logo flèche"></img>
                </article>
            </button>
        </>
    )
}

export default Dropdown