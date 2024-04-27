import { Link } from "react-router-dom";

const Registration = () => {

  return (
    <div className="w-[80%] min-h-[500px] border-[15px] border-black border-solid mt-10 m-auto p-10">
      <h1 className="text-[40px] font-[700] text-center">Sign Up</h1>
      <div className="text-center w-[95%] md:w-[60%] lg:w-[60%] m-auto">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laborum deleniti voluptatibus fugiat debitis nobis quo alias iure possimus velit.</p>
      </div>


      <form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full">
        <h1 className="text-[20px]">Email</h1>
        <input type="text" name="email" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
        </div>
        <div className="w-full">
        <h1 className="text-[20px]">Name</h1>
        <input type="text" name="name" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
        </div>
        <div className="w-full">
        <h1 className="text-[20px]">Your Photo-Url : </h1>
        <input type="text" name="photo" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
        </div>
        <div className="w-full">
        <h1 className="text-[20px]">Password</h1>
        <input type="password" name="password" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
        </div>
        <div className="w-full">
        <h1 className="text-[20px]">Confirm Password</h1>
        <input type="text" name="confirmPassword" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
        </div>
        <div className="w-full">
            <h1></h1>
            <h1 className="text-[18px] mt-6">All Ready Have An Account?</h1>
            <Link to={'/login'}><h1 className="text-[24px]">Log In!</h1></Link>
        
        </div>
        <div className="w-full col-span-2">
            <input className="btn w-full btn-outline" type="submit" value="SUBMIT" />
       
        </div>
      </form>
    </div>
  );
};

export default Registration;
