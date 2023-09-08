import { Outlet } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;