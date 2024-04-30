import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvaider";
import toast, { Toaster } from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'
import { Fade } from "react-awesome-reveal";

const Nav = () => {
  const {logout, person} = useContext(AuthContext)
  const [theme,setTheme] = useState("light")
  function handLogOut(){
    logout()
  .then(()=>{
    toast.error("Log Out.")
    console.log("user log out")
  })
  .catch()
  }

  console.log(person,"person from nAV")

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const toggle = (e)=>{
    if(e.target.checked){
      setTheme('synthwave')
    }
    else{
      setTheme('light')
    }

  }
  return (
    <>
      <div className="navbar  w-[100%] md:w-[95%] lg:w-[90%] m-auto  border-black border-[3px] border-solid  lg:h-[100px]">
        <div className="navbar-start">
        <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden " >
        <svg xmlns={person ? person?.photoURL : "http://www.w3.org/2000/svg"}  className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
              {" "}
              <Link to={"/"}>Home</Link>
              
            </li>
            <li>
              
              <Link to={"/allCraft"}>My List</Link>
            </li>
            <li>
              {" "}
              <Link to={"/addCraft"}>Add Craft Item</Link>
            </li>
            <li>
              {" "}
              <Link to={"/myList"}>All Art & craft Items</Link>
            </li>
            <li>
              {" "}
              <Link to={"/contact"}>Contact Us</Link>
            </li>
      </ul>
    </div>
          <Fade direction="left">
          <Link to={'/'}>
          <a className="text-xl lg:text-3xl md:text-3xl font-[600]">
            ART <span className="text-[#5131F3] ">I</span> MANIA
          </a>
          </Link>
          </Fade>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[16px] font-[400] px-1">
            <Fade cascade direction="down" duration={600}>
            <li>
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              
              <Link to={"/allCraft"}>My List</Link>
            </li>
            <li>
              {" "}
              <Link to={"/addCraft"}>Add Craft Item</Link>
            </li>
            <li>
              {" "}
              <Link to={"/myList"}>All Art & craft Items</Link>
            </li>
            <li>
              {" "}
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            </Fade>
          </ul>
        </div>
        <div className="navbar-end lg:space-x-4">
        <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" onClick={toggle} className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
          {
            !person ? <>
            <Link to={"/login"}>
            <a className="btn btn-sm md:btn lg:btn">Log In</a>
          </Link>
          <Link to={"/register"}>
            <a className="btn btn-sm md:btn lg:btn">Register</a>
          </Link>
            </> : " "
          }


{/* <Tooltip anchorSelect="#clickable" clickable></Tooltip> */}
<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className=" m-1">
  <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-[40px] h-[40px] rounded-xl"
            />
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>{person?.displayName || "User"}</li>
    <li onClick={handLogOut} ><a>Log Out</a></li>
  </ul>
</div>

          
          
        </div>
        <Toaster/>
      </div>
    </>
  );
};

export default Nav;
