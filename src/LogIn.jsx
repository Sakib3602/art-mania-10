import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvaider";
import { Result } from "postcss";


const LogIn = () => {

    const {userSignIn} = useContext(AuthContext)
    function handle(e){
        e.preventDefault()
        const form = e.target;
       
        const email = form.email.value;
        
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const logData = {email,password,confirmPassword}
        console.log(logData)


        userSignIn(email,password)
        .then((result)=>{
            console.log("User sign in",result)
        })
        .catch((error)=>{
            console.log(error.message)
        })




    }
    return (
        <div className="w-[95%] lg:w-[70%] md:w-[70%] min-h-[300px] border-[15px] border-black border-solid mt-10 m-auto p-10">
        <h1 className="text-[40px] font-[700] text-center">Sign In</h1>
        <div className="text-center w-[95%] md:w-[60%] lg:w-[60%] m-auto">
        <p>Experience seamless access with our login form; your gateway to a universe of possibilities. Simple, secure, and user-friendly—just for you.</p>
        </div>
        
  
  
        <form onSubmit={handle} className="space-y-10">
          <div className="w-full">
          <h1 className="text-[20px]">Email</h1>
          <input required type="text" name="email" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
          </div>
          
          
          <div className="w-full">
          <h1 className="text-[20px]">Password</h1>
          <input required type="password" name="password" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
          </div>
          <div className="w-full">
          <h1 className="text-[20px]">Confirm Password</h1>
          <input required type="password" name="confirmPassword" className="w-full border-[3px] shadow shadow-black  border-black border-solid h-[50px]" style={{ boxShadow: '0px 0px 0px 3px black'} } />
          </div>
          <div className="w-full">
              <h1></h1>
              <h1 className="text-[18px] mt-6">Not Have An Account?</h1>
              <Link to={'/register'}><h1 className="text-[24px]">Sign Up!</h1></Link>
          
          </div>
          <div className="w-full col-span-2">
              <input  className="btn w-full btn-outline" type="submit" value="SUBMIT" />
         
          </div>
        </form>
      </div>
    );
};

export default LogIn;