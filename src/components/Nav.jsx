import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <>

<div className="navbar w-[100%] md:w-[95%] lg:w-[90%] m-auto  border-black border-[3px] border-solid  lg:h-[100px]">
  <div className="navbar-start">
   
    <a className=" text-2xl">ART <span className="text-[#5131F3]">I</span> MANIA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li> <Link to={"/"}>Home</Link></li>
        <li> <Link to={"/craftItem"}>All Art & craft Items</Link></li>
        <li> <Link to={"/addItem"}>Add Craft Item</Link></li>
        <li> <Link to={"/addItem"}>My List</Link></li>
   
      
      
      
    </ul>
  </div>
  <div className="navbar-end lg:space-x-4">
  <Link to={'/login'}><a className="btn">Log In</a></Link>
  <Link to={'/register'}><a className="btn">Register</a></Link>
  <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    
    
  </div>
</div>
            
        </>
    );
};

export default Nav;