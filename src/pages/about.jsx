import { Outlet } from "react-router-dom";
import bannerAbout from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Dropdown from "../components/dropdown/dropdown";
import dropdownjson from '../data/dropdown.json';
import "./about.css"


function About() {

  return (
    <>
      <Outlet />
      
        <div className="containerAboutBanner">
            <img className='banner' src={bannerAbout} alt="Mountain Landscape"></img>
        </div>
          

        {dropdownjson.map((truc, index) => (
          <Dropdown key={`${truc}-${index}`} name={truc.name} text={truc.text}></Dropdown>
        ))}
    </>
  )
}

export default About;