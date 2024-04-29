import { useContext } from "react";
import { AuthContext } from "../AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {person , mainLoading} = useContext(AuthContext)
    const location = useLocation()
    
    console.log(location)

    if(mainLoading){
        return  <div className="hourglassBackground">
        <div className="hourglassContainer">
          <div className="hourglassCurves"></div>
          <div className="hourglassCapTop"></div>
          <div className="hourglassGlassTop"></div>
          <div className="hourglassSand"></div>
          <div className="hourglassSandStream"></div>
          <div className="hourglassCapBottom"></div>
          <div className="hourglassGlass"></div>
        </div>
      </div>
      }
    if(person){
        return children;

    }
    return <Navigate to={'/login'} state={location.pathname || '/'} ></Navigate>
};

export default PrivateRoute;