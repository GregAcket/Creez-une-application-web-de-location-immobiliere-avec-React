import { Outlet } from "react-router-dom";
import bannerhomepage from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png"
import Thumb from "../components/thumb/thumb";
import "./home.css"

function Home() {
  
  return (
    <>
      <Outlet />
        <div className="containerHomeBanner">
          <p className="textHomeBanner">Chez vous, partout et ailleurs</p>
          <img className='homeBanner'  src={bannerhomepage} alt="Forest Landscape"></img>
        </div>
        <section className="gallery">
          <Thumb />          
        </section>
    </>
  )
}

export default Home;