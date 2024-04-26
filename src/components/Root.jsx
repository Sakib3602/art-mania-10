import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <div className="bg-[#FFFAE5]">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;