import { useState } from "react"
import arrow from "../../assets/arrow.svg"
import "./dropdown.css"


function Dropdown (props) {

    const [ open,  setOpen ] = useState(false)

    return open ? (
        <>
            <article>
                <div  className="topDropdown">
                    <p>{props.name}</p>
                    <button onClick={() => setOpen(false)}><img className="up" src={arrow} alt="logo flèche" ></img></button>
                </div>

                {typeof props.content === "object" ? <ul className="text">{props.content}</ul> : <p className="text">{props.content}</p>}

            </article>
        </>
        ) : (
        <>
            <article className="topDropdown">
                    <p>{props.name}</p>
                <button onClick={() => setOpen(true)}><img src={arrow} alt="Logo flèche"></img></button>
            </article>
        </>
    )
}

export default Dropdown

