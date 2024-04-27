import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navbar w-[100%] md:w-[95%] lg:w-[90%] m-auto  border-black border-[3px] border-solid  lg:h-[100px]">
        <div className="navbar-start">
          <a className=" text-2xl">
            ART <span className="text-[#5131F3]">I</span> MANIA
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              {" "}
              <Link to={"/craftItem"}>All Art & craft Items</Link>
            </li>
            <li>
              {" "}
              <Link to={"/addItem"}>Add Craft Item</Link>
            </li>
            <li>
              {" "}
              <Link to={"/addItem"}>My List</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:space-x-4">
        <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
          <Link to={"/login"}>
            <a className="btn">Log In</a>
          </Link>
          <Link to={"/register"}>
            <a className="btn">Register</a>
          </Link>
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
