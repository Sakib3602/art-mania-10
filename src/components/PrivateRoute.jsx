import { useContext } from "react";
import { AuthContext } from "../AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {person} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(person){
        return children;

    }
    return <Navigate to={'/login'} state={location.pathname || '/'} ></Navigate>
};

export default PrivateRoute;