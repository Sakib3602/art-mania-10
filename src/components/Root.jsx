import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="">
            <div className="bg-[#FFFAE5]">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;