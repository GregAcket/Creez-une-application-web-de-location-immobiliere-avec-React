import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import './main.css'

function Main () {

    return(
        <>
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer/>
        </>
    )
}

export default Main