import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

function Main () {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main