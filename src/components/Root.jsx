import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Root = () => {
    return (
        <div>
            <div className="bg-[#FFFAE5]">
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;